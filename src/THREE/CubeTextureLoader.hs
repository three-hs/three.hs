-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubeTextureLoader
  ( -- * Types
    CubeTextureLoader (..)
    -- * Methods
  , newCubeTextureLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubeTextureLoader
newtype CubeTextureLoader
  = CubeTextureLoader
  { unCubeTextureLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubeTextureLoader
newCubeTextureLoader :: JSM CubeTextureLoader
newCubeTextureLoader = THREE.new CubeTextureLoader "CubeTextureLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
