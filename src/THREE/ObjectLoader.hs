-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ObjectLoader
  ( -- * Types
    ObjectLoader (..)
    -- * Methods
  , THREE.ObjectLoader.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ObjectLoader
newtype ObjectLoader
  = ObjectLoader
  { unObjectLoaderCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ObjectLoader
new :: THREE.Three ObjectLoader
new = THREE.new ObjectLoader "ObjectLoader" ([] :: [MisoString])
-----------------------------------------------------------------------------
