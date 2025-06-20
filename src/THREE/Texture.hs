-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Texture
  ( -- * Types
    Texture (..)
  , TextureC (..)
    -- * Constructors
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
-- | https://threejs.org/docs/#api/en/textures/Texture
class TextureC a where
  -- read-only properties
  isTexture :: a -> JSM Bool
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
instance TextureC JSVal where
  -- read-only properties
  isTexture = mkGet "isTexture"
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
newtype Texture 
  = Texture
  { unTexture :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
    deriving newtype TextureC
-----------------------------------------------------------------------------
instance FromJSVal Texture where
  fromJSVal = pure .Just . Texture
-----------------------------------------------------------------------------
-- constructors
-----------------------------------------------------------------------------
-- read-only properties
-----------------------------------------------------------------------------
-- properties
-----------------------------------------------------------------------------
-- optional properties
-----------------------------------------------------------------------------
-- methods
-----------------------------------------------------------------------------
-- helper functions
-----------------------------------------------------------------------------
