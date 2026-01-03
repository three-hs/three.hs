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
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ArcCurve
newtype ArcCurve
  = ArcCurve
  { unArcCurveCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ArcCurve
new :: THREE.Three ArcCurve
new = THREE.new ArcCurve "ArcCurve" ([] :: [MisoString])
-----------------------------------------------------------------------------
