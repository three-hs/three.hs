-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLRenderer
  ( -- * Types
    WebGLRenderer (..)
    -- * Methods
  , new
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/?q=webgl#api/en/renderers/WebGLRenderer
newtype WebGLRenderer
  = WebGLRenderer
  { unWebGLRenderer :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
new :: JSM WebGLRenderer
new = THREE.new WebGLRenderer "WebGLRenderer" ([] :: [JSString])
-----------------------------------------------------------------------------
