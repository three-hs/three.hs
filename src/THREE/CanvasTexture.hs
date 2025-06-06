-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CanvasTexture
  ( -- * Types
    CanvasTexture (..)
    -- * Methods
  , newCanvasTexture
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
newCanvasTexture :: JSM CanvasTexture
newCanvasTexture = THREE.new CanvasTexture "CanvasTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
