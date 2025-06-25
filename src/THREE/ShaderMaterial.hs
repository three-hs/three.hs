-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShaderMaterial
  ( -- * Types
    ShaderMaterial (..)
    -- * Methods
  , THREE.ShaderMaterial.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShaderMaterial
newtype ShaderMaterial
  = ShaderMaterial
  { unShaderMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShaderMaterial
new :: THREE.Three ShaderMaterial
new = THREE.new ShaderMaterial "ShaderMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
