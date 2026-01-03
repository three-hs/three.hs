-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.Animation
  ( -- * Types
    Animation (..)
    -- * Methods
  , THREE.Constants.Animation.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Animation
newtype Animation
  = Animation
  { unAnimationCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Animation
new :: THREE.Three Animation
new = THREE.new Animation "Animation" ([] :: [MisoString])
-----------------------------------------------------------------------------
