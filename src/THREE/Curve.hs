-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Curve
  ( -- * Types
    Curve (..)
    -- * Methods
  , newCurve
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Curve
newtype Curve
  = Curve
  { unCurveCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Curve
newCurve :: JSM Curve
newCurve = THREE.new Curve "Curve" ([] :: [JSString])
-----------------------------------------------------------------------------
