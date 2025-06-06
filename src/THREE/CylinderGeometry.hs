-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CylinderGeometry
  ( -- * Types
    CylinderGeometry (..)
    -- * Methods
  , newCylinderGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CylinderGeometry
newtype CylinderGeometry
  = CylinderGeometry
  { unCylinderGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CylinderGeometry
newCylinderGeometry :: JSM CylinderGeometry
newCylinderGeometry = THREE.new CylinderGeometry "CylinderGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
