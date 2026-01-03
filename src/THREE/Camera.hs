-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Camera
  ( -- * Types
    Camera (..)
    -- * Constructors
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
import           THREE.Object3D as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Camera
class Object3D camera => Camera camera where
  isCamera :: ReadOnly camera Bool
  isCamera = readonly "isCamera"
-----------------------------------------------------------------------------
instance Camera JSVal
-----------------------------------------------------------------------------

