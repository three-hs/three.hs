-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationClip
  ( -- * Types
    AnimationClip (..)
    -- * Methods
  , THREE.AnimationClip.new
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
  } deriving (ToJSVal, MakeObject)
-----------------------------------------------------------------------------
instance FromJSVal AnimationClip where
  fromJSVal = pure . pure . AnimationClip
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationClip
new :: THREE.Three AnimationClip
new = THREE.new AnimationClip "AnimationClip" ([] :: [JSString])
-----------------------------------------------------------------------------
