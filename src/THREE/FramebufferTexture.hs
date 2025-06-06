-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.FramebufferTexture
  ( -- * Types
    FramebufferTexture (..)
    -- * Methods
  , newFramebufferTexture
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/FramebufferTexture
newtype FramebufferTexture
  = FramebufferTexture
  { unFramebufferTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/FramebufferTexture
newFramebufferTexture :: JSM FramebufferTexture
newFramebufferTexture = THREE.new FramebufferTexture "FramebufferTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
