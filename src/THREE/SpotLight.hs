-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.SpotLight
  ( -- * Types
    SpotLight (..)
    -- * Constructors
  , THREE.SpotLight.new
    -- * Read-only Properties
  , isSpotLight
    -- * Properties
  , angle
  , decay
  , distance
  , penumbra
  , power
  , target
    -- * Optional properties
  , THREE.SpotLight.map
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Light
import           THREE.Object3D
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/SpotLight
newtype SpotLight
  = SpotLight
  { unSpotLight :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
instance FromJSVal SpotLight where
  fromJSVal = pure . Just . SpotLight
-----------------------------------------------------------------------------
class SpotLightParams t
instance SpotLightParams ()
instance SpotLightParams Int
instance SpotLightParams (Int, Double)
instance SpotLightParams (Int, Double, Double)
instance SpotLightParams (Int, Double, Double, Double)
instance SpotLightParams (Int, Double, Double, Double, Double)
instance SpotLightParams (Int, Double, Double, Double, Double, Double)
new :: (MakeArgs t, SpotLightParams t) => t -> THREE.Three SpotLight
new = THREE.new SpotLight "SpotLight" 
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isSpotLight :: ReadOnly SpotLight Bool
isSpotLight = readonly "isSpotLight" 
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
angle :: Property SpotLight Double
angle = property "angle" 
-----------------------------------------------------------------------------
decay :: Property SpotLight Double
decay = property "decay" 
-----------------------------------------------------------------------------
distance :: Property SpotLight Double
distance = property "distance" 
-----------------------------------------------------------------------------
penumbra :: Property SpotLight Double
penumbra = property "penumbra" 
-----------------------------------------------------------------------------
power :: Property SpotLight Double
power = property "power" 
-----------------------------------------------------------------------------
target :: (Object3D object, FromJSVal object) => Property SpotLight object
target = property "target" 
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
map :: (TextureClass texture, FromJSVal texture) => Property SpotLight (Maybe texture)
map = optional "map"
-----------------------------------------------------------------------------
