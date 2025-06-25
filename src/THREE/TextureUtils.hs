-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TextureUtils
  ( -- * Types
    TextureUtils (..)
    -- * Methods
  , THREE.TextureUtils.new
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
new :: THREE.Three TextureUtils
new = THREE.new TextureUtils "TextureUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
