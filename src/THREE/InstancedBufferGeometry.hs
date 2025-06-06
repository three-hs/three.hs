-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InstancedBufferGeometry
  ( -- * Types
    InstancedBufferGeometry (..)
    -- * Methods
  , newInstancedBufferGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/InstancedBufferGeometry
newtype InstancedBufferGeometry
  = InstancedBufferGeometry
  { unInstancedBufferGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/InstancedBufferGeometry
newInstancedBufferGeometry :: JSM InstancedBufferGeometry
newInstancedBufferGeometry = THREE.new InstancedBufferGeometry "InstancedBufferGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
