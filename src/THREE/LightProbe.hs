-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.LightProbe
  ( -- * Types
    LightProbe (..)
    -- * Constructors
  , THREE.LightProbe.new
    -- * Read-only Properties
  , isLightProbe
    -- * Properties
  , sh
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
import           THREE.SphericalHarmonics3
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/LightProbe
newtype LightProbe
  = LightProbe
  { unLightProbe :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
instance FromJSVal LightProbe where
  fromJSVal = pure . Just . LightProbe
-----------------------------------------------------------------------------
class LightProbeParams t
instance LightProbeParams ()
instance LightProbeParams SphericalHarmonics3
instance LightProbeParams (SphericalHarmonics3, Double)
new :: (ToArgs t, LightProbeParams t) => t -> THREE.Three LightProbe
new = THREE.new LightProbe "LightProbe"
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isLightProbe :: ReadOnly LightProbe Bool
isLightProbe = readonly "isLightProbe" 
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
sh :: Property LightProbe SphericalHarmonics3
sh = property "sh" 
-----------------------------------------------------------------------------
