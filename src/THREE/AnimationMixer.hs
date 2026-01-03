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
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationMixer
newtype AnimationMixer
  = AnimationMixer
  { unAnimationMixerCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationMixer
new :: THREE.Three AnimationMixer
new = THREE.new AnimationMixer "AnimationMixer" ([] :: [MisoString])
-----------------------------------------------------------------------------
