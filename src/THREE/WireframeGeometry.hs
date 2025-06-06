-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.WireframeGeometry
  ( -- * Types
    WireframeGeometry (..)
    -- * Methods
  , newWireframeGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/WireframeGeometry
newtype WireframeGeometry
  = WireframeGeometry
  { unWireframeGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/WireframeGeometry
newWireframeGeometry :: JSM WireframeGeometry
newWireframeGeometry = THREE.new WireframeGeometry "WireframeGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
