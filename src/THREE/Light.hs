-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Light
  ( -- * Types
    Light (..)
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
-- | https://threejs.org/docs/#api/en/lights/Light
class Object3D light => Light light where
  -- read-only properties
  isLight :: Property light "isLight" Bool
  -- properties
  intensity :: Property light "intensity" Double
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance Light JSVal where
  -- read-only properties
  isLight = field
  -- properties
  intensity = field
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
