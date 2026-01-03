-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Matrix4
  ( -- * Types
    Matrix4 (..)
    -- * Methods
  , THREE.Matrix4.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Matrix4
newtype Matrix4
  = Matrix4
  { unMatrix4Camera :: JSVal
  } deriving (ToJSVal, ToObject, ToArgs)
-----------------------------------------------------------------------------
instance FromJSVal Matrix4 where
  fromJSVal = pure . pure . Matrix4
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Matrix4
new :: THREE.Three Matrix4
new = THREE.new Matrix4 "Matrix4" ([] :: [MisoString])
-----------------------------------------------------------------------------
