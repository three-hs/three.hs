-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ColorKeyframeTrack
  ( -- * Types
    ColorKeyframeTrack (..)
    -- * Methods
  , newColorKeyframeTrack
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
newColorKeyframeTrack :: JSM ColorKeyframeTrack
newColorKeyframeTrack = THREE.new ColorKeyframeTrack "ColorKeyframeTrack" ([] :: [JSString])
-----------------------------------------------------------------------------
