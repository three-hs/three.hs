-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Spherical
  ( -- * Types
    Spherical (..)
    -- * Methods
  , THREE.Spherical.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Spherical
newtype Spherical
  = Spherical
  { unSphericalCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Spherical
new :: THREE.Three Spherical
new = THREE.new Spherical "Spherical" ([] :: [JSString])
-----------------------------------------------------------------------------
