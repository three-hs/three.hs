-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.CubeTexture
  ( -- * Types
    CubeTexture (..)
    -- * Constructors
  , THREE.CubeTexture.new
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
-- | https://threejs.org/docs/#api/en/textures/CubeTexture
newtype CubeTexture
  = CubeTexture
  { unCubeTexture :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal CubeTexture where
  fromJSVal = pure . Just . CubeTexture

-- Constructor

new :: (CubeTextureNewParams t, MakeArgs t) => t -> THREE.Three CubeTexture
new = THREE.new CubeTexture "CubeTexture"

class CubeTextureNewParams t
instance CubeTextureNewParams ()
instance CubeTextureNewParams [Object]  -- TODO [Image]?
instance CubeTextureNewParams ([Object], MappingModes)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes, WrappingModes)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types, Double)
instance CubeTextureNewParams ([Object], MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types, Double, ColorSpace)

