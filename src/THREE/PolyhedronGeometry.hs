-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PolyhedronGeometry
  ( -- * Types
    PolyhedronGeometry (..)
    -- * Methods
  , newPolyhedronGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PolyhedronGeometry
newtype PolyhedronGeometry
  = PolyhedronGeometry
  { unPolyhedronGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PolyhedronGeometry
newPolyhedronGeometry :: JSM PolyhedronGeometry
newPolyhedronGeometry = THREE.new PolyhedronGeometry "PolyhedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
