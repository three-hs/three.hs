-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLRenderTarget
  ( -- * Types
    WebGLRenderTarget (..)
    -- * Methods
  , THREE.WebGLRenderTarget.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebGLRenderTarget
newtype WebGLRenderTarget
  = WebGLRenderTarget
  { unWebGLRenderTargetCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebGLRenderTarget
new :: THREE.Three WebGLRenderTarget
new = THREE.new WebGLRenderTarget "WebGLRenderTarget" ([] :: [MisoString])
-----------------------------------------------------------------------------
