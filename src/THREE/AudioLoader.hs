-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.AudioLoader
  ( -- * Types
    AudioLoader (..)
    -- * Methods
  , THREE.AudioLoader.new
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
new :: THREE.Three AudioLoader
new = THREE.new AudioLoader "AudioLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
