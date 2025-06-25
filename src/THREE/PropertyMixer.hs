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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PropertyMixer
newtype PropertyMixer
  = PropertyMixer
  { unPropertyMixerCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PropertyMixer
new :: THREE.Three PropertyMixer
new = THREE.new PropertyMixer "PropertyMixer" ([] :: [JSString])
-----------------------------------------------------------------------------
