-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PointsMaterial
  ( -- * Types
    PointsMaterial (..)
    -- * Methods
  , newPointsMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PointsMaterial
newtype PointsMaterial
  = PointsMaterial
  { unPointsMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PointsMaterial
newPointsMaterial :: JSM PointsMaterial
newPointsMaterial = THREE.new PointsMaterial "PointsMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
