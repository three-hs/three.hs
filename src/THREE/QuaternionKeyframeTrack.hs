-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.QuaternionKeyframeTrack
  ( -- * Types
    QuaternionKeyframeTrack (..)
    -- * Methods
  , THREE.QuaternionKeyframeTrack.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/QuaternionKeyframeTrack
newtype QuaternionKeyframeTrack
  = QuaternionKeyframeTrack
  { unQuaternionKeyframeTrackCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/QuaternionKeyframeTrack
new :: THREE.Three QuaternionKeyframeTrack
new = THREE.new QuaternionKeyframeTrack "QuaternionKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
