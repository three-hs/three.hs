-----------------------------------------------------------------------------
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Vector3
  ( -- * Types
    Vector3 (..)
    -- * Constructors
  , THREE.Vector3.new
    -- * Read-only properties
    -- * Properties
  , getX
  , setX
  , modifyX
  , getY
  , setY
  , modifyY
  , getZ
  , setZ
  , modifyZ
    -- * Optional properties
    -- * Methods
  , setXYZ 
    -- * Helper functions
  , vector3ToXYZ
  ) where
-----------------------------------------------------------------------------
import           Control.Monad (void)
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/math/Vector3
newtype Vector3 
  = Vector3
  { unVector3 :: JSVal
  } deriving (MakeObject, ToJSVal, MakeArgs)
-----------------------------------------------------------------------------
instance FromJSVal Vector3 where
  fromJSVal = pure .Just . Vector3
-----------------------------------------------------------------------------
-- constructors
-----------------------------------------------------------------------------
new :: Double -> Double -> Double -> JSM Vector3
new x y z = new' Vector3 "Vector3" (x, y, z)
-----------------------------------------------------------------------------
-- read-only properties
-----------------------------------------------------------------------------
-- properties
-----------------------------------------------------------------------------
getX :: Vector3 -> JSM Double
getX = mkGet "x"
-----------------------------------------------------------------------------
setX :: Double -> Vector3 -> JSM ()
setX = mkSet "x"
-----------------------------------------------------------------------------
modifyX :: (Double -> JSM Double) -> Vector3 -> JSM Double
modifyX = mkModify "x"
-----------------------------------------------------------------------------
getY :: Vector3 -> JSM Double
getY = mkGet "y"
-----------------------------------------------------------------------------
setY :: Double -> Vector3 -> JSM ()
setY = mkSet "y"
-----------------------------------------------------------------------------
modifyY :: (Double -> JSM Double) -> Vector3 -> JSM Double
modifyY = mkModify "y"
-----------------------------------------------------------------------------
getZ :: Vector3 -> JSM Double
getZ = mkGet "z"
-----------------------------------------------------------------------------
setZ :: Double -> Vector3 -> JSM ()
setZ = mkSet "z"
-----------------------------------------------------------------------------
modifyZ :: (Double -> JSM Double) -> Vector3 -> JSM Double
modifyZ = mkModify "z"
-----------------------------------------------------------------------------
-- optional properties
-----------------------------------------------------------------------------
-- methods
-----------------------------------------------------------------------------
setXYZ :: Double -> Double -> Double -> Vector3 -> JSM ()
setXYZ x y z (Vector3 v) = void $ v # ("set" :: JSString) $ (x, y, z)
-----------------------------------------------------------------------------
-- helper functions
-----------------------------------------------------------------------------
vector3ToXYZ :: Vector3 -> JSM (Double, Double, Double)
vector3ToXYZ (Vector3 v) = do
  x <- fromJSValUnchecked =<< v ! ("x" :: JSString)
  y <- fromJSValUnchecked =<< v ! ("y" :: JSString)
  z <- fromJSValUnchecked =<< v ! ("z" :: JSString)
  pure (x, y, z)
-----------------------------------------------------------------------------

