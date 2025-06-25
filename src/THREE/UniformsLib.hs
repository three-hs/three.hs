-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.UniformsLib
  ( -- * Types
    UniformsLib (..)
    -- * Methods
  , THREE.UniformsLib.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/UniformsLib
newtype UniformsLib
  = UniformsLib
  { unUniformsLibCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/UniformsLib
new :: THREE.Three UniformsLib
new = THREE.new UniformsLib "UniformsLib" ([] :: [JSString])
-----------------------------------------------------------------------------
