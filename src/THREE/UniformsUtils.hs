-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.UniformsUtils
  ( -- * Types
    UniformsUtils (..)
    -- * Methods
  , newUniformsUtils
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/UniformsUtils
newtype UniformsUtils
  = UniformsUtils
  { unUniformsUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/UniformsUtils
newUniformsUtils :: JSM UniformsUtils
newUniformsUtils = THREE.new UniformsUtils "UniformsUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
