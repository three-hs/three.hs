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
new :: THREE.Three RingGeometry
new = THREE.new RingGeometry "RingGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
