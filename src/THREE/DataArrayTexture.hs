-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.DataArrayTexture
  ( -- * Types
    DataArrayTexture (..)
    -- * Constructors
  , THREE.DataArrayTexture.new
    -- * Properties
  , wrapR
  , layerUpdates
    -- * Methods
  , addLayerUpdate
  , clearLayerUpdates
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import           THREE.Constants.Textures
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/DataArrayTexture
newtype DataArrayTexture
  = DataArrayTexture
  { unDataArrayTexture :: JSVal
  } deriving newtype (ToArgs, ToObject, ToJSVal)
    deriving anyclass (EventDispatcher, TextureClass)

instance FromJSVal DataArrayTexture where
  fromJSVal = pure . Just . DataArrayTexture

-- Constructor

new :: (DataArrayTextureNewParams t, ToArgs t) => t -> THREE.Three DataArrayTexture
new = THREE.new DataArrayTexture "DataArrayTexture"

class DataArrayTextureNewParams t
instance DataArrayTextureNewParams ()
instance DataArrayTextureNewParams Object    -- TODO Object -> TypedArray?
instance DataArrayTextureNewParams (Object, Int)
instance DataArrayTextureNewParams (Object, Int, Int)
instance DataArrayTextureNewParams (Object, Int, Int, Int)

-- Property

wrapR :: Property DataArrayTexture WrappingModes
wrapR = property "wrapR"

layerUpdates :: Property DataArrayTexture [Int]   -- TODO Set?
layerUpdates = property "layerUpdates"

-- Method

addLayerUpdate :: Method DataArrayTexture Int ()
addLayerUpdate = method "addLayerUpdate"

clearLayerUpdates :: Method DataArrayTexture () ()
clearLayerUpdates = method "clearLayerUpdates"

