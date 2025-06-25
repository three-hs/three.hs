-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TubeGeometry
  ( -- * Types
    TubeGeometry (..)
    -- * Methods
  , THREE.TubeGeometry.new
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
new :: THREE.Three TubeGeometry
new = THREE.new TubeGeometry "TubeGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
