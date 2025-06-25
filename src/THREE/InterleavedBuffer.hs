-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InterleavedBuffer
  ( -- * Types
    InterleavedBuffer (..)
    -- * Methods
  , THREE.InterleavedBuffer.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/InterleavedBuffer
newtype InterleavedBuffer
  = InterleavedBuffer
  { unInterleavedBufferCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/InterleavedBuffer
new :: THREE.Three InterleavedBuffer
new = THREE.new InterleavedBuffer "InterleavedBuffer" ()
-----------------------------------------------------------------------------
