-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WireframeGeometry
  ( -- * Types
    WireframeGeometry (..)
    -- * Methods
  , THREE.WireframeGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WireframeGeometry
newtype WireframeGeometry
  = WireframeGeometry
  { unWireframeGeometryCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WireframeGeometry
new :: THREE.Three WireframeGeometry
new = THREE.new WireframeGeometry "WireframeGeometry" ([] :: [MisoString])
-----------------------------------------------------------------------------
