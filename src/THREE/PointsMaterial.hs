-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.PointsMaterial
  ( -- * Types
    PointsMaterial (..)
    -- * Constructors
  , THREE.PointsMaterial.new
    -- * Properties
  , alphaMap
  , color
  , fog
  , THREE.PointsMaterial.map
  , size
  , sizeAttenuation
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/PointsMaterial
newtype PointsMaterial
  = PointsMaterial
  { unPointsMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal PointsMaterial where
  fromJSVal = pure . Just . PointsMaterial

-- Constructor

new :: THREE.Three PointsMaterial
new = THREE.new PointsMaterial "PointsMaterial" ()

-- Property

alphaMap :: (TextureClass texture, FromJSVal texture) => Property PointsMaterial (Maybe texture)
alphaMap = optional "alphaMap"

color :: Property PointsMaterial Color
color = property "color" 

fog :: Property PointsMaterial Bool
fog = property "fog"

map :: (TextureClass texture, FromJSVal texture) => Property PointsMaterial (Maybe texture)
map = optional "map"

size :: Property PointsMaterial Double
size = property "size"

sizeAttenuation :: Property PointsMaterial Bool
sizeAttenuation = property "sizeAttenuation"

