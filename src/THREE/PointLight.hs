-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PointLight
  ( -- * Types
    PointLight (..)
    -- * Constructors
  , THREE.PointLight.new
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
import           THREE.Light as THREE
import           THREE.Object3D as THREE
import           THREE.EventDispatcher as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/PointLight
newtype PointLight
  = PointLight
  { unPointLight :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
new :: THREE.Three PointLight
new = THREE.new PointLight "PointLight" ()
-----------------------------------------------------------------------------
