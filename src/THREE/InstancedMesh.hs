-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InstancedMesh
  ( -- * Types
    InstancedMesh (..)
    -- * Methods
  , THREE.InstancedMesh.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/InstancedMesh
newtype InstancedMesh
  = InstancedMesh
  { unInstancedMeshCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/InstancedMesh
new :: THREE.Three InstancedMesh
new = THREE.new InstancedMesh "InstancedMesh" ()
-----------------------------------------------------------------------------
