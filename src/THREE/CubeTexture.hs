-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CubeTexture
  ( -- * Types
    CubeTexture (..)
    -- * Methods
  , newCubeTexture
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CubeTexture
newtype CubeTexture
  = CubeTexture
  { unCubeTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CubeTexture
newCubeTexture :: JSM CubeTexture
newCubeTexture = THREE.new CubeTexture "CubeTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
