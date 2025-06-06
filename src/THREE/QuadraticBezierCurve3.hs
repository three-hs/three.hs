-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.QuadraticBezierCurve3
  ( -- * Types
    QuadraticBezierCurve3 (..)
    -- * Methods
  , newQuadraticBezierCurve3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/QuadraticBezierCurve3
newtype QuadraticBezierCurve3
  = QuadraticBezierCurve3
  { unQuadraticBezierCurve3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/QuadraticBezierCurve3
newQuadraticBezierCurve3 :: JSM QuadraticBezierCurve3
newQuadraticBezierCurve3 = THREE.new QuadraticBezierCurve3 "QuadraticBezierCurve3" ([] :: [JSString])
-----------------------------------------------------------------------------
