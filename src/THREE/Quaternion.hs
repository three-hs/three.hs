-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Quaternion
  ( -- * Types
    Quaternion (..)
    -- * Methods
  , THREE.Quaternion.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Quaternion
newtype Quaternion
  = Quaternion
  { unQuaternionCamera :: JSVal
  } deriving (ToJSVal, ToObject, ToArgs)
-----------------------------------------------------------------------------
instance FromJSVal Quaternion where
  fromJSVal = pure . pure . Quaternion
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Quaternion
new :: THREE.Three Quaternion
new = THREE.new Quaternion "Quaternion" ([] :: [MisoString])
-----------------------------------------------------------------------------
