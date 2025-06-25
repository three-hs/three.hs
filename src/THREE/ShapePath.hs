-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShapePath
  ( -- * Types
    ShapePath (..)
    -- * Methods
  , THREE.ShapePath.new
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
new :: THREE.Three ShapePath
new = THREE.new ShapePath "ShapePath" ([] :: [JSString])
-----------------------------------------------------------------------------
