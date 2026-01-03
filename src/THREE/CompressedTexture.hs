-----------------------------------------------------------------------------
{-# LANGUAGE ConstrainedClassMethods #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.CompressedTexture
  ( -- * Types
    CompressedTexture (..)
  , CompressedTextureClass
    -- * Constructors
  , THREE.CompressedTexture.new
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
-- | https://threejs.org/docs/#api/en/textures/CompressedTexture
class (TextureClass texture) => CompressedTextureClass texture 

instance CompressedTextureClass JSVal

-----------------------------------------------------------------------------

newtype CompressedTexture
  = CompressedTexture
  { unTexture :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass, CompressedTextureClass)

instance FromJSVal CompressedTexture where
  fromJSVal = pure . Just . CompressedTexture

-- Constructor

new :: (CompressedTextureNewParams t, ToArgs t) => t -> THREE.Three CompressedTexture
new = THREE.new CompressedTexture "CompressedTexture"

class CompressedTextureNewParams t
instance CompressedTextureNewParams ()
instance CompressedTextureNewParams [Object]
instance CompressedTextureNewParams ([Object], Int)
instance CompressedTextureNewParams ([Object], Int, Int)
instance CompressedTextureNewParams ([Object], Int, Int, Formats)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types, MappingModes)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types, MappingModes, WrappingModes)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Double)
instance CompressedTextureNewParams ([Object], Int, Int, Formats, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Double, ColorSpace)


