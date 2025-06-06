-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.Textures
  ( -- * Types
    Textures (..)
    -- * Methods
  , newTextures
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Textures
newtype Textures
  = Textures
  { unTexturesCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Textures
newTextures :: JSM Textures
newTextures = THREE.new Textures "Textures" ([] :: [JSString])
-----------------------------------------------------------------------------
