-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Light
  ( -- * Class
    Light (..)
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color as THREE
import           THREE.Internal as THREE
import           THREE.Object3D as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/lights/Light
class Object3D light => Light light where
  isLight :: ReadOnly light Bool
  isLight = readonly "isLight" 
  color :: Property light Color
  color = property "color" 
  intensity :: Property light Double
  intensity = property "intensity" 
  dispose :: Method light () ()
  dispose = method "dispose"
-----------------------------------------------------------------------------
instance Light JSVal
-----------------------------------------------------------------------------
