-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DirectionalLightShadow
  ( -- * Types
    DirectionalLightShadow (..)
    -- * Methods
  , THREE.DirectionalLightShadow.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DirectionalLightShadow
newtype DirectionalLightShadow
  = DirectionalLightShadow
  { unDirectionalLightShadowCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DirectionalLightShadow
new :: THREE.Three DirectionalLightShadow
new = THREE.new DirectionalLightShadow "DirectionalLightShadow" ([] :: [JSString])
-----------------------------------------------------------------------------
