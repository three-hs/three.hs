-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InstancedMesh
  ( -- * Types
    InstancedMesh (..)
    -- * Methods
  , newInstancedMesh
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
newInstancedMesh :: JSM InstancedMesh
newInstancedMesh = THREE.new InstancedMesh "InstancedMesh" ([] :: [JSString])
-----------------------------------------------------------------------------
