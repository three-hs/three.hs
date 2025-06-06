-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationClip
  ( -- * Types
    AnimationClip (..)
    -- * Methods
  , newAnimationClip
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationClip
newtype AnimationClip
  = AnimationClip
  { unAnimationClipCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationClip
newAnimationClip :: JSM AnimationClip
newAnimationClip = THREE.new AnimationClip "AnimationClip" ([] :: [JSString])
-----------------------------------------------------------------------------
