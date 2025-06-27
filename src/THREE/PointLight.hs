-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.PointLight
  ( -- * Types
    PointLight (..)
    -- * Constructors
  , THREE.PointLight.new
    -- * Read-only Properties
  , isPointLight
    -- * Properties
  , decay
  , distance
  , power
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
import           THREE.Light as THREE
import           THREE.Object3D as THREE
import           THREE.EventDispatcher as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/PointLight
newtype PointLight
  = PointLight
  { unPointLight :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal)
    deriving (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
new :: THREE.Three PointLight
new = THREE.new PointLight "PointLight" ()
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isPointLight :: ReadOnly PointLight "isPointLight" Bool
isPointLight = readonly
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
decay :: Property PointLight "decay" Double
decay = property
-----------------------------------------------------------------------------
distance :: Property PointLight "distance" Double
distance = property
-----------------------------------------------------------------------------
power :: Property PointLight "power" Double
power = property
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
-- Helper functions
-----------------------------------------------------------------------------
