-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShapePath
  ( -- * Types
    ShapePath (..)
    -- * Methods
  , newShapePath
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShapePath
newtype ShapePath
  = ShapePath
  { unShapePathCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShapePath
newShapePath :: JSM ShapePath
newShapePath = THREE.new ShapePath "ShapePath" ([] :: [JSString])
-----------------------------------------------------------------------------
