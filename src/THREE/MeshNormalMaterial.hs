-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshNormalMaterial
  ( -- * Types
    MeshNormalMaterial (..)
    -- * Methods
  , newMeshNormalMaterial
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
newMeshNormalMaterial :: JSM MeshNormalMaterial
newMeshNormalMaterial = THREE.new MeshNormalMaterial "MeshNormalMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
