-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CameraHelper
  ( -- * Types
    CameraHelper (..)
    -- * Methods
  , newCameraHelper
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
newCameraHelper :: JSM CameraHelper
newCameraHelper = THREE.new CameraHelper "CameraHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
