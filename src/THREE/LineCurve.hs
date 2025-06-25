-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineCurve
  ( -- * Types
    LineCurve (..)
    -- * Methods
  , THREE.LineCurve.new
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
new :: THREE.Three LineCurve
new = THREE.new LineCurve "LineCurve" ([] :: [JSString])
-----------------------------------------------------------------------------
