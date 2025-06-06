-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.RawShaderMaterial
  ( -- * Types
    RawShaderMaterial (..)
    -- * Methods
  , newRawShaderMaterial
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
newRawShaderMaterial :: JSM RawShaderMaterial
newRawShaderMaterial = THREE.new RawShaderMaterial "RawShaderMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
