-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Sphere
  ( -- * Types
    Sphere (..)
    -- * Methods
  , THREE.Sphere.new
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
new :: THREE.Three Sphere
new = THREE.new Sphere "Sphere" ([] :: [JSString])
-----------------------------------------------------------------------------
