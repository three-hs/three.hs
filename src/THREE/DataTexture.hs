-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DataTexture
  ( -- * Types
    DataTexture (..)
    -- * Methods
  , newDataTexture
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DataTexture
newtype DataTexture
  = DataTexture
  { unDataTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DataTexture
newDataTexture :: JSM DataTexture
newDataTexture = THREE.new DataTexture "DataTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
