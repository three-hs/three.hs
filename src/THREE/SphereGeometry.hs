-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.SphereGeometry
  ( -- * Types
    SphereGeometry (..)
    -- * Constructors
  , THREE.SphereGeometry.new
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.BufferGeometry (BufferGeometryClass)
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/geometries/SphereGeometry
newtype SphereGeometry
  = SphereGeometry
  { unSphereGeometry :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
    deriving newtype BufferGeometryClass
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new :: THREE.Three SphereGeometry
new = THREE.new SphereGeometry "SphereGeometry" ()
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
-- Helper functions
-----------------------------------------------------------------------------
