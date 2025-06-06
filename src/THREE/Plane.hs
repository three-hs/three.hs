-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Plane
  ( -- * Types
    Plane (..)
    -- * Methods
  , newPlane
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Plane
newtype Plane
  = Plane
  { unPlaneCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Plane
newPlane :: JSM Plane
newPlane = THREE.new Plane "Plane" ([] :: [JSString])
-----------------------------------------------------------------------------
