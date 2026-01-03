-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.RectAreaLight
  ( -- * Types
    RectAreaLight (..)
    -- * Constructors
  , THREE.RectAreaLight.new
    -- * Read-only Properties
  , isRectAreaLight
    -- * Properties
  , height
  , power
  , width
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
-- | https://threejs.org/docs/#api/en/lights/RectAreaLight
newtype RectAreaLight
  = RectAreaLight
  { unRectAreaLight :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
instance FromJSVal RectAreaLight where
  fromJSVal = pure . Just . RectAreaLight
-----------------------------------------------------------------------------
class RectAreaLightParams t
instance RectAreaLightParams ()
instance RectAreaLightParams Int
instance RectAreaLightParams (Int, Double)
instance RectAreaLightParams (Int, Double, Double)
instance RectAreaLightParams (Int, Double, Double, Double)
new :: (ToArgs t, RectAreaLightParams t) => t -> THREE.Three RectAreaLight
new = THREE.new RectAreaLight "RectAreaLight"
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isRectAreaLight :: ReadOnly RectAreaLight Bool
isRectAreaLight = readonly "isRectAreaLight" 
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
height :: Property RectAreaLight Double
height = property "height" 
-----------------------------------------------------------------------------
power :: Property RectAreaLight Double
power = property "power" 
-----------------------------------------------------------------------------
width :: Property RectAreaLight Double
width = property "width" 
-----------------------------------------------------------------------------
