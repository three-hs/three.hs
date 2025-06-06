-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DataTextureLoader
  ( -- * Types
    DataTextureLoader (..)
    -- * Methods
  , newDataTextureLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DataTextureLoader
newtype DataTextureLoader
  = DataTextureLoader
  { unDataTextureLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DataTextureLoader
newDataTextureLoader :: JSM DataTextureLoader
newDataTextureLoader = THREE.new DataTextureLoader "DataTextureLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
