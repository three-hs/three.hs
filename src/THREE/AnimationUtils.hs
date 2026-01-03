-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AnimationUtils
  ( -- * Types
    AnimationUtils (..)
    -- * Methods
  , THREE.AnimationUtils.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AnimationUtils
newtype AnimationUtils
  = AnimationUtils
  { unAnimationUtilsCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AnimationUtils
new :: THREE.Three AnimationUtils
new = THREE.new AnimationUtils "AnimationUtils" ([] :: [MisoString])
-----------------------------------------------------------------------------
