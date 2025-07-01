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
import Data.Function ((&))
import Control.Monad (void)
import Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import THREE.Camera as THREE
import THREE.Internal as THREE
import THREE.Object3D as THREE
import qualified THREE.Scene
import qualified THREE.PerspectiveCamera
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/renderers/WebGLRenderer
newtype WebGLRenderer
  = WebGLRenderer
  { unWebGLRenderer :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
-----------------------------------------------------------------------------
new :: Three WebGLRenderer
new = THREE.new WebGLRenderer "WebGLRenderer" ()
-----------------------------------------------------------------------------
-- | The WebGLRenderer constructor creates a canvas element which can be added
-- in the DOM.
domElement :: WebGLRenderer -> JSM JSVal
domElement (WebGLRenderer v) = v ! ("domElement" :: JSString)
-----------------------------------------------------------------------------
rend :: WebGLRenderer
rend = undefined

zz = rend & render (scene, cam)

scene :: THREE.Scene.Scene
scene = undefined

cam :: THREE.PerspectiveCamera.PerspectiveCamera
cam = undefined
-----------------------------------------------------------------------------
render
  :: (Object3D object, Camera camera) 
  => (object, camera)
  -> WebGLRenderer
  -> Three ()
render args (WebGLRenderer v) =
  void $ v # ("render" :: JSString) $ args
-----------------------------------------------------------------------------
setAnimationLoop :: JSCallAsFunction -> WebGLRenderer -> JSM ()
setAnimationLoop f (WebGLRenderer v) =
  void $  v # ("setAnimationLoop" :: JSString) $ f
-----------------------------------------------------------------------------
setSize :: (Int, Int, Bool) -> WebGLRenderer -> JSM ()
setSize (width, height, updateStyle) (WebGLRenderer v) = 
  void $ v # ("setSize" :: JSString) $ (width, height, updateStyle)
-----------------------------------------------------------------------------
