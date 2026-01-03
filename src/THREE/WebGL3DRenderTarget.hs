-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGL3DRenderTarget
  ( -- * Types
    WebGL3DRenderTarget (..)
    -- * Methods
  , THREE.WebGL3DRenderTarget.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebGL3DRenderTarget
newtype WebGL3DRenderTarget
  = WebGL3DRenderTarget
  { unWebGL3DRenderTargetCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebGL3DRenderTarget
new :: THREE.Three WebGL3DRenderTarget
new = THREE.new WebGL3DRenderTarget "WebGL3DRenderTarget" ([] :: [MisoString])
-----------------------------------------------------------------------------
