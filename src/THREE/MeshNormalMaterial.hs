-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshNormalMaterial
  ( -- * Types
    MeshNormalMaterial (..)
    -- * Constructors
  , THREE.MeshNormalMaterial.new
    -- * Properties
  , bumpMap
  , bumpScale
  , displacementMap
  , displacementScale
  , displacementBias
  , flatShading
  , normalMap
  , normalMapType
  , normalScale
  , wireframe
  , wireframeLinewidth
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Constants.Materials
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
import           THREE.Vector2
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshNormalMaterial
newtype MeshNormalMaterial
  = MeshNormalMaterial
  { unMeshNormalMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshNormalMaterial where
  fromJSVal = pure . Just . MeshNormalMaterial

-- Constructor

new :: THREE.Three MeshNormalMaterial
new = THREE.new MeshNormalMaterial "MeshNormalMaterial" ()

-- Property

bumpMap :: Property MeshNormalMaterial (Maybe Texture)
bumpMap = optional "bumpMap"

bumpScale :: Property MeshNormalMaterial Double
bumpScale = property "bumpScale"

displacementMap :: Property MeshNormalMaterial (Maybe Texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshNormalMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshNormalMaterial Double
displacementBias = property "displacementBias"

flatShading :: Property MeshNormalMaterial Bool
flatShading = property "flatShading"

normalMap :: Property MeshNormalMaterial (Maybe Texture)
normalMap = optional "normalMap"

normalMapType :: Property MeshNormalMaterial NormalMapType
normalMapType = property "normalMapType"

normalScale :: Property MeshNormalMaterial Vector2
normalScale = property "normalScale"

wireframe :: Property MeshNormalMaterial Bool
wireframe = property "wireframe"

wireframeLinewidth :: Property MeshNormalMaterial Double
wireframeLinewidth = property "wireframeLinewidth"

