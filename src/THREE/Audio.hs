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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Audio
newtype Audio
  = Audio
  { unAudioCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Audio
new :: THREE.Three Audio
new = THREE.new Audio "Audio" ([] :: [JSString])
-----------------------------------------------------------------------------
