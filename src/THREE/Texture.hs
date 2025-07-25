-----------------------------------------------------------------------------
{-# LANGUAGE ConstrainedClassMethods #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Texture
  ( -- * Types
    Texture (..)
  , TextureClass (..)
    -- * Constructors
  , THREE.Texture.new
    -- * Read-only Properties
    -- * Properties
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Constants.Textures
import           THREE.Constants.Textures.MagnificationFilters
import           THREE.Constants.Textures.MinificationFilters
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Matrix3
import           THREE.Source
import           THREE.Vector2
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/Texture
class (EventDispatcher texture) => TextureClass texture where

  -- ReadOnly

  id :: ReadOnly texture Int
  id = readonly "id"

  uuid :: ReadOnly texture JSString
  uuid = readonly "uuid"

  -- Property

  name :: Property texture JSString
  name = property "name"

  -- TODO write a typeclass for Image?
  image :: Property texture Object
  image = property "image"

  mipmaps :: Property texture [Object]
  mipmaps = property "mipmaps"

  mapping :: Property texture MappingModes
  mapping = property "mapping"

  channel :: Property texture UvChannel
  channel = property "channel"

  wrapS :: Property texture WrappingModes
  wrapS = property "wrapS"

  wrapT :: Property texture WrappingModes
  wrapT = property "wrapT"

  magFilter :: Property texture MagnificationFilters
  magFilter = property "magFilter"

  minFilter :: Property texture MinificationFilters
  minFilter = property "minFilter"

  anisotropy :: Property texture Double
  anisotropy = property "anisotropy"

  format :: Property texture Formats
  format = property "format"

  internalFormat :: Property texture InternalFormats
  internalFormat = property "internalFormat"

  type_ :: Property texture Types
  type_ = property "type"

  offset :: Property texture Vector2
  offset = property "offset"

  repeat :: Property texture Vector2
  repeat = property "repeat"

  rotation :: Property texture Double
  rotation = property "rotation"

  center :: Property texture Vector2
  center = property "center"

  matrixAutoUpdate :: Property texture Bool
  matrixAutoUpdate = property "matrixAutoUpdate"

  matrix :: Property texture Matrix3
  matrix = property "matrix"

  generateMipmaps :: Property texture Bool
  generateMipmaps = property "generateMipmaps"

  premultiplyAlpha :: Property texture Bool
  premultiplyAlpha = property "premultiplyAlpha"

  flipY :: Property texture Bool
  flipY = property "flipY"

  unpackAlignment :: Property texture Int
  unpackAlignment = property "unpackAlignment"

  colorSpace :: Property texture ColorSpace
  colorSpace = property "colorSpace"

  version :: Property texture Int
  version = property "version"

  onUpdate :: Property texture (Maybe Function)
  onUpdate = optional "onUpdate"

  needsUpdate :: Property texture Bool
  needsUpdate = property "needsUpdate"

  userData :: Property texture Object
  userData = property "userData"

  source :: Property texture Source
  source = property "source"

  -- Method

  updateMatrix :: Method texture () ()
  updateMatrix = method "updateMatrix"

  clone :: (FromJSVal texture) => Method texture () texture
  clone = method "clone"

  toJSON :: Method texture Object Object
  toJSON = method "toJSON"

  dispose :: Method texture () ()
  dispose = method "dispose"

  transformUv :: Method texture Vector2 Vector2
  transformUv = method "transformUv"

instance TextureClass JSVal

-----------------------------------------------------------------------------

newtype Texture
  = Texture
  { unTexture :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal Texture where
  fromJSVal = pure . Just . Texture

-- Constructor

new :: (TextureNewParams t, MakeArgs t) => t -> THREE.Three Texture
new = THREE.new Texture "Texture"

class TextureNewParams t
instance TextureNewParams ()
instance TextureNewParams Object  -- TODO Image?
instance TextureNewParams (Object, MappingModes)
instance TextureNewParams (Object, MappingModes, WrappingModes)
instance TextureNewParams (Object, MappingModes, WrappingModes, WrappingModes)
instance TextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance TextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance TextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats)
instance TextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types)
instance TextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types, Double)
instance TextureNewParams (Object, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types, Double, ColorSpace)

