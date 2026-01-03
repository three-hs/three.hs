-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LOD
  ( -- * Types
    LOD (..)
    -- * Methods
  , THREE.LOD.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LOD
newtype LOD
  = LOD
  { unLODCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LOD
new :: THREE.Three LOD
new = THREE.new LOD "LOD" ([] :: [MisoString])
-----------------------------------------------------------------------------
