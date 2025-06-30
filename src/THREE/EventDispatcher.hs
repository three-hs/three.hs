{-# LANGUAGE TypeApplications #-}
-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.EventDispatcher
  ( -- * Types
    EventDispatcher (..)
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/EventDispatcher
class (MakeObject object, ToJSVal object) => EventDispatcher object where
  addEventListener :: Method object (JSString, Function) JSUndefined
  -- ^ Adds a listener to an event type.
  addEventListener = method "addEventListener"

  hasEventListener :: Method object (JSString, Function) JSUndefined
  -- ^ Checks if listener is added to an event type.
  hasEventListener = method "hasEventListener"

  removeEventListener :: Method object (JSString, Function) JSUndefined
  -- ^ Removes a listener from an event type.
  removeEventListener = method "removeEventListener"

  dispatchEvent :: Method object Object JSUndefined
  -- ^ Dispatches an Event
  dispatchEvent = method "dispatchEvent"
-----------------------------------------------------------------------------
instance EventDispatcher JSVal
-----------------------------------------------------------------------------


