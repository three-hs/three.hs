-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PlaneHelper
  ( -- * Types
    PlaneHelper (..)
    -- * Methods
  , newPlaneHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PlaneHelper
newtype PlaneHelper
  = PlaneHelper
  { unPlaneHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PlaneHelper
newPlaneHelper :: JSM PlaneHelper
newPlaneHelper = THREE.new PlaneHelper "PlaneHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
