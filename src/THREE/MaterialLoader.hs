-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MaterialLoader
  ( -- * Types
    MaterialLoader (..)
    -- * Methods
  , THREE.MaterialLoader.new
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
new :: THREE.Three MaterialLoader
new = THREE.new MaterialLoader "MaterialLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
