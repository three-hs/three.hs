-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Interpolations
  ( -- * Types
    Interpolations (..)
    -- * Methods
  , newInterpolations
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
newInterpolations :: JSM Interpolations
newInterpolations = THREE.new Interpolations "Interpolations" ([] :: [JSString])
-----------------------------------------------------------------------------
