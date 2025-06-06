-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGL3DRenderTarget
  ( -- * Types
    WebGL3DRenderTarget (..)
    -- * Methods
  , newWebGL3DRenderTarget
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebGL3DRenderTarget
newtype WebGL3DRenderTarget
  = WebGL3DRenderTarget
  { unWebGL3DRenderTargetCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebGL3DRenderTarget
newWebGL3DRenderTarget :: JSM WebGL3DRenderTarget
newWebGL3DRenderTarget = THREE.new WebGL3DRenderTarget "WebGL3DRenderTarget" ([] :: [JSString])
-----------------------------------------------------------------------------
