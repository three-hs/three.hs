-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ArcCurve
  ( -- * Types
    ArcCurve (..)
    -- * Methods
  , THREE.ArcCurve.new
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
new :: THREE.Three ArcCurve
new = THREE.new ArcCurve "ArcCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
