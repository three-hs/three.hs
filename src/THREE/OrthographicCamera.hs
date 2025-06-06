-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.OrthographicCamera
  ( -- * Types
    OrthographicCamera (..)
    -- * Methods
  , newOrthographicCamera
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/OrthographicCamera
newtype OrthographicCamera
  = OrthographicCamera
  { unOrthographicCameraCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/OrthographicCamera
newOrthographicCamera :: JSM OrthographicCamera
newOrthographicCamera = THREE.new OrthographicCamera "OrthographicCamera" ([] :: [JSString])
-----------------------------------------------------------------------------
