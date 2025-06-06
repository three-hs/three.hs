-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.EdgesGeometry
  ( -- * Types
    EdgesGeometry (..)
    -- * Methods
  , newEdgesGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/EdgesGeometry
newtype EdgesGeometry
  = EdgesGeometry
  { unEdgesGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/EdgesGeometry
newEdgesGeometry :: JSM EdgesGeometry
newEdgesGeometry = THREE.new EdgesGeometry "EdgesGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
