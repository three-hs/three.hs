-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshDistanceMaterial
  ( -- * Types
    MeshDistanceMaterial (..)
    -- * Methods
  , THREE.MeshDistanceMaterial.new
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
new :: THREE.Three MeshDistanceMaterial
new = THREE.new MeshDistanceMaterial "MeshDistanceMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
