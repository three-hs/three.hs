-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshDepthMaterial
  ( -- * Types
    MeshDepthMaterial (..)
    -- * Methods
  , THREE.MeshDepthMaterial.new
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
new :: THREE.Three MeshDepthMaterial
new = THREE.new MeshDepthMaterial "MeshDepthMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
