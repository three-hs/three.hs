-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShaderLib
  ( -- * Types
    ShaderLib (..)
    -- * Methods
  , THREE.ShaderLib.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShaderLib
newtype ShaderLib
  = ShaderLib
  { unShaderLibCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShaderLib
new :: THREE.Three ShaderLib
new = THREE.new ShaderLib "ShaderLib" ([] :: [JSString])
-----------------------------------------------------------------------------
