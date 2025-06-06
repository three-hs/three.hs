-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLRenderTarget
  ( -- * Types
    WebGLRenderTarget (..)
    -- * Methods
  , newWebGLRenderTarget
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebGLRenderTarget
newtype WebGLRenderTarget
  = WebGLRenderTarget
  { unWebGLRenderTargetCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebGLRenderTarget
newWebGLRenderTarget :: JSM WebGLRenderTarget
newWebGLRenderTarget = THREE.new WebGLRenderTarget "WebGLRenderTarget" ([] :: [JSString])
-----------------------------------------------------------------------------
