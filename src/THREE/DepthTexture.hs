-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DepthTexture
  ( -- * Types
    DepthTexture (..)
    -- * Methods
  , THREE.DepthTexture.new
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
new :: THREE.Three DepthTexture
new = THREE.new DepthTexture "DepthTexture" ([] :: [JSString])
-----------------------------------------------------------------------------
