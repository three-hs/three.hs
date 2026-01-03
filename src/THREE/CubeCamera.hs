-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubeCamera
  ( -- * Types
    CubeCamera (..)
    -- * Methods
  , THREE.CubeCamera.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubeCamera
newtype CubeCamera
  = CubeCamera
  { unCubeCameraCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubeCamera
new :: THREE.Three CubeCamera
new = THREE.new CubeCamera "CubeCamera" ([] :: [MisoString])
-----------------------------------------------------------------------------
