-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.QuadraticBezierCurve
  ( -- * Types
    QuadraticBezierCurve (..)
    -- * Methods
  , THREE.QuadraticBezierCurve.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/QuadraticBezierCurve
newtype QuadraticBezierCurve
  = QuadraticBezierCurve
  { unQuadraticBezierCurveCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/QuadraticBezierCurve
new :: THREE.Three QuadraticBezierCurve
new = THREE.new QuadraticBezierCurve "QuadraticBezierCurve" ([] :: [MisoString])
-----------------------------------------------------------------------------
