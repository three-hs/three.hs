-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE DerivingVia                #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Texture
  ( -- * Types
    Texture (..)
    -- * Constructors
    -- * Read-only properties
    -- * Properties
  , isTexture
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
isTexture :: Property Texture Bool
isTexture = property "isTexture" 
  -- properties
  -- optional properties
  -- methods
-----------------------------------------------------------------------------
newtype Texture 
  = Texture
  { unTexture :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
-----------------------------------------------------------------------------
instance FromJSVal Texture where
  fromJSVal = pure . Just . Texture
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
