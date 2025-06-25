-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShaderChunk
  ( -- * Types
    ShaderChunk (..)
    -- * Methods
  , THREE.ShaderChunk.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShaderChunk
newtype ShaderChunk
  = ShaderChunk
  { unShaderChunkCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShaderChunk
new :: THREE.Three ShaderChunk
new = THREE.new ShaderChunk "ShaderChunk" ([] :: [JSString])
-----------------------------------------------------------------------------
