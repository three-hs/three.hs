-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshBasicMaterial
  ( -- * Types
    MeshBasicMaterial (..)
    -- * Constructors
  , THREE.MeshBasicMaterial.new
    -- * Properties
  , alphaMap
  , aoMap
  , aoMapIntensity
  , color
  , combine
  , envMap
  , envMapRotation
  , fog
  , lightMap
  , lightMapIntensity
  , THREE.MeshBasicMaterial.map
  , reflectivity
  , refractionRatio
  , specularMap
  , wireframe
  , wireframeLinecap
  , wireframeLinejoin
  , wireframeLinewidth
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.Color 
import           THREE.Constants.Materials
import           THREE.EventDispatcher 
import           THREE.Euler
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshBasicMaterial
newtype MeshBasicMaterial
  = MeshBasicMaterial
  { unMeshBasicMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshBasicMaterial where
  fromJSVal = pure . Just . MeshBasicMaterial

-- Constructor

new :: Maybe Object -> THREE.Three MeshBasicMaterial
new = THREE.new MeshBasicMaterial "MeshBasicMaterial"

-- Property

alphaMap  :: Property MeshBasicMaterial (Maybe Texture)
alphaMap  = optional "alphaMap"

aoMap  :: Property MeshBasicMaterial (Maybe Texture)
aoMap  = optional "aoMap"

aoMapIntensity :: Property MeshBasicMaterial Int
aoMapIntensity = property "aoMapIntensity"

color :: Property MeshBasicMaterial Color
color = property "color" 

combine :: Property MeshBasicMaterial TextureCombineOperations
combine = property "combine" 

envMap :: Property MeshBasicMaterial (Maybe Texture)
envMap = optional "envMap"

envMapRotation :: Property MeshBasicMaterial Euler
envMapRotation = property "envMapRotation"

fog :: Property MeshBasicMaterial Bool
fog = property "fog"

lightMap :: Property MeshBasicMaterial (Maybe Texture)
lightMap = optional "lightMap"

lightMapIntensity :: Property MeshBasicMaterial Double
lightMapIntensity = property "lightMapIntensity"

map :: Property MeshBasicMaterial (Maybe Texture)
map = optional "map"

reflectivity :: Property MeshBasicMaterial Double
reflectivity = property "reflectivity"

refractionRatio :: Property MeshBasicMaterial Double
refractionRatio = property "refractionRatio"

specularMap :: Property MeshBasicMaterial (Maybe Texture)
specularMap = optional "specularMap"

wireframe :: Property MeshBasicMaterial Bool
wireframe = property "wireframe"

wireframeLinecap :: Property MeshBasicMaterial JSString
wireframeLinecap = property "wireframeLinecap"

wireframeLinejoin :: Property MeshBasicMaterial JSString
wireframeLinejoin = property "wireframeLinejoin"

wireframeLinewidth :: Property MeshBasicMaterial Double
wireframeLinewidth = property "wireframeLinewidth"

