-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshDistanceMaterial
  ( -- * Types
    MeshDistanceMaterial (..)
    -- * Constructors
  , THREE.MeshDistanceMaterial.new
    -- * Properties
  , alphaMap
  , displacementMap
  , displacementScale
  , displacementBias
  , THREE.MeshDistanceMaterial.map
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshDistanceMaterial
newtype MeshDistanceMaterial
  = MeshDistanceMaterial
  { unMeshDistanceMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal MeshDistanceMaterial where
  fromJSVal = pure . Just . MeshDistanceMaterial

-- Constructor

new :: THREE.Three MeshDistanceMaterial
new = THREE.new MeshDistanceMaterial "MeshDistanceMaterial" ()

-- Property

alphaMap :: Property MeshDistanceMaterial (Maybe Texture)
alphaMap = optional "alphaMap"

displacementMap :: Property MeshDistanceMaterial (Maybe Texture)
displacementMap = optional "displacementMap"

displacementScale :: Property MeshDistanceMaterial Double
displacementScale = property "displacementScale"

displacementBias :: Property MeshDistanceMaterial Double
displacementBias = property "displacementBias"

map :: Property MeshDistanceMaterial (Maybe Texture)
map = optional "map"

