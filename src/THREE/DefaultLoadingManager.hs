-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DefaultLoadingManager
  ( -- * Types
    DefaultLoadingManager (..)
    -- * Methods
  , newDefaultLoadingManager
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/DefaultLoadingManager
newtype DefaultLoadingManager
  = DefaultLoadingManager
  { unDefaultLoadingManagerCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/DefaultLoadingManager
newDefaultLoadingManager :: JSM DefaultLoadingManager
newDefaultLoadingManager = THREE.new DefaultLoadingManager "DefaultLoadingManager" ([] :: [JSString])
-----------------------------------------------------------------------------
