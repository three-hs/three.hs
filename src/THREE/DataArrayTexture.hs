-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DataArrayTexture
  ( -- * Types
    DataArrayTexture (..)
    -- * Methods
  , THREE.DataArrayTexture.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DataArrayTexture
newtype DataArrayTexture
  = DataArrayTexture
  { unDataArrayTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DataArrayTexture
new :: THREE.Three DataArrayTexture
new = THREE.new DataArrayTexture "DataArrayTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
