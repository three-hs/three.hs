-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshPhongMaterial
  ( -- * Types
    MeshPhongMaterial (..)
    -- * Constructors
  , THREE.MeshPhongMaterial.new
    -- * Read-only Properties
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
  , THREE.MeshPhongMaterial.map
  , normalMap
  , normalMapType
  , normalScale
  , reflectivity
  , refractionRatio
  , shininess
  , specular
  , specularMap
  , wireframe
  , wireframeLinecap
  , wireframeLinejoin
  , wireframeLinewidth
    -- * Methods
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
-- | https://threejs.org/docs/#api/en/materials/MeshPhongMaterial
newtype MeshPhongMaterial
  = MeshPhongMaterial
  { unMeshPhongMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshPhongMaterial where
  fromJSVal = pure . Just . MeshPhongMaterial

-- Constructor

new :: THREE.Three MeshPhongMaterial
new = THREE.new MeshPhongMaterial "MeshPhongMaterial" ()

-- ReadOnly

-- Property

alphaMap :: Property MeshPhongMaterial (Maybe Texture)
alphaMap = optional "alphaMap"

aoMap :: Property MeshPhongMaterial (Maybe Texture)
aoMap = optional "aoMap"

aoMapIntensity :: Property MeshPhongMaterial Int
aoMapIntensity = property "aoMapIntensity"

bumpMap :: Property MeshPhongMaterial (Maybe Texture)
bumpMap = optional "bumpMap"

bumpScale :: Property MeshPhongMaterial Double
bumpScale = property "bumpScale"

color :: Property MeshPhongMaterial Color
color = property "color" 

combine :: Property MeshPhongMaterial TextureCombineOperations
combine = property "combine" 

displacementMap :: Property MeshPhongMaterial (Maybe Texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshPhongMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshPhongMaterial Double
displacementBias = property "displacementBias"

emissive :: Property MeshPhongMaterial Color
emissive = property "emissive"

emissiveMap :: Property MeshPhongMaterial (Maybe Texture)
emissiveMap = optional "emissiveMap"

emissiveIntensity :: Property MeshPhongMaterial Double
emissiveIntensity = property "emissiveIntensity"

envMap :: Property MeshPhongMaterial (Maybe Texture)
envMap = optional "envMap"

envMapRotation :: Property MeshPhongMaterial Euler
envMapRotation = property "envMapRotation"

flatShading :: Property MeshPhongMaterial Bool
flatShading = property "flatShading"

fog :: Property MeshPhongMaterial Bool
fog = property "fog"

lightMap :: Property MeshPhongMaterial (Maybe Texture)
lightMap = optional "lightMap"

lightMapIntensity :: Property MeshPhongMaterial Double
lightMapIntensity = property "lightMapIntensity"

map :: Property MeshPhongMaterial (Maybe Texture)
map = optional "map"

normalMap :: Property MeshPhongMaterial (Maybe Texture)
normalMap = optional "normalMap"

normalMapType :: Property MeshPhongMaterial NormalMapType
normalMapType = property "normalMapType"

normalScale :: Property MeshPhongMaterial Vector2
normalScale = property "normalScale"

reflectivity :: Property MeshPhongMaterial Double
reflectivity = property "reflectivity"

refractionRatio :: Property MeshPhongMaterial Double
refractionRatio = property "refractionRatio"

shininess :: Property MeshPhongMaterial Double
shininess = property "shininess"

specular :: Property MeshPhongMaterial Color
specular = property "specular" 

specularMap :: Property MeshPhongMaterial (Maybe Texture)
specularMap = optional "specularMap"

wireframe :: Property MeshPhongMaterial Bool
wireframe = property "wireframe"

wireframeLinecap :: Property MeshPhongMaterial JSString   -- TODO define a type ("butt", "round" and "square")
wireframeLinecap = property "wireframeLinecap"

wireframeLinejoin :: Property MeshPhongMaterial JSString  -- TODO define type ("round", "bevel" and "miter")
wireframeLinejoin = property "wireframeLinejoin"

wireframeLinewidth :: Property MeshPhongMaterial Double
wireframeLinewidth = property "wireframeLinewidth"

-- Method

