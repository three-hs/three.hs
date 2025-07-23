-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.VideoFrameTexture
  ( -- * Types
    VideoFrameTexture (..)
    -- * Constructors
  , THREE.VideoFrameTexture.new
    -- * Methods
  , setFrame
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Constants.Textures
import           THREE.Constants.Textures.MagnificationFilters
import           THREE.Constants.Textures.MinificationFilters
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Texture
import           THREE.VideoTexture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/VideoFrameTexture
newtype VideoFrameTexture
  = VideoFrameTexture
  { unVideoFrameTexture :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass, VideoTextureClass)

instance FromJSVal VideoFrameTexture where
  fromJSVal = pure . Just . VideoFrameTexture

-- Constructor

new :: (VideoFrameTextureNewParams t, MakeArgs t) => t -> THREE.Three VideoFrameTexture
new = THREE.new VideoFrameTexture "VideoFrameTexture"

class VideoFrameTextureNewParams t
instance VideoFrameTextureNewParams ()
instance VideoFrameTextureNewParams MappingModes
instance VideoFrameTextureNewParams (MappingModes, WrappingModes)
instance VideoFrameTextureNewParams (MappingModes, WrappingModes, WrappingModes)
instance VideoFrameTextureNewParams (MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance VideoFrameTextureNewParams (MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance VideoFrameTextureNewParams (MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats)
instance VideoFrameTextureNewParams (MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types)
instance VideoFrameTextureNewParams (MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types, Double)

-- Method

setFrame :: Method VideoFrameTexture Object ()  -- TODO Object -> Image?
setFrame = method "setFrame"

