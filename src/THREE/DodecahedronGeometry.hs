-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DodecahedronGeometry
  ( -- * Types
    DodecahedronGeometry (..)
    -- * Methods
  , newDodecahedronGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DodecahedronGeometry
newtype DodecahedronGeometry
  = DodecahedronGeometry
  { unDodecahedronGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DodecahedronGeometry
newDodecahedronGeometry :: JSM DodecahedronGeometry
newDodecahedronGeometry = THREE.new DodecahedronGeometry "DodecahedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
