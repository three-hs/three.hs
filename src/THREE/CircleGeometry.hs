-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CircleGeometry
  ( -- * Types
    CircleGeometry (..)
    -- * Methods
  , newCircleGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CircleGeometry
newtype CircleGeometry
  = CircleGeometry
  { unCircleGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CircleGeometry
newCircleGeometry :: JSM CircleGeometry
newCircleGeometry = THREE.new CircleGeometry "CircleGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
