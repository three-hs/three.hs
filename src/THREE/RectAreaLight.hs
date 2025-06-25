-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.RectAreaLight
  ( -- * Types
    RectAreaLight (..)
    -- * Methods
  , THREE.RectAreaLight.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/RectAreaLight
newtype RectAreaLight
  = RectAreaLight
  { unRectAreaLightCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/RectAreaLight
new :: THREE.Three RectAreaLight
new = THREE.new RectAreaLight "RectAreaLight" ([] :: [JSString])
-----------------------------------------------------------------------------
