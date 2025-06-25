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
  , map
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
import           Prelude hiding (map)
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
import           THREE.Material as THREE
import           THREE.Texture as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshLambertMaterial
newtype MeshLambertMaterial
  = MeshLambertMaterial
  { unMeshLambertMaterial :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
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
-- Methods
-----------------------------------------------------------------------------
map :: THREE.Property MeshLambertMaterial "map" (Maybe THREE.Texture)
map = optional
-----------------------------------------------------------------------------
-- Helper functions
-----------------------------------------------------------------------------
