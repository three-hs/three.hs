-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SplineCurve
  ( -- * Types
    SplineCurve (..)
    -- * Methods
  , THREE.SplineCurve.new
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
new :: THREE.Three SplineCurve
new = THREE.new SplineCurve "SplineCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
