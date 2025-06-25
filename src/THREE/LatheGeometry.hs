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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LatheGeometry
newtype LatheGeometry
  = LatheGeometry
  { unLatheGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LatheGeometry
new :: THREE.Three LatheGeometry
new = THREE.new LatheGeometry "LatheGeometry" ()
-----------------------------------------------------------------------------
