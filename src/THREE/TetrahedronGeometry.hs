-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TetrahedronGeometry
  ( -- * Types
    TetrahedronGeometry (..)
    -- * Methods
  , THREE.TetrahedronGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/TetrahedronGeometry
newtype TetrahedronGeometry
  = TetrahedronGeometry
  { unTetrahedronGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/TetrahedronGeometry
new :: THREE.Three TetrahedronGeometry
new = THREE.new TetrahedronGeometry "TetrahedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
