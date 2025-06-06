-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubicBezierCurve3
  ( -- * Types
    CubicBezierCurve3 (..)
    -- * Methods
  , newCubicBezierCurve3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubicBezierCurve3
newtype CubicBezierCurve3
  = CubicBezierCurve3
  { unCubicBezierCurve3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubicBezierCurve3
newCubicBezierCurve3 :: JSM CubicBezierCurve3
newCubicBezierCurve3 = THREE.new CubicBezierCurve3 "CubicBezierCurve3" ([] :: [JSString])
-----------------------------------------------------------------------------
