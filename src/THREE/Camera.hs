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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Camera
class ToJSVal camera => Camera camera where
  -- read-only properties
  isCamera :: Property camera "isCamera" Bool
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance Camera JSVal where
  isCamera = property
  -- read-only properties
  -- isCamera = mkGet "isCamera"
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------

