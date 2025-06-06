-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.KeyframeTrack
  ( -- * Types
    KeyframeTrack (..)
    -- * Methods
  , newKeyframeTrack
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/KeyframeTrack
newtype KeyframeTrack
  = KeyframeTrack
  { unKeyframeTrackCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/KeyframeTrack
newKeyframeTrack :: JSM KeyframeTrack
newKeyframeTrack = THREE.new KeyframeTrack "KeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
