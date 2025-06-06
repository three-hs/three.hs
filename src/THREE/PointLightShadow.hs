-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PointLightShadow
  ( -- * Types
    PointLightShadow (..)
    -- * Methods
  , newPointLightShadow
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PointLightShadow
newtype PointLightShadow
  = PointLightShadow
  { unPointLightShadowCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PointLightShadow
newPointLightShadow :: JSM PointLightShadow
newPointLightShadow = THREE.new PointLightShadow "PointLightShadow" ([] :: [JSString])
-----------------------------------------------------------------------------
