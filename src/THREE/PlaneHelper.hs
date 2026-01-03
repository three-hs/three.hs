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
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PlaneHelper
newtype PlaneHelper
  = PlaneHelper
  { unPlaneHelperCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PlaneHelper
new :: THREE.Three PlaneHelper
new = THREE.new PlaneHelper "PlaneHelper" ([] :: [MisoString])
-----------------------------------------------------------------------------
