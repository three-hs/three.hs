-----------------------------------------------------------------------------
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE ScopedTypeVariables        #-}
{-# LANGUAGE TypeApplications           #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE KindSignatures             #-}
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE GADTs                      #-}
-----------------------------------------------------------------------------
module THREE.Internal
  ( -- * Types
    Three
  , Property (..)
  , ReadOnly
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
  ) where
-----------------------------------------------------------------------------
import           Control.Monad
import           Data.Proxy
import           GHC.TypeLits
import           Language.Javascript.JSaddle hiding (new)
import qualified Language.Javascript.JSaddle as J
-----------------------------------------------------------------------------
type Three = JSM
-----------------------------------------------------------------------------
infixr 4 ^.
(^.) :: object -> Property object name field -> Three field
(^.) object (Property _ getter) = getter object
-----------------------------------------------------------------------------
infixr 4 .=
(.=) :: Property object name field -> field -> object -> Three ()
(.=) (Property setter _) field_ object = setter object field_
-----------------------------------------------------------------------------
infixr 4 %=
(%=)
  :: forall object name field
  . Property object name field -> (field -> field) -> object -> Three ()
(%=) (Property setter getter) f object = setter object =<< f <$> getter object
-----------------------------------------------------------------------------
infixr 4 +=
(+=)
  :: forall object name field
  . Num field => Property object name field -> field -> object -> Three ()
(+=) (Property setter getter) i object = setter object =<< (+i) <$> getter object
-----------------------------------------------------------------------------
infixr 4 -=
(-=)
  :: forall object name field
  . Num field => Property object name field -> field -> object -> Three ()
(-=) (Property setter getter) i object = setter object =<< subtract i <$> getter object
-----------------------------------------------------------------------------
infixr 4 *=
(*=)
  :: forall object name field
  . Num field => Property object name field -> field -> object -> Three ()
(*=) (Property setter getter) i object = setter object =<< (*i) <$> getter object
-----------------------------------------------------------------------------
type ReadOnly object (name :: Symbol) field = Proxy name -> object -> Three field
-----------------------------------------------------------------------------
type Method object (name :: Symbol) args return = Proxy name -> object -> args -> Three return
-----------------------------------------------------------------------------
data Property object (name :: Symbol) field
  = Property
  { setProperty :: object -> field -> JSM ()
  , getProperty :: object -> JSM field
  }
-----------------------------------------------------------------------------
property
  :: forall object name field
  . (KnownSymbol name, MakeObject object, ToJSVal field, FromJSVal field)
  => Property object name field
property
  = Property
  { setProperty = \object -> (object <# name)
  , getProperty = \object -> fromJSValUnchecked =<< object ! name
  } where
      name = symbolVal (Proxy @name)
-----------------------------------------------------------------------------
optional
  :: forall object name field
  . (KnownSymbol name, MakeObject object, ToJSVal field, FromJSVal field)
  => Property object name (Maybe field)
optional
  = Property
  { setProperty = \object -> (object <# name)
  , getProperty = \object -> fromJSVal =<< object ! name
  } where
      name = symbolVal (Proxy @name)
-----------------------------------------------------------------------------
method
  :: forall object name return args
  . (KnownSymbol name, FromJSVal return, MakeArgs args, MakeObject object)
  => Proxy name -> object -> args -> Three return
method name object args = fromJSValUnchecked =<< do
  object # symbolVal name $ args
-----------------------------------------------------------------------------
readonly
  :: forall object name return
  . (KnownSymbol name, FromJSVal return, MakeObject object)
  => Proxy name -> object -> Three return
readonly name object = fromJSValUnchecked =<< (object ! symbolVal name)
-----------------------------------------------------------------------------
new 
  :: MakeArgs args
  => (JSVal -> con) 
  -> JSString 
  -> args
  -> Three con
new f name args = do
  v <- jsg ("THREE" :: JSString) ! name
  f <$> J.new v args
-----------------------------------------------------------------------------
-- | This is how we compose 'Property', can be used for getting and setting fields
--
-- @
--   object & position .! x .= 100
-- @
--
(!.)
  :: forall a b c fa fb
  . ( MakeObject a
    , MakeObject b
    , KnownSymbol fa
    , KnownSymbol fb
    )
  => Property a fa b
  -> Property b fb c
  -> Property a fb c
prop1 !. prop2 = Property setter getter
    where
      getter :: a -> JSM c
      getter = getProperty prop2 <=< getProperty prop1

      setter :: a -> c -> JSM ()
      setter record target = do
        field_ <- getProperty prop1 record
        setProperty prop2 field_ target
-----------------------------------------------------------------------------
-- | This is how we invoke a function
--
-- @
--   object ^. position ..! setXYZ 1 1 1
-- @
--
infixl 1 !..
(!..)
  :: Three field
  -> (field -> Three result)
  -> Three result
(!..) = (>>=)
-----------------------------------------------------------------------------
class MakeObject object => X object where
  x :: Property object "x" Double
  x = property
-----------------------------------------------------------------------------
instance X JSVal
-----------------------------------------------------------------------------
class MakeObject object => Y object where
  y :: Property object "y" Double
  y = property
-----------------------------------------------------------------------------
instance Y JSVal
-----------------------------------------------------------------------------
class MakeObject object => Z object where
  z :: Property object "z" Double
  z = property
-----------------------------------------------------------------------------
instance Z JSVal
-----------------------------------------------------------------------------
class MakeObject object => W object where
  w :: Property object "w" Double
  w = property
-----------------------------------------------------------------------------
instance W JSVal
-----------------------------------------------------------------------------
