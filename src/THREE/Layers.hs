-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Layers
  ( -- * Types
    Layers (..)
    -- * Methods
  , newLayers
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Layers
newtype Layers
  = Layers
  { unLayersCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Layers
newLayers :: JSM Layers
newLayers = THREE.new Layers "Layers" ([] :: [JSString])
-----------------------------------------------------------------------------
