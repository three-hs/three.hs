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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SkinnedMesh
newtype SkinnedMesh
  = SkinnedMesh
  { unSkinnedMeshCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SkinnedMesh
new :: THREE.Three SkinnedMesh
new = THREE.new SkinnedMesh "SkinnedMesh" ([] :: [JSString])
-----------------------------------------------------------------------------
