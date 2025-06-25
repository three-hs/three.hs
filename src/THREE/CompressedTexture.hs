-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CompressedTexture
  ( -- * Types
    CompressedTexture (..)
    -- * Methods
  , THREE.CompressedTexture.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CompressedTexture
newtype CompressedTexture
  = CompressedTexture
  { unCompressedTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CompressedTexture
new :: THREE.Three CompressedTexture
new = THREE.new CompressedTexture "CompressedTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
