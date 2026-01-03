-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.TextureLoader
  ( -- * Types
    TextureLoader (..)
    -- * Constructors
  , THREE.TextureLoader.new
    -- * Read-only Properties
    -- * Properties
    -- * Optional properties
    -- * Methods
  , load
    -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
import           THREE.Loader
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/loaders/TextureLoader
newtype TextureLoader
  = TextureLoader
  { unTextureLoader :: JSVal
  } deriving (ToArgs, ToObject, ToJSVal) 
    deriving newtype Loader
-----------------------------------------------------------------------------
-- Constructors
-----------------------------------------------------------------------------
new :: THREE.Three TextureLoader
new = THREE.new TextureLoader "TextureLoader" ()
-----------------------------------------------------------------------------
-- Read-only properties
-----------------------------------------------------------------------------
-- Properties
-----------------------------------------------------------------------------
-- Optional properties
-----------------------------------------------------------------------------
-- Methods
-----------------------------------------------------------------------------
load :: MisoString -> TextureLoader -> IO Texture
load url (TextureLoader v) = Texture <$> (v # ("load" :: MisoString) $ [url])
-----------------------------------------------------------------------------
-- Helper functions
-----------------------------------------------------------------------------
