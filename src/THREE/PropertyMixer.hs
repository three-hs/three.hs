-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PropertyMixer
  ( -- * Types
    PropertyMixer (..)
    -- * Methods
  , THREE.PropertyMixer.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PropertyMixer
newtype PropertyMixer
  = PropertyMixer
  { unPropertyMixerCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PropertyMixer
new :: THREE.Three PropertyMixer
new = THREE.new PropertyMixer "PropertyMixer" ([] :: [MisoString])
-----------------------------------------------------------------------------
