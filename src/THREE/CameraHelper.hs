-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CameraHelper
  ( -- * Types
    CameraHelper (..)
    -- * Methods
  , THREE.CameraHelper.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CameraHelper
newtype CameraHelper
  = CameraHelper
  { unCameraHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CameraHelper
new :: THREE.Three CameraHelper
new = THREE.new CameraHelper "CameraHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
