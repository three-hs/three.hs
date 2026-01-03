-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AxesHelper
  ( -- * Types
    AxesHelper (..)
    -- * Methods
  , THREE.AxesHelper.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AxesHelper
newtype AxesHelper
  = AxesHelper
  { unAxesHelperCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AxesHelper
new :: THREE.Three AxesHelper
new = THREE.new AxesHelper "AxesHelper" ([] :: [MisoString])
-----------------------------------------------------------------------------
