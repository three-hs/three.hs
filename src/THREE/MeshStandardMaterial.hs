-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MeshStandardMaterial
  ( -- * Class
    MeshStandardMaterialClass
    -- * Types
  , MeshStandardMaterial (..)
    -- * Constructors
  , THREE.MeshStandardMaterial.new
    -- * Read-only properties
    -- * Properties
    -- * Optional properties
    -- * Methods
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/MeshStandardMaterial
class ToJSVal geometry => MeshStandardMaterialClass geometry
-----------------------------------------------------------------------------
instance MeshStandardMaterialClass JSVal
-----------------------------------------------------------------------------
newtype MeshStandardMaterial = MeshStandardMaterial { unMeshStandardMaterial :: JSVal }
  deriving (MeshStandardMaterialClass, ToJSVal)
-----------------------------------------------------------------------------
new :: THREE.Three MeshStandardMaterial
new = THREE.new MeshStandardMaterial "MeshStandardMaterial" ()
