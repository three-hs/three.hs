-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ColorKeyframeTrack
  ( -- * Types
    ColorKeyframeTrack (..)
    -- * Methods
  , THREE.ColorKeyframeTrack.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ColorKeyframeTrack
newtype ColorKeyframeTrack
  = ColorKeyframeTrack
  { unColorKeyframeTrackCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ColorKeyframeTrack
new :: THREE.Three ColorKeyframeTrack
new = THREE.new ColorKeyframeTrack "ColorKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
