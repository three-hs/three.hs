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
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationObjectGroup
newtype AnimationObjectGroup
  = AnimationObjectGroup
  { unAnimationObjectGroupCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationObjectGroup
new :: THREE.Three AnimationObjectGroup
new = THREE.new AnimationObjectGroup "AnimationObjectGroup" ([] :: [MisoString])
-----------------------------------------------------------------------------
