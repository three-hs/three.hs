-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Shape
  ( -- * Types
    Shape (..)
    -- * Methods
  , THREE.Shape.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Shape
newtype Shape
  = Shape
  { unShapeCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Shape
new :: THREE.Three Shape
new = THREE.new Shape "Shape" ([] :: [JSString])
-----------------------------------------------------------------------------
