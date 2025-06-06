-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DiscreteInterpolant
  ( -- * Types
    DiscreteInterpolant (..)
    -- * Methods
  , newDiscreteInterpolant
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
newDiscreteInterpolant :: JSM DiscreteInterpolant
newDiscreteInterpolant = THREE.new DiscreteInterpolant "DiscreteInterpolant" ([] :: [JSString])
-----------------------------------------------------------------------------
