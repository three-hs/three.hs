-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SphereGeometry
  ( -- * Types
    SphereGeometry (..)
    -- * Methods
  , newSphereGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SphereGeometry
newtype SphereGeometry
  = SphereGeometry
  { unSphereGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SphereGeometry
newSphereGeometry :: JSM SphereGeometry
newSphereGeometry = THREE.new SphereGeometry "SphereGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
