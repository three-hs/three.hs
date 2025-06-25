-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.FramebufferTexture
  ( -- * Types
    FramebufferTexture (..)
    -- * Methods
  , THREE.FramebufferTexture.new
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
new :: THREE.Three FramebufferTexture
new = THREE.new FramebufferTexture "FramebufferTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
