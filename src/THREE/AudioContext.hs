-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AudioContext
  ( -- * Types
    AudioContext (..)
    -- * Methods
  , newAudioContext
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AudioContext
newtype AudioContext
  = AudioContext
  { unAudioContextCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AudioContext
newAudioContext :: JSM AudioContext
newAudioContext = THREE.new AudioContext "AudioContext" ([] :: [JSString])
-----------------------------------------------------------------------------
