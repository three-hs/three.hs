-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Fog
  ( -- * Types
    Fog (..)
    -- * Methods
  , THREE.Fog.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Fog
newtype Fog
  = Fog
  { unFogCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Fog
new :: THREE.Three Fog
new = THREE.new Fog "Fog" ([] :: [JSString])
-----------------------------------------------------------------------------
