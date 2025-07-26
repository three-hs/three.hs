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

alphaMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
alphaMap = optional "alphaMap"

aoMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
aoMap = optional "aoMap"

aoMapIntensity :: Property MeshPhongMaterial Int
aoMapIntensity = property "aoMapIntensity"

bumpMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
bumpMap = optional "bumpMap"

bumpScale :: Property MeshPhongMaterial Double
bumpScale = property "bumpScale"

color :: Property MeshPhongMaterial Color
color = property "color" 

combine :: Property MeshPhongMaterial TextureCombineOperations
combine = property "combine" 

displacementMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshPhongMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshPhongMaterial Double
displacementBias = property "displacementBias"

emissive :: Property MeshPhongMaterial Color
emissive = property "emissive"

emissiveMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
emissiveMap = optional "emissiveMap"

emissiveIntensity :: Property MeshPhongMaterial Double
emissiveIntensity = property "emissiveIntensity"

envMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
envMap = optional "envMap"

envMapRotation :: Property MeshPhongMaterial Euler
envMapRotation = property "envMapRotation"

flatShading :: Property MeshPhongMaterial Bool
flatShading = property "flatShading"

fog :: Property MeshPhongMaterial Bool
fog = property "fog"

lightMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
lightMap = optional "lightMap"

lightMapIntensity :: Property MeshPhongMaterial Double
lightMapIntensity = property "lightMapIntensity"

map :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
map = optional "map"

normalMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
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

specularMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhongMaterial (Maybe texture)
specularMap = optional "specularMap"

wireframe :: Property MeshPhongMaterial Bool
wireframe = property "wireframe"

wireframeLinecap :: Property MeshPhongMaterial Linecap
wireframeLinecap = property "wireframeLinecap"

wireframeLinejoin :: Property MeshPhongMaterial Linejoin
wireframeLinejoin = property "wireframeLinejoin"

wireframeLinewidth :: Property MeshPhongMaterial Double
wireframeLinewidth = property "wireframeLinewidth"

-- Method

