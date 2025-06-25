-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Box3Helper
  ( -- * Types
    Box3Helper (..)
    -- * Methods
  , THREE.Box3Helper.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Box3Helper
newtype Box3Helper
  = Box3Helper
  { unBox3HelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Box3Helper
new :: THREE.Three Box3Helper
new = THREE.new Box3Helper "Box3Helper" ([] :: [JSString])
-----------------------------------------------------------------------------
