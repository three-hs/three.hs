-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AudioLoader
  ( -- * Types
    AudioLoader (..)
    -- * Methods
  , newAudioLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/AudioLoader
newtype AudioLoader
  = AudioLoader
  { unAudioLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/AudioLoader
newAudioLoader :: JSM AudioLoader
newAudioLoader = THREE.new AudioLoader "AudioLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
