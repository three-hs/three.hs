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
  isLight :: ReadOnly light "isLight" Bool
  isLight = readonly
  intensity :: Property light "intensity" Double
  intensity = property
-----------------------------------------------------------------------------
instance Light JSVal
-----------------------------------------------------------------------------
