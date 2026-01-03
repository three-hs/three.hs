-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LinearInterpolant
  ( -- * Types
    LinearInterpolant (..)
    -- * Methods
  , THREE.LinearInterpolant.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LinearInterpolant
newtype LinearInterpolant
  = LinearInterpolant
  { unLinearInterpolantCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LinearInterpolant
new :: THREE.Three LinearInterpolant
new = THREE.new LinearInterpolant "LinearInterpolant" ([] :: [MisoString])
-----------------------------------------------------------------------------
