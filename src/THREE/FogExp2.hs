-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.FogExp2
  ( -- * Types
    FogExp2 (..)
    -- * Methods
  , THREE.FogExp2.new
    -- * Properties
  , isFogExp2
  , name
  , color
  , density
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/FogExp2
newtype FogExp2
  = FogExp2
  { unFogExp2 :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
-----------------------------------------------------------------------------
instance FromJSVal FogExp2 where
  fromJSVal = pure . pure . FogExp2
-----------------------------------------------------------------------------
class FogNewParams a
instance FogNewParams Int
instance FogNewParams (Int, Double)
instance FogNewParams (Int, Double, Double)
new :: (FogNewParams a, ToArgs a) => a -> THREE.Three FogExp2
new = THREE.new FogExp2 "FogExp2"
-----------------------------------------------------------------------------

isFogExp2 :: ReadOnly FogExp2 Bool
isFogExp2 = readonly "isFogExp2" 

name :: Property FogExp2 MisoString
name = property "name"

color :: Property FogExp2 Color
color = property "color" 

density :: Property FogExp2 Double
density = property "density" 

-----------------------------------------------------------------------------
