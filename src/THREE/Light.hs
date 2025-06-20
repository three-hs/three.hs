-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Light
  ( -- * Types
    LightC (..)
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
class Object3DC a => LightC a where
  -- read-only properties
  isLight :: a -> JSM Bool
  -- properties
  getIntensity :: a -> JSM Double
  setIntensity :: Double -> a -> JSM ()
  modifyIntensity :: (Double -> JSM Double) -> a -> JSM Double
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance LightC JSVal where
  -- read-only properties
  isLight = mkGet "isLight"
  -- properties
  getIntensity = mkGet "intensity"
  setIntensity = mkSet "intensity"
  modifyIntensity = mkModify "intensity"
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
