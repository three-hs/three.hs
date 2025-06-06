-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BufferAttribute
  ( -- * Types
    BufferAttribute (..)
    -- * Methods
  , newBufferAttribute
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferAttribute
newtype BufferAttribute
  = BufferAttribute
  { unBufferAttributeCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferAttribute
newBufferAttribute :: JSM BufferAttribute
newBufferAttribute = THREE.new BufferAttribute "BufferAttribute" ([] :: [JSString])
-----------------------------------------------------------------------------
