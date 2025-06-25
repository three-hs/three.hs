-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SphericalHarmonics3
  ( -- * Types
    SphericalHarmonics3 (..)
    -- * Methods
  , THREE.SphericalHarmonics3.new
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
new :: THREE.Three SphericalHarmonics3
new = THREE.new SphericalHarmonics3 "SphericalHarmonics3" ([] :: [JSString])
-----------------------------------------------------------------------------
