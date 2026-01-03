-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DirectionalLight
  ( -- * Types
    DirectionalLight (..)
    -- * Constructors
  , THREE.DirectionalLight.new
    -- * Read-only Properties
  , isDirectionalLight
    -- * Properties
  , target
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Light
import           THREE.Object3D
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/DirectionalLight
newtype DirectionalLight
  = DirectionalLight
  { unDirectionalLight :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
instance FromJSVal DirectionalLight where
  fromJSVal = pure . Just . DirectionalLight
-----------------------------------------------------------------------------
class DirectionalLightParams t
instance DirectionalLightParams ()
instance DirectionalLightParams Int
instance DirectionalLightParams (Int, Double)
new :: (ToArgs t, DirectionalLightParams t) => t -> THREE.Three DirectionalLight
new = THREE.new DirectionalLight "DirectionalLight"
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isDirectionalLight :: ReadOnly DirectionalLight Bool
isDirectionalLight = readonly "isDirectionalLight" 
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
target :: (Object3D object, FromJSVal object) => Property DirectionalLight object
target = property "target" 
-----------------------------------------------------------------------------
