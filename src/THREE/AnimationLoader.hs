-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationLoader
  ( -- * Types
    AnimationLoader (..)
    -- * Methods
  , THREE.AnimationLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationLoader
newtype AnimationLoader
  = AnimationLoader
  { unAnimationLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationLoader
new :: THREE.Three AnimationLoader
new = THREE.new AnimationLoader "AnimationLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
