-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SpriteMaterial
  ( -- * Types
    SpriteMaterial (..)
    -- * Methods
  , newSpriteMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SpriteMaterial
newtype SpriteMaterial
  = SpriteMaterial
  { unSpriteMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SpriteMaterial
newSpriteMaterial :: JSM SpriteMaterial
newSpriteMaterial = THREE.new SpriteMaterial "SpriteMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
