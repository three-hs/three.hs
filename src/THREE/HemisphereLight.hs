-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.HemisphereLight
  ( -- * Types
    HemisphereLight (..)
    -- * Constructors
  , THREE.HemisphereLight.new
    -- * Read-only Properties
  , isHemisphereLight
    -- * Properties
  , groundColor
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Light
import           THREE.Object3D
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/HemisphereLight
newtype HemisphereLight
  = HemisphereLight
  { unHemisphereLight :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
instance FromJSVal HemisphereLight where
  fromJSVal = pure . Just . HemisphereLight
-----------------------------------------------------------------------------
class HemisphereLightParams t
instance HemisphereLightParams ()
instance HemisphereLightParams Int
instance HemisphereLightParams (Int, Double)
new :: (MakeArgs t, HemisphereLightParams t) => t -> THREE.Three HemisphereLight
new = THREE.new HemisphereLight "HemisphereLight" 
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isHemisphereLight :: ReadOnly HemisphereLight Bool
isHemisphereLight = readonly "isHemisphereLight" 
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
groundColor :: Property HemisphereLight Color
groundColor = property "groundColor" 
-----------------------------------------------------------------------------
