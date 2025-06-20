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
    deriving newtype Object3DC
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new:: (ToJSVal a, ToJSVal b, BufferGeometryC a, MaterialC b) => a -> b -> JSM Mesh
new geometry' material' = new' Mesh "Mesh" (geometry', material')
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
