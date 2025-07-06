-----------------------------------------------------------------------------
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE MultiParamTypeClasses      #-}
{-# LANGUAGE UndecidableInstances       #-}
{-# LANGUAGE ScopedTypeVariables        #-}
{-# LANGUAGE TypeApplications           #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE FlexibleInstances          #-}
{-# LANGUAGE FlexibleContexts           #-}
{-# LANGUAGE TemplateHaskell            #-}
{-# LANGUAGE KindSignatures             #-}
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE GADTs                      #-}
{-# LANGUAGE CPP                        #-}
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
  -- * Initialization
  , initialize
  ) where
-----------------------------------------------------------------------------
import           Control.Monad
import           Data.Kind
import           Language.Javascript.JSaddle hiding (new)
import qualified Language.Javascript.JSaddle as J
#ifndef GHCJS_BOTH
#ifdef WASM
import qualified Language.Javascript.JSaddle.Wasm.TH as JSaddle.Wasm.TH
#else
import           Data.FileEmbed (embedStringFile)
import           Language.Javascript.JSaddle (eval)
#endif
#endif
-----------------------------------------------------------------------------
type Three = JSM
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
  { setProperty :: object -> field -> JSM ()
  , getProperty :: object -> JSM field
  }
-----------------------------------------------------------------------------
property
  :: forall object field
  . (MakeObject object, ToJSVal field, FromJSVal field)
  => JSString -> Property object field
property name
  = Property
  { setProperty = \object -> (object <# name)
  , getProperty = \object -> fromJSValUnchecked =<< object ! name
  }
-----------------------------------------------------------------------------
optional
  :: forall object field
  . (MakeObject object, ToJSVal field, FromJSVal field)
  => JSString -> Property object (Maybe field)
optional name = Property
  { setProperty = \object -> (object <# name)
  , getProperty = \object -> fromJSVal =<< object ! name
  }
-----------------------------------------------------------------------------
method
  :: forall object return args
  . (FromJSVal return, MakeArgs args, MakeObject object)
  => JSString
  -> Method object args return
method name = \args object ->
  fromJSValUnchecked =<< do
    object # name $ args
-----------------------------------------------------------------------------
readonly
  :: forall object return
   . ( FromJSVal return, MakeObject object)
  => JSString -> ReadOnly object return
readonly name = ReadOnly $ \object ->
  fromJSValUnchecked =<< object ! name
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
  :: forall a b c
  . ( MakeObject a
    , MakeObject b
    )
  => Property a b
  -> Property b c
  -> Property a c
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
class MakeObject object => X object where
  x :: Property object Double
  x = property "x"
-----------------------------------------------------------------------------
instance X JSVal
-----------------------------------------------------------------------------
class MakeObject object => Y object where
  y :: Property object Double
  y = property "y"
-----------------------------------------------------------------------------
instance Y JSVal
-----------------------------------------------------------------------------
class MakeObject object => Z object where
  z :: Property object Double
  z = property "z"
-----------------------------------------------------------------------------
instance Z JSVal
-----------------------------------------------------------------------------
class MakeObject object => W object where
  w :: Property object Double
  w = property "w"
-----------------------------------------------------------------------------
instance W JSVal
-----------------------------------------------------------------------------
-- | Class for dealing with overloaded triplet like arguments
-- (e.g. 'Vector3', '(Int,Int,Int)'), see use in 'Object3D', 'lookAt'
class ToJSVal args => Triplet args where
  triplet :: args -> JSM JSVal
-----------------------------------------------------------------------------
instance ToJSVal (x,y,z) => Triplet (x,y,z) where
  triplet = toJSVal
-----------------------------------------------------------------------------
-- Some orphans, please put these back into `jsaddle`
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance FromJSVal Function where
  fromJSVal = pure . pure . Function . Object
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance FromJSVal Object where
  fromJSVal = pure . pure . Object
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs Int where
  makeArgs k = (:[]) <$> toJSVal k
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs Object where
  makeArgs (Object k) = pure [k]
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs args => MakeArgs (Maybe args) where
  makeArgs (Just args) = makeArgs args
  makeArgs Nothing     = pure []
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs JSString where
  makeArgs (JSString k) = makeArgs k
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs Function where
  makeArgs (Function (Object k)) = pure [k]
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance ToJSVal (SomeJSArray Immutable) where
  toJSVal (SomeJSArray k) = pure k
-----------------------------------------------------------------------------
initialize :: JSM ()
initialize = do
#ifndef GHCJS_BOTH
#ifdef WASM
  $(JSaddle.Wasm.TH.evalFile "js/three.js")
#else
  _ <- eval ($(embedStringFile "js/three.js") :: JSString)
#endif
#endif
  pure ()
-----------------------------------------------------------------------------
