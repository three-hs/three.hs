-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshPhongMaterial
  ( -- * Types
    MeshPhongMaterial (..)
    -- * Methods
  , THREE.MeshPhongMaterial.new
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
new :: THREE.Three MeshPhongMaterial
new = THREE.new MeshPhongMaterial "MeshPhongMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
