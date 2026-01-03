-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Box2
  ( -- * Types
    Box2 (..)
    -- * Methods
  , THREE.Box2.new
    -- * Properties
  , isBox2
  , THREE.Box2.min
  , THREE.Box2.max
    -- * Methods
  , clampPoint
  , clone
  , containsBox
  , containsPoint
  , copy
  , distanceToPoint
  , equals
  , expandByPoint
  , expandByScalar
  , expandByVector
  , getCenter
  , getParameter
  , getSize
  , intersect
  , intersectsBox
  , isEmpty
  , makeEmpty
  , set
  , setFromCenterAndSize
  , setFromPoints
  , translate
  , union
  ) where
-----------------------------------------------------------------------------
import           Miso hiding (set)
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
import           THREE.Vector2
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/math/Box2
newtype Box2
  = Box2
  { unBox2 :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
-----------------------------------------------------------------------------
instance FromJSVal Box2 where
  fromJSVal = pure . pure . Box2
-----------------------------------------------------------------------------
class Box2NewParams a
instance Box2NewParams ()
instance Box2NewParams Vector2
instance Box2NewParams (Vector2, Vector2)
new :: (Box2NewParams a, ToArgs a) => a -> THREE.Three Box2
new = THREE.new Box2 "Box2"
-----------------------------------------------------------------------------

isBox2 :: ReadOnly Box2 Bool
isBox2 = readonly "isBox2" 

min :: Property Box2 Vector2
min = property "min" 

max :: Property Box2 Vector2
max = property "max" 

-----------------------------------------------------------------------------

clampPoint :: Method Box2 (Vector2, Vector2) Vector2
clampPoint = method "clampPoint"

clone :: Method Box2 () Box2
clone = method "clone"

containsBox :: Method Box2 Box2 Bool
containsBox = method "containsBox"

containsPoint :: Method Box2 Vector2 Bool
containsPoint = method "containsPoint"

copy :: Method Box2 Box2 Box2
copy = method "copy"

distanceToPoint :: Method Box2 Vector2 Double
distanceToPoint = method "distanceToPoint"

equals :: Method Box2 Box2 Bool
equals = method "equals"

expandByPoint :: Method Box2 Vector2 Box2
expandByPoint = method "expandByPoint"

expandByScalar :: Method Box2 Double Box2
expandByScalar = method "expandByScalar"

expandByVector :: Method Box2 Vector2 Box2
expandByVector = method "expandByVector"

getCenter :: Method Box2 Vector2 Vector2
getCenter = method "getCenter"

getParameter :: Method Box2 (Vector2, Vector2) Vector2
getParameter = method "getParameter"

getSize :: Method Box2 Vector2 Vector2
getSize = method "getSize"

intersect :: Method Box2 Box2 Box2
intersect = method "intersect"

intersectsBox :: Method Box2 Box2 Bool
intersectsBox = method "intersectsBox"

isEmpty :: Method Box2 () Bool
isEmpty = method "isEmpty"

makeEmpty :: Method Box2 () Box2
makeEmpty = method "makeEmpty"

set :: Method Box2 (Vector2, Vector2) Box2
set = method "set"

setFromCenterAndSize :: Method Box2 (Vector2, Vector2) Box2
setFromCenterAndSize = method "setFromCenterAndSize"

setFromPoints :: Method Box2 [Vector2] Box2
setFromPoints = method "setFromPoints"

translate :: Method Box2 Vector2 Box2
translate = method "translate"

union :: Method Box2 Vector2 Box2
union = method "union"

-----------------------------------------------------------------------------
