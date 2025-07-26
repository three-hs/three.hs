-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.SpriteMaterial
  ( -- * Types
    SpriteMaterial (..)
    -- * Constructors
  , THREE.SpriteMaterial.new
    -- * Properties
  , alphaMap
  , color
  , fog
  , THREE.SpriteMaterial.map
  , THREE.SpriteMaterial.rotation
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
-- | https://threejs.org/docs/#api/en/materials/SpriteMaterial
newtype SpriteMaterial
  = SpriteMaterial
  { unSpriteMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal SpriteMaterial where
  fromJSVal = pure . Just . SpriteMaterial

-- Constructor

new :: THREE.Three SpriteMaterial
new = THREE.new SpriteMaterial "SpriteMaterial" ()

-- Property

alphaMap :: (TextureClass texture, FromJSVal texture) => Property SpriteMaterial (Maybe texture)
alphaMap = optional "alphaMap"

color :: Property SpriteMaterial Color
color = property "color" 

fog :: Property SpriteMaterial Bool
fog = property "fog"

map :: (TextureClass texture, FromJSVal texture) => Property SpriteMaterial (Maybe texture)
map = optional "map"

rotation :: Property SpriteMaterial Double
rotation = property "rotation"

sizeAttenuation :: Property SpriteMaterial Bool
sizeAttenuation = property "sizeAttenuation"

