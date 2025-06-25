-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AmbientLight
  ( -- * Types
    AmbientLight (..)
    -- * Methods
  , THREE.AmbientLight.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AmbientLight
newtype AmbientLight
  = AmbientLight
  { unAmbientLightCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AmbientLight
new :: THREE.Three AmbientLight
new = THREE.new AmbientLight "AmbientLight" ([] :: [JSString])
-----------------------------------------------------------------------------
