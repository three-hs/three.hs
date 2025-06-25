-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShadowMaterial
  ( -- * Types
    ShadowMaterial (..)
    -- * Methods
  , THREE.ShadowMaterial.new
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
new :: THREE.Three ShadowMaterial
new = THREE.new ShadowMaterial "ShadowMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
