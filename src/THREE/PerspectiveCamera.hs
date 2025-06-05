-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PerspectiveCamera
  ( -- * Types
    PerspectiveCamera (..)
    -- * Methods
  , new
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
newtype PerspectiveCamera
  = PerspectiveCamera
  { unPerspectiveCameraCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
new :: JSM PerspectiveCamera
new = THREE.new PerspectiveCamera "PerspectiveCamera" ([] :: [JSString])
-----------------------------------------------------------------------------
