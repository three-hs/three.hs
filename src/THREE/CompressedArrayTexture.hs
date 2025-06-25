-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CompressedArrayTexture
  ( -- * Types
    CompressedArrayTexture (..)
    -- * Methods
  , THREE.CompressedArrayTexture.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CompressedArrayTexture
newtype CompressedArrayTexture
  = CompressedArrayTexture
  { unCompressedArrayTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CompressedArrayTexture
new :: THREE.Three CompressedArrayTexture
new = THREE.new CompressedArrayTexture "CompressedArrayTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
