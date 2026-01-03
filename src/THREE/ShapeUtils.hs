-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShapeUtils
  ( -- * Types
    ShapeUtils (..)
    -- * Methods
  , THREE.ShapeUtils.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShapeUtils
newtype ShapeUtils
  = ShapeUtils
  { unShapeUtilsCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShapeUtils
new :: THREE.Three ShapeUtils
new = THREE.new ShapeUtils "ShapeUtils" ([] :: [MisoString])
-----------------------------------------------------------------------------
