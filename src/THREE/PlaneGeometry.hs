-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PlaneGeometry
  ( -- * Types
    PlaneGeometry (..)
    -- * Methods
  , THREE.PlaneGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PlaneGeometry
newtype PlaneGeometry
  = PlaneGeometry
  { unPlaneGeometryCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PlaneGeometry
new :: THREE.Three PlaneGeometry
new = THREE.new PlaneGeometry "PlaneGeometry" ([] :: [MisoString])
-----------------------------------------------------------------------------
