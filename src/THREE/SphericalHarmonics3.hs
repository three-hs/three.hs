-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SphericalHarmonics3
  ( -- * Types
    SphericalHarmonics3 (..)
    -- * Methods
  , newSphericalHarmonics3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SphericalHarmonics3
newtype SphericalHarmonics3
  = SphericalHarmonics3
  { unSphericalHarmonics3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SphericalHarmonics3
newSphericalHarmonics3 :: JSM SphericalHarmonics3
newSphericalHarmonics3 = THREE.new SphericalHarmonics3 "SphericalHarmonics3" ([] :: [JSString])
-----------------------------------------------------------------------------
