-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.NumberKeyframeTrack
  ( -- * Types
    NumberKeyframeTrack (..)
    -- * Methods
  , THREE.NumberKeyframeTrack.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/NumberKeyframeTrack
newtype NumberKeyframeTrack
  = NumberKeyframeTrack
  { unNumberKeyframeTrackCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/NumberKeyframeTrack
new :: THREE.Three NumberKeyframeTrack
new = THREE.new NumberKeyframeTrack "NumberKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
