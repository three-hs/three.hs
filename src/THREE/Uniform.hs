-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Uniform
  ( -- * Types
    Uniform (..)
    -- * Methods
  , THREE.Uniform.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Uniform
newtype Uniform
  = Uniform
  { unUniformCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Uniform
new :: THREE.Three Uniform
new = THREE.new Uniform "Uniform" ([] :: [MisoString])
-----------------------------------------------------------------------------
