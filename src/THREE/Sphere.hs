-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Sphere
  ( -- * Types
    Sphere (..)
    -- * Methods
  , THREE.Sphere.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Sphere
newtype Sphere
  = Sphere
  { unSphere :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Sphere
new :: THREE.Three Sphere
new = THREE.new Sphere "Sphere" ([] :: [MisoString])
-----------------------------------------------------------------------------
instance FromJSVal Sphere where
  fromJSVal = pure . pure . Sphere
-----------------------------------------------------------------------------
