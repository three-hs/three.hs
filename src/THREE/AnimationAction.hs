-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationAction
  ( -- * Types
    AnimationAction (..)
    -- * Methods
  , newAnimationAction
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationAction
newtype AnimationAction
  = AnimationAction
  { unAnimationActionCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationAction
newAnimationAction :: JSM AnimationAction
newAnimationAction = THREE.new AnimationAction "AnimationAction" ([] :: [JSString])
-----------------------------------------------------------------------------
