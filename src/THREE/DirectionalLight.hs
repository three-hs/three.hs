-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DirectionalLight
  ( -- * Types
    DirectionalLight (..)
    -- * Methods
  , newDirectionalLight
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
newDirectionalLight :: JSM DirectionalLight
newDirectionalLight = THREE.new DirectionalLight "DirectionalLight" ([] :: [JSString])
-----------------------------------------------------------------------------
