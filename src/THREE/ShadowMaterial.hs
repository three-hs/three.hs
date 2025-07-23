-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.ShadowMaterial
  ( -- * Types
    ShadowMaterial (..)
    -- * Constructors
  , THREE.ShadowMaterial.new
    -- * Properties
  , color
  , fog
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/ShadowMaterial
newtype ShadowMaterial
  = ShadowMaterial
  { unShadowMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher)

instance FromJSVal ShadowMaterial where
  fromJSVal = pure . Just . ShadowMaterial

-- Constructor

new :: THREE.Three ShadowMaterial
new = THREE.new ShadowMaterial "ShadowMaterial" ()

-- Property

color :: Property ShadowMaterial Color
color = property "color" 

fog :: Property ShadowMaterial Bool
fog = property "fog"

