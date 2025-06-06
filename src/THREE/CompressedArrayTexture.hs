-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CompressedArrayTexture
  ( -- * Types
    CompressedArrayTexture (..)
    -- * Methods
  , newCompressedArrayTexture
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
newCompressedArrayTexture :: JSM CompressedArrayTexture
newCompressedArrayTexture = THREE.new CompressedArrayTexture "CompressedArrayTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
