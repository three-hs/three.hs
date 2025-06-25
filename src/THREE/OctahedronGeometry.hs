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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/OctahedronGeometry
newtype OctahedronGeometry
  = OctahedronGeometry
  { unOctahedronGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/OctahedronGeometry
new :: THREE.Three OctahedronGeometry
new = THREE.new OctahedronGeometry "OctahedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
