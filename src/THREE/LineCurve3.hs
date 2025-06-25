-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineCurve3
  ( -- * Types
    LineCurve3 (..)
    -- * Methods
  , THREE.LineCurve3.new
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
new :: THREE.Three LineCurve3
new = THREE.new LineCurve3 "LineCurve3" ([] :: [JSString])
-----------------------------------------------------------------------------
