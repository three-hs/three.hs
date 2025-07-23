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
  , anisotropy
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

anisotropyMap :: Property MeshPhysicalMaterial (Maybe Texture)
anisotropyMap = optional "anisotropyMap"

anisotropyRotation :: Property MeshPhysicalMaterial Double
anisotropyRotation = property "anisotropyRotation"

attenuationColor :: Property MeshPhysicalMaterial Color
attenuationColor = property "attenuationColor"

attenuationDistance :: Property MeshPhysicalMaterial Double
attenuationDistance = property "attenuationDistance"

clearcoat :: Property MeshPhysicalMaterial Double
clearcoat = property "clearcoat"

clearcoatMap :: Property MeshPhysicalMaterial (Maybe Texture)
clearcoatMap = optional "clearcoatMap"

clearcoatNormalMap :: Property MeshPhysicalMaterial (Maybe Texture)
clearcoatNormalMap = optional "clearcoatNormalMap"

clearcoatNormalScale :: Property MeshPhysicalMaterial Vector2
clearcoatNormalScale = property "clearcoatNormalScale"

clearcoatRoughness :: Property MeshPhysicalMaterial Double
clearcoatRoughness = property "clearcoatRoughness"

clearcoatRoughnessMap :: Property MeshPhysicalMaterial (Maybe Texture)
clearcoatRoughnessMap = optional "clearcoatRoughnessMap"

dispersion :: Property MeshPhysicalMaterial Double
dispersion = property "dispersion"

ior :: Property MeshPhysicalMaterial Double
ior = property "ior"

reflectivity :: Property MeshPhysicalMaterial Double
reflectivity = property "reflectivity"

iridescence :: Property MeshPhysicalMaterial Double
iridescence = property "iridescence"

iridescenceMap :: Property MeshPhysicalMaterial (Maybe Texture)
iridescenceMap = optional "iridescenceMap"

iridescenceIOR :: Property MeshPhysicalMaterial Double
iridescenceIOR = property "iridescenceIOR"

iridescenceThicknessRange :: Property MeshPhysicalMaterial [Double]   -- TODO return type should be (Double, Double)
iridescenceThicknessRange = property "iridescenceThicknessRange"

iridescenceThicknessMap :: Property MeshPhysicalMaterial (Maybe Texture)
iridescenceThicknessMap = optional "iridescenceThicknessMap"

sheen :: Property MeshPhysicalMaterial Double
sheen = property "sheen"

sheenRoughness :: Property MeshPhysicalMaterial Double
sheenRoughness = property "sheenRoughness"

sheenRoughnessMap :: Property MeshPhysicalMaterial (Maybe Texture)
sheenRoughnessMap = optional "sheenRoughnessMap"

sheenColor :: Property MeshPhysicalMaterial Color
sheenColor = property "sheenColor"

sheenColorMap :: Property MeshPhysicalMaterial (Maybe Texture)
sheenColorMap = optional "sheenColorMap"

specularIntensity :: Property MeshPhysicalMaterial Double
specularIntensity = property "specularIntensity"

specularIntensityMap :: Property MeshPhysicalMaterial (Maybe Texture)
specularIntensityMap = optional "specularIntensityMap"

specularColor :: Property MeshPhysicalMaterial Color
specularColor = property "specularColor"

specularColorMap :: Property MeshPhysicalMaterial (Maybe Texture)
specularColorMap = optional "specularColorMap"

thickness :: Property MeshPhysicalMaterial Double
thickness = property "thickness"

thicknessMap :: Property MeshPhysicalMaterial (Maybe Texture)
thicknessMap = optional "thicknessMap"

transmission :: Property MeshPhysicalMaterial Double
transmission = property "transmission"

transmissionMap :: Property MeshPhysicalMaterial (Maybe Texture)
transmissionMap = optional "transmissionMap"

