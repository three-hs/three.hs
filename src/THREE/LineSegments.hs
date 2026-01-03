-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineSegments
  ( -- * Types
    LineSegments (..)
    -- * Methods
  , THREE.LineSegments.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineSegments
newtype LineSegments
  = LineSegments
  { unLineSegmentsCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineSegments
new :: THREE.Three LineSegments
new = THREE.new LineSegments "LineSegments" ([] :: [MisoString])
-----------------------------------------------------------------------------
