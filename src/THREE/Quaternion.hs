-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Quaternion
  ( -- * Types
    Quaternion (..)
    -- * Methods
  , newQuaternion
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Quaternion
newtype Quaternion
  = Quaternion
  { unQuaternionCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Quaternion
newQuaternion :: JSM Quaternion
newQuaternion = THREE.new Quaternion "Quaternion" ([] :: [JSString])
-----------------------------------------------------------------------------
