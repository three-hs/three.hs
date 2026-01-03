-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ClippingGroup
  ( -- * Types
    ClippingGroup (..)
    -- * Methods
  , THREE.ClippingGroup.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ClippingGroup
newtype ClippingGroup
  = ClippingGroup
  { unClippingGroupCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ClippingGroup
new :: THREE.Three ClippingGroup
new = THREE.new ClippingGroup "ClippingGroup" ([] :: [MisoString])
-----------------------------------------------------------------------------
