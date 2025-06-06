-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SpotLight
  ( -- * Types
    SpotLight (..)
    -- * Methods
  , newSpotLight
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SpotLight
newtype SpotLight
  = SpotLight
  { unSpotLightCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SpotLight
newSpotLight :: JSM SpotLight
newSpotLight = THREE.new SpotLight "SpotLight" ([] :: [JSString])
-----------------------------------------------------------------------------
