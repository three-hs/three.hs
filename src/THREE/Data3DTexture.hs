-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Data3DTexture
  ( -- * Types
    Data3DTexture (..)
    -- * Methods
  , newData3DTexture
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Data3DTexture
newtype Data3DTexture
  = Data3DTexture
  { unData3DTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Data3DTexture
newData3DTexture :: JSM Data3DTexture
newData3DTexture = THREE.new Data3DTexture "Data3DTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
