-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CurvePath
  ( -- * Types
    CurvePath (..)
    -- * Methods
  , newCurvePath
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CurvePath
newtype CurvePath
  = CurvePath
  { unCurvePathCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CurvePath
newCurvePath :: JSM CurvePath
newCurvePath = THREE.new CurvePath "CurvePath" ([] :: [JSString])
-----------------------------------------------------------------------------
