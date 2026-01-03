-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Audio
  ( -- * Types
    Audio (..)
    -- * Methods
  , THREE.Audio.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Audio
newtype Audio
  = Audio
  { unAudioCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Audio
new :: THREE.Three Audio
new = THREE.new Audio "Audio" ([] :: [MisoString])
-----------------------------------------------------------------------------
