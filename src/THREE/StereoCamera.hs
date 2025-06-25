-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.StereoCamera
  ( -- * Types
    StereoCamera (..)
    -- * Methods
  , THREE.StereoCamera.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/StereoCamera
newtype StereoCamera
  = StereoCamera
  { unStereoCameraCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/StereoCamera
new :: THREE.Three StereoCamera
new = THREE.new StereoCamera "StereoCamera" ([] :: [JSString])
-----------------------------------------------------------------------------
