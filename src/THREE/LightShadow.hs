-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LightShadow
  ( -- * Types
    LightShadow (..)
    -- * Methods
  , newLightShadow
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LightShadow
newtype LightShadow
  = LightShadow
  { unLightShadowCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LightShadow
newLightShadow :: JSM LightShadow
newLightShadow = THREE.new LightShadow "LightShadow" ([] :: [JSString])
-----------------------------------------------------------------------------
