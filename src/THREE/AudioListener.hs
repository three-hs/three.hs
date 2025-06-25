-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AudioListener
  ( -- * Types
    AudioListener (..)
    -- * Methods
  , THREE.AudioListener.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AudioListener
newtype AudioListener
  = AudioListener
  { unAudioListenerCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AudioListener
new :: THREE.Three AudioListener
new = THREE.new AudioListener "AudioListener" ([] :: [JSString])
-----------------------------------------------------------------------------
