-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BufferGeometryLoader
  ( -- * Types
    BufferGeometryLoader (..)
    -- * Methods
  , newBufferGeometryLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferGeometryLoader
newtype BufferGeometryLoader
  = BufferGeometryLoader
  { unBufferGeometryLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferGeometryLoader
newBufferGeometryLoader :: JSM BufferGeometryLoader
newBufferGeometryLoader = THREE.new BufferGeometryLoader "BufferGeometryLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
