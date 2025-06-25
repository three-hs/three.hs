-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.DefaultLoadingManager
  ( -- * Types
    DefaultLoadingManager (..)
    -- * Methods
  , THREE.DefaultLoadingManager.new
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
new :: THREE.Three DefaultLoadingManager
new = THREE.new DefaultLoadingManager "DefaultLoadingManager" ([] :: [JSString])
-----------------------------------------------------------------------------
