-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshToonMaterial
  ( -- * Types
    MeshToonMaterial (..)
    -- * Methods
  , newMeshToonMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshToonMaterial
newtype MeshToonMaterial
  = MeshToonMaterial
  { unMeshToonMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshToonMaterial
newMeshToonMaterial :: JSM MeshToonMaterial
newMeshToonMaterial = THREE.new MeshToonMaterial "MeshToonMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
