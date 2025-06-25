-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Interpolations
  ( -- * Types
    Interpolations (..)
    -- * Methods
  , THREE.Interpolations.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Interpolations
newtype Interpolations
  = Interpolations
  { unInterpolationsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Interpolations
new :: THREE.Three Interpolations
new = THREE.new Interpolations "Interpolations" ()
-----------------------------------------------------------------------------
