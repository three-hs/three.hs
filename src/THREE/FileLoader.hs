-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.FileLoader
  ( -- * Types
    FileLoader (..)
    -- * Methods
  , newFileLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/FileLoader
newtype FileLoader
  = FileLoader
  { unFileLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/FileLoader
newFileLoader :: JSM FileLoader
newFileLoader = THREE.new FileLoader "FileLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
