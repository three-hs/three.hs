-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CompressedTextureLoader
  ( -- * Types
    CompressedTextureLoader (..)
    -- * Methods
  , THREE.CompressedTextureLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CompressedTextureLoader
newtype CompressedTextureLoader
  = CompressedTextureLoader
  { unCompressedTextureLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CompressedTextureLoader
new :: THREE.Three CompressedTextureLoader
new = THREE.new CompressedTextureLoader "CompressedTextureLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
