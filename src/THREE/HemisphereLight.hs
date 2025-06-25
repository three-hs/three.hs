-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.HemisphereLight
  ( -- * Types
    HemisphereLight (..)
    -- * Methods
  , THREE.HemisphereLight.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/HemisphereLight
newtype HemisphereLight
  = HemisphereLight
  { unHemisphereLightCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/HemisphereLight
new :: THREE.Three HemisphereLight
new = THREE.new HemisphereLight "HemisphereLight" ([] :: [JSString])
-----------------------------------------------------------------------------
