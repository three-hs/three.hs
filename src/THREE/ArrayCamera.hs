-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ArrayCamera
  ( -- * Types
    ArrayCamera (..)
    -- * Methods
  , newArrayCamera
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ArrayCamera
newtype ArrayCamera
  = ArrayCamera
  { unArrayCameraCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ArrayCamera
newArrayCamera :: JSM ArrayCamera
newArrayCamera = THREE.new ArrayCamera "ArrayCamera" ([] :: [JSString])
-----------------------------------------------------------------------------
