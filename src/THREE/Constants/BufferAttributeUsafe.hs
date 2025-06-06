-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.BufferAttributeUsafe
  ( -- * Types
    BufferAttributeUsafe (..)
    -- * Methods
  , newBufferAttributeUsafe
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferAttributeUsafe
newtype BufferAttributeUsafe
  = BufferAttributeUsafe
  { unBufferAttributeUsafeCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferAttributeUsafe
newBufferAttributeUsafe :: JSM BufferAttributeUsafe
newBufferAttributeUsafe = THREE.new BufferAttributeUsafe "BufferAttributeUsafe" ([] :: [JSString])
-----------------------------------------------------------------------------
