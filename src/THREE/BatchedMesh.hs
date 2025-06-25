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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BatchedMesh
newtype BatchedMesh
  = BatchedMesh
  { unBatchedMeshCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BatchedMesh
new :: THREE.Three BatchedMesh
new = THREE.new BatchedMesh "BatchedMesh" ([] :: [JSString])
-----------------------------------------------------------------------------
