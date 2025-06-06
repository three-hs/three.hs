-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.EllipseCurve
  ( -- * Types
    EllipseCurve (..)
    -- * Methods
  , newEllipseCurve
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/EllipseCurve
newtype EllipseCurve
  = EllipseCurve
  { unEllipseCurveCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/EllipseCurve
newEllipseCurve :: JSM EllipseCurve
newEllipseCurve = THREE.new EllipseCurve "EllipseCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
