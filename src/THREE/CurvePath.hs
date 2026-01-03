-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CurvePath
  ( -- * Types
    CurvePath (..)
    -- * Methods
  , THREE.CurvePath.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CurvePath
newtype CurvePath
  = CurvePath
  { unCurvePathCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CurvePath
new :: THREE.Three CurvePath
new = THREE.new CurvePath "CurvePath" ([] :: [MisoString])
-----------------------------------------------------------------------------
