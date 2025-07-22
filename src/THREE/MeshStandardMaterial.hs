-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshStandardMaterial
  ( -- * Types
    MeshStandardMaterial (..)
  , MeshStandardMaterialClass (..)
    -- * Constructors
  , THREE.MeshStandardMaterial.new
    -- * Read-only Properties
    -- * Properties
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
-- | https://threejs.org/docs/#api/en/materials/MeshStandardMaterial
class (Material material) => MeshStandardMaterialClass material where

  -- ReadOnly

  -- Property

  alphaMap :: Property material (Maybe Texture)
  alphaMap = optional "alphaMap"

  aoMap :: Property material (Maybe Texture)
  aoMap = optional "aoMap"

  aoMapIntensity :: Property material Int
  aoMapIntensity = property "aoMapIntensity"

  bumpMap :: Property material (Maybe Texture)
  bumpMap = optional "bumpMap"

  bumpScale :: Property material Double
  bumpScale = property "bumpScale"

  color :: Property material Color
  color = property "color" 

  defines :: Property material Object
  defines = property "defines"

  displacementMap :: Property material (Maybe Texture)
  displacementMap = optional "displacementMap"

  displacementScale :: Property material Double
  displacementScale = property "displacementScale"

  displacementBias :: Property material Double
  displacementBias = property "displacementBias"

  emissive :: Property material Color
  emissive = property "emissive"

  emissiveMap :: Property material (Maybe Texture)
  emissiveMap = optional "emissiveMap"

  emissiveIntensity :: Property material Double
  emissiveIntensity = property "emissiveIntensity"

  envMap :: Property material (Maybe Texture)
  envMap = optional "envMap"

  envMapRotation :: Property material Euler
  envMapRotation = property "envMapRotation"

  envMapIntensity :: Property material Double
  envMapIntensity = property "envMapIntensity"

  flatShading :: Property material Bool
  flatShading = property "flatShading"

  fog :: Property material Bool
  fog = property "fog"

  lightMap :: Property material (Maybe Texture)
  lightMap = optional "lightMap"

  lightMapIntensity :: Property material Double
  lightMapIntensity = property "lightMapIntensity"

  map :: Property material (Maybe Texture)
  map = optional "map"

  metalness :: Property material Double
  metalness = property "metalness"

  metalnessMap :: Property material (Maybe Texture)
  metalnessMap = optional "metalnessMap"

  normalMap :: Property material (Maybe Texture)
  normalMap = optional "normalMap"

  normalMapType :: Property material NormalMapType
  normalMapType = property "normalMapType"

  normalScale :: Property material Vector2
  normalScale = property "normalScale"

  roughness :: Property material Double
  roughness = property "roughness"

  roughnessMap :: Property material (Maybe Texture)
  roughnessMap = optional "roughnessMap"

  wireframe :: Property material Bool
  wireframe = property "wireframe"

  wireframeLinecap :: Property material Linecap
  wireframeLinecap = property "wireframeLinecap"

  wireframeLinejoin :: Property material Linejoin
  wireframeLinejoin = property "wireframeLinejoin"

  wireframeLinewidth :: Property material Double
  wireframeLinewidth = property "wireframeLinewidth"

instance MeshStandardMaterialClass JSVal

-----------------------------------------------------------------------------

newtype MeshStandardMaterial
  = MeshStandardMaterial
  { unMeshStandardMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher, MeshStandardMaterialClass)

instance FromJSVal MeshStandardMaterial where
  fromJSVal = pure . Just . MeshStandardMaterial

-- Constructor

new :: THREE.Three MeshStandardMaterial
new = THREE.new MeshStandardMaterial "MeshStandardMaterial" ()

