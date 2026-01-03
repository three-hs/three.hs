-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DataTextureLoader
  ( -- * Types
    DataTextureLoader (..)
    -- * Methods
  , THREE.DataTextureLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DataTextureLoader
newtype DataTextureLoader
  = DataTextureLoader
  { unDataTextureLoaderCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DataTextureLoader
new :: THREE.Three DataTextureLoader
new = THREE.new DataTextureLoader "DataTextureLoader" ([] :: [MisoString])
-----------------------------------------------------------------------------
