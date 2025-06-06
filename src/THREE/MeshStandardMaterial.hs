-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshStandardMaterial
  ( -- * Types
    MeshStandardMaterial (..)
    -- * Methods
  , newMeshStandardMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshStandardMaterial
newtype MeshStandardMaterial
  = MeshStandardMaterial
  { unMeshStandardMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshStandardMaterial
newMeshStandardMaterial :: JSM MeshStandardMaterial
newMeshStandardMaterial = THREE.new MeshStandardMaterial "MeshStandardMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
