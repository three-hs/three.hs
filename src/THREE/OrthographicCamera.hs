-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.OrthographicCamera
  ( -- * Types
    OrthographicCamera (..)
    -- * Methods
  , THREE.OrthographicCamera.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/OrthographicCamera
newtype OrthographicCamera
  = OrthographicCamera
  { unOrthographicCameraCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/OrthographicCamera
new :: THREE.Three OrthographicCamera
new = THREE.new OrthographicCamera "OrthographicCamera" ([] :: [MisoString])
-----------------------------------------------------------------------------
