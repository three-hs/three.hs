-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE UndecidableInstances #-}
-----------------------------------------------------------------------------
module THREE.Box3
  ( -- * Types
    Box3 (..)
    -- * Methods
  , THREE.Box3.new
    -- * Properties
  , isBox3
  , THREE.Box3.min
  , THREE.Box3.max
    -- * Methods
  , THREE.Box3.applyMatrix4
  , clampPoint
  , THREE.Box3.clone
  , containsBox
  , containsPoint
  , THREE.Box3.copy
  , distanceToPoint
  , equals
  , expandByObject
  , expandByPoint
  , expandByScalar
  , expandByVector
  , getBoundingSphere
  , getCenter
  , getParameter
  , getSize
  , intersect
  , intersectsBox
  , intersectsPlane
  , intersectsSphere
  , intersectsTriangle
  , isEmpty
  , makeEmpty
  , set
  , setFromArray
  , setFromBufferAttribute
  , setFromCenterAndSize
  , setFromObject
  , setFromPoints
  , translate
  , union
  ) where
-----------------------------------------------------------------------------
import           Miso hiding (set)
-----------------------------------------------------------------------------
import           THREE.BufferAttribute
import           THREE.Internal as THREE
import           THREE.Matrix4
import           THREE.Object3D
import           THREE.Plane
import           THREE.Sphere
import           THREE.Triangle
import           THREE.Vector3
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/math/Box3
newtype Box3
  = Box3
  { unBox3 :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
-----------------------------------------------------------------------------
instance FromJSVal Box3 where
  fromJSVal = pure . pure . Box3
-----------------------------------------------------------------------------
class Box3NewParams a
instance Box3NewParams ()
instance Box3NewParams Vector3
instance Box3NewParams (Vector3, Vector3)
new :: (Box3NewParams a, ToArgs a) => a -> THREE.Three Box3
new = THREE.new Box3 "Box3"
-----------------------------------------------------------------------------

isBox3 :: ReadOnly Box3 Bool
isBox3 = readonly "isBox3" 

min :: Property Box3 Vector3
min = property "min" 

max :: Property Box3 Vector3
max = property "max" 

-----------------------------------------------------------------------------

applyMatrix4 :: Method Box3 Matrix4 Box3
applyMatrix4 = method "appluMatrix4"

clampPoint :: Method Box3 (Vector3, Vector3) Vector3
clampPoint = method "clampPoint"

clone :: Method Box3 () Box3
clone = method "clone"

containsBox :: Method Box3 Box3 Bool
containsBox = method "containsBox"

containsPoint :: Method Box3 Vector3 Bool
containsPoint = method "containsPoint"

copy :: Method Box3 Box3 Box3
copy = method "copy"

distanceToPoint :: Method Box3 Vector3 Double
distanceToPoint = method "distanceToPoint"

equals :: Method Box3 Box3 Bool
equals = method "equals"

class Box3ExpandByObjectParams a
instance Object3D a => Box3ExpandByObjectParams a
instance Object3D a => Box3ExpandByObjectParams (a, Bool)
expandByObject :: (Box3ExpandByObjectParams a, ToArgs a) => Method Box3 a Box3
expandByObject = method "expandByObject"

expandByPoint :: Method Box3 Vector3 Box3
expandByPoint = method "expandByPoint"

expandByScalar :: Method Box3 Double Box3
expandByScalar = method "expandByScalar"

expandByVector :: Method Box3 Vector3 Box3
expandByVector = method "expandByVector"

getBoundingSphere :: Method Box3 Sphere Sphere
getBoundingSphere = method "getBoundingSphere"

getCenter :: Method Box3 Vector3 Vector3
getCenter = method "getCenter"

getParameter :: Method Box3 (Vector3, Vector3) Vector3
getParameter = method "getParameter"

getSize :: Method Box3 Vector3 Vector3
getSize = method "getSize"

intersect :: Method Box3 Box3 Box3
intersect = method "intersect"

intersectsBox :: Method Box3 Box3 Bool
intersectsBox = method "intersectsBox"

intersectsPlane :: Method Box3 Plane Bool
intersectsPlane = method "intersectsPlane"

intersectsSphere :: Method Box3 Sphere Bool
intersectsSphere = method "intersectsSphere"

intersectsTriangle :: Method Box3 Triangle Bool
intersectsTriangle = method "intersectsTriangle"

isEmpty :: Method Box3 () Bool
isEmpty = method "isEmpty"

makeEmpty :: Method Box3 () Box3
makeEmpty = method "makeEmpty"

set :: Method Box3 (Vector3, Vector3) Box3
set = method "set"

setFromArray :: Method Box3 [Double] Box3
setFromArray = method "setFromArray"

setFromBufferAttribute :: Method Box3 BufferAttribute Box3
setFromBufferAttribute = method "setFromBufferAttribute"

setFromCenterAndSize :: Method Box3 (Vector3, Vector3) Box3
setFromCenterAndSize = method "setFromCenterAndSize"

class Box3SetFromObjectParams a
instance Object3D a => Box3SetFromObjectParams a
instance Object3D a => Box3SetFromObjectParams (a, Bool)
setFromObject :: (Box3SetFromObjectParams a, ToArgs a) => Method Box3 a Box3
setFromObject = method "setFromObject"

setFromPoints :: Method Box3 [Vector3] Box3
setFromPoints = method "setFromPoints"

translate :: Method Box3 Vector3 Box3
translate = method "translate"

union :: Method Box3 Vector3 Box3
union = method "union"

-----------------------------------------------------------------------------
