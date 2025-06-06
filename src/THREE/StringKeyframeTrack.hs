-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.StringKeyframeTrack
  ( -- * Types
    StringKeyframeTrack (..)
    -- * Methods
  , newStringKeyframeTrack
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
newStringKeyframeTrack :: JSM StringKeyframeTrack
newStringKeyframeTrack = THREE.new StringKeyframeTrack "StringKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
