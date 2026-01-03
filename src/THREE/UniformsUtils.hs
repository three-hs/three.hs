-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.UniformsUtils
  ( -- * Types
    UniformsUtils (..)
    -- * Methods
  , THREE.UniformsUtils.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/UniformsUtils
newtype UniformsUtils
  = UniformsUtils
  { unUniformsUtilsCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/UniformsUtils
new :: THREE.Three UniformsUtils
new = THREE.new UniformsUtils "UniformsUtils" ([] :: [MisoString])
-----------------------------------------------------------------------------
