-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.NumberKeyframeTrack
  ( -- * Types
    NumberKeyframeTrack (..)
    -- * Methods
  , newNumberKeyframeTrack
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
newNumberKeyframeTrack :: JSM NumberKeyframeTrack
newNumberKeyframeTrack = THREE.new NumberKeyframeTrack "NumberKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
