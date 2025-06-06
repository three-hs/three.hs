-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationLoader
  ( -- * Types
    AnimationLoader (..)
    -- * Methods
  , newAnimationLoader
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
newAnimationLoader :: JSM AnimationLoader
newAnimationLoader = THREE.new AnimationLoader "AnimationLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
