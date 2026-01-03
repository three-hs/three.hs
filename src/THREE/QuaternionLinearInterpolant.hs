-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.QuaternionLinearInterpolant
  ( -- * Types
    QuaternionLinearInterpolant (..)
    -- * Methods
  , THREE.QuaternionLinearInterpolant.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/QuaternionLinearInterpolant
newtype QuaternionLinearInterpolant
  = QuaternionLinearInterpolant
  { unQuaternionLinearInterpolantCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/QuaternionLinearInterpolant
new :: THREE.Three QuaternionLinearInterpolant
new = THREE.new QuaternionLinearInterpolant "QuaternionLinearInterpolant" ([] :: [MisoString])
-----------------------------------------------------------------------------
