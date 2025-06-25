-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.RawShaderMaterial
  ( -- * Types
    RawShaderMaterial (..)
    -- * Methods
  , THREE.RawShaderMaterial.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/RawShaderMaterial
newtype RawShaderMaterial
  = RawShaderMaterial
  { unRawShaderMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/RawShaderMaterial
new :: THREE.Three RawShaderMaterial
new = THREE.new RawShaderMaterial "RawShaderMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
