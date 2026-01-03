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
import           Miso
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/loaders/Loader
class (ToObject loader, ToJSVal loader) => Loader loader where
  path :: Property loader MisoString
  path = property "path" 
-----------------------------------------------------------------------------
instance Loader JSVal
-----------------------------------------------------------------------------
