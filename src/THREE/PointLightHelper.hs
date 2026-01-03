-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PointLightHelper
  ( -- * Types
    PointLightHelper (..)
    -- * Methods
  , THREE.PointLightHelper.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PointLightHelper
newtype PointLightHelper
  = PointLightHelper
  { unPointLightHelperCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PointLightHelper
new :: THREE.Three PointLightHelper
new = THREE.new PointLightHelper "PointLightHelper" ([] :: [MisoString])
-----------------------------------------------------------------------------
