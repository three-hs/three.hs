-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Box2
  ( -- * Types
    Box2 (..)
    -- * Methods
  , THREE.Box2.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Box2
newtype Box2
  = Box2
  { unBox2Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Box2
new :: THREE.Three Box2
new = THREE.new Box2 "Box2" ([] :: [JSString])
-----------------------------------------------------------------------------
