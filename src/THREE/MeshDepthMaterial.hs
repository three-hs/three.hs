-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshDepthMaterial
  ( -- * Types
    MeshDepthMaterial (..)
    -- * Constructors
  , THREE.MeshDepthMaterial.new
    -- * Properties
  , alphaMap
  , depthPacking
  , displacementMap
  , displacementScale
  , displacementBias
  , THREE.MeshDepthMaterial.map
  , wireframe
  , wireframeLinewidth
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Constants.Textures
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshDepthMaterial
newtype MeshDepthMaterial
  = MeshDepthMaterial
  { unMeshDepthMaterial :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshDepthMaterial where
  fromJSVal = pure . Just . MeshDepthMaterial

-- Constructor

new :: THREE.Three MeshDepthMaterial
new = THREE.new MeshDepthMaterial "MeshDepthMaterial" ()

-- Property

alphaMap :: (TextureClass texture, FromJSVal texture) => Property MeshDepthMaterial (Maybe texture)
alphaMap = optional "alphaMap"

depthPacking :: Property MeshDepthMaterial DepthPacking
depthPacking = property "depthPacking"

displacementMap :: (TextureClass texture, FromJSVal texture) => Property MeshDepthMaterial (Maybe texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshDepthMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshDepthMaterial Double
displacementBias = property "displacementBias"

map :: (TextureClass texture, FromJSVal texture) => Property MeshDepthMaterial (Maybe texture)
map = optional "map"

wireframe :: Property MeshDepthMaterial Bool
wireframe = property "wireframe"

wireframeLinewidth :: Property MeshDepthMaterial Double
wireframeLinewidth = property "wireframeLinewidth"

