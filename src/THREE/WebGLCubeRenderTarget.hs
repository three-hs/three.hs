-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLCubeRenderTarget
  ( -- * Types
    WebGLCubeRenderTarget (..)
    -- * Methods
  , newWebGLCubeRenderTarget
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebGLCubeRenderTarget
newtype WebGLCubeRenderTarget
  = WebGLCubeRenderTarget
  { unWebGLCubeRenderTargetCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebGLCubeRenderTarget
newWebGLCubeRenderTarget :: JSM WebGLCubeRenderTarget
newWebGLCubeRenderTarget = THREE.new WebGLCubeRenderTarget "WebGLCubeRenderTarget" ([] :: [JSString])
-----------------------------------------------------------------------------
