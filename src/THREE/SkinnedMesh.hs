-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SkinnedMesh
  ( -- * Types
    SkinnedMesh (..)
    -- * Methods
  , THREE.SkinnedMesh.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SkinnedMesh
newtype SkinnedMesh
  = SkinnedMesh
  { unSkinnedMeshCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SkinnedMesh
new :: THREE.Three SkinnedMesh
new = THREE.new SkinnedMesh "SkinnedMesh" ([] :: [MisoString])
-----------------------------------------------------------------------------
