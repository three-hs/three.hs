-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DirectionalLightHelper
  ( -- * Types
    DirectionalLightHelper (..)
    -- * Methods
  , newDirectionalLightHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DirectionalLightHelper
newtype DirectionalLightHelper
  = DirectionalLightHelper
  { unDirectionalLightHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DirectionalLightHelper
newDirectionalLightHelper :: JSM DirectionalLightHelper
newDirectionalLightHelper = THREE.new DirectionalLightHelper "DirectionalLightHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
