-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.BoxGeometry
  ( -- * Types
    BoxGeometry (..)
  , THREE.BoxGeometry.new
  ) where
-----------------------------------------------------------------------------
import           Miso hiding (new)
-----------------------------------------------------------------------------
import           THREE.BufferGeometry (BufferGeometryClass)
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/geometries/BoxGeometry
newtype BoxGeometry
  = BoxGeometry
  { unBoxGeometry :: JSVal
  } deriving (ToArgs, ToObject, ToJSVal) 
    deriving newtype BufferGeometryClass
-----------------------------------------------------------------------------
new
  :: (Double,Double,Double)
  -> THREE.Three BoxGeometry
new = THREE.new BoxGeometry "BoxGeometry"
-----------------------------------------------------------------------------
