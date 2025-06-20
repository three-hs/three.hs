{-# LANGUAGE OverloadedStrings #-}

module THREE.Internal
  ( new
  , new'
  , mkGet
  , mkGetOpt
  , mkModify
  , mkModifyOpt
  , mkSet
  ) where

import qualified Language.Javascript.JSaddle as J
import           Language.Javascript.JSaddle hiding (new)

-- | Smart constructor for THREE namespace objects
new
  :: ToJSVal a
  => (JSVal -> b)
  -> JSString
  -> [a]
  -> JSM b
new f name args = do
  v <- jsg ("THREE" :: JSString) ! name
  f <$> J.new v args

-- | Smart constructor for THREE namespace objects
new' 
  :: MakeArgs a 
  => (JSVal -> b) 
  -> JSString 
  -> a 
  -> JSM b
new' f name args = do
  v <- jsg ("THREE" :: JSString) ! name
  f <$> J.new v args

-- | Getting the value of a property.
mkGet :: (MakeObject a, FromJSVal b) => JSString -> a -> JSM b
mkGet name v = fromJSValUnchecked =<< v ! name

-- | Getting the value of an optional property.
mkGetOpt :: (MakeObject a, FromJSVal b) => JSString -> a -> JSM (Maybe b)
mkGetOpt name v = fromJSVal =<< v ! name

-- | Setting the value of a property.
mkSet :: (MakeObject a, ToJSVal b) => JSString -> b -> a -> JSM ()
mkSet name x v = v <# name $ x

-- | Modifying a property.
mkModify :: (MakeObject a, ToJSVal b, FromJSVal b) => JSString -> (b -> JSM b) -> a -> JSM b
mkModify name f v = do
  x <- fromJSValUnchecked =<< v ! name
  y <- f x
  v <# name $ y
  pure y

-- | Modifying an optional property.
mkModifyOpt :: (MakeObject a, ToJSVal b, FromJSVal b) => JSString -> (b -> JSM b) -> a -> JSM (Maybe b)
mkModifyOpt name f v = do
  mx <- fromJSVal =<< v ! name
  case mx of
    Nothing -> pure Nothing
    Just x -> do
      y <- f x
      v <# name $ y
      pure $ Just y

