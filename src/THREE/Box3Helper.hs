-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Box3Helper
  ( -- * Types
    Box3Helper (..)
    -- * Methods
  , newBox3Helper
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
newBox3Helper :: JSM Box3Helper
newBox3Helper = THREE.new Box3Helper "Box3Helper" ([] :: [JSString])
-----------------------------------------------------------------------------
