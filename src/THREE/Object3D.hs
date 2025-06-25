{-# LANGUAGE TypeApplications #-}
-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Object3D
  ( -- * Types
    Object3D (..)
    -- * Constructors
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Data.Proxy (Proxy(Proxy))
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Euler as THREE
import           THREE.Internal as THREE
import           THREE.Vector3 as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/Object3D
class ToJSVal object => Object3D object where
  -- read-only properties
  id :: THREE.Property object "id" Bool
  -- properties
  position :: THREE.Property object "position" THREE.Vector3
  rotation :: THREE.Property object "rotation" THREE.Euler
  -- methods
  add :: MakeArgs args => object -> args -> THREE.Three ()
-----------------------------------------------------------------------------
instance Object3D JSVal where
  -- read-only properties
  id = property
  -- properties
  position = property
  rotation = property
  -- methods
  add = method (Proxy @"add")
-----------------------------------------------------------------------------

