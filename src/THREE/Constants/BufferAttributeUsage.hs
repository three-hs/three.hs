-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.BufferAttributeUsage
  ( -- * Types
    BufferAttributeUsage (..)
    -- * Methods
  , THREE.Constants.BufferAttributeUsage.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferAttributeUsage
newtype BufferAttributeUsage
  = BufferAttributeUsage
  { unBufferAttributeUsageCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferAttributeUsage
new :: THREE.Three BufferAttributeUsage
new = THREE.new BufferAttributeUsage "BufferAttributeUsage" ([] :: [MisoString])
-----------------------------------------------------------------------------
