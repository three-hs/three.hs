-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds               #-}
{-# LANGUAGE TypeApplications        #-}
{-# LANGUAGE OverloadedStrings       #-}
{-# LANGUAGE ConstrainedClassMethods #-}
-----------------------------------------------------------------------------
module THREE.Object3D
  ( -- * Class
    Object3D (..)
  ) where
-----------------------------------------------------------------------------
import           Data.Proxy
import           Language.Javascript.JSaddle
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
  animations :: Property object "animations" AnimationClip
  animations = property
  castShadow :: Property object "castShadow" Bool
  castShadow = property
  children :: (FromJSVal objects, Object3D objects) => Property object "children" [objects]
  children = property
  customDepthMaterial :: (Material material, FromJSVal material)  => Property object "customDepthMaterial" material
  customDepthMaterial = property
  customDistanceObject :: Property object "customDistanceObject" Object
  customDistanceObject = property
  frustumCulled :: Property object "frustumCulled" Bool
  frustumCulled = property
  id :: ReadOnly object "id" Int
  id = readonly
  isObject3D :: ReadOnly object "isObject3D" Bool
  isObject3D = readonly
  layers :: Property object "layers" Layers
  layers = property
  matrix :: Property object "matrix" Matrix4
  matrix = property
  matrixAutoUpdate :: Property object "matrixAutoUpdate" Bool
  matrixAutoUpdate = property
  matrixWorld :: Property object "matrixWorld" Matrix4
  matrixWorld = property
  matrixWorldAutoUpdate :: Property object "matrixWorldAutoUpdate" Bool
  matrixWorldAutoUpdate = property
  matrixWorldNeedsUpdate :: Property object "matrixWorldNeedsUpdate" Bool
  matrixWorldNeedsUpdate = property
  modelViewMatrix :: Property object "modelViewMatrix" Matrix4
  modelViewMatrix = property
  name :: Property object "name" JSString
  name = property
  normalMatrix :: Property object "normalMatrix" Matrix3
  normalMatrix = property
  onAfterRender :: Property object "onAfterRender" Function
  onAfterRender = property
  onAfterShadow :: Property object "onAfterShadow" Function
  onAfterShadow = property
  onBeforeRender :: Property object "onBeforeRender" Function
  onBeforeRender = property
  onBeforeShadow :: Property object "onBeforeShadow" Function
  onBeforeShadow = property
  parent :: (Object3D return, FromJSVal return) => Property object "parent" return
  parent = property
  position :: Property object "position" Vector3
  position = property
  quaternion :: Property object "quaternion" Quaternion
  quaternion = property
  receiveShadow :: Property object "receiveShadow" Bool
  receiveShadow = property
  renderOrder :: Property object "renderOrder" Double
  renderOrder = property
  rotation :: Property object "rotation" Euler
  rotation = property
  scale :: Property object "scale" Vector3
  scale = property
  up :: Property object "up" Vector3
  up = property
  userData :: Property object "userData" Object
  userData = property
  uuid :: Property object "uuid" JSString
  uuid = property
  visible :: Property object "visible" Bool
  visible = property
  defaultUp :: Property object "DEFAULT_UP" Vector3
  defaultUp = property
  defaultMatrixAutoUpdate :: Property object "DEFAULT_MATRIX_AUTO_UPDATE" Bool
  defaultMatrixAutoUpdate = property
  defaultMatrixWorldAutoUpdate :: Property object "DEFAULT_MATRIX_WORLD_AUTO_UPDATE" Bool
  defaultMatrixWorldAutoUpdate = property
  add :: (MakeArgs arg, FromJSVal return, Object3D return, Object3D arg) => Method object "add" arg return
  add = method (Proxy @"add")
  applyMatrix4 :: Method object "applyMatrix4" Matrix4 JSUndefined
  applyMatrix4 = method (Proxy @"applyMatrix4")
  applyQuaternion :: (FromJSVal return, Object3D return) => Method object "applyQuaternion" Quaternion return
  applyQuaternion = method (Proxy @"applyQuaternion")
  attach :: (FromJSVal return, MakeArgs arg, Object3D return) => Method object "attach" arg return
  attach = method (Proxy @"attach")
  clear :: (MakeArgs arg, FromJSVal return, Object3D return) => Method object "clear" arg return
  clear = method (Proxy @"clear")
  clone :: (FromJSVal return, Object3D return) => Method object "clone" Bool return
  clone = method (Proxy @"clone")
  copy :: (FromJSVal return, Object3D return) => Method object "copy" Bool return
  copy = method (Proxy @"copy")
  getObjectById :: (FromJSVal return, Object3D return) => Method object "getObjectById" Int return
  getObjectById = method (Proxy @"getObjectById")
  getObjectByName :: (FromJSVal return, Object3D return) => Method object "getObjectByName" JSString return
  getObjectByName = method (Proxy @"getObjectByName")
  getObjectByProperty :: (Object3D return, FromJSVal return) => Method object "getObjectByProperty" (JSString, Object) return
  getObjectByProperty = method (Proxy @"getObjectByProperty")
  getObjectsByProperty :: (FromJSVal return, Object3D return) => Method object "getObjectsByProperty" (JSString, Object, Object) return
  getObjectsByProperty = method (Proxy @"getObjectsByProperty")
  getWorldPosition :: Method object "getWorldPosition" Vector3 Vector3
  getWorldPosition = method (Proxy @"getWorldPosition")
  getWorldQuaternion :: Method object "getWorldQuaternion" Quaternion Quaternion
  getWorldQuaternion = method (Proxy @"getWorldQuaternion")
  getWorldScale :: Method object "getWorldScale" Vector3 Vector3
  getWorldScale = method (Proxy @"getWorldScale")
  getWorldDirection :: Method object "getWorldDirection" Vector3 Vector3
  getWorldDirection = method (Proxy @"getWorldDirection")
  localToWorld :: Method object "localToWorld" Vector3 Vector3
  localToWorld = method (Proxy @"localToWorld")
  lookAt :: (MakeArgs arg, Triplet arg) => Method object "lookAt" arg ()
  lookAt = method (Proxy @"lookAt")
  raycast :: Method object "raycast" (Raycaster, JSArray) JSUndefined
  raycast = method (Proxy @"raycast")
  remove :: (Object3D return, FromJSVal return, MakeArgs arg, Object3D arg) => Method object "remove" arg return
  remove = method (Proxy @"remove")
  removeFromParent :: (FromJSVal return, Object3D return) => Method object "removeFromParent" () return
  removeFromParent = method (Proxy @"removeFromParent")
  rotateOnAxis :: (FromJSVal return, Object3D return) => Method object "rotateOnAxis" (Vector3, Double) return
  rotateOnAxis = method (Proxy @"rotateOnAxis")
  rotateOnWorldAxis :: (FromJSVal return, Object3D return) => Method object "rotateOnWorldAxis" (Vector3, Double) return
  rotateOnWorldAxis = method (Proxy @"rotateOnWorldAxis")
  rotateX :: (FromJSVal return, Object3D return) => Method object "rotateX" Double return
  rotateX = method (Proxy @"rotateX")
  rotateY :: (FromJSVal return, Object3D return) => Method object "rotateY" Double return
  rotateY = method (Proxy @"rotateY")
  rotateZ :: (FromJSVal return, Object3D return) => Method object "rotateZ" Double return
  rotateZ = method (Proxy @"rotateZ")
  setRotationFromAxisAngle :: Method object "setRotationFromAxisAngle" (Vector3, Double) JSUndefined
  setRotationFromAxisAngle = method (Proxy @"setRotationFromAxisAngle")
  setRotationFromEuler :: Method object "setRotationFromEuler" Euler JSUndefined
  setRotationFromEuler = method (Proxy @"setRotationFromEuler")
  setRotationFromMatrix :: Method object "setRotationFromMatrix" Matrix4 JSUndefined
  setRotationFromMatrix = method (Proxy @"setRotationFromMatrix")
  setRotationFromQuaternion :: Method object "setRotationFromQuaternion" Quaternion JSUndefined
  setRotationFromQuaternion = method (Proxy @"setRotationFromQuaternion")
  toJSON :: Method object "toJSON" Object Object
  toJSON = method (Proxy @"toJSON")
  translateOnAxis :: (FromJSVal return, Object3D return) => Method object "translateOnAxis" (Vector3, Double) return
  translateOnAxis = method (Proxy @"translateOnAxis")
  translateX :: (FromJSVal return, Object3D return) => Method object "translateX" Double return
  translateX = method (Proxy @"translateX")
  translateY :: (FromJSVal return, Object3D return) => Method object "translateY" Double return
  translateY = method (Proxy @"translateY")
  translateZ :: (FromJSVal return, Object3D return) => Method object "translateZ" Double return
  translateZ = method (Proxy @"translateZ")
  traverse :: Method object "traverse" Function JSUndefined
  traverse = method (Proxy @"traverse")
  traverseVisible :: Method object "traverseVisible" Function JSUndefined
  traverseVisible = method (Proxy @"traverseVisible")
  traverseAncestors :: Method object "traverseAncestors" Function JSUndefined
  traverseAncestors = method (Proxy @"traverseAncestors")
  updateMatrix :: Method object "updateMatrix" () JSUndefined
  updateMatrix = method (Proxy @"updateMatrix")
  updateMatrixWorld :: Method object "updateMatrixWorld" Bool JSUndefined
  updateMatrixWorld = method (Proxy @"updateMatrixWorld")
  updateWorldMatrix :: Method object "updateWorldMatrix" (Bool, Bool) JSUndefined
  updateWorldMatrix = method (Proxy @"updateWorldMatrix")
  worldToLocal :: Method object "worldToLocal" Vector3 Vector3
  worldToLocal = method (Proxy @"worldToLocal")
-----------------------------------------------------------------------------
instance Object3D JSVal
-----------------------------------------------------------------------------


