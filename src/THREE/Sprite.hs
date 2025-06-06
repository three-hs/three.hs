-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Sprite
  ( -- * Types
    Sprite (..)
    -- * Methods
  , newSprite
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Sprite
newtype Sprite
  = Sprite
  { unSpriteCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Sprite
newSprite :: JSM Sprite
newSprite = THREE.new Sprite "Sprite" ([] :: [JSString])
-----------------------------------------------------------------------------
