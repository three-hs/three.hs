-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DiscreteInterpolant
  ( -- * Types
    DiscreteInterpolant (..)
    -- * Methods
  , THREE.DiscreteInterpolant.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DiscreteInterpolant
newtype DiscreteInterpolant
  = DiscreteInterpolant
  { unDiscreteInterpolantCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DiscreteInterpolant
new :: THREE.Three DiscreteInterpolant
new = THREE.new DiscreteInterpolant "DiscreteInterpolant" ([] :: [JSString])
-----------------------------------------------------------------------------
