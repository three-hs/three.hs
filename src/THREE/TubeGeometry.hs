-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TubeGeometry
  ( -- * Types
    TubeGeometry (..)
    -- * Methods
  , newTubeGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/TubeGeometry
newtype TubeGeometry
  = TubeGeometry
  { unTubeGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/TubeGeometry
newTubeGeometry :: JSM TubeGeometry
newTubeGeometry = THREE.new TubeGeometry "TubeGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
