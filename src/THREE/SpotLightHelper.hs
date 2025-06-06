-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SpotLightHelper
  ( -- * Types
    SpotLightHelper (..)
    -- * Methods
  , newSpotLightHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SpotLightHelper
newtype SpotLightHelper
  = SpotLightHelper
  { unSpotLightHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SpotLightHelper
newSpotLightHelper :: JSM SpotLightHelper
newSpotLightHelper = THREE.new SpotLightHelper "SpotLightHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
