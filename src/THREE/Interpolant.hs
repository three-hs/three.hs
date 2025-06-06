-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Interpolant
  ( -- * Types
    Interpolant (..)
    -- * Methods
  , newInterpolant
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Interpolant
newtype Interpolant
  = Interpolant
  { unInterpolantCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Interpolant
newInterpolant :: JSM Interpolant
newInterpolant = THREE.new Interpolant "Interpolant" ([] :: [JSString])
-----------------------------------------------------------------------------
