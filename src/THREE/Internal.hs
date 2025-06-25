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
    Three (..)
  , Property (..)
    -- * Combinators
  , (^.)
  , (.=)
  , (!.)
  , field
  , new
  -- * Evaluation
  , interpret
  ) where
-----------------------------------------------------------------------------
import           Control.Monad
import           Control.Monad.IO.Class (MonadIO(liftIO))
import           Data.Kind
import           Data.Proxy
import           GHC.TypeLits
import           Language.Javascript.JSaddle hiding (new)
import qualified Language.Javascript.JSaddle as J
-----------------------------------------------------------------------------
data Three :: Type -> Type where
  Pure        :: a -> Three a
  Bind        :: Three a -> (a -> Three b) -> Three b
  LiftIO      :: IO a -> Three a
  LiftJSM     :: JSM a -> Three a
  SetProperty :: Property object name field -> field -> object -> Three ()
  GetProperty :: object -> Property object name field -> Three field
-----------------------------------------------------------------------------
instance Functor Three where
  fmap = liftM
-----------------------------------------------------------------------------
instance Applicative Three where
  (<*>) = ap
  pure = Pure
-----------------------------------------------------------------------------
instance Monad Three where
  (>>=) = Bind
  return = pure
-----------------------------------------------------------------------------
instance MonadIO Three where
  liftIO = LiftIO
-----------------------------------------------------------------------------
infixr 4 ^.
(^.) :: object -> Property object name field -> Three field
(^.) = GetProperty
-----------------------------------------------------------------------------
infixr 4 .=
(.=) :: Property object name field -> field -> object -> Three ()
(.=) = SetProperty
-----------------------------------------------------------------------------
data Property object (name :: Symbol) field
  = Property
  { setProperty :: object -> field -> JSM ()
  , getProperty :: object -> JSM field
  }
-----------------------------------------------------------------------------
field
  :: forall object name field
  . (KnownSymbol name, MakeObject object, ToJSVal field, FromJSVal field)
  => Property object name field
field
  = Property
  { setProperty = \object -> (object <# name)
  , getProperty = \object -> fromJSValUnchecked =<< object ! name
  } where
      name = symbolVal (Proxy @name)
-----------------------------------------------------------------------------
new 
  :: MakeArgs a 
  => (JSVal -> b) 
  -> JSString 
  -> a 
  -> Three b
new f name args = LiftJSM $ do
  v <- jsg ("THREE" :: JSString) ! name
  f <$> J.new v args
-----------------------------------------------------------------------------
-- | Evaluate 'Three' DSL
interpret
  :: Three a
  -> JSM a
interpret (Pure m)
  = pure m
interpret (Bind m f)
  = interpret m >>= interpret . f
interpret (LiftIO io)
  = liftIO io
interpret (LiftJSM jsm)
  = liftJSM jsm
interpret (GetProperty object lens_)
  = getProperty lens_ object
interpret (SetProperty lens field_ object)
  = setProperty lens object field_
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
prop1 !. prop2 = prop3
    where
      prop3 :: Property a fb c
      prop3 = Property setter getter

      getter :: a -> JSM c
      getter = getProperty prop2 <=< getProperty prop1

      setter :: a -> c -> JSM ()
      setter record target = do
        field_ <- getProperty prop1 record
        setProperty prop2 field_ target
-----------------------------------------------------------------------------
