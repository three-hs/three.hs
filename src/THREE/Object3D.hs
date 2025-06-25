{-# LANGUAGE DataKinds #-}
-----------------------------------------------------------------------------
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
import           Control.Monad (void)
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
  add :: MakeArgs b => object -> b -> THREE.Three ()
-----------------------------------------------------------------------------
instance Object3D JSVal where
  -- read-only properties
  id = field
  -- properties
  position = field
  rotation = field
  -- methods
  add v x_ = LiftJSM (void $ v # ("add" :: JSString) $ x_)
-----------------------------------------------------------------------------

