-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShadowMaterial
  ( -- * Types
    ShadowMaterial (..)
    -- * Methods
  , newShadowMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShadowMaterial
newtype ShadowMaterial
  = ShadowMaterial
  { unShadowMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShadowMaterial
newShadowMaterial :: JSM ShadowMaterial
newShadowMaterial = THREE.new ShadowMaterial "ShadowMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
