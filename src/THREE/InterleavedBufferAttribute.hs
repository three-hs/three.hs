-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InterleavedBufferAttribute
  ( -- * Types
    InterleavedBufferAttribute (..)
    -- * Methods
  , THREE.InterleavedBufferAttribute.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/InterleavedBufferAttribute
newtype InterleavedBufferAttribute
  = InterleavedBufferAttribute
  { unInterleavedBufferAttributeCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/InterleavedBufferAttribute
new :: THREE.Three InterleavedBufferAttribute
new = THREE.new InterleavedBufferAttribute "InterleavedBufferAttribute" ()
-----------------------------------------------------------------------------
