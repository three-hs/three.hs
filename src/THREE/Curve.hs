-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Curve
  ( -- * Types
    Curve (..)
    -- * Methods
  , THREE.Curve.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Curve
newtype Curve
  = Curve
  { unCurveCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Curve
new :: THREE.Three Curve
new = THREE.new Curve "Curve" ([] :: [MisoString])
-----------------------------------------------------------------------------
