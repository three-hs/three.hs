-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DodecahedronGeometry
  ( -- * Types
    DodecahedronGeometry (..)
    -- * Methods
  , THREE.DodecahedronGeometry.new
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
new :: THREE.Three DodecahedronGeometry
new = THREE.new DodecahedronGeometry "DodecahedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
