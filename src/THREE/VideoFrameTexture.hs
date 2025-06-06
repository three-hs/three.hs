-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.VideoFrameTexture
  ( -- * Types
    VideoFrameTexture (..)
    -- * Methods
  , newVideoFrameTexture
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/VideoFrameTexture
newtype VideoFrameTexture
  = VideoFrameTexture
  { unVideoFrameTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/VideoFrameTexture
newVideoFrameTexture :: JSM VideoFrameTexture
newVideoFrameTexture = THREE.new VideoFrameTexture "VideoFrameTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
