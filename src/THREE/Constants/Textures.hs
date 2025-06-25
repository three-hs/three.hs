-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.Textures
  ( -- * Types
    Textures (..)
    -- * Methods
  , THREE.Constants.Textures.new
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
new :: THREE.Three Textures
new = THREE.new Textures "Textures" ([] :: [JSString])
-----------------------------------------------------------------------------
