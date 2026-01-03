-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PositionalAudio
  ( -- * Types
    PositionalAudio (..)
    -- * Methods
  , THREE.PositionalAudio.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PositionalAudio
newtype PositionalAudio
  = PositionalAudio
  { unPositionalAudioCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PositionalAudio
new :: THREE.Three PositionalAudio
new = THREE.new PositionalAudio "PositionalAudio" ([] :: [MisoString])
-----------------------------------------------------------------------------
