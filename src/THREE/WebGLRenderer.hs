-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.WebGLRenderer
  ( -- * Types
    WebGLRenderer (..)
    -- * Constructors
  , THREE.WebGLRenderer.new
    -- * Read-only Properties
  , domElement
    -- * Properties
    -- * Optional properties
    -- * Methods
  , render
  , setAnimationLoop
  , setSize
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Control.Monad (void)
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Camera as THREE
import           THREE.Internal as THREE
import           THREE.Object3D as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/renderers/WebGLRenderer
newtype WebGLRenderer
  = WebGLRenderer
  { unWebGLRenderer :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new :: JSM WebGLRenderer
new = THREE.new' WebGLRenderer "WebGLRenderer" ()
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
-- | The WebGLRenderer constructor creates a canvas element which can be added
-- in the DOM.
domElement :: WebGLRenderer -> JSM JSVal
domElement (WebGLRenderer v) = v ! ("domElement" :: JSString)
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
render
  :: (ToJSVal a, Object3DC a, ToJSVal b, CameraC b) 
  => WebGLRenderer -> a -> b -> JSM ()
render (WebGLRenderer v) object camera =
  void $ v # ("render" :: JSString) $ (object, camera)
-----------------------------------------------------------------------------
setAnimationLoop :: WebGLRenderer -> JSCallAsFunction -> JSM ()
setAnimationLoop (WebGLRenderer v) f =
  void $  v # ("setAnimationLoop" :: JSString) $ f
-----------------------------------------------------------------------------
setSize :: WebGLRenderer -> Int -> Int -> Bool -> JSM ()
setSize (WebGLRenderer v) width height updateStyle = 
  void $ v # ("setSize" :: JSString) $ (width, height, updateStyle)
-----------------------------------------------------------------------------
-- Helper functions
-----------------------------------------------------------------------------
