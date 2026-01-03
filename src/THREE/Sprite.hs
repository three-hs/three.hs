-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Sprite
  ( -- * Types
    Sprite (..)
    -- * Methods
  , THREE.Sprite.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Sprite
newtype Sprite
  = Sprite
  { unSpriteCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Sprite
new :: THREE.Three Sprite
new = THREE.new Sprite "Sprite" ([] :: [MisoString])
-----------------------------------------------------------------------------
