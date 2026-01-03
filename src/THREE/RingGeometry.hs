-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.RingGeometry
  ( -- * Types
    RingGeometry (..)
    -- * Methods
  , THREE.RingGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/RingGeometry
newtype RingGeometry
  = RingGeometry
  { unRingGeometryCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/RingGeometry
new :: THREE.Three RingGeometry
new = THREE.new RingGeometry "RingGeometry" ([] :: [MisoString])
-----------------------------------------------------------------------------
