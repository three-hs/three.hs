-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TextureLoader
  ( -- * Types
    TextureLoader (..)
    -- * Methods
  , newTextureLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/TextureLoader
newtype TextureLoader
  = TextureLoader
  { unTextureLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/TextureLoader
newTextureLoader :: JSM TextureLoader
newTextureLoader = THREE.new TextureLoader "TextureLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
