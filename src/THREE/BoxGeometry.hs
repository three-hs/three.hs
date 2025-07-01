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
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.BufferGeometry (BufferGeometryClass)
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/geometries/BoxGeometry
newtype BoxGeometry
  = BoxGeometry
  { unBoxGeometry :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
    deriving newtype BufferGeometryClass
-----------------------------------------------------------------------------
new
  :: (Double,Double,Double,Maybe Double,Maybe Double,Maybe Double)
  -> THREE.Three BoxGeometry
new = THREE.new BoxGeometry "BoxGeometry"
-----------------------------------------------------------------------------
