-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BufferGeometry
  ( -- * Types
    BufferGeometry (..)
    -- * Methods
  , newBufferGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferGeometry
newtype BufferGeometry
  = BufferGeometry
  { unBufferGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferGeometry
newBufferGeometry :: JSM BufferGeometry
newBufferGeometry = THREE.new BufferGeometry "BufferGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
