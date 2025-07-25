-----------------------------------------------------------------------------
{-# LANGUAGE ConstrainedClassMethods #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.VideoTexture
  ( -- * Types
    VideoTexture (..)
  , VideoTextureClass (..)
    -- * Constructors
  , THREE.VideoTexture.new
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
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/VideoTexture
class (TextureClass texture) => VideoTextureClass texture where

  -- Method

  update :: Method texture () ()
  update = method "updateMatrix"

instance VideoTextureClass JSVal

-----------------------------------------------------------------------------

newtype VideoTexture
  = VideoTexture
  { unTexture :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass, VideoTextureClass)

instance FromJSVal VideoTexture where
  fromJSVal = pure . Just . VideoTexture

-- Constructor

new :: (VideoTextureNewParams t, MakeArgs t) => t -> THREE.Three VideoTexture
new = THREE.new VideoTexture "VideoTexture"

class VideoTextureNewParams t
instance VideoTextureNewParams ()
instance VideoTextureNewParams Object  -- TODO HTMLVideoElement?
instance VideoTextureNewParams (Object, MappingModes)
instance VideoTextureNewParams (Object, MappingModes, WrappingModes)
instance VideoTextureNewParams (Object, MappingModes, WrappingModes, WrappingModes)
instance VideoTextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance VideoTextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance VideoTextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats)
instance VideoTextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types)
instance VideoTextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types, Double)


