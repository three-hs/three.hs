-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE DerivingVia                #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
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
    deriving Object3D via JSVal
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new :: THREE.Three Scene
new = THREE.new Scene "Scene" ()
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isScene :: Property Scene "isScene" Bool
isScene = field
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
--  functionselpers
-----------------------------------------------------------------------------
