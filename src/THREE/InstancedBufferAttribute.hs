-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InstancedBufferAttribute
  ( -- * Types
    InstancedBufferAttribute (..)
    -- * Methods
  , newInstancedBufferAttribute
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/InstancedBufferAttribute
newtype InstancedBufferAttribute
  = InstancedBufferAttribute
  { unInstancedBufferAttributeCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/InstancedBufferAttribute
newInstancedBufferAttribute :: JSM InstancedBufferAttribute
newInstancedBufferAttribute = THREE.new InstancedBufferAttribute "InstancedBufferAttribute" ([] :: [JSString])
-----------------------------------------------------------------------------
