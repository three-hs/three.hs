-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshMatcapMaterial
  ( -- * Types
    MeshMatcapMaterial (..)
    -- * Constructors
  , THREE.MeshMatcapMaterial.new
    -- * Properties
  , alphaMap
  , bumpMap
  , bumpScale
  , color
  , displacementMap
  , displacementScale
  , displacementBias
  , flatShading
  , fog
  , THREE.MeshMatcapMaterial.map
  , matcap
  , normalMap
  , normalMapType
  , normalScale
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.Constants.Materials
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
import           THREE.Vector2
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial
newtype MeshMatcapMaterial
  = MeshMatcapMaterial
  { unMeshMatcapMaterial :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshMatcapMaterial where
  fromJSVal = pure . Just . MeshMatcapMaterial

-- Constructor

new :: THREE.Three MeshMatcapMaterial
new = THREE.new MeshMatcapMaterial "MeshMatcapMaterial" ()

-- Property

alphaMap :: (TextureClass texture, FromJSVal texture) => Property MeshMatcapMaterial (Maybe texture)
alphaMap = optional "alphaMap"

bumpMap :: (TextureClass texture, FromJSVal texture) => Property MeshMatcapMaterial (Maybe texture)
bumpMap = optional "bumpMap"

bumpScale :: Property MeshMatcapMaterial Double
bumpScale = property "bumpScale"

color :: Property MeshMatcapMaterial Color
color = property "color" 

displacementMap :: (TextureClass texture, FromJSVal texture) => Property MeshMatcapMaterial (Maybe texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshMatcapMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshMatcapMaterial Double
displacementBias = property "displacementBias"

flatShading :: Property MeshMatcapMaterial Bool
flatShading = property "flatShading"

fog :: Property MeshMatcapMaterial Bool
fog = property "fog"

map :: (TextureClass texture, FromJSVal texture) => Property MeshMatcapMaterial (Maybe texture)
map = optional "map"

matcap :: (TextureClass texture, FromJSVal texture) => Property MeshMatcapMaterial (Maybe texture)
matcap = optional "matcap"

normalMap :: (TextureClass texture, FromJSVal texture) => Property MeshMatcapMaterial (Maybe texture)
normalMap = optional "normalMap"

normalMapType :: Property MeshMatcapMaterial NormalMapType
normalMapType = property "normalMapType"

normalScale :: Property MeshMatcapMaterial Vector2
normalScale = property "normalScale"

