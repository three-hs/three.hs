-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubicBezierCurve
  ( -- * Types
    CubicBezierCurve (..)
    -- * Methods
  , THREE.CubicBezierCurve.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubicBezierCurve
newtype CubicBezierCurve
  = CubicBezierCurve
  { unCubicBezierCurveCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubicBezierCurve
new :: THREE.Three CubicBezierCurve
new = THREE.new CubicBezierCurve "CubicBezierCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
