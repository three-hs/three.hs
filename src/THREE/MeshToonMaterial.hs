-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshToonMaterial
  ( -- * Types
    MeshToonMaterial (..)
    -- * Constructors
  , THREE.MeshToonMaterial.new
    -- * Properties
  , alphaMap
  , aoMap
  , aoMapIntensity
  , bumpMap
  , bumpScale
  , color
  , displacementMap
  , displacementScale
  , displacementBias
  , emissive
  , emissiveMap
  , emissiveIntensity
  , fog
  , lightMap
  , lightMapIntensity
  , gradientMap
  , THREE.MeshToonMaterial.map
  , normalMap
  , normalMapType
  , normalScale
  , wireframe
  , wireframeLinecap
  , wireframeLinejoin
  , wireframeLinewidth
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
-- | https://threejs.org/docs/#api/en/materials/MeshToonMaterial
newtype MeshToonMaterial
  = MeshToonMaterial
  { unMeshToonMaterial :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshToonMaterial where
  fromJSVal = pure . Just . MeshToonMaterial

-- Constructor

new :: THREE.Three MeshToonMaterial
new = THREE.new MeshToonMaterial "MeshToonMaterial" ()

-- Property

alphaMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
alphaMap = optional "alphaMap"

aoMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
aoMap = optional "aoMap"

aoMapIntensity :: Property MeshToonMaterial Int
aoMapIntensity = property "aoMapIntensity"

bumpMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
bumpMap = optional "bumpMap"

bumpScale :: Property MeshToonMaterial Double
bumpScale = property "bumpScale"

color :: Property MeshToonMaterial Color
color = property "color" 

displacementMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshToonMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshToonMaterial Double
displacementBias = property "displacementBias"

emissive :: Property MeshToonMaterial Color
emissive = property "emissive"

emissiveMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
emissiveMap = optional "emissiveMap"

emissiveIntensity :: Property MeshToonMaterial Double
emissiveIntensity = property "emissiveIntensity"

fog :: Property MeshToonMaterial Bool
fog = property "fog"

gradientMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
gradientMap = optional "gradientMap"

lightMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
lightMap = optional "lightMap"

lightMapIntensity :: Property MeshToonMaterial Double
lightMapIntensity = property "lightMapIntensity"

map :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
map = optional "map"

normalMap :: (TextureClass texture, FromJSVal texture) => Property MeshToonMaterial (Maybe texture)
normalMap = optional "normalMap"

normalMapType :: Property MeshToonMaterial NormalMapType
normalMapType = property "normalMapType"

normalScale :: Property MeshToonMaterial Vector2
normalScale = property "normalScale"

wireframe :: Property MeshToonMaterial Bool
wireframe = property "wireframe"

wireframeLinecap :: Property MeshToonMaterial Linecap
wireframeLinecap = property "wireframeLinecap"

wireframeLinejoin :: Property MeshToonMaterial Linejoin
wireframeLinejoin = property "wireframeLinejoin"

wireframeLinewidth :: Property MeshToonMaterial Double
wireframeLinewidth = property "wireframeLinewidth"

