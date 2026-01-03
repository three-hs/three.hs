-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubicInterpolant
  ( -- * Types
    CubicInterpolant (..)
    -- * Methods
  , THREE.CubicInterpolant.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubicInterpolant
newtype CubicInterpolant
  = CubicInterpolant
  { unCubicInterpolantCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubicInterpolant
new :: THREE.Three CubicInterpolant
new = THREE.new CubicInterpolant "CubicInterpolant" ([] :: [MisoString])
-----------------------------------------------------------------------------
