-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Mesh
  ( -- * Types
    Mesh (..)
    -- * Constructors
  , THREE.Mesh.new
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.BufferGeometry as THREE
import           THREE.Internal as THREE
import           THREE.Material as THREE
import           THREE.Object3D as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/objects/Mesh
newtype Mesh
  = Mesh
  { unMesh :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
    deriving Object3D via JSVal
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new
  :: (BufferGeometry geometry, Material material)
  => geometry
  -> material
  -> THREE.Three Mesh
new geometry material = THREE.new Mesh "Mesh" (geometry, material)
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
-- Helper functions
-----------------------------------------------------------------------------
