-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.PerspectiveCamera
  ( -- * Types
    PerspectiveCamera (..)
    -- * Constructors
  , THREE.PerspectiveCamera.new
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Camera          as THREE
import           THREE.Internal        as THREE
import           THREE.Object3D        as THREE
import           THREE.EventDispatcher as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
newtype PerspectiveCamera
  = PerspectiveCamera
  { unPerspectiveCamera :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal)
    deriving (Object3D, EventDispatcher, Camera)
-----------------------------------------------------------------------------
new
  :: Double
  -- ^ Field of View
  -> Double
  -- ^ Aspect
  -> Double
  -- ^ Near
  -> Double
  -- ^ Far
  -> THREE.Three PerspectiveCamera
new fov aspect near far =
  THREE.new PerspectiveCamera "PerspectiveCamera"
    (fov, aspect, near, far)
-----------------------------------------------------------------------------
