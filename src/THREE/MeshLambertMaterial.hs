-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.MeshLambertMaterial
  ( -- * Types
    MeshLambertMaterial (..)
    -- * Constructors
  , THREE.MeshLambertMaterial.new
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
  , THREE.MeshLambertMaterial.map
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshLambertMaterial
newtype MeshLambertMaterial
  = MeshLambertMaterial
  { unMeshLambertMaterial :: JSVal
  } deriving (EventDispatcher, MakeArgs, MakeObject, ToJSVal)
    deriving newtype Material
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new :: THREE.Three MeshLambertMaterial
new = THREE.new MeshLambertMaterial "MeshLambertMaterial" ()
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
map :: Property MeshLambertMaterial (Maybe Texture)
map = optional "map"
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
-- Helper functions
-----------------------------------------------------------------------------
