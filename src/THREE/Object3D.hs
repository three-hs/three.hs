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
  animations :: Property object AnimationClip
  animations = property "animations"
  castShadow :: Property object Bool
  castShadow = property "castShadow"
  children :: (FromJSVal objects, Object3D objects) => Property object [objects]
  children = property "children"
  customDepthMaterial :: (Material material, FromJSVal material)  => Property object material
  customDepthMaterial = property "customDepthMaterial"
  customDistanceObject :: Property object Object
  customDistanceObject = property "customDistanceObject"
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
  name :: Property object JSString
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
  uuid :: Property object JSString
  uuid = property "uuid"
  visible :: Property object Bool
  visible = property "visible"
  defaultUp :: Property object Vector3
  defaultUp = property "DEFAULT_UP"
  defaultMatrixAutoUpdate :: Property object Bool
  defaultMatrixAutoUpdate = property "DEFAULT_MATRIX_AUTO_UPDATE"
  defaultMatrixWorldAutoUpdate :: Property object Bool
  defaultMatrixWorldAutoUpdate = property "DEFAULT_MATRIX_WORLD_AUTO_UPDATE"
  add :: (MakeArgs arg, FromJSVal object, Object3D arg) => Method object arg object
  add = method "add"
  applyMatrix4 :: Method object Matrix4 JSUndefined
  applyMatrix4 = method "applyMatrix4"
  applyQuaternion :: (FromJSVal return, Object3D return) => Method object Quaternion return
  applyQuaternion = method "applyQuaternion"
  attach :: (FromJSVal return, MakeArgs arg, Object3D return) => Method object arg return
  attach = method "attach" 
  clear :: (MakeArgs arg, FromJSVal return, Object3D return) => Method object arg return
  clear = method "clear"
  clone :: (FromJSVal return, Object3D return) => Method object Bool return
  clone = method "clone" 
  copy :: (FromJSVal return, Object3D return) => Method object Bool return
  copy = method "copy"
  getObjectById :: (FromJSVal return, Object3D return) => Method object Int return
  getObjectById = method "getObjectById" 
  getObjectByName :: (FromJSVal return, Object3D return) => Method object JSString return
  getObjectByName = method "getObjectByName" 
  getObjectByProperty :: (Object3D return, FromJSVal return) => Method object (JSString, Object) return
  getObjectByProperty = method  "getObjectByProperty"
  getObjectsByProperty :: (FromJSVal return, Object3D return) => Method object (JSString, Object, Object) return
  getObjectsByProperty = method "getObjectsByProperty"
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
  lookAt :: (MakeArgs arg, Triplet arg) => Method object arg ()
  lookAt = method "lookAt" 
  raycast :: Method object (Raycaster, JSArray) JSUndefined
  raycast = method "raycast"
  remove :: (Object3D return, FromJSVal return, MakeArgs arg, Object3D arg) => Method object arg return
  remove = method "remove" 
  removeFromParent :: (FromJSVal return, Object3D return) => Method object () return
  removeFromParent = method "removeFromParent" 
  rotateOnAxis :: (FromJSVal return, Object3D return) => Method object (Vector3, Double) return
  rotateOnAxis = method "rotateOnAxis" 
  rotateOnWorldAxis :: (FromJSVal return, Object3D return) => Method object (Vector3, Double) return
  rotateOnWorldAxis = method "rotateOnWorldAxis" 
  rotateX :: (FromJSVal return, Object3D return) => Method object Double return
  rotateX = method "rotateX"
  rotateY :: (FromJSVal return, Object3D return) => Method object Double return
  rotateY = method "rotateY" 
  rotateZ :: (FromJSVal return, Object3D return) => Method object Double return
  rotateZ = method "rotateZ" 
  setRotationFromAxisAngle :: Method object (Vector3, Double) JSUndefined
  setRotationFromAxisAngle = method "setRotationFromAxisAngle"
  setRotationFromEuler :: Method object Euler JSUndefined
  setRotationFromEuler = method "setRotationFromEuler"
  setRotationFromMatrix :: Method object Matrix4 JSUndefined
  setRotationFromMatrix = method "setRotationFromMatrix"
  setRotationFromQuaternion :: Method object Quaternion JSUndefined
  setRotationFromQuaternion = method "setRotationFromQuaternion"
  toJSON :: Method object Object Object
  toJSON = method "toJSON"
  translateOnAxis :: (FromJSVal return, Object3D return) => Method object (Vector3, Double) return
  translateOnAxis = method "translateOnAxis"
  translateX :: (FromJSVal return, Object3D return) => Method object Double return
  translateX = method "translateX"
  translateY :: (FromJSVal return, Object3D return) => Method object Double return
  translateY = method "translateY"
  translateZ :: (FromJSVal return, Object3D return) => Method object Double return
  translateZ = method "translateZ"
  traverse :: Method object Function JSUndefined
  traverse = method "traverse"
  traverseVisible :: Method object Function JSUndefined
  traverseVisible = method "traverseVisible"
  traverseAncestors :: Method object Function JSUndefined
  traverseAncestors = method "traverseAncestors"
  updateMatrix :: Method object () JSUndefined
  updateMatrix = method "updateMatrix"
  updateMatrixWorld :: Method object Bool JSUndefined
  updateMatrixWorld = method  "updateMatrixWorld"
  updateWorldMatrix :: Method object (Bool, Bool) JSUndefined
  updateWorldMatrix = method "updateWorldMatrix"
  worldToLocal :: Method object Vector3 Vector3
  worldToLocal = method "worldToLocal" 
-----------------------------------------------------------------------------
instance Object3D JSVal
-----------------------------------------------------------------------------


