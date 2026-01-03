-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.GLBufferAttribute
  ( -- * Types
    GLBufferAttribute (..)
    -- * Methods
  , THREE.GLBufferAttribute.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/GLBufferAttribute
newtype GLBufferAttribute
  = GLBufferAttribute
  { unGLBufferAttributeCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/GLBufferAttribute
new :: THREE.Three GLBufferAttribute
new = THREE.new GLBufferAttribute "GLBufferAttribute" ([] :: [MisoString])
-----------------------------------------------------------------------------
