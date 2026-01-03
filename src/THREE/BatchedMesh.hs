-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BatchedMesh
  ( -- * Types
    BatchedMesh (..)
    -- * Methods
  , THREE.BatchedMesh.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BatchedMesh
newtype BatchedMesh
  = BatchedMesh
  { unBatchedMeshCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BatchedMesh
new :: THREE.Three BatchedMesh
new = THREE.new BatchedMesh "BatchedMesh" ([] :: [MisoString])
-----------------------------------------------------------------------------
