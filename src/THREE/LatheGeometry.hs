-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LatheGeometry
  ( -- * Types
    LatheGeometry (..)
    -- * Methods
  , THREE.LatheGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LatheGeometry
newtype LatheGeometry
  = LatheGeometry
  { unLatheGeometryCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LatheGeometry
new :: THREE.Three LatheGeometry
new = THREE.new LatheGeometry "LatheGeometry" ()
-----------------------------------------------------------------------------
