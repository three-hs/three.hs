-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Object3D
  ( -- * Types
    Object3DC (..)
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
import           THREE.Material as THREE
import           THREE.Vector3 as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/Object3D
class Object3DC a where
  -- read-only properties
  id :: a -> JSM Bool
  -- properties
  getPosition :: a -> JSM Vector3
  -- TODO setPosition
  getRotation :: a -> JSM Euler
  -- TODO setRotation
  -- optional properties
  getCustomDistanceMaterialOpt :: a -> JSM (Maybe Material)
  -- TODO  setCustomDistanceMaterial
  -- methods
  add :: (Object3DC b, MakeArgs b) => a -> b -> JSM ()
-----------------------------------------------------------------------------
instance Object3DC JSVal where
  -- read-only properties
  id = mkGet "id"
  -- properties
  getPosition = mkGet "position"
  getRotation = mkGet "rotation"
  -- optional properties
  getCustomDistanceMaterialOpt = mkGetOpt "customDistanceMaterial"
  -- methods
  add v x = void $ v # ("add" :: JSString) $ x
-----------------------------------------------------------------------------

