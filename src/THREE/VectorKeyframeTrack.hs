-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.VectorKeyframeTrack
  ( -- * Types
    VectorKeyframeTrack (..)
    -- * Methods
  , newVectorKeyframeTrack
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/VectorKeyframeTrack
newtype VectorKeyframeTrack
  = VectorKeyframeTrack
  { unVectorKeyframeTrackCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/VectorKeyframeTrack
newVectorKeyframeTrack :: JSM VectorKeyframeTrack
newVectorKeyframeTrack = THREE.new VectorKeyframeTrack "VectorKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
