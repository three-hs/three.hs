-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.EdgesGeometry
  ( -- * Types
    EdgesGeometry (..)
    -- * Methods
  , THREE.EdgesGeometry.new
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
new :: THREE.Three EdgesGeometry
new = THREE.new EdgesGeometry "EdgesGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
