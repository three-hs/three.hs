-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.StringKeyframeTrack
  ( -- * Types
    StringKeyframeTrack (..)
    -- * Methods
  , THREE.StringKeyframeTrack.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/StringKeyframeTrack
newtype StringKeyframeTrack
  = StringKeyframeTrack
  { unStringKeyframeTrackCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/StringKeyframeTrack
new :: THREE.Three StringKeyframeTrack
new = THREE.new StringKeyframeTrack "StringKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
