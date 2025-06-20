-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Camera
  ( -- * Types
    CameraC (..)
    -- * Constructors
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
import           THREE.Object3D as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Camera
class Object3DC a => CameraC a where
  -- read-only properties
  isCamera :: a -> JSM Bool
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance CameraC JSVal where
  -- read-only properties
  isCamera = mkGet "isCamera"
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------

