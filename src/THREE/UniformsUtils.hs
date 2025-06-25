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
new :: THREE.Three UniformsUtils
new = THREE.new UniformsUtils "UniformsUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
