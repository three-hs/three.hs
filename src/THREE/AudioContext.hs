-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AudioContext
  ( -- * Types
    AudioContext (..)
    -- * Methods
  , THREE.AudioContext.new
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
new :: THREE.Three AudioContext
new = THREE.new AudioContext "AudioContext" ([] :: [JSString])
-----------------------------------------------------------------------------
