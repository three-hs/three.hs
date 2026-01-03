-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.FileLoader
  ( -- * Types
    FileLoader (..)
    -- * Methods
  , THREE.FileLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/FileLoader
newtype FileLoader
  = FileLoader
  { unFileLoaderCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/FileLoader
new :: THREE.Three FileLoader
new = THREE.new FileLoader "FileLoader" ([] :: [MisoString])
-----------------------------------------------------------------------------
