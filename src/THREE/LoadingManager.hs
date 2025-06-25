-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LoadingManager
  ( -- * Types
    LoadingManager (..)
    -- * Methods
  , THREE.LoadingManager.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LoadingManager
newtype LoadingManager
  = LoadingManager
  { unLoadingManagerCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LoadingManager
new :: THREE.Three LoadingManager
new = THREE.new LoadingManager "LoadingManager" ([] :: [JSString])
-----------------------------------------------------------------------------
