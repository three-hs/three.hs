-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshDepthMaterial
  ( -- * Types
    MeshDepthMaterial (..)
    -- * Methods
  , newMeshDepthMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshDepthMaterial
newtype MeshDepthMaterial
  = MeshDepthMaterial
  { unMeshDepthMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshDepthMaterial
newMeshDepthMaterial :: JSM MeshDepthMaterial
newMeshDepthMaterial = THREE.new MeshDepthMaterial "MeshDepthMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
