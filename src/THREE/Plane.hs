-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Plane
  ( -- * Types
    Plane (..)
    -- * Methods
  , THREE.Plane.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/math/Plane
newtype Plane
  = Plane
  { unPlane :: JSVal
  } deriving (MakeObject, ToJSVal, MakeArgs)
-----------------------------------------------------------------------------
instance FromJSVal Plane where
  fromJSVal = pure . Just . Plane
-----------------------------------------------------------------------------
new :: THREE.Three Plane
new = THREE.new Plane "Plane" ()
-----------------------------------------------------------------------------
