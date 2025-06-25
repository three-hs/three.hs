-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TorusKnotGeometry
  ( -- * Types
    TorusKnotGeometry (..)
    -- * Methods
  , THREE.TorusKnotGeometry.new
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
new :: THREE.Three TorusKnotGeometry
new = THREE.new TorusKnotGeometry "TorusKnotGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
