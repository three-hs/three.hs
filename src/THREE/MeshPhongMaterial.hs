-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshPhongMaterial
  ( -- * Types
    MeshPhongMaterial (..)
    -- * Methods
  , newMeshPhongMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshPhongMaterial
newtype MeshPhongMaterial
  = MeshPhongMaterial
  { unMeshPhongMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshPhongMaterial
newMeshPhongMaterial :: JSM MeshPhongMaterial
newMeshPhongMaterial = THREE.new MeshPhongMaterial "MeshPhongMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
