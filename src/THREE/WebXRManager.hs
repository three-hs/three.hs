-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebXRManager
  ( -- * Types
    WebXRManager (..)
    -- * Methods
  , newWebXRManager
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebXRManager
newtype WebXRManager
  = WebXRManager
  { unWebXRManagerCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebXRManager
newWebXRManager :: JSM WebXRManager
newWebXRManager = THREE.new WebXRManager "WebXRManager" ([] :: [JSString])
-----------------------------------------------------------------------------
