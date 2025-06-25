-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CircleGeometry
  ( -- * Types
    CircleGeometry (..)
    -- * Methods
  , THREE.CircleGeometry.new
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
new :: THREE.Three CircleGeometry
new = THREE.new CircleGeometry "CircleGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
