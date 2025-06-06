-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PropertyBinding
  ( -- * Types
    PropertyBinding (..)
    -- * Methods
  , newPropertyBinding
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PropertyBinding
newtype PropertyBinding
  = PropertyBinding
  { unPropertyBindingCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PropertyBinding
newPropertyBinding :: JSM PropertyBinding
newPropertyBinding = THREE.new PropertyBinding "PropertyBinding" ([] :: [JSString])
-----------------------------------------------------------------------------
