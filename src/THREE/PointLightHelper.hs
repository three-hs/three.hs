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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PointLightHelper
newtype PointLightHelper
  = PointLightHelper
  { unPointLightHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PointLightHelper
new :: THREE.Three PointLightHelper
new = THREE.new PointLightHelper "PointLightHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
