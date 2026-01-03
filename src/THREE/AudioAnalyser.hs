-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AudioAnalyser
  ( -- * Types
    AudioAnalyser (..)
    -- * Methods
  , THREE.AudioAnalyser.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AudioAnalyser
newtype AudioAnalyser
  = AudioAnalyser
  { unAudioAnalyserCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AudioAnalyser
new :: THREE.Three AudioAnalyser
new = THREE.new AudioAnalyser "AudioAnalyser" ([] :: [MisoString])
-----------------------------------------------------------------------------
