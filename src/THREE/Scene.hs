-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Scene
  ( -- * Types
    Scene (..)
    -- * Constructors
  , THREE.Scene.new
    -- * Read-only Properties
  , isScene
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
import           THREE.Object3D as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Scene
newtype Scene
  = Scene
  { unScene :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
    deriving Object3DC via JSVal
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new :: JSM Scene
new = THREE.new' Scene "Scene" ()
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isScene :: Scene -> JSM Bool
isScene = mkGet "isScene"
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
--  functionselpers
-----------------------------------------------------------------------------
