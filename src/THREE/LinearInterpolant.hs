-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LinearInterpolant
  ( -- * Types
    LinearInterpolant (..)
    -- * Methods
  , newLinearInterpolant
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LinearInterpolant
newtype LinearInterpolant
  = LinearInterpolant
  { unLinearInterpolantCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LinearInterpolant
newLinearInterpolant :: JSM LinearInterpolant
newLinearInterpolant = THREE.new LinearInterpolant "LinearInterpolant" ([] :: [JSString])
-----------------------------------------------------------------------------
