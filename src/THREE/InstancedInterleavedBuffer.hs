-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InstancedInterleavedBuffer
  ( -- * Types
    InstancedInterleavedBuffer (..)
    -- * Methods
  , newInstancedInterleavedBuffer
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/InstancedInterleavedBuffer
newtype InstancedInterleavedBuffer
  = InstancedInterleavedBuffer
  { unInstancedInterleavedBufferCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/InstancedInterleavedBuffer
newInstancedInterleavedBuffer :: JSM InstancedInterleavedBuffer
newInstancedInterleavedBuffer = THREE.new InstancedInterleavedBuffer "InstancedInterleavedBuffer" ([] :: [JSString])
-----------------------------------------------------------------------------
