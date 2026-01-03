-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.EllipseCurve
  ( -- * Types
    EllipseCurve (..)
    -- * Methods
  , THREE.EllipseCurve.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/EllipseCurve
newtype EllipseCurve
  = EllipseCurve
  { unEllipseCurveCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/EllipseCurve
new :: THREE.Three EllipseCurve
new = THREE.new EllipseCurve "EllipseCurve" ([] :: [MisoString])
-----------------------------------------------------------------------------
