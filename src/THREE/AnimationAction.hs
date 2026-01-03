-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationAction
  ( -- * Types
    AnimationAction (..)
    -- * Methods
  , THREE.AnimationAction.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationAction
newtype AnimationAction
  = AnimationAction
  { unAnimationActionCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationAction
new :: THREE.Three AnimationAction
new = THREE.new AnimationAction "AnimationAction" ([] :: [MisoString])
-----------------------------------------------------------------------------
