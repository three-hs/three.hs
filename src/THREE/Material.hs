-----------------------------------------------------------------------------
{-# LANGUAGE ConstrainedClassMethods #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Material
  ( Material (..)
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.Constants.CustomBlendingEquations
import           THREE.Constants.CustomBlendingEquations.DestinationFactors
import           THREE.Constants.CustomBlendingEquations.SourceFactors
import           THREE.Constants.Materials
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Plane
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/Material
class (EventDispatcher material, ToJSVal material, ToObject material) => Material material where

  -- ReadOnly

  type_ :: ReadOnly material MisoString
  type_ = readonly "type"

  uuid :: ReadOnly material MisoString
  uuid = readonly "uuid"

  isMaterial :: ReadOnly material Bool
  isMaterial = readonly "isMaterial"

  -- Property

  alphaHash :: Property material Bool
  alphaHash = property "alphaHash" 

  alphaTest :: Property material Double
  alphaTest = property "alphaTest" 

  alphaToCoverage :: Property material Bool
  alphaToCoverage = property "alphaToCoverage" 

  blendAlpha :: Property material Double
  blendAlpha = property "blendAlpha" 

  blendColor :: Property material Color
  blendColor = property "blendColor" 

  blendDst :: Property material (Maybe DestinationFactors)
  blendDst = property "blendDst" 

  blendDstAlpha :: Property material (Maybe DestinationFactors)
  blendDstAlpha = optional "blendDstAlpha" 

  blendEquation :: Property material BlendingEquations
  blendEquation = property "blendEquation" 

  blendEquationAlpha :: Property material (Maybe BlendingEquations)
  blendEquationAlpha = optional "blendEquationAlpha" 

  blending :: Property material (Maybe BlendingMode)
  blending = property "blending" 

  blendSrc :: Property material SourceFactors
  blendSrc = property "blendSrc" 

  blendSrcAlpha :: Property material (Maybe SourceFactors)
  blendSrcAlpha = optional "blendSrcAlpha" 

  clipIntersection :: Property material Bool
  clipIntersection = property "clipIntersection" 

  clippingPlanes :: Property material (Maybe [Plane])
  clippingPlanes = optional "clippingPlanes" 

  clipShadows :: Property material Bool
  clipShadows = property "clipShadows" 

  colorWrite :: Property material Bool
  colorWrite = property "colorWrite" 

  defines :: Property material (Maybe Object)
  defines = optional "defines"

  depthFunc :: Property material DepthMode
  depthFunc = property "depthFunc"

  depthTest :: Property material Bool
  depthTest = property "depthTest"

  depthWrite :: Property material Bool
  depthWrite = property "depthWrite"

  forceSinglePass :: Property material Bool
  forceSinglePass = property "forceSinglePass"

  stencilWrite :: Property material Bool
  stencilWrite = property "stencilWrite"

  stencilWriteMask :: Property material Int
  stencilWriteMask = property "stencilWriteMask"

  stencilFunc :: Property material StencilFunctions
  stencilFunc = property "stencilFunc"

  stencilRef :: Property material Int
  stencilRef = property "stencilRef"

  stencilFuncMask :: Property material Int
  stencilFuncMask = property "stencilFuncMask"

  stencilFail :: Property material StencilOperations
  stencilFail = property "stencilFail"

  stencilZFail :: Property material StencilOperations
  stencilZFail = property "stencilZFail"

  stencilZPass :: Property material StencilOperations
  stencilZPass = property "stencilZPass"

  id :: Property material Int
  id = property "id"

  name :: Property material MisoString
  name = property "name"

  needsUpdate :: Property material Bool
  needsUpdate = property "needsUpdate"

  opacity :: Property material Double
  opacity = property "opacity"

  polygonOffset :: Property material Bool
  polygonOffset = property "polygonOffset"

  polygonOffsetFactor :: Property material Int
  polygonOffsetFactor = property "polygonOffsetFactor"

  polygonOffsetUnits :: Property material Int
  polygonOffsetUnits = property "polygonOffsetUnits"

  precision :: Property material (Maybe MisoString)
  precision = optional "precision"

  premultipliedAlpha :: Property material Bool
  premultipliedAlpha = property "premultipliedAlpha"

  dithering :: Property material Bool
  dithering = property "dithering"

  shadowSide :: Property material Side
  shadowSide = property "shadowSide"

  side :: Property material Side
  side = property "side"

  toneMapped :: Property material Bool
  toneMapped = property "toneMapped"

  transparent :: Property material Bool
  transparent = property "transparent"

  version :: Property material Int
  version = property "version"

  vertexColors :: Property material Bool
  vertexColors = property "vertexColors"

  visible :: Property material Bool
  visible = property "visible"

  userData :: Property material Object
  userData = property "userData"

  -- Method

  clone :: FromJSVal material => Method material () material
  clone = method "clone" 

  copy :: (FromJSVal material, ToArgs material) => Method material material material
  copy = method "copy" 

  dispose :: Method material () ()
  dispose = method "dispose" 

  -- onBeforeCompile, onBeforeRender: 
  -- See onBeforeCompileMaterial and onBeforeRenderMaterial in WebGLRenderer.
  -- (cannot be defined here because of circular module dependencies)

  customProgramCacheKey :: Method material () MisoString
  customProgramCacheKey = method "customProgramCacheKey" 

  setValues :: Method material Object ()
  setValues = method "setValues" 

  toJSON :: Method material Object Object
  toJSON = method "toJSON"

-----------------------------------------------------------------------------
instance Material JSVal
-----------------------------------------------------------------------------

