-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BufferGeometry
  ( -- * Class
    BufferGeometryClass (..)
    -- * Types
  , BufferGeometry (..)
    -- * Constructors
  , THREE.BufferGeometry.new
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
class (MakeObject geometry, ToJSVal geometry) => BufferGeometryClass geometry where
  isBufferGeometry :: Property geometry Bool
  isBufferGeometry = property "isBufferGeometry"
-----------------------------------------------------------------------------
instance BufferGeometryClass JSVal
-----------------------------------------------------------------------------
newtype BufferGeometry = BufferGeometry { unBufferGeometry :: JSVal }
  deriving (MakeObject, BufferGeometryClass, ToJSVal)
-----------------------------------------------------------------------------
new :: THREE.Three BufferGeometry
new = THREE.new BufferGeometry "BufferGeometry" ()
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

