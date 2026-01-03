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
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Shape
newtype Shape
  = Shape
  { unShapeCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Shape
new :: THREE.Three Shape
new = THREE.new Shape "Shape" ([] :: [MisoString])
-----------------------------------------------------------------------------
