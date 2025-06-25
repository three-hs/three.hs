-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WebGLProgram
  ( -- * Types
    WebGLProgram (..)
    -- * Methods
  , THREE.WebGLProgram.new
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
new :: THREE.Three WebGLProgram
new = THREE.new WebGLProgram "WebGLProgram" ([] :: [JSString])
-----------------------------------------------------------------------------
