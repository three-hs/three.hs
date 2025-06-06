-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationObjectGroup
  ( -- * Types
    AnimationObjectGroup (..)
    -- * Methods
  , newAnimationObjectGroup
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationObjectGroup
newtype AnimationObjectGroup
  = AnimationObjectGroup
  { unAnimationObjectGroupCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationObjectGroup
newAnimationObjectGroup :: JSM AnimationObjectGroup
newAnimationObjectGroup = THREE.new AnimationObjectGroup "AnimationObjectGroup" ([] :: [JSString])
-----------------------------------------------------------------------------
