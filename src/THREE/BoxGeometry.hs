-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.BoxGeometry
  ( -- * Types
    BoxGeometry (..)
    -- * Constructors
  , THREE.BoxGeometry.new
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
-- | https://threejs.org/docs/#api/en/geometries/BoxGeometry
newtype BoxGeometry
  = BoxGeometry
  { unBoxGeometry :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
    deriving newtype BufferGeometryClass
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new :: THREE.Three BoxGeometry
new = THREE.new BoxGeometry "BoxGeometry" ()
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
