-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Earcut
  ( -- * Types
    Earcut (..)
    -- * Methods
  , THREE.Earcut.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Earcut
newtype Earcut
  = Earcut
  { unEarcutCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Earcut
new :: THREE.Three Earcut
new = THREE.new Earcut "Earcut" ([] :: [MisoString])
-----------------------------------------------------------------------------
