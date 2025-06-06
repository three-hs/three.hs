-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DepthTexture
  ( -- * Types
    DepthTexture (..)
    -- * Methods
  , newDepthTexture
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DepthTexture
newtype DepthTexture
  = DepthTexture
  { unDepthTextureCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DepthTexture
newDepthTexture :: JSM DepthTexture
newDepthTexture = THREE.new DepthTexture "DepthTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
