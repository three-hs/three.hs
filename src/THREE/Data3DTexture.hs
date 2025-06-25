-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Data3DTexture
  ( -- * Types
    Data3DTexture (..)
    -- * Methods
  , THREE.Data3DTexture.new
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
new :: THREE.Three Data3DTexture
new = THREE.new Data3DTexture "Data3DTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
