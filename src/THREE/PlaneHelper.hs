-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PlaneHelper
  ( -- * Types
    PlaneHelper (..)
    -- * Methods
  , THREE.PlaneHelper.new
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
new :: THREE.Three PlaneHelper
new = THREE.new PlaneHelper "PlaneHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
