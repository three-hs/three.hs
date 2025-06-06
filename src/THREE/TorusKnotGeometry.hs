-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TorusKnotGeometry
  ( -- * Types
    TorusKnotGeometry (..)
    -- * Methods
  , newTorusKnotGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/TorusKnotGeometry
newtype TorusKnotGeometry
  = TorusKnotGeometry
  { unTorusKnotGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/TorusKnotGeometry
newTorusKnotGeometry :: JSM TorusKnotGeometry
newTorusKnotGeometry = THREE.new TorusKnotGeometry "TorusKnotGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
