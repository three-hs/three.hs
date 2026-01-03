-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.OctahedronGeometry
  ( -- * Types
    OctahedronGeometry (..)
    -- * Methods
  , THREE.OctahedronGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/OctahedronGeometry
newtype OctahedronGeometry
  = OctahedronGeometry
  { unOctahedronGeometryCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/OctahedronGeometry
new :: THREE.Three OctahedronGeometry
new = THREE.new OctahedronGeometry "OctahedronGeometry" ([] :: [MisoString])
-----------------------------------------------------------------------------
