-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineCurve
  ( -- * Types
    LineCurve (..)
    -- * Methods
  , newLineCurve
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineCurve
newtype LineCurve
  = LineCurve
  { unLineCurveCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineCurve
newLineCurve :: JSM LineCurve
newLineCurve = THREE.new LineCurve "LineCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
