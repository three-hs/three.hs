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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Frustum
newtype Frustum
  = Frustum
  { unFrustumCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Frustum
new :: THREE.Three Frustum
new = THREE.new Frustum "Frustum" ([] :: [JSString])
-----------------------------------------------------------------------------
