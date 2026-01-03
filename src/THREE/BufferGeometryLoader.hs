-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BufferGeometryLoader
  ( -- * Types
    BufferGeometryLoader (..)
    -- * Methods
  , THREE.BufferGeometryLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferGeometryLoader
newtype BufferGeometryLoader
  = BufferGeometryLoader
  { unBufferGeometryLoaderCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferGeometryLoader
new :: THREE.Three BufferGeometryLoader
new = THREE.new BufferGeometryLoader "BufferGeometryLoader" ([] :: [MisoString])
-----------------------------------------------------------------------------
