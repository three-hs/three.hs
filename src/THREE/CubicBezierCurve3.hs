-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubicBezierCurve3
  ( -- * Types
    CubicBezierCurve3 (..)
    -- * Methods
  , THREE.CubicBezierCurve3.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubicBezierCurve3
newtype CubicBezierCurve3
  = CubicBezierCurve3
  { unCubicBezierCurve3Camera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubicBezierCurve3
new :: THREE.Three CubicBezierCurve3
new = THREE.new CubicBezierCurve3 "CubicBezierCurve3" ([] :: [MisoString])
-----------------------------------------------------------------------------
