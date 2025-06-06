-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.OctahedronGeometry
  ( -- * Types
    OctahedronGeometry (..)
    -- * Methods
  , newOctahedronGeometry
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
newOctahedronGeometry :: JSM OctahedronGeometry
newOctahedronGeometry = THREE.new OctahedronGeometry "OctahedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
