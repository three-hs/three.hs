-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Uniform
  ( -- * Types
    Uniform (..)
    -- * Methods
  , newUniform
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Uniform
newtype Uniform
  = Uniform
  { unUniformCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Uniform
newUniform :: JSM Uniform
newUniform = THREE.new Uniform "Uniform" ([] :: [JSString])
-----------------------------------------------------------------------------
