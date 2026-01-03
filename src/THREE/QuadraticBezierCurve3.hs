-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.QuadraticBezierCurve3
  ( -- * Types
    QuadraticBezierCurve3 (..)
    -- * Methods
  , THREE.QuadraticBezierCurve3.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/QuadraticBezierCurve3
newtype QuadraticBezierCurve3
  = QuadraticBezierCurve3
  { unQuadraticBezierCurve3Camera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/QuadraticBezierCurve3
new :: THREE.Three QuadraticBezierCurve3
new = THREE.new QuadraticBezierCurve3 "QuadraticBezierCurve3" ([] :: [MisoString])
-----------------------------------------------------------------------------
