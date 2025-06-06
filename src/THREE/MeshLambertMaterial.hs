-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshLambertMaterial
  ( -- * Types
    MeshLambertMaterial (..)
    -- * Methods
  , newMeshLambertMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MeshLambertMaterial
newtype MeshLambertMaterial
  = MeshLambertMaterial
  { unMeshLambertMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MeshLambertMaterial
newMeshLambertMaterial :: JSM MeshLambertMaterial
newMeshLambertMaterial = THREE.new MeshLambertMaterial "MeshLambertMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
