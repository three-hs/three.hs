-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.DepthTexture
  ( -- * Types
    DepthTexture (..)
    -- * Constructors
  , THREE.DepthTexture.new
    -- * Properties
  , compareFunction
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
-- | https://threejs.org/docs/#api/en/textures/DepthTexture
newtype DepthTexture
  = DepthTexture
  { unDepthTexture :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal DepthTexture where
  fromJSVal = pure . Just . DepthTexture

-- Constructor

new :: (DepthTextureNewParams t, ToArgs t) => t -> THREE.Three DepthTexture
new = THREE.new DepthTexture "DepthTexture"

class DepthTextureNewParams t
instance DepthTextureNewParams ()
instance DepthTextureNewParams Int
instance DepthTextureNewParams (Int, Int)
instance DepthTextureNewParams (Int, Int, Types)
instance DepthTextureNewParams (Int, Int, Types, MappingModes)
instance DepthTextureNewParams (Int, Int, Types, MappingModes, WrappingModes)
instance DepthTextureNewParams (Int, Int, Types, MappingModes, WrappingModes, WrappingModes)
instance DepthTextureNewParams (Int, Int, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters)
instance DepthTextureNewParams (Int, Int, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters)
instance DepthTextureNewParams (Int, Int, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Double)
instance DepthTextureNewParams (Int, Int, Types, MappingModes, WrappingModes, WrappingModes, MagnificationFilters, MinificationFilters, Double, Formats)

-- Property

compareFunction :: Property DepthTexture (Maybe TextureComparisonFunctions)
compareFunction = optional "compareFunction"

