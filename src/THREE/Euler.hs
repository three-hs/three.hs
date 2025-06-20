-----------------------------------------------------------------------------
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Euler
  ( -- * Types
    Euler (..)
    -- * Constructors
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
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/math/Euler
newtype Euler 
  = Euler
  { unEuler :: JSVal
  } deriving (MakeObject, ToJSVal, MakeArgs)
-----------------------------------------------------------------------------
instance FromJSVal Euler where
  fromJSVal = pure .Just . Euler
-----------------------------------------------------------------------------
-- constructors
-----------------------------------------------------------------------------
-- read-only properties
-----------------------------------------------------------------------------
-- properties
-----------------------------------------------------------------------------
getX :: Euler -> JSM Double
getX = mkGet "x"
-----------------------------------------------------------------------------
setX :: Double -> Euler -> JSM ()
setX = mkSet "x"
-----------------------------------------------------------------------------
modifyX :: (Double -> JSM Double) -> Euler -> JSM Double
modifyX = mkModify "x"
-----------------------------------------------------------------------------
getY :: Euler -> JSM Double
getY = mkGet "y"
-----------------------------------------------------------------------------
setY :: Double -> Euler -> JSM ()
setY = mkSet "y"
-----------------------------------------------------------------------------
modifyY :: (Double -> JSM Double) -> Euler -> JSM Double
modifyY = mkModify "y"
-----------------------------------------------------------------------------
getZ :: Euler -> JSM Double
getZ = mkGet "z"
-----------------------------------------------------------------------------
setZ :: Double -> Euler -> JSM ()
setZ = mkSet "z"
-----------------------------------------------------------------------------
modifyZ :: (Double -> JSM Double) -> Euler -> JSM Double
modifyZ = mkModify "z"
-----------------------------------------------------------------------------
-- optional properties
-----------------------------------------------------------------------------
-- methods
-----------------------------------------------------------------------------
-- helper functions
-----------------------------------------------------------------------------

