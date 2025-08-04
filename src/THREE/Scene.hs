-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Scene
  ( -- * Types
    Scene (..)
    -- * Constructors
  , THREE.Scene.new
    -- * Properties
  , background
  , backgroundBlurriness
  , backgroundIntensity
  , backgroundRotation
  , environment
  , environmentIntensity
  , environmentRotation
  , fog
  , isScene
  , overrideMaterial
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.Euler
import           THREE.EventDispatcher
import           THREE.Fog
import           THREE.FogExp2
import           THREE.Internal as THREE
import           THREE.Object3D
import           THREE.Material
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Scene
newtype Scene
  = Scene
  { unScene :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, Object3D)
-----------------------------------------------------------------------------
instance FromJSVal Scene where
  fromJSVal = pure . pure . Scene
-----------------------------------------------------------------------------
new :: THREE.Three Scene
new = THREE.new Scene "Scene" ()
-----------------------------------------------------------------------------

class SceneBackgroundParams a
instance SceneBackgroundParams Int
instance SceneBackgroundParams Color
instance SceneBackgroundParams Texture    -- TODO TextureClass?
background :: (SceneBackgroundParams a, FromJSVal a, ToJSVal a) => Property Scene (Maybe a)
background = optional "background" 

backgroundBlurriness :: Property Scene Double
backgroundBlurriness = property "backgroundBlurriness" 

backgroundIntensity :: Property Scene Double
backgroundIntensity = property "backgroundIntensity" 

backgroundRotation :: Property Scene Euler
backgroundRotation = property "backgroundRotation" 

environment :: (TextureClass a, FromJSVal a, ToJSVal a) => Property Scene (Maybe a)
environment = optional "environment" 

isScene :: ReadOnly Scene Bool
isScene = readonly "isScene" 

environmentIntensity :: Property Scene Double
environmentIntensity = property "environmentIntensity" 

environmentRotation :: Property Scene Euler
environmentRotation  = property "environmentRotation" 

class SceneFogParams a
instance SceneFogParams Fog
instance SceneFogParams FogExp2
fog :: (SceneFogParams a, FromJSVal a, ToJSVal a) => Property Scene (Maybe a)
fog = optional "fog" 

overrideMaterial :: (Material a, FromJSVal a, ToJSVal a) => Property Scene (Maybe a)
overrideMaterial = optional "overrideMaterial" 

-----------------------------------------------------------------------------
