-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AxesHelper
  ( -- * Types
    AxesHelper (..)
    -- * Methods
  , newAxesHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AxesHelper
newtype AxesHelper
  = AxesHelper
  { unAxesHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AxesHelper
newAxesHelper :: JSM AxesHelper
newAxesHelper = THREE.new AxesHelper "AxesHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
