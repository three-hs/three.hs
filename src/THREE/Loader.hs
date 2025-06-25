-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Loader
  ( -- * Types
    Loader (..)
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
-- | https://threejs.org/docs/#api/en/loaders/Loader
class ToJSVal loader => Loader loader where
  -- read-only properties
  -- properties
  path :: Property loader "path" JSString
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance Loader JSVal where
  -- read-only properties
  -- properties
  path = field
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
