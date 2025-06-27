-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE TypeApplications #-}
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
  -- read-only properties
  isLight :: ReadOnly light "isLight" Bool
  isLight = readonly
  -- properties
  color :: Property light "color" Color
  color = property
  intensity :: Property light "intensity" Double
  intensity = property
  -- optional properties
  -- methods
  dispose :: (MakeArgs arg, FromJSVal return, Light return, Light arg) => Method light "dispose" arg return
  dispose = method
-----------------------------------------------------------------------------
instance Light JSVal 
-----------------------------------------------------------------------------
