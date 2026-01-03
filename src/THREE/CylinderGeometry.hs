-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CylinderGeometry
  ( -- * Types
    CylinderGeometry (..)
    -- * Methods
  , THREE.CylinderGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CylinderGeometry
newtype CylinderGeometry
  = CylinderGeometry
  { unCylinderGeometryCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CylinderGeometry
new :: THREE.Three CylinderGeometry
new = THREE.new CylinderGeometry "CylinderGeometry" ([] :: [MisoString])
-----------------------------------------------------------------------------
