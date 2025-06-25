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
new :: THREE.Three Quaternion
new = THREE.new Quaternion "Quaternion" ([] :: [JSString])
-----------------------------------------------------------------------------
