-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
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
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Object3D, EventDispatcher, Camera)
-----------------------------------------------------------------------------
new
  :: (Double, Double, Double, Double)
  -- ^ Field of View, Aspect, Near, Far
  -> THREE.Three PerspectiveCamera
new = THREE.new PerspectiveCamera "PerspectiveCamera"
-----------------------------------------------------------------------------
