-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Box3
  ( -- * Types
    Box3 (..)
    -- * Methods
  , newBox3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Box3
newtype Box3
  = Box3
  { unBox3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Box3
newBox3 :: JSM Box3
newBox3 = THREE.new Box3 "Box3" ([] :: [JSString])
-----------------------------------------------------------------------------
