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
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SpotLightHelper
newtype SpotLightHelper
  = SpotLightHelper
  { unSpotLightHelperCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SpotLightHelper
new :: THREE.Three SpotLightHelper
new = THREE.new SpotLightHelper "SpotLightHelper" ([] :: [MisoString])
-----------------------------------------------------------------------------
