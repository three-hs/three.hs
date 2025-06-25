-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ExtrudeGeometry
  ( -- * Types
    ExtrudeGeometry (..)
    -- * Methods
  , THREE.ExtrudeGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ExtrudeGeometry
newtype ExtrudeGeometry
  = ExtrudeGeometry
  { unExtrudeGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ExtrudeGeometry
new :: THREE.Three ExtrudeGeometry
new = THREE.new ExtrudeGeometry "ExtrudeGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
