-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.HemisphereLightHelper
  ( -- * Types
    HemisphereLightHelper (..)
    -- * Methods
  , newHemisphereLightHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/HemisphereLightHelper
newtype HemisphereLightHelper
  = HemisphereLightHelper
  { unHemisphereLightHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/HemisphereLightHelper
newHemisphereLightHelper :: JSM HemisphereLightHelper
newHemisphereLightHelper = THREE.new HemisphereLightHelper "HemisphereLightHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
