-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLCubeRenderTarget
  ( -- * Types
    WebGLCubeRenderTarget (..)
    -- * Methods
  , THREE.WebGLCubeRenderTarget.new
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
new :: THREE.Three WebGLCubeRenderTarget
new = THREE.new WebGLCubeRenderTarget "WebGLCubeRenderTarget" ([] :: [JSString])
-----------------------------------------------------------------------------
