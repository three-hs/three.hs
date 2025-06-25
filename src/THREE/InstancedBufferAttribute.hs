-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.InstancedBufferAttribute
  ( -- * Types
    InstancedBufferAttribute (..)
    -- * Methods
  , THREE.InstancedBufferAttribute.new
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
new :: THREE.Three InstancedBufferAttribute
new = THREE.new InstancedBufferAttribute "InstancedBufferAttribute" ([] :: [JSString])
-----------------------------------------------------------------------------
