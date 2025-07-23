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
import           Language.Javascript.JSaddle
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
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshMatcapMaterial where
  fromJSVal = pure . Just . MeshMatcapMaterial

-- Constructor

new :: THREE.Three MeshMatcapMaterial
new = THREE.new MeshMatcapMaterial "MeshMatcapMaterial" ()

-- Property

alphaMap :: Property MeshMatcapMaterial (Maybe Texture)
alphaMap = optional "alphaMap"

bumpMap :: Property MeshMatcapMaterial (Maybe Texture)
bumpMap = optional "bumpMap"

bumpScale :: Property MeshMatcapMaterial Double
bumpScale = property "bumpScale"

color :: Property MeshMatcapMaterial Color
color = property "color" 

displacementMap :: Property MeshMatcapMaterial (Maybe Texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshMatcapMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshMatcapMaterial Double
displacementBias = property "displacementBias"

flatShading :: Property MeshMatcapMaterial Bool
flatShading = property "flatShading"

fog :: Property MeshMatcapMaterial Bool
fog = property "fog"

map :: Property MeshMatcapMaterial (Maybe Texture)
map = optional "map"

matcap :: Property MeshMatcapMaterial (Maybe Texture)
matcap = optional "matcap"

normalMap :: Property MeshMatcapMaterial (Maybe Texture)
normalMap = optional "normalMap"

normalMapType :: Property MeshMatcapMaterial NormalMapType
normalMapType = property "normalMapType"

normalScale :: Property MeshMatcapMaterial Vector2
normalScale = property "normalScale"

