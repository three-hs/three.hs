-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Color
  ( -- * Types
    Color (..)
    -- * Methods
  , THREE.Color.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/index.html#api/en/math/Color
newtype Color
  = Color
  { unColor :: JSVal
  } deriving (MakeObject, ToJSVal, MakeArgs)
-----------------------------------------------------------------------------
instance FromJSVal Color where
  fromJSVal = pure . Just . Color
-----------------------------------------------------------------------------
new :: THREE.Three Color
new = THREE.new Color "Color" ()
-----------------------------------------------------------------------------
