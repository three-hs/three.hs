-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ShapeUtils
  ( -- * Types
    ShapeUtils (..)
    -- * Methods
  , newShapeUtils
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ShapeUtils
newtype ShapeUtils
  = ShapeUtils
  { unShapeUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ShapeUtils
newShapeUtils :: JSM ShapeUtils
newShapeUtils = THREE.new ShapeUtils "ShapeUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
