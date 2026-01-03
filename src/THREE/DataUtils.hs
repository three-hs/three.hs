-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DataUtils
  ( -- * Types
    DataUtils (..)
    -- * Methods
  , THREE.DataUtils.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DataUtils
newtype DataUtils
  = DataUtils
  { unDataUtilsCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DataUtils
new :: THREE.Three DataUtils
new = THREE.new DataUtils "DataUtils" ([] :: [MisoString])
-----------------------------------------------------------------------------
