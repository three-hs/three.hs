-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.RingGeometry
  ( -- * Types
    RingGeometry (..)
    -- * Methods
  , newRingGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/RingGeometry
newtype RingGeometry
  = RingGeometry
  { unRingGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/RingGeometry
newRingGeometry :: JSM RingGeometry
newRingGeometry = THREE.new RingGeometry "RingGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
