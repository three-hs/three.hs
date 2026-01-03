-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.FramebufferTexture
  ( -- * Types
    FramebufferTexture (..)
    -- * Constructors
  , THREE.FramebufferTexture.new
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/FramebufferTexture
newtype FramebufferTexture
  = FramebufferTexture
  { unFramebufferTexture :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal FramebufferTexture where
  fromJSVal = pure . Just . FramebufferTexture

-- Constructor

new :: (FramebufferTextureNewParams t, ToArgs t) => t -> THREE.Three FramebufferTexture
new = THREE.new FramebufferTexture "FramebufferTexture"

class FramebufferTextureNewParams t
instance FramebufferTextureNewParams ()
instance FramebufferTextureNewParams Int
instance FramebufferTextureNewParams (Int, Int)

