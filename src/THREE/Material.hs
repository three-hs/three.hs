-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE DerivingVia                #-}
{-# LANGUAGE TypeApplications           #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Material
  ( -- * Types
    Material (..)
    -- * Constructors
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
class (ToJSVal material, MakeObject material) => Material material where
  isMaterial :: ReadOnly material Bool
  isMaterial = THREE.readonly "isMaterial"
-----------------------------------------------------------------------------
instance Material JSVal
-----------------------------------------------------------------------------

