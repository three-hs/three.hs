-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DirectionalLightHelper
  ( -- * Types
    DirectionalLightHelper (..)
    -- * Methods
  , THREE.DirectionalLightHelper.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DirectionalLightHelper
newtype DirectionalLightHelper
  = DirectionalLightHelper
  { unDirectionalLightHelperCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DirectionalLightHelper
new :: THREE.Three DirectionalLightHelper
new = THREE.new DirectionalLightHelper "DirectionalLightHelper" ([] :: [MisoString])
-----------------------------------------------------------------------------
