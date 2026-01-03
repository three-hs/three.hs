-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.DataTexture
  ( -- * Types
    DataTexture (..)
    -- * Constructors
  , THREE.DataTexture.new
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Constants.Textures
import           THREE.Constants.Textures.MagnificationFilters
import           THREE.Constants.Textures.MinificationFilters
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/DataTexture
newtype DataTexture
  = DataTexture
  { unDataTexture :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal DataTexture where
  fromJSVal = pure . Just . DataTexture

-- Constructor

new :: (DataTextureNewParams t, ToArgs t) => t -> THREE.Three DataTexture
new = THREE.new DataTexture "DataTexture"

class DataTextureNewParams t
instance DataTextureNewParams ()
instance DataTextureNewParams Object    -- TODO Object -> TypedArray?
instance DataTextureNewParams (Object, Int)
instance DataTextureNewParams (Object, Int, Int)
instance DataTextureNewParams (Object, Int, Int, Formats)
instance DataTextureNewParams (Object, Int, Int, Formats, Types)
instance DataTextureNewParams (Object, Int, Int, Formats, Types, MappingModes)
instance DataTextureNewParams (Object, Int, Int, Formats, Types, MappingModes, WrappingModes)
instance DataTextureNewParams (Object, Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes)
instance DataTextureNewParams (Object, Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance DataTextureNewParams (Object, Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance DataTextureNewParams (Object, Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Double)
instance DataTextureNewParams (Object, Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Double, ColorSpace)

