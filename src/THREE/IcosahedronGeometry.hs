-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.IcosahedronGeometry
  ( -- * Types
    IcosahedronGeometry (..)
    -- * Methods
  , newIcosahedronGeometry
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
newIcosahedronGeometry :: JSM IcosahedronGeometry
newIcosahedronGeometry = THREE.new IcosahedronGeometry "IcosahedronGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
