-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DirectionalLightShadow
  ( -- * Types
    DirectionalLightShadow (..)
    -- * Methods
  , newDirectionalLightShadow
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
newDirectionalLightShadow :: JSM DirectionalLightShadow
newDirectionalLightShadow = THREE.new DirectionalLightShadow "DirectionalLightShadow" ([] :: [JSString])
-----------------------------------------------------------------------------
