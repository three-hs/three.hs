-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Fog
  ( -- * Types
    Fog (..)
    -- * Methods
  , THREE.Fog.new
    -- * Properties
  , isFog
  , name
  , color
  , near
  , far
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Fog
newtype Fog
  = Fog
  { unFog :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
-----------------------------------------------------------------------------
instance FromJSVal Fog where
  fromJSVal = pure . pure . Fog
-----------------------------------------------------------------------------
class FogNewParams a
instance FogNewParams Int
instance FogNewParams (Int, Double)
instance FogNewParams (Int, Double, Double)
new :: (FogNewParams a, MakeArgs a) => a -> THREE.Three Fog
new = THREE.new Fog "Fog"
-----------------------------------------------------------------------------

isFog :: ReadOnly Fog Bool
isFog = readonly "isFog" 

name :: Property Fog JSString
name = property "name"

color :: Property Fog Color
color = property "color" 

near :: Property Fog Double
near = property "near" 

far :: Property Fog Double
far = property "far" 

-----------------------------------------------------------------------------
