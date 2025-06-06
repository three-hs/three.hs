-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubicInterpolant
  ( -- * Types
    CubicInterpolant (..)
    -- * Methods
  , newCubicInterpolant
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubicInterpolant
newtype CubicInterpolant
  = CubicInterpolant
  { unCubicInterpolantCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubicInterpolant
newCubicInterpolant :: JSM CubicInterpolant
newCubicInterpolant = THREE.new CubicInterpolant "CubicInterpolant" ([] :: [JSString])
-----------------------------------------------------------------------------
