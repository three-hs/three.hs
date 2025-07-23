-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.Data3DTexture
  ( -- * Types
    Data3DTexture (..)
    -- * Constructors
  , THREE.Data3DTexture.new
    -- * Properties
  , wrapR
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Constants.Textures
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/Data3DTexture
newtype Data3DTexture
  = Data3DTexture
  { unData3DTexture :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal Data3DTexture where
  fromJSVal = pure . Just . Data3DTexture

-- Constructor

new :: (Data3DTextureNewParams t, MakeArgs t) => t -> THREE.Three Data3DTexture
new = THREE.new Data3DTexture "Data3DTexture"

class Data3DTextureNewParams t
instance Data3DTextureNewParams ()
instance Data3DTextureNewParams Object    -- TODO Object -> TypedArray?
instance Data3DTextureNewParams (Object, Int)
instance Data3DTextureNewParams (Object, Int, Int)
instance Data3DTextureNewParams (Object, Int, Int, Int)

-- Property

wrapR :: Property Data3DTexture WrappingModes
wrapR = property "wrapR"

