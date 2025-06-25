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
new :: THREE.Three WebGLRenderTarget
new = THREE.new WebGLRenderTarget "WebGLRenderTarget" ([] :: [JSString])
-----------------------------------------------------------------------------
