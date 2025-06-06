-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Frustum
  ( -- * Types
    Frustum (..)
    -- * Methods
  , newFrustum
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
newFrustum :: JSM Frustum
newFrustum = THREE.new Frustum "Frustum" ([] :: [JSString])
-----------------------------------------------------------------------------
