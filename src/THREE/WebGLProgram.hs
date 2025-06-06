-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLProgram
  ( -- * Types
    WebGLProgram (..)
    -- * Methods
  , newWebGLProgram
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WebGLProgram
newtype WebGLProgram
  = WebGLProgram
  { unWebGLProgramCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WebGLProgram
newWebGLProgram :: JSM WebGLProgram
newWebGLProgram = THREE.new WebGLProgram "WebGLProgram" ([] :: [JSString])
-----------------------------------------------------------------------------
