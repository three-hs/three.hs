-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PropertyBinding
  ( -- * Types
    PropertyBinding (..)
    -- * Methods
  , THREE.PropertyBinding.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PropertyBinding
newtype PropertyBinding
  = PropertyBinding
  { unPropertyBindingCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PropertyBinding
new :: THREE.Three PropertyBinding
new = THREE.new PropertyBinding "PropertyBinding" ([] :: [MisoString])
-----------------------------------------------------------------------------
