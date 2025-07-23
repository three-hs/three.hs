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
  , onBeforeCompileMaterial
  , onBeforeRenderMaterial
  ) where
-----------------------------------------------------------------------------
import Control.Monad (void)
import Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import THREE.BufferGeometry
import THREE.Camera
import THREE.Group
import THREE.Internal as THREE
import THREE.Material
import THREE.Object3D
import THREE.Scene
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/renderers/WebGLRenderer
newtype WebGLRenderer
  = WebGLRenderer
  { unWebGLRenderer :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
-----------------------------------------------------------------------------
instance FromJSVal WebGLRenderer where
  fromJSVal = pure . pure . WebGLRenderer
-----------------------------------------------------------------------------
new :: Maybe JSVal -> Three WebGLRenderer
new Nothing = THREE.new WebGLRenderer "WebGLRenderer" ()
new (Just canvasRef) = do
  o <- create
  setProp "canvas" canvasRef o
  THREE.new WebGLRenderer "WebGLRenderer" o
-----------------------------------------------------------------------------
-- | The WebGLRenderer constructor creates a canvas element which can be added
-- in the DOM.
domElement :: Property WebGLRenderer JSVal
domElement = property "domElement"
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
-- | https://threejs.org/docs/#api/en/materials/Material.onBeforeCompile
-- 
-- Wraps Material.onBeforeCompile.
onBeforeCompileMaterial :: Material material => Method material (Object, WebGLRenderer) ()
onBeforeCompileMaterial = method "onBeforeCompile" 
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/Material.onBeforeRender
--
-- Wraps Material.onBeforeRender.
-- Not to be confused with Object3D.onBeforeRender.
onBeforeRenderMaterial
  :: (Material material, Camera camera, BufferGeometryClass geometry, Object3D object) 
  => Method material (WebGLRenderer, Scene, camera, geometry, object, Group) ()
onBeforeRenderMaterial = method "onBeforeRender" 
-----------------------------------------------------------------------------
