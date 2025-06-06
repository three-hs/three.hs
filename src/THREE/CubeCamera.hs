-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubeCamera
  ( -- * Types
    CubeCamera (..)
    -- * Methods
  , newCubeCamera
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubeCamera
newtype CubeCamera
  = CubeCamera
  { unCubeCameraCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubeCamera
newCubeCamera :: JSM CubeCamera
newCubeCamera = THREE.new CubeCamera "CubeCamera" ([] :: [JSString])
-----------------------------------------------------------------------------
