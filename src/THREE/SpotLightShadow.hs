-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SpotLightShadow
  ( -- * Types
    SpotLightShadow (..)
    -- * Methods
  , THREE.SpotLightShadow.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SpotLightShadow
newtype SpotLightShadow
  = SpotLightShadow
  { unSpotLightShadowCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SpotLightShadow
new :: THREE.Three SpotLightShadow
new = THREE.new SpotLightShadow "SpotLightShadow" ([] :: [JSString])
-----------------------------------------------------------------------------
