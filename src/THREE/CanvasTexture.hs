-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.CanvasTexture
  ( -- * Types
    CanvasTexture (..)
    -- * Constructors
  , THREE.CanvasTexture.new
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
-- | https://threejs.org/docs/#api/en/textures/CanvasTexture
newtype CanvasTexture
  = CanvasTexture
  { unCanvasTexture :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal CanvasTexture where
  fromJSVal = pure . Just . CanvasTexture

-- Constructor

new :: (CanvasTextureNewParams t, MakeArgs t) => t -> THREE.Three CanvasTexture
new = THREE.new CanvasTexture "CanvasTexture"

class CanvasTextureNewParams t
instance CanvasTextureNewParams JSVal   -- TODO Canvas HTMLElement
instance CanvasTextureNewParams (JSVal, MappingModes)
instance CanvasTextureNewParams (JSVal, MappingModes, WrappingModes)
instance CanvasTextureNewParams (JSVal, MappingModes, WrappingModes, WrappingModes)
instance CanvasTextureNewParams (JSVal, MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance CanvasTextureNewParams (JSVal, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance CanvasTextureNewParams (JSVal, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats)
instance CanvasTextureNewParams (JSVal, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types)
instance CanvasTextureNewParams (JSVal, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Formats, Types, Double)

