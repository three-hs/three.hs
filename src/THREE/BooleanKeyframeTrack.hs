-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BooleanKeyframeTrack
  ( -- * Types
    BooleanKeyframeTrack (..)
    -- * Methods
  , THREE.BooleanKeyframeTrack.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BooleanKeyframeTrack
newtype BooleanKeyframeTrack
  = BooleanKeyframeTrack
  { unBooleanKeyframeTrackCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BooleanKeyframeTrack
new :: THREE.Three BooleanKeyframeTrack
new = THREE.new BooleanKeyframeTrack "BooleanKeyframeTrack" ([] :: [MisoString])
-----------------------------------------------------------------------------
