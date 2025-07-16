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
-- | https://threejs.org/docs/#api/en/math/SphericalHarmonics3
newtype SphericalHarmonics3
  = SphericalHarmonics3
  { unSphericalHarmonics3 :: JSVal
  } deriving (MakeObject, ToJSVal, MakeArgs)
-----------------------------------------------------------------------------
instance FromJSVal SphericalHarmonics3 where
  fromJSVal = pure . pure . SphericalHarmonics3
-----------------------------------------------------------------------------
new :: THREE.Three SphericalHarmonics3
new = THREE.new SphericalHarmonics3 "SphericalHarmonics3" ()
-----------------------------------------------------------------------------
