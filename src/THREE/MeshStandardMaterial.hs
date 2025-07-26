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

  alphaMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  alphaMap = optional "alphaMap"

  aoMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  aoMap = optional "aoMap"

  aoMapIntensity :: Property material Int
  aoMapIntensity = property "aoMapIntensity"

  bumpMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  bumpMap = optional "bumpMap"

  bumpScale :: Property material Double
  bumpScale = property "bumpScale"

  color :: Property material Color
  color = property "color" 

  defines :: Property material Object
  defines = property "defines"

  displacementMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  displacementMap = optional "displacementMap"

  displacementScale :: Property material Double
  displacementScale = property "displacementScale"

  displacementBias :: Property material Double
  displacementBias = property "displacementBias"

  emissive :: Property material Color
  emissive = property "emissive"

  emissiveMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  emissiveMap = optional "emissiveMap"

  emissiveIntensity :: Property material Double
  emissiveIntensity = property "emissiveIntensity"

  envMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  envMap = optional "envMap"

  envMapRotation :: Property material Euler
  envMapRotation = property "envMapRotation"

  envMapIntensity :: Property material Double
  envMapIntensity = property "envMapIntensity"

  flatShading :: Property material Bool
  flatShading = property "flatShading"

  fog :: Property material Bool
  fog = property "fog"

  lightMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  lightMap = optional "lightMap"

  lightMapIntensity :: Property material Double
  lightMapIntensity = property "lightMapIntensity"

  map :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  map = optional "map"

  metalness :: Property material Double
  metalness = property "metalness"

  metalnessMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  metalnessMap = optional "metalnessMap"

  normalMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
  normalMap = optional "normalMap"

  normalMapType :: Property material NormalMapType
  normalMapType = property "normalMapType"

  normalScale :: Property material Vector2
  normalScale = property "normalScale"

  roughness :: Property material Double
  roughness = property "roughness"

  roughnessMap :: (TextureClass texture, FromJSVal texture) => Property material (Maybe texture)
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

