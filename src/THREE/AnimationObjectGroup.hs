-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationObjectGroup
  ( -- * Types
    AnimationObjectGroup (..)
    -- * Methods
  , THREE.AnimationObjectGroup.new
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
new :: THREE.Three AnimationObjectGroup
new = THREE.new AnimationObjectGroup "AnimationObjectGroup" ([] :: [JSString])
-----------------------------------------------------------------------------
