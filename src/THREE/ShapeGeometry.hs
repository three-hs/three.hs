-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShapeGeometry
  ( -- * Types
    ShapeGeometry (..)
    -- * Methods
  , THREE.ShapeGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShapeGeometry
newtype ShapeGeometry
  = ShapeGeometry
  { unShapeGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShapeGeometry
new :: THREE.Three ShapeGeometry
new = THREE.new ShapeGeometry "ShapeGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
