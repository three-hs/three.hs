-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds               #-}
{-# LANGUAGE FlexibleInstances       #-}
{-# LANGUAGE MultiParamTypeClasses   #-}
{-# LANGUAGE OverloadedStrings       #-}
-----------------------------------------------------------------------------
module THREE.Object3D
  ( -- * Class
    Object3D (..)
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Euler           as THREE
import           THREE.Internal        as THREE
import           THREE.Vector3         as THREE
import           THREE.Matrix3         as THREE
import           THREE.Quaternion      as THREE
import           THREE.Matrix4         as THREE
import           THREE.Material        as THREE
import           THREE.Layers          as THREE
import           THREE.Raycaster       as THREE
import           THREE.AnimationClip   as THREE
import           THREE.EventDispatcher as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/Object3D
class EventDispatcher object => Object3D object where
  animations :: Property object AnimationClip
  animations = property "animations"
  castShadow :: Property object Bool
  castShadow = property "castShadow"
  -- children :: (FromJSVal objects, Object3D objects) => Property object [objects]
  -- children = property "children"
  customDepthMaterial :: (Material material, FromJSVal material)  => Property object material
  customDepthMaterial = property "customDepthMaterial"
  customDistanceMaterial :: (Material material, FromJSVal material) => Property object material
  customDistanceMaterial = property "customDistanceMaterial"
  frustumCulled :: Property object Bool
  frustumCulled = property "frustumCulled"
  id :: ReadOnly object Int
  id = readonly "id"
  isObject3D :: ReadOnly object Bool
  isObject3D = readonly "isObject3D"
  layers :: Property object Layers
  layers = property "layers"
  matrix :: Property object Matrix4
  matrix = property "matrix"
  matrixAutoUpdate :: Property object Bool
  matrixAutoUpdate = property "matrixAutoUpdate"
  matrixWorld :: Property object Matrix4
  matrixWorld = property "matrixWorld"
  matrixWorldAutoUpdate :: Property object Bool
  matrixWorldAutoUpdate = property "matrixWorldAutoUpdate"
  matrixWorldNeedsUpdate :: Property object Bool
  matrixWorldNeedsUpdate = property "matrixWorldNeedsUpdate"
  modelViewMatrix :: Property object Matrix4
  modelViewMatrix = property "modelViewMatrix"
  name :: Property object MisoString
  name = property "name"
  normalMatrix :: Property object Matrix3
  normalMatrix = property "normalMatrix"
  onAfterRender :: Property object Function
  onAfterRender = property "onAfterRender"
  onAfterShadow :: Property object Function
  onAfterShadow = property "onAfterShadow"
  onBeforeRender :: Property object Function
  onBeforeRender = property "onBeforeRender"
  onBeforeShadow :: Property object Function
  onBeforeShadow = property "onBeforeShadow"
  parent :: (Object3D return, FromJSVal return) => Property object return
  parent = property "parent"
  position :: Property object Vector3
  position = property "position"
  quaternion :: Property object Quaternion
  quaternion = property "quaternion"
  receiveShadow :: Property object Bool
  receiveShadow = property "receiveShadow"
  renderOrder :: Property object Double
  renderOrder = property "renderOrder"
  rotation :: Property object Euler
  rotation = property "rotation"
  scale :: Property object Vector3
  scale = property "scale"
  up :: Property object Vector3
  up = property "up"
  userData :: Property object Object
  userData = property "userData"
  uuid :: Property object MisoString
  uuid = property "uuid"
  visible :: Property object Bool
  visible = property "visible"
  defaultUp :: Property object Vector3
  defaultUp = property "DEFAULT_UP"
  defaultMatrixAutoUpdate :: Property object Bool
  defaultMatrixAutoUpdate = property "DEFAULT_MATRIX_AUTO_UPDATE"
  defaultMatrixWorldAutoUpdate :: Property object Bool
  defaultMatrixWorldAutoUpdate = property "DEFAULT_MATRIX_WORLD_AUTO_UPDATE"
  add :: (ToArgs arg, FromJSVal object, Object3D arg) => Method object arg object
  add = method "add"
  applyMatrix4 :: Method object Matrix4 ()
  applyMatrix4 = method "applyMatrix4"
  applyQuaternion :: (FromJSVal object) => Method object Quaternion object
  applyQuaternion = method "applyQuaternion"
  attach :: (FromJSVal object, ToArgs arg) => Method object arg object
  attach = method "attach" 
  clear :: (ToArgs arg, FromJSVal object) => Method object arg object
  clear = method "clear"
  clone :: (FromJSVal object, Object3DCloneParams t, ToArgs t) => Method object t object
  clone = method "clone" 
  copy :: (ToArgs object, FromJSVal object, Object3DCopyParams object t, ToArgs t) => Method object t object
  copy = method "copy"
  -- The getObject* methods don't really make sense in Haskell. It can break the type safety like:
  -- myCamera <- mesh1 & getObjectByName "myGeometry" :: Three PerspectiveCamera
  --
  -- getObjectById :: (FromJSVal return, Object3D return) => Method object Int return
  -- getObjectById = method "getObjectById" 
  -- getObjectByName :: (FromJSVal return, Object3D return) => Method object MisoString return
  -- getObjectByName = method "getObjectByName" 
  -- getObjectByProperty :: (ToJSVal a, Object3D return, FromJSVal return) => Method object (MisoString, a) return
  -- getObjectByProperty = method  "getObjectByProperty"
  -- getObjectsByProperty :: (ToJSVal a) => Method object (MisoString, a, Maybe [Object]) [Object]
  -- getObjectsByProperty = method "getObjectsByProperty"
  getWorldPosition :: Method object Vector3 Vector3
  getWorldPosition = method "getWorldPosition"
  getWorldQuaternion :: Method object Quaternion Quaternion
  getWorldQuaternion = method "getWorldQuaternion"
  getWorldScale :: Method object Vector3 Vector3
  getWorldScale = method "getWorldScale"
  getWorldDirection :: Method object Vector3 Vector3
  getWorldDirection = method "getWorldDirection"
  localToWorld :: Method object Vector3 Vector3
  localToWorld = method "localToWorld"
  lookAt :: (ToArgs arg, Triplet arg) => Method object arg ()
  lookAt = method "lookAt" 
  raycast :: Method object (Raycaster, JSVal) ()
  raycast = method "raycast"
  remove :: (ToArgs arg, Object3D arg, FromJSVal object) => Method object arg object
  remove = method "remove" 
  removeFromParent :: (FromJSVal object) => Method object () object
  removeFromParent = method "removeFromParent" 
  rotateOnAxis :: (FromJSVal object) => Method object (Vector3, Double) object
  rotateOnAxis = method "rotateOnAxis" 
  rotateOnWorldAxis :: (FromJSVal object) => Method object (Vector3, Double) object
  rotateOnWorldAxis = method "rotateOnWorldAxis" 
  rotateX :: (FromJSVal object) => Method object Double object
  rotateX = method "rotateX"
  rotateY :: (FromJSVal object) => Method object Double object
  rotateY = method "rotateY" 
  rotateZ :: (FromJSVal object) => Method object Double object
  rotateZ = method "rotateZ" 
  setRotationFromAxisAngle :: Method object (Vector3, Double) ()
  setRotationFromAxisAngle = method "setRotationFromAxisAngle"
  setRotationFromEuler :: Method object Euler ()
  setRotationFromEuler = method "setRotationFromEuler"
  setRotationFromMatrix :: Method object Matrix4 ()
  setRotationFromMatrix = method "setRotationFromMatrix"
  setRotationFromQuaternion :: Method object Quaternion ()
  setRotationFromQuaternion = method "setRotationFromQuaternion"
  toJSON :: Method object Object Object
  toJSON = method "toJSON"
  translateOnAxis :: (FromJSVal object) => Method object (Vector3, Double) object
  translateOnAxis = method "translateOnAxis"
  translateX :: (FromJSVal object) => Method object Double object
  translateX = method "translateX"
  translateY :: (FromJSVal object) => Method object Double object
  translateY = method "translateY"
  translateZ :: (FromJSVal object) => Method object Double object
  translateZ = method "translateZ"
  traverse :: Method object Function ()
  traverse = method "traverse"
  traverseVisible :: Method object Function ()
  traverseVisible = method "traverseVisible"
  traverseAncestors :: Method object Function ()
  traverseAncestors = method "traverseAncestors"
  updateMatrix :: Method object () ()
  updateMatrix = method "updateMatrix"
  updateMatrixWorld :: Method object Bool ()
  updateMatrixWorld = method  "updateMatrixWorld"
  updateWorldMatrix :: Method object (Bool, Bool) ()
  updateWorldMatrix = method "updateWorldMatrix"
  worldToLocal :: Method object Vector3 Vector3
  worldToLocal = method "worldToLocal" 
-----------------------------------------------------------------------------
instance Object3D JSVal
-----------------------------------------------------------------------------
class Object3DCopyParams o t
instance Object3DCopyParams o o
instance Object3DCopyParams o (o, Bool)
-----------------------------------------------------------------------------
class Object3DCloneParams t
instance Object3DCloneParams ()
instance Object3DCloneParams Bool
-----------------------------------------------------------------------------

