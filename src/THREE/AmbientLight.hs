-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia                #-}
{-# LANGUAGE DeriveAnyClass             #-}
{-# LANGUAGE FlexibleInstances          #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AmbientLight
  ( -- * Types
    AmbientLight (..)
    -- * Methods
  , THREE.AmbientLight.new
    -- * Properties
  , isAmbientLight
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.EventDispatcher as THREE
import           THREE.Internal as THREE
import           THREE.Light as THREE
import           THREE.Object3D as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/AmbientLight
newtype AmbientLight
  = AmbientLight
  { unAmbientLight :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Light, Object3D, EventDispatcher)
-----------------------------------------------------------------------------
instance FromJSVal AmbientLight where
  fromJSVal = pure . Just . AmbientLight
-----------------------------------------------------------------------------
class AmbientLightParams t
instance AmbientLightParams ()
instance AmbientLightParams Int
instance AmbientLightParams (Int, Double)
new :: (MakeArgs t, AmbientLightParams t) => t -> THREE.Three AmbientLight
new = THREE.new AmbientLight "AmbientLight"
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
isAmbientLight :: ReadOnly AmbientLight Bool
isAmbientLight = readonly "isAmbientLight" 
-----------------------------------------------------------------------------
