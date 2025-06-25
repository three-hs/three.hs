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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/IcosahedronGeometry
newtype IcosahedronGeometry
  = IcosahedronGeometry
  { unIcosahedronGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/IcosahedronGeometry
new :: THREE.Three IcosahedronGeometry
new = THREE.new IcosahedronGeometry "IcosahedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
