-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.BufferAttributeUsage
  ( -- * Types
    BufferAttributeUsage (..)
    -- * Methods
  , newBufferAttributeUsage
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferAttributeUsage
newtype BufferAttributeUsage
  = BufferAttributeUsage
  { unBufferAttributeUsageCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferAttributeUsage
newBufferAttributeUsage :: JSM BufferAttributeUsage
newBufferAttributeUsage = THREE.new BufferAttributeUsage "BufferAttributeUsage" ([] :: [JSString])
-----------------------------------------------------------------------------
