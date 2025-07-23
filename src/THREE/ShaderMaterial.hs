-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.ShaderMaterial
  ( -- * Types
    ShaderMaterial (..)
  , ShaderMaterialClass (..)
    -- * Constructors
  , THREE.ShaderMaterial.new
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Constants.Materials
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/ShaderMaterial
class (Material material) => ShaderMaterialClass material where

  -- Property

  clipping :: Property material Bool
  clipping = property "clipping"

  defaultAttributeValues :: Property material Object    -- TODO implement something more practical than JS Object?
  defaultAttributeValues = property "defaultAttributeValues"

  defines :: Property material Object
  defines = property "defines"

  extensions :: Property material Object
  extensions = property "extensions"

  fog :: Property material Bool
  fog = property "fog"

  fragmentShader :: Property material JSString
  fragmentShader = property "fragmentShader"

  glslVersion :: Property material GlslVersion
  glslVersion = property "glslVersion"

  index0AttributeName :: Property material (Maybe JSString)
  index0AttributeName = optional "index0AttributeName"

  lights :: Property material Bool
  lights = property "lights"

  linewidth :: Property material Double
  linewidth = property "linewidth"

  flatShading :: Property material Bool
  flatShading = property "flatShading"

  uniforms :: Property material Object
  uniforms = property "uniforms"

  uniformsNeedUpdate :: Property material Bool
  uniformsNeedUpdate = property "uniformsNeedUpdate"

  vertexColors :: Property material Bool
  vertexColors = property "vertexColors"

  vertexShader :: Property material JSString
  vertexShader = property "vertexShader"

  wireframe :: Property material Bool
  wireframe = property "wireframe"

  wireframeLinewidth :: Property material Double
  wireframeLinewidth = property "wireframeLinewidth"

instance ShaderMaterialClass JSVal

-----------------------------------------------------------------------------

newtype ShaderMaterial
  = ShaderMaterial
  { unShaderMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher, ShaderMaterialClass)

instance FromJSVal ShaderMaterial where
  fromJSVal = pure . Just . ShaderMaterial

-- Constructor

new :: THREE.Three ShaderMaterial
new = THREE.new ShaderMaterial "ShaderMaterial" ()

