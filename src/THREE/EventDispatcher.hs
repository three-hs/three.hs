-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds                  #-}
{-# LANGUAGE TypeApplications           #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.EventDispatcher
  ( -- * Types
    EventDispatcher (..)
  ) where
-----------------------------------------------------------------------------
import Data.Proxy
import Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/EventDispatcher
class (MakeObject object, ToJSVal object) => EventDispatcher object where
  addEventListener :: Method object "addEventListener" (JSString, Function) JSUndefined
  -- ^ Adds a listener to an event type.
  addEventListener = method (Proxy @"addEventListener")

  hasEventListener :: Method object "hasEventListener" (JSString, Function) JSUndefined
  -- ^ Checks if listener is added to an event type.
  hasEventListener = method (Proxy @"hasEventListener")

  removeEventListener :: Method object "removeEventListener" (JSString, Function) JSUndefined
  -- ^ Removes a listener from an event type.
  removeEventListener = method (Proxy @"removeEventListener")

  dispatchEvent :: Method object "dispatchEvent" Object JSUndefined
  -- ^ Dispatches an Event
  dispatchEvent = method (Proxy @"dispatchEvent")
-----------------------------------------------------------------------------
instance EventDispatcher JSVal
-----------------------------------------------------------------------------


