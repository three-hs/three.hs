-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.BufferGeometry
  ( -- * Types
    BufferGeometryC (..)
  , BufferGeometry (..)
    -- * Constructors
    -- * Read-only properties
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/BufferGeometry
class BufferGeometryC a where
  -- read-only properties
  isBufferGeometry :: a -> JSM Bool
-----------------------------------------------------------------------------
instance BufferGeometryC JSVal where
  -- read-only properties
  isBufferGeometry = mkGet "isBufferGeometry"
-----------------------------------------------------------------------------
newtype BufferGeometry 
  = BufferGeometry
  { unBufferGeometry :: JSVal
  } deriving (MakeObject, ToJSVal, MakeArgs)
    deriving newtype BufferGeometryC
-----------------------------------------------------------------------------
-- constructors
-----------------------------------------------------------------------------
-- read-only properties
-----------------------------------------------------------------------------
-- properties
-----------------------------------------------------------------------------
-- optional properties
-----------------------------------------------------------------------------
-- methods
-----------------------------------------------------------------------------
-- helper functions
-----------------------------------------------------------------------------

