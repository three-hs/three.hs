-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshMatcapMaterial
  ( -- * Types
    MeshMatcapMaterial (..)
    -- * Methods
  , THREE.MeshMatcapMaterial.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshMatcapMaterial
newtype MeshMatcapMaterial
  = MeshMatcapMaterial
  { unMeshMatcapMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshMatcapMaterial
new :: THREE.Three MeshMatcapMaterial
new = THREE.new MeshMatcapMaterial "MeshMatcapMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
