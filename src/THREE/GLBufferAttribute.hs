-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.GLBufferAttribute
  ( -- * Types
    GLBufferAttribute (..)
    -- * Methods
  , newGLBufferAttribute
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/GLBufferAttribute
newtype GLBufferAttribute
  = GLBufferAttribute
  { unGLBufferAttributeCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/GLBufferAttribute
newGLBufferAttribute :: JSM GLBufferAttribute
newGLBufferAttribute = THREE.new GLBufferAttribute "GLBufferAttribute" ([] :: [JSString])
-----------------------------------------------------------------------------
