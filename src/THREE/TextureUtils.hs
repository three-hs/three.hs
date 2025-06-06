-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TextureUtils
  ( -- * Types
    TextureUtils (..)
    -- * Methods
  , newTextureUtils
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/TextureUtils
newtype TextureUtils
  = TextureUtils
  { unTextureUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/TextureUtils
newTextureUtils :: JSM TextureUtils
newTextureUtils = THREE.new TextureUtils "TextureUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
