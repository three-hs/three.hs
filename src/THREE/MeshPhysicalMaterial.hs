-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshPhysicalMaterial
  ( -- * Types
    MeshPhysicalMaterial (..)
    -- * Constructors
  , THREE.MeshPhysicalMaterial.new
    -- * Properties
  , THREE.MeshPhysicalMaterial.anisotropy
  , anisotropyMap
  , anisotropyRotation
  , attenuationColor
  , attenuationDistance
  , clearcoat
  , clearcoatMap
  , clearcoatNormalMap
  , clearcoatNormalScale
  , clearcoatRoughness
  , clearcoatRoughnessMap
  , dispersion
  , ior
  , reflectivity
  , iridescence
  , iridescenceMap
  , iridescenceIOR
  , iridescenceThicknessRange
  , iridescenceThicknessMap
  , sheen
  , sheenRoughness
  , sheenRoughnessMap
  , sheenColor
  , sheenColorMap
  , specularIntensity
  , specularIntensityMap
  , specularColor
  , specularColorMap
  , thickness
  , thicknessMap
  , transmission
  , transmissionMap
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.MeshStandardMaterial
import           THREE.Texture
import           THREE.Vector2
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial
newtype MeshPhysicalMaterial
  = MeshPhysicalMaterial
  { unMeshPhysicalMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher, MeshStandardMaterialClass)

instance FromJSVal MeshPhysicalMaterial where
  fromJSVal = pure . Just . MeshPhysicalMaterial

-- Constructor

new :: THREE.Three MeshPhysicalMaterial
new = THREE.new MeshPhysicalMaterial "MeshPhysicalMaterial" ()

-- Property

anisotropy :: Property MeshPhysicalMaterial Double
anisotropy = property "anisotropy"

anisotropyMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
anisotropyMap = optional "anisotropyMap"

anisotropyRotation :: Property MeshPhysicalMaterial Double
anisotropyRotation = property "anisotropyRotation"

attenuationColor :: Property MeshPhysicalMaterial Color
attenuationColor = property "attenuationColor"

attenuationDistance :: Property MeshPhysicalMaterial Double
attenuationDistance = property "attenuationDistance"

clearcoat :: Property MeshPhysicalMaterial Double
clearcoat = property "clearcoat"

clearcoatMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
clearcoatMap = optional "clearcoatMap"

clearcoatNormalMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
clearcoatNormalMap = optional "clearcoatNormalMap"

clearcoatNormalScale :: Property MeshPhysicalMaterial Vector2
clearcoatNormalScale = property "clearcoatNormalScale"

clearcoatRoughness :: Property MeshPhysicalMaterial Double
clearcoatRoughness = property "clearcoatRoughness"

clearcoatRoughnessMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
clearcoatRoughnessMap = optional "clearcoatRoughnessMap"

dispersion :: Property MeshPhysicalMaterial Double
dispersion = property "dispersion"

ior :: Property MeshPhysicalMaterial Double
ior = property "ior"

reflectivity :: Property MeshPhysicalMaterial Double
reflectivity = property "reflectivity"

iridescence :: Property MeshPhysicalMaterial Double
iridescence = property "iridescence"

iridescenceMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
iridescenceMap = optional "iridescenceMap"

iridescenceIOR :: Property MeshPhysicalMaterial Double
iridescenceIOR = property "iridescenceIOR"

iridescenceThicknessRange :: Property MeshPhysicalMaterial [Double]   -- TODO return type should be (Double, Double)
iridescenceThicknessRange = property "iridescenceThicknessRange"

iridescenceThicknessMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
iridescenceThicknessMap = optional "iridescenceThicknessMap"

sheen :: Property MeshPhysicalMaterial Double
sheen = property "sheen"

sheenRoughness :: Property MeshPhysicalMaterial Double
sheenRoughness = property "sheenRoughness"

sheenRoughnessMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
sheenRoughnessMap = optional "sheenRoughnessMap"

sheenColor :: Property MeshPhysicalMaterial Color
sheenColor = property "sheenColor"

sheenColorMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
sheenColorMap = optional "sheenColorMap"

specularIntensity :: Property MeshPhysicalMaterial Double
specularIntensity = property "specularIntensity"

specularIntensityMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
specularIntensityMap = optional "specularIntensityMap"

specularColor :: Property MeshPhysicalMaterial Color
specularColor = property "specularColor"

specularColorMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
specularColorMap = optional "specularColorMap"

thickness :: Property MeshPhysicalMaterial Double
thickness = property "thickness"

thicknessMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
thicknessMap = optional "thicknessMap"

transmission :: Property MeshPhysicalMaterial Double
transmission = property "transmission"

transmissionMap :: (TextureClass texture, FromJSVal texture) => Property MeshPhysicalMaterial (Maybe texture)
transmissionMap = optional "transmissionMap"

