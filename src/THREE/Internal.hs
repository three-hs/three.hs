-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE FlexibleContexts           #-}
{-# LANGUAGE FlexibleInstances          #-}
{-# LANGUAGE GADTs                      #-}
{-# LANGUAGE KindSignatures             #-}
{-# LANGUAGE MultiParamTypeClasses      #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE ScopedTypeVariables        #-}
{-# LANGUAGE UndecidableInstances       #-}
-----------------------------------------------------------------------------
{-# OPTIONS_GHC -fno-warn-orphans       #-}
-----------------------------------------------------------------------------
module THREE.Internal
  ( -- * Types
    Three
  , Property (..)
  , ReadOnly (..)
  , Method
  , W (..)
  , X (..)
  , Y (..)
  , Z (..)
    -- * Combinators
  , (^.)
  , (.=)
  , (+=)
  , (-=)
  , (%=)
  , (*=)
  , (!.)
  , (!..)
  , property
  , method
  , readonly
  , optional
  , new
  -- * Classes
  , Triplet (..)
  ) where
-----------------------------------------------------------------------------
import           Control.Monad
import           Data.Kind
import           Unsafe.Coerce (unsafeCoerce)
import           Miso hiding (new, getProperty, Property)
import qualified Miso.DSL as J
-----------------------------------------------------------------------------
type Three = IO
-----------------------------------------------------------------------------
class GetField (field :: Type -> Type -> Type) where
  getField :: field object return -> object -> Three return
-----------------------------------------------------------------------------
instance GetField Property where
  getField (Property _ getter) object = getter object
-----------------------------------------------------------------------------
instance GetField ReadOnly where
  getField (ReadOnly getter) object = getter object
-----------------------------------------------------------------------------
infixr 4 ^.
(^.) :: GetField field => object -> field object return -> Three return
(^.) = flip getField
-----------------------------------------------------------------------------
infixr 4 .=
(.=) :: Property object field -> field -> object -> Three ()
(.=) (Property setter _) field_ object = setter object field_
-----------------------------------------------------------------------------
infixr 4 %=
(%=)
  :: forall object field
  . Property object field -> (field -> field) -> object -> Three ()
(%=) (Property setter getter) f object = setter object =<< f <$> getter object
-----------------------------------------------------------------------------
infixr 4 +=
(+=)
  :: forall object field
  . Num field => Property object field -> field -> object -> Three ()
(+=) (Property setter getter) i object = setter object =<< (+i) <$> getter object
-----------------------------------------------------------------------------
infixr 4 -=
(-=)
  :: forall object field
  . Num field => Property object field -> field -> object -> Three ()
(-=) (Property setter getter) i object = setter object =<< subtract i <$> getter object
-----------------------------------------------------------------------------
infixr 4 *=
(*=)
  :: forall object field
  . Num field => Property object field -> field -> object -> Three ()
(*=) (Property setter getter) i object = setter object =<< (*i) <$> getter object
-----------------------------------------------------------------------------
newtype ReadOnly object field = ReadOnly (object -> Three field)
-----------------------------------------------------------------------------
type Method object args return = args -> object -> Three return
-----------------------------------------------------------------------------
data Property object field
  = Property
  { setProperty :: object -> field -> IO ()
  , getProperty :: object -> IO field
  }
-----------------------------------------------------------------------------
property
  :: forall object field
  . (ToObject object, ToJSVal field, FromJSVal field)
  => MisoString -> Property object field
property name
  = Property
  { setProperty = \object -> setField object name
  , getProperty = \object -> fromJSValUnchecked =<< object ! name
  }
-----------------------------------------------------------------------------
optional
  :: forall object field
  . (ToObject object, ToJSVal field, FromJSVal field)
  => MisoString -> Property object (Maybe field)
optional name = Property
  { setProperty = \object -> setField object name
  , getProperty = \object -> fromJSVal =<< object ! name
  }
-----------------------------------------------------------------------------
method
  :: forall object return args
  . (FromJSVal return, ToArgs args, ToObject object)
  => MisoString
  -> Method object args return
method name = \args object ->
  fromJSValUnchecked =<< do
    object # name $ args
-----------------------------------------------------------------------------
readonly
  :: forall object return
   . ( FromJSVal return, ToObject object)
  => MisoString -> ReadOnly object return
readonly name = ReadOnly $ \object ->
  fromJSValUnchecked =<< object ! name
-----------------------------------------------------------------------------
new
  :: ToArgs args
  => (JSVal -> con)
  -> MisoString
  -> args
  -> Three con
new f name args = do
  v <- jsg ("THREE" :: MisoString) ! name
  f <$> J.new v args
-----------------------------------------------------------------------------
-- | This is how we compose 'Property', can be used for getting and setting fields
--
-- @
--   object & position .! x .= 100
-- @
--
(!.)
  :: forall a b c
  . ( ToObject a
    , ToObject b
    )
  => Property a b
  -> Property b c
  -> Property a c
prop1 !. prop2 = Property setter getter
    where
      getter :: a -> IO c
      getter = getProperty prop2 <=< getProperty prop1

      setter :: a -> c -> IO ()
      setter record target = do
        field_ <- getProperty prop1 record
        setProperty prop2 field_ target
-----------------------------------------------------------------------------
-- | This is how we invoke a function
--
-- @
--   object ^. position !.. setXYZ 1 1 1
-- @
--
infixl 1 !..
(!..)
  :: Three field
  -> (field -> Three result)
  -> Three result
(!..) = (>>=)
-----------------------------------------------------------------------------
class ToObject object => X object where
  x :: Property object Double
  x = property "x"
-----------------------------------------------------------------------------
instance X JSVal
-----------------------------------------------------------------------------
class ToObject object => Y object where
  y :: Property object Double
  y = property "y"
-----------------------------------------------------------------------------
instance Y JSVal
-----------------------------------------------------------------------------
class ToObject object => Z object where
  z :: Property object Double
  z = property "z"
-----------------------------------------------------------------------------
instance Z JSVal
-----------------------------------------------------------------------------
class ToObject object => W object where
  w :: Property object Double
  w = property "w"
-----------------------------------------------------------------------------
instance W JSVal
-----------------------------------------------------------------------------
-- | Class for dealing with overloaded triplet like arguments
-- (e.g. 'Vector3', '(Int,Int,Int)'), see use in 'Object3D', 'lookAt'
class ToJSVal args => Triplet args where
  triplet :: args -> IO JSVal
-----------------------------------------------------------------------------
instance ToJSVal (x,y,z) => Triplet (x,y,z) where
  triplet = toJSVal
-----------------------------------------------------------------------------
