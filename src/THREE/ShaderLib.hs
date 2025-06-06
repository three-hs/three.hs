-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShaderLib
  ( -- * Types
    ShaderLib (..)
    -- * Methods
  , newShaderLib
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
newShaderLib :: JSM ShaderLib
newShaderLib = THREE.new ShaderLib "ShaderLib" ([] :: [JSString])
-----------------------------------------------------------------------------
