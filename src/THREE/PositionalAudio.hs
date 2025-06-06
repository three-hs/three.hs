-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PositionalAudio
  ( -- * Types
    PositionalAudio (..)
    -- * Methods
  , newPositionalAudio
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
newPositionalAudio :: JSM PositionalAudio
newPositionalAudio = THREE.new PositionalAudio "PositionalAudio" ([] :: [JSString])
-----------------------------------------------------------------------------
