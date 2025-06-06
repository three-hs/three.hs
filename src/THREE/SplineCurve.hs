-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SplineCurve
  ( -- * Types
    SplineCurve (..)
    -- * Methods
  , newSplineCurve
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SplineCurve
newtype SplineCurve
  = SplineCurve
  { unSplineCurveCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SplineCurve
newSplineCurve :: JSM SplineCurve
newSplineCurve = THREE.new SplineCurve "SplineCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
