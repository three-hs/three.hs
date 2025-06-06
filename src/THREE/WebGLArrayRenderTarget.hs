-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLArrayRenderTarget
  ( -- * Types
    WebGLArrayRenderTarget (..)
    -- * Methods
  , newWebGLArrayRenderTarget
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebGLArrayRenderTarget
newtype WebGLArrayRenderTarget
  = WebGLArrayRenderTarget
  { unWebGLArrayRenderTargetCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebGLArrayRenderTarget
newWebGLArrayRenderTarget :: JSM WebGLArrayRenderTarget
newWebGLArrayRenderTarget = THREE.new WebGLArrayRenderTarget "WebGLArrayRenderTarget" ([] :: [JSString])
-----------------------------------------------------------------------------
