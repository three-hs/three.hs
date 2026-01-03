-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Vector4
  ( -- * Types
    Vector4 (..)
    -- * Methods
  , THREE.Vector4.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Vector4
newtype Vector4
  = Vector4
  { unVector4Camera :: JSVal
  } deriving (ToObject, THREE.X, THREE.Y, THREE.Z, THREE.W)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Vector4
new :: THREE.Three Vector4
new = THREE.new Vector4 "Vector4" ([] :: [MisoString])
-----------------------------------------------------------------------------
