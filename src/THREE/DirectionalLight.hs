-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DirectionalLight
  ( -- * Types
    DirectionalLight (..)
    -- * Methods
  , THREE.DirectionalLight.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DirectionalLight
newtype DirectionalLight
  = DirectionalLight
  { unDirectionalLightCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DirectionalLight
new :: THREE.Three DirectionalLight
new = THREE.new DirectionalLight "DirectionalLight" ([] :: [JSString])
-----------------------------------------------------------------------------
