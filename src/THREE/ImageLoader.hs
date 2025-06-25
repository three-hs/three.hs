-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ImageLoader
  ( -- * Types
    ImageLoader (..)
    -- * Methods
  , THREE.ImageLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ImageLoader
newtype ImageLoader
  = ImageLoader
  { unImageLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ImageLoader
new :: THREE.Three ImageLoader
new = THREE.new ImageLoader "ImageLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
