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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PositionalAudio
newtype PositionalAudio
  = PositionalAudio
  { unPositionalAudioCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PositionalAudio
new :: THREE.Three PositionalAudio
new = THREE.new PositionalAudio "PositionalAudio" ([] :: [JSString])
-----------------------------------------------------------------------------
