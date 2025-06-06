-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshPhysicalMaterial
  ( -- * Types
    MeshPhysicalMaterial (..)
    -- * Methods
  , newMeshPhysicalMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshPhysicalMaterial
newtype MeshPhysicalMaterial
  = MeshPhysicalMaterial
  { unMeshPhysicalMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshPhysicalMaterial
newMeshPhysicalMaterial :: JSM MeshPhysicalMaterial
newMeshPhysicalMaterial = THREE.new MeshPhysicalMaterial "MeshPhysicalMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
