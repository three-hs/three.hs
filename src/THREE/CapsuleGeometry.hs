-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CapsuleGeometry
  ( -- * Types
    CapsuleGeometry (..)
    -- * Methods
  , THREE.CapsuleGeometry.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CapsuleGeometry
newtype CapsuleGeometry
  = CapsuleGeometry
  { unCapsuleGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CapsuleGeometry
new :: THREE.Three CapsuleGeometry
new = THREE.new CapsuleGeometry "CapsuleGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
