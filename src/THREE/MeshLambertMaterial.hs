-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshLambertMaterial
  ( -- * Types
    MeshLambertMaterial (..)
    -- * Constructors
  , THREE.MeshLambertMaterial.new
    -- * Properties
  , alphaMap
  , aoMap
  , aoMapIntensity
  , bumpMap
  , bumpScale
  , color
  , combine
  , displacementMap
  , displacementScale
  , displacementBias
  , emissive
  , emissiveMap
  , emissiveIntensity
  , envMap
  , envMapRotation
  , flatShading
  , fog
  , lightMap
  , lightMapIntensity
  , normalMap
  , normalMapType
  , normalScale
  , THREE.MeshLambertMaterial.map
  , reflectivity
  , refractionRatio
  , specularMap
  , wireframe
  , wireframeLinecap
  , wireframeLinejoin
  , wireframeLinewidth
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.Constants.Materials
import           THREE.Euler
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
import           THREE.Vector2
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshLambertMaterial
newtype MeshLambertMaterial
  = MeshLambertMaterial
  { unMeshLambertMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshLambertMaterial where
  fromJSVal = pure . Just . MeshLambertMaterial

-- Constructor

new :: THREE.Three MeshLambertMaterial
new = THREE.new MeshLambertMaterial "MeshLambertMaterial" ()

-- Property

alphaMap :: Property MeshLambertMaterial (Maybe Texture)
alphaMap = optional "alphaMap"

aoMap :: Property MeshLambertMaterial (Maybe Texture)
aoMap = optional "aoMap"

aoMapIntensity :: Property MeshLambertMaterial Int
aoMapIntensity = property "aoMapIntensity"

bumpMap :: Property MeshLambertMaterial (Maybe Texture)
bumpMap = optional "bumpMap"

bumpScale :: Property MeshLambertMaterial Double
bumpScale = property "bumpScale"

color :: Property MeshLambertMaterial Color
color = property "color" 

combine :: Property MeshLambertMaterial TextureCombineOperations
combine = property "combine" 

displacementMap :: Property MeshLambertMaterial (Maybe Texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshLambertMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshLambertMaterial Double
displacementBias = property "displacementBias"

emissive :: Property MeshLambertMaterial Color
emissive = property "emissive"

emissiveMap :: Property MeshLambertMaterial (Maybe Texture)
emissiveMap = optional "emissiveMap"

emissiveIntensity :: Property MeshLambertMaterial Double
emissiveIntensity = property "emissiveIntensity"

envMap :: Property MeshLambertMaterial (Maybe Texture)
envMap = optional "envMap"

envMapRotation :: Property MeshLambertMaterial Euler
envMapRotation = property "envMapRotation"

flatShading :: Property MeshLambertMaterial Bool
flatShading = property "flatShading"

fog :: Property MeshLambertMaterial Bool
fog = property "fog"

lightMap :: Property MeshLambertMaterial (Maybe Texture)
lightMap = optional "lightMap"

lightMapIntensity :: Property MeshLambertMaterial Double
lightMapIntensity = property "lightMapIntensity"

map :: Property MeshLambertMaterial (Maybe Texture)
map = optional "map"

normalMap :: Property MeshLambertMaterial (Maybe Texture)
normalMap = optional "normalMap"

normalMapType :: Property MeshLambertMaterial NormalMapType
normalMapType = property "normalMapType"

normalScale :: Property MeshLambertMaterial Vector2
normalScale = property "normalScale"

reflectivity :: Property MeshLambertMaterial Double
reflectivity = property "reflectivity"

refractionRatio :: Property MeshLambertMaterial Double
refractionRatio = property "refractionRatio"

specularMap :: Property MeshLambertMaterial (Maybe Texture)
specularMap = optional "specularMap"

wireframe :: Property MeshLambertMaterial Bool
wireframe = property "wireframe"

wireframeLinecap :: Property MeshLambertMaterial Linecap
wireframeLinecap = property "wireframeLinecap"

wireframeLinejoin :: Property MeshLambertMaterial Linejoin
wireframeLinejoin = property "wireframeLinejoin"

wireframeLinewidth :: Property MeshLambertMaterial Double
wireframeLinewidth = property "wireframeLinewidth"

