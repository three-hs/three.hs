-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.QuaternionLinearInterpolant
  ( -- * Types
    QuaternionLinearInterpolant (..)
    -- * Methods
  , newQuaternionLinearInterpolant
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/QuaternionLinearInterpolant
newtype QuaternionLinearInterpolant
  = QuaternionLinearInterpolant
  { unQuaternionLinearInterpolantCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/QuaternionLinearInterpolant
newQuaternionLinearInterpolant :: JSM QuaternionLinearInterpolant
newQuaternionLinearInterpolant = THREE.new QuaternionLinearInterpolant "QuaternionLinearInterpolant" ([] :: [JSString])
-----------------------------------------------------------------------------
