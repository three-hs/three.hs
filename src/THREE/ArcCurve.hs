-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ArcCurve
  ( -- * Types
    ArcCurve (..)
    -- * Methods
  , newArcCurve
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ArcCurve
newtype ArcCurve
  = ArcCurve
  { unArcCurveCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ArcCurve
newArcCurve :: JSM ArcCurve
newArcCurve = THREE.new ArcCurve "ArcCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
