-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshDistanceMaterial
  ( -- * Types
    MeshDistanceMaterial (..)
    -- * Methods
  , newMeshDistanceMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshDistanceMaterial
newtype MeshDistanceMaterial
  = MeshDistanceMaterial
  { unMeshDistanceMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshDistanceMaterial
newMeshDistanceMaterial :: JSM MeshDistanceMaterial
newMeshDistanceMaterial = THREE.new MeshDistanceMaterial "MeshDistanceMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
