-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PointLightHelper
  ( -- * Types
    PointLightHelper (..)
    -- * Methods
  , newPointLightHelper
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
newPointLightHelper :: JSM PointLightHelper
newPointLightHelper = THREE.new PointLightHelper "PointLightHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
