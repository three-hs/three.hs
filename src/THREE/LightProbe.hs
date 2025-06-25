-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LightProbe
  ( -- * Types
    LightProbe (..)
    -- * Methods
  , THREE.LightProbe.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LightProbe
newtype LightProbe
  = LightProbe
  { unLightProbeCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LightProbe
new :: THREE.Three LightProbe
new = THREE.new LightProbe "LightProbe" ()
-----------------------------------------------------------------------------
