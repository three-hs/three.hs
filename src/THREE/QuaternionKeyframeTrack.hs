-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.QuaternionKeyframeTrack
  ( -- * Types
    QuaternionKeyframeTrack (..)
    -- * Methods
  , newQuaternionKeyframeTrack
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
newQuaternionKeyframeTrack :: JSM QuaternionKeyframeTrack
newQuaternionKeyframeTrack = THREE.new QuaternionKeyframeTrack "QuaternionKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
