-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SpotLightHelper
  ( -- * Types
    SpotLightHelper (..)
    -- * Methods
  , THREE.SpotLightHelper.new
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
new :: THREE.Three SpotLightHelper
new = THREE.new SpotLightHelper "SpotLightHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
