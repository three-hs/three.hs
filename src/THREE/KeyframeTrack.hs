-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.KeyframeTrack
  ( -- * Types
    KeyframeTrack (..)
    -- * Methods
  , THREE.KeyframeTrack.new
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
new :: THREE.Three KeyframeTrack
new = THREE.new KeyframeTrack "KeyframeTrack" ()
-----------------------------------------------------------------------------
