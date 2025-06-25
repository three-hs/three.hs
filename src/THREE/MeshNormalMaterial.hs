-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshNormalMaterial
  ( -- * Types
    MeshNormalMaterial (..)
    -- * Methods
  , THREE.MeshNormalMaterial.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshNormalMaterial
newtype MeshNormalMaterial
  = MeshNormalMaterial
  { unMeshNormalMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshNormalMaterial
new :: THREE.Three MeshNormalMaterial
new = THREE.new MeshNormalMaterial "MeshNormalMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
