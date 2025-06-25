-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Interpolant
  ( -- * Types
    Interpolant (..)
    -- * Methods
  , THREE.Interpolant.new
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
new :: THREE.Three Interpolant
new = THREE.new Interpolant "Interpolant" ()
-----------------------------------------------------------------------------
