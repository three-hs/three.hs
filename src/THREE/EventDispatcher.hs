-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.EventDispatcher
  ( -- * Types
    EventDispatcher (..)
    -- * Methods
  , THREE.EventDispatcher.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/EventDispatcher
newtype EventDispatcher
  = EventDispatcher
  { unEventDispatcherCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/EventDispatcher
new :: THREE.Three EventDispatcher
new = THREE.new EventDispatcher "EventDispatcher" ([] :: [JSString])
-----------------------------------------------------------------------------
