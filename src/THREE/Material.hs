-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Material
  ( -- * Types
    MaterialC (..)
  , Material (..)
    -- * Constructors
  , THREE.Material.new
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/Material
class MaterialC a where
  -- read-only properties
  isMaterial :: a -> JSM Bool
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance MaterialC JSVal where
  -- read-only properties
  isMaterial = mkGet "isMaterial"
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
-- | Generic material
newtype Material 
  = Material 
  { unMaterial :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
    deriving newtype MaterialC
-----------------------------------------------------------------------------
instance FromJSVal Material where
  fromJSVal = pure .Just . Material
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
-- | Generic material constructor
new :: JSM Material
new = new' Material "Material" ()
-----------------------------------------------------------------------------
