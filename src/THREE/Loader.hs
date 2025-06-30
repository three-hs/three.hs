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
class (MakeObject loader, ToJSVal loader) => Loader loader where
  path :: Property loader JSString
  path = property "path" 
-----------------------------------------------------------------------------
instance Loader JSVal
-----------------------------------------------------------------------------
