-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.FogExp2
  ( -- * Types
    FogExp2 (..)
    -- * Methods
  , THREE.FogExp2.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/FogExp2
newtype FogExp2
  = FogExp2
  { unFogExp2Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/FogExp2
new :: THREE.Three FogExp2
new = THREE.new FogExp2 "FogExp2" ([] :: [JSString])
-----------------------------------------------------------------------------
