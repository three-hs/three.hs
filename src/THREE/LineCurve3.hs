-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineCurve3
  ( -- * Types
    LineCurve3 (..)
    -- * Methods
  , newLineCurve3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineCurve3
newtype LineCurve3
  = LineCurve3
  { unLineCurve3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineCurve3
newLineCurve3 :: JSM LineCurve3
newLineCurve3 = THREE.new LineCurve3 "LineCurve3" ([] :: [JSString])
-----------------------------------------------------------------------------
