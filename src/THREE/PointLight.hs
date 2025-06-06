-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PointLight
  ( -- * Types
    PointLight (..)
    -- * Methods
  , newPointLight
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PointLight
newtype PointLight
  = PointLight
  { unPointLightCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PointLight
newPointLight :: JSM PointLight
newPointLight = THREE.new PointLight "PointLight" ([] :: [JSString])
-----------------------------------------------------------------------------
