-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.VectorKeyframeTrack
  ( -- * Types
    VectorKeyframeTrack (..)
    -- * Methods
  , THREE.VectorKeyframeTrack.new
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
new :: THREE.Three VectorKeyframeTrack
new = THREE.new VectorKeyframeTrack "VectorKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
