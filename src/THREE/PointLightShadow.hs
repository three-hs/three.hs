-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PointLightShadow
  ( -- * Types
    PointLightShadow (..)
    -- * Methods
  , THREE.PointLightShadow.new
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
new :: THREE.Three PointLightShadow
new = THREE.new PointLightShadow "PointLightShadow" ([] :: [JSString])
-----------------------------------------------------------------------------
