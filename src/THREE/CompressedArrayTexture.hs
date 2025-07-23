-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.CompressedArrayTexture
  ( -- * Types
    CompressedArrayTexture (..)
    -- * Constructors
  , THREE.CompressedArrayTexture.new
    -- * Properties
  , wrapR
  , layerUpdates
    -- * Methods
  , addLayerUpdate
  , clearLayerUpdates
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Constants.Textures
import           THREE.CompressedTexture
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/CompressedArrayTexture
newtype CompressedArrayTexture
  = CompressedArrayTexture
  { unCompressedArrayTexture :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass, CompressedTextureClass)

instance FromJSVal CompressedArrayTexture where
  fromJSVal = pure . Just . CompressedArrayTexture

-- Constructor

new :: (CompressedArrayTextureNewParams t, MakeArgs t) => t -> THREE.Three CompressedArrayTexture
new = THREE.new CompressedArrayTexture "CompressedArrayTexture"

class CompressedArrayTextureNewParams t
instance CompressedArrayTextureNewParams ()
instance CompressedArrayTextureNewParams [Object] 
instance CompressedArrayTextureNewParams ([Object], Int)
instance CompressedArrayTextureNewParams ([Object], Int, Int, Formats)
instance CompressedArrayTextureNewParams ([Object], Int, Int, Int, Formats, Types)

-- Property

wrapR :: Property CompressedArrayTexture WrappingModes
wrapR = property "wrapR"

layerUpdates :: Property CompressedArrayTexture [Int]   -- TODO Set?
layerUpdates = property "layerUpdates"

-- Method

addLayerUpdate :: Method CompressedArrayTexture Int ()
addLayerUpdate = method "addLayerUpdate"

clearLayerUpdates :: Method CompressedArrayTexture () ()
clearLayerUpdates = method "clearLayerUpdates"

