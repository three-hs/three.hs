-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationMixer
  ( -- * Types
    AnimationMixer (..)
    -- * Methods
  , THREE.AnimationMixer.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationMixer
newtype AnimationMixer
  = AnimationMixer
  { unAnimationMixerCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationMixer
new :: THREE.Three AnimationMixer
new = THREE.new AnimationMixer "AnimationMixer" ([] :: [JSString])
-----------------------------------------------------------------------------
