-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshBasicMaterial
  ( -- * Types
    MeshBasicMaterial (..)
    -- * Methods
  , new
    -- * Properties
  , color
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
import           THREE.EventDispatcher (EventDispatcher)
import           THREE.Material (Material)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshBasicMaterial
newtype MeshBasicMaterial
  = MeshBasicMaterial
  { unMeshBasicMaterial :: JSVal
  } deriving (ToJSVal, EventDispatcher, MakeObject, Material)
-----------------------------------------------------------------------------
new :: Maybe Object -> THREE.Three MeshBasicMaterial
new = THREE.new MeshBasicMaterial "MeshBasicMaterial"
-----------------------------------------------------------------------------
color :: THREE.Property MeshBasicMaterial JSString
color = THREE.property "color" 
-----------------------------------------------------------------------------
