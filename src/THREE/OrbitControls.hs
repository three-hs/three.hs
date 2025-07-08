-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.OrbitControls
  ( -- * Types
    OrbitControls (..)
    -- * Constructors
  , THREE.OrbitControls.new
    -- * Read-only Properties
    -- * Properties
  , update
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle as J
-----------------------------------------------------------------------------
import           THREE.Camera          as THREE
import           THREE.Controls        as THREE
import           THREE.Internal        as THREE
import           THREE.EventDispatcher as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
newtype OrbitControls
  = OrbitControls
  { unOrbitControls :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Controls, EventDispatcher)
-----------------------------------------------------------------------------
instance FromJSVal OrbitControls where
  fromJSVal = pure . pure . OrbitControls
-----------------------------------------------------------------------------
new
  :: Camera camera 
  => (camera, JSVal)
  -> THREE.Three OrbitControls
new (cam, elt) = do
  v <- jsg ("OrbitControls" :: JSString)
  OrbitControls <$> J.new v (cam, elt)
-----------------------------------------------------------------------------
update :: Method OrbitControls () Bool    -- TODO () -> (Maybe Double)
update = method "update"
-----------------------------------------------------------------------------
