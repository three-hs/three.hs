-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshStandardMaterial
  ( -- * Types
    MeshStandardMaterial (..)
    -- * Methods
  , THREE.MeshStandardMaterial.new
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
new :: THREE.Three MeshStandardMaterial
new = THREE.new MeshStandardMaterial "MeshStandardMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
