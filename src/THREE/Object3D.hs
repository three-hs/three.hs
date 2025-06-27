-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds               #-}
{-# LANGUAGE TypeApplications        #-}
{-# LANGUAGE OverloadedStrings       #-}
{-# LANGUAGE ConstrainedClassMethods #-}
{-# OPTIONS_GHC -fno-warn-orphans    #-}
-----------------------------------------------------------------------------
module THREE.Object3D
  ( -- * Types
    Object3D (..)
    -- * Constructors
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Euler         as THREE
import           THREE.Internal      as THREE
import           THREE.Vector3       as THREE
import           THREE.Matrix3       as THREE
import           THREE.Quaternion    as THREE
import           THREE.Matrix4       as THREE
import           THREE.Material      as THREE
import           THREE.AnimationClip as THREE
import           THREE.Layers        as THREE
import           THREE.Raycaster     as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/Object3D
class (MakeObject object, ToJSVal object) => Object3D object where
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
  isObject3D :: Property object "isObject3D" Bool
  isObject3D = property
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
  name :: Property object "name" String
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
  uuid :: Property object "uuid" String
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
  add = method
  applyMatrix4 :: (FromJSVal return, Object3D return) => Method object "applyMatrix4" Matrix4 return
  applyMatrix4 = method
  applyQuaternion :: (FromJSVal return, Object3D return) => Method object "applyQuaternion" Quaternion return
  applyQuaternion = method
  attach :: (FromJSVal return, MakeArgs arg, Object3D return) => Method object "attach" arg return
  attach = method
  clear :: (MakeArgs arg, FromJSVal return, Object3D return) => Method object "clear" arg return
  clear = method
  clone :: (FromJSVal return, Object3D return) => Method object "clone" Bool return
  clone = method
  copy :: (FromJSVal return, Object3D return) => Method object "copy" Bool return
  copy = method
  getObjectById :: (FromJSVal return, Object3D return) => Method object "getObjectById" Int return
  getObjectById = method
  getObjectByName :: (FromJSVal return, Object3D return) => Method object "getObjectByName" String return
  getObjectByName = method
  getObjectByProperty :: (Object3D return, FromJSVal return) => Method object "getObjectByProperty" (JSString, Object) return
  getObjectByProperty = method
  getObjectsByProperty :: (FromJSVal return, Object3D return) => Method object "getObjectsByProperty" (String, Object, Object) return
  getObjectsByProperty = method
  getWorldPosition :: Method object "getWorldPosition" Vector3 Vector3
  getWorldPosition = method
  getWorldQuaternion :: Method object "getWorldQuaternion" Quaternion Quaternion
  getWorldQuaternion = method
  getWorldScale :: Method object "getWorldScale" Vector3 Vector3
  getWorldScale = method
  getWorldDirection :: Method object "getWorldDirection" Vector3 Vector3
  getWorldDirection = method
  localToWorld :: Method object "localToWorld" Vector3 Vector3
  localToWorld = method
  -- .lookAt ( vector : Vector3 ) : undefined
  lookAt :: Method object "lookAt" (Double, Double, Double) ()
  lookAt = method
  raycast :: Method object "raycast" (Raycaster, Array) ()
  raycast = method
  remove :: (Object3D return, FromJSVal return, MakeArgs arg, Object3D arg) => Method object "remove" arg return
  remove = method
  removeFromParent :: (FromJSVal return, Object3D return) => Method object "removeFromParent" () return
  removeFromParent = method
  rotateOnAxis :: (FromJSVal return, Object3D return) => Method object "rotateOnAxis" (Vector3, Double) return
  rotateOnAxis = method
  rotateOnWorldAxis :: (FromJSVal return, Object3D return) => Method object "rotateOnWorldAxis" (Vector3, Double) return
  rotateOnWorldAxis = method
  rotateX :: (FromJSVal return, Object3D return) => Method object "rotateX" Double return
  rotateX = method
  rotateY :: (FromJSVal return, Object3D return) => Method object "rotateY" Double return
  rotateY = method
  rotateZ :: (FromJSVal return, Object3D return) => Method object "rotateZ" Double return
  rotateZ = method
  setRotationFromAxisAngle :: Method object "setRotationFromAxisAngle" (Vector3, Double) ()
  setRotationFromAxisAngle = method
  setRotationFromEuler :: Method object "setRotationFromEuler" Euler ()
  setRotationFromEuler = method
  setRotationFromMatrix :: Method object "setRotationFromMatrix" Matrix4 ()
  setRotationFromMatrix = method
  setRotationFromQuaternion :: Method object "setRotationFromQuaternion" Quaternion ()
  setRotationFromQuaternion = method
  toJSON :: Method object "toJSON" Object Object
  toJSON = method
  translateOnAxis :: (FromJSVal return, Object3D return) => Method object "translateOnAxis" (Vector3, Double) return
  translateOnAxis = method
  translateX :: (FromJSVal return, Object3D return) => Method object "translateX" Double return
  translateX = method
  translateY :: (FromJSVal return, Object3D return) => Method object "translateY" Double return
  translateY = method
  translateZ :: (FromJSVal return, Object3D return) => Method object "translateZ" Double return
  translateZ = method
  traverse :: Method object "traverse" Function ()
  traverse = method
  traverseVisible :: Method object "traverseVisible" Function ()
  traverseVisible = method
  traverseAncestors :: Method object "traverseAncestors" Function ()
  traverseAncestors = method
  updateMatrix :: Method object "updateMatrix" () ()
  updateMatrix = method
  updateMatrixWorld :: Method object "updateMatrixWorld" Bool ()
  updateMatrixWorld = method
  updateWorldMatrix :: Method object "updateWorldMatrix" (Bool, Bool) ()
  updateWorldMatrix = method
  worldToLocal :: Method object "worldToLocal" Vector3 Vector3
  worldToLocal = method
-----------------------------------------------------------------------------
type Array = Object
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance FromJSVal Function where
  fromJSVal = pure . pure . Function . Object
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance FromJSVal Object where
  fromJSVal = pure . pure . Object
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs Int where
  makeArgs k = (:[]) <$> toJSVal k
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs Object where
  makeArgs (Object k) = pure [k]
-----------------------------------------------------------------------------
-- | This belongs in 'jsaddle'
instance MakeArgs Function where
  makeArgs (Function (Object k)) = pure [k]
-----------------------------------------------------------------------------
instance Object3D JSVal
-----------------------------------------------------------------------------


