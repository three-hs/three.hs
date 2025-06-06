-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Triangle
  ( -- * Types
    Triangle (..)
    -- * Methods
  , newTriangle
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Triangle
newtype Triangle
  = Triangle
  { unTriangleCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Triangle
newTriangle :: JSM Triangle
newTriangle = THREE.new Triangle "Triangle" ([] :: [JSString])
-----------------------------------------------------------------------------
