-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Frustum
  ( -- * Types
    Frustum (..)
    -- * Methods
  , THREE.Frustum.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Frustum
newtype Frustum
  = Frustum
  { unFrustumCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Frustum
new :: THREE.Three Frustum
new = THREE.new Frustum "Frustum" ([] :: [MisoString])
-----------------------------------------------------------------------------
