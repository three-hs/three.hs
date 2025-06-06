-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ConeGeometry
  ( -- * Types
    ConeGeometry (..)
    -- * Methods
  , newConeGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ConeGeometry
newtype ConeGeometry
  = ConeGeometry
  { unConeGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ConeGeometry
newConeGeometry :: JSM ConeGeometry
newConeGeometry = THREE.new ConeGeometry "ConeGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
