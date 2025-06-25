-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CanvasTexture
  ( -- * Types
    CanvasTexture (..)
    -- * Methods
  , THREE.CanvasTexture.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CanvasTexture
newtype CanvasTexture
  = CanvasTexture
  { unCanvasTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CanvasTexture
new :: THREE.Three CanvasTexture
new = THREE.new CanvasTexture "CanvasTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
