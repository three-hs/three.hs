-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshMatcapMaterial
  ( -- * Types
    MeshMatcapMaterial (..)
    -- * Methods
  , newMeshMatcapMaterial
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
newMeshMatcapMaterial :: JSM MeshMatcapMaterial
newMeshMatcapMaterial = THREE.new MeshMatcapMaterial "MeshMatcapMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
