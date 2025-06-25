-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SpriteMaterial
  ( -- * Types
    SpriteMaterial (..)
    -- * Methods
  , THREE.SpriteMaterial.new
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
new :: THREE.Three SpriteMaterial
new = THREE.new SpriteMaterial "SpriteMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
