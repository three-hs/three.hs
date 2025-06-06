-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineSegments
  ( -- * Types
    LineSegments (..)
    -- * Methods
  , newLineSegments
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineSegments
newtype LineSegments
  = LineSegments
  { unLineSegmentsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineSegments
newLineSegments :: JSM LineSegments
newLineSegments = THREE.new LineSegments "LineSegments" ([] :: [JSString])
-----------------------------------------------------------------------------
