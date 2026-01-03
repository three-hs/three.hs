-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebXRManager
  ( -- * Types
    WebXRManager (..)
    -- * Methods
  , THREE.WebXRManager.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebXRManager
newtype WebXRManager
  = WebXRManager
  { unWebXRManagerCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebXRManager
new :: THREE.Three WebXRManager
new = THREE.new WebXRManager "WebXRManager" ([] :: [MisoString])
-----------------------------------------------------------------------------
