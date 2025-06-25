-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ImageBitmapLoader
  ( -- * Types
    ImageBitmapLoader (..)
    -- * Methods
  , THREE.ImageBitmapLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ImageBitmapLoader
newtype ImageBitmapLoader
  = ImageBitmapLoader
  { unImageBitmapLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ImageBitmapLoader
new :: THREE.Three ImageBitmapLoader
new = THREE.new ImageBitmapLoader "ImageBitmapLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
