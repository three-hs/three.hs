-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Triangle
  ( -- * Types
    Triangle (..)
    -- * Methods
  , THREE.Triangle.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Triangle
newtype Triangle
  = Triangle
  { unTriangle :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Triangle
new :: THREE.Three Triangle
new = THREE.new Triangle "Triangle" ([] :: [MisoString])
-----------------------------------------------------------------------------
