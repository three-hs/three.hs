-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLArrayRenderTarget
  ( -- * Types
    WebGLArrayRenderTarget (..)
    -- * Methods
  , THREE.WebGLArrayRenderTarget.new
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
new :: THREE.Three WebGLArrayRenderTarget
new = THREE.new WebGLArrayRenderTarget "WebGLArrayRenderTarget" ([] :: [JSString])
-----------------------------------------------------------------------------
