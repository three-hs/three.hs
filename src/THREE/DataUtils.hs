-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DataUtils
  ( -- * Types
    DataUtils (..)
    -- * Methods
  , newDataUtils
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DataUtils
newtype DataUtils
  = DataUtils
  { unDataUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DataUtils
newDataUtils :: JSM DataUtils
newDataUtils = THREE.new DataUtils "DataUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
