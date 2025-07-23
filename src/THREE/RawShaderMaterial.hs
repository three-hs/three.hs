-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.RawShaderMaterial
  ( -- * Types
    RawShaderMaterial (..)
    -- * Constructors
  , THREE.RawShaderMaterial.new
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.ShaderMaterial
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/RawShaderMaterial
newtype RawShaderMaterial
  = RawShaderMaterial
  { unRawShaderMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher, ShaderMaterialClass)

instance FromJSVal RawShaderMaterial where
  fromJSVal = pure . Just . RawShaderMaterial

-- Constructor

new :: THREE.Three RawShaderMaterial
new = THREE.new RawShaderMaterial "RawShaderMaterial" ()

