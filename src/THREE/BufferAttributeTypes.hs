-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BufferAttributeTypes
  ( -- * Types
    BufferAttributeTypes (..)
    -- * Methods
  , newBufferAttributeTypes
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferAttributeTypes
newtype BufferAttributeTypes
  = BufferAttributeTypes
  { unBufferAttributeTypesCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferAttributeTypes
newBufferAttributeTypes :: JSM BufferAttributeTypes
newBufferAttributeTypes = THREE.new BufferAttributeTypes "BufferAttributeTypes" ([] :: [JSString])
-----------------------------------------------------------------------------
