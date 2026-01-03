-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Layers
  ( -- * Types
    Layers (..)
    -- * Methods
  , THREE.Layers.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Layers
newtype Layers
  = Layers
  { unLayersCamera :: JSVal
  } deriving (ToJSVal, ToObject)
-----------------------------------------------------------------------------
instance FromJSVal Layers where
  fromJSVal = pure . pure . Layers
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Layers
new :: THREE.Three Layers
new = THREE.new Layers "Layers" ()
-----------------------------------------------------------------------------
