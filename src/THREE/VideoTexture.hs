-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.VideoTexture
  ( -- * Types
    VideoTexture (..)
    -- * Methods
  , THREE.VideoTexture.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/VideoTexture
newtype VideoTexture
  = VideoTexture
  { unVideoTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/VideoTexture
new :: THREE.Three VideoTexture
new = THREE.new VideoTexture "VideoTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
