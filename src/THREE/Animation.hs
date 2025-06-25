-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Animation
  ( -- * Types
    Animation (..)
    -- * Methods
  , THREE.Animation.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Animation
newtype Animation
  = Animation
  { unAnimationCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Animation
new :: THREE.Three Animation
new = THREE.new Animation "Animation" ([] :: [JSString])
-----------------------------------------------------------------------------
