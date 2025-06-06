-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MaterialLoader
  ( -- * Types
    MaterialLoader (..)
    -- * Methods
  , newMaterialLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MaterialLoader
newtype MaterialLoader
  = MaterialLoader
  { unMaterialLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MaterialLoader
newMaterialLoader :: JSM MaterialLoader
newMaterialLoader = THREE.new MaterialLoader "MaterialLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
