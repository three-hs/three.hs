-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE DerivingVia                #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings          #-}
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
class ToJSVal material => Material material where
  -- read-only properties
  isMaterial :: Property material "isMaterial" Bool
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance Material JSVal where
  isMaterial = field
--   -- read-only properties
--   isMaterial (Material m) =
--     LiftJSM $
--       fromJSValUnchecked =<<
--         m ! ("isMaterial" :: JSString)
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------

