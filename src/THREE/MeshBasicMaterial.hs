{-# LANGUAGE DataKinds #-}
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
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/MeshBasicMaterial
newtype MeshBasicMaterial
  = MeshBasicMaterial
  { unMeshBasicMaterial :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
new :: THREE.Three MeshBasicMaterial
new = THREE.new MeshBasicMaterial "MeshBasicMaterial" ()
-----------------------------------------------------------------------------
color :: THREE.Property MeshBasicMaterial "color" JSString
color = THREE.field
-----------------------------------------------------------------------------
