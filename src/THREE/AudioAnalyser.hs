-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AudioAnalyser
  ( -- * Types
    AudioAnalyser (..)
    -- * Methods
  , newAudioAnalyser
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AudioAnalyser
newtype AudioAnalyser
  = AudioAnalyser
  { unAudioAnalyserCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AudioAnalyser
newAudioAnalyser :: JSM AudioAnalyser
newAudioAnalyser = THREE.new AudioAnalyser "AudioAnalyser" ([] :: [JSString])
-----------------------------------------------------------------------------
