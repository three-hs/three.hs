-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationUtils
  ( -- * Types
    AnimationUtils (..)
    -- * Methods
  , newAnimationUtils
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationUtils
newtype AnimationUtils
  = AnimationUtils
  { unAnimationUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationUtils
newAnimationUtils :: JSM AnimationUtils
newAnimationUtils = THREE.new AnimationUtils "AnimationUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
