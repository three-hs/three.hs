-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BooleanKeyframeTrack
  ( -- * Types
    BooleanKeyframeTrack (..)
    -- * Methods
  , newBooleanKeyframeTrack
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BooleanKeyframeTrack
newtype BooleanKeyframeTrack
  = BooleanKeyframeTrack
  { unBooleanKeyframeTrackCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BooleanKeyframeTrack
newBooleanKeyframeTrack :: JSM BooleanKeyframeTrack
newBooleanKeyframeTrack = THREE.new BooleanKeyframeTrack "BooleanKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
