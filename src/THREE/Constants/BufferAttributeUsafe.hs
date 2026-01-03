-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.BufferAttributeUsafe
  ( -- * Types
    BufferAttributeUsafe (..)
    -- * Methods
  , THREE.Constants.BufferAttributeUsafe.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferAttributeUsafe
newtype BufferAttributeUsafe
  = BufferAttributeUsafe
  { unBufferAttributeUsafeCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferAttributeUsafe
new :: THREE.Three BufferAttributeUsafe
new = THREE.new BufferAttributeUsafe "BufferAttributeUsafe" ([] :: [MisoString])
-----------------------------------------------------------------------------
