-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubeTextureLoader
  ( -- * Types
    CubeTextureLoader (..)
    -- * Methods
  , THREE.CubeTextureLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubeTextureLoader
newtype CubeTextureLoader
  = CubeTextureLoader
  { unCubeTextureLoaderCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubeTextureLoader
new :: THREE.Three CubeTextureLoader
new = THREE.new CubeTextureLoader "CubeTextureLoader" ([] :: [MisoString])
-----------------------------------------------------------------------------
