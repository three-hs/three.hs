-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BufferAttributeTypes
  ( -- * Types
    BufferAttributeTypes (..)
    -- * Methods
  , THREE.BufferAttributeTypes.new
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
new :: THREE.Three BufferAttributeTypes
new = THREE.new BufferAttributeTypes "BufferAttributeTypes" ([] :: [JSString])
-----------------------------------------------------------------------------
