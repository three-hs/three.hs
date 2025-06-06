-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Sphere
  ( -- * Types
    Sphere (..)
    -- * Methods
  , newSphere
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Sphere
newtype Sphere
  = Sphere
  { unSphereCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Sphere
newSphere :: JSM Sphere
newSphere = THREE.new Sphere "Sphere" ([] :: [JSString])
-----------------------------------------------------------------------------
