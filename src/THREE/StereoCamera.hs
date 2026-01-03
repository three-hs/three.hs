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
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/StereoCamera
newtype StereoCamera
  = StereoCamera
  { unStereoCameraCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/StereoCamera
new :: THREE.Three StereoCamera
new = THREE.new StereoCamera "StereoCamera" ([] :: [MisoString])
-----------------------------------------------------------------------------
