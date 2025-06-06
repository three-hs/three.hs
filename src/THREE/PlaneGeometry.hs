-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PlaneGeometry
  ( -- * Types
    PlaneGeometry (..)
    -- * Methods
  , newPlaneGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PlaneGeometry
newtype PlaneGeometry
  = PlaneGeometry
  { unPlaneGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PlaneGeometry
newPlaneGeometry :: JSM PlaneGeometry
newPlaneGeometry = THREE.new PlaneGeometry "PlaneGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
