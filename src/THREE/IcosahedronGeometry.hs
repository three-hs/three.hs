-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.IcosahedronGeometry
  ( -- * Types
    IcosahedronGeometry (..)
    -- * Methods
  , THREE.IcosahedronGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/IcosahedronGeometry
newtype IcosahedronGeometry
  = IcosahedronGeometry
  { unIcosahedronGeometryCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/IcosahedronGeometry
new :: THREE.Three IcosahedronGeometry
new = THREE.new IcosahedronGeometry "IcosahedronGeometry" ([] :: [MisoString])
-----------------------------------------------------------------------------
