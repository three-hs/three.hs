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
import           Miso
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/core/EventDispatcher
class (ToObject object, ToJSVal object) => EventDispatcher object where
  addEventListener :: Method object (MisoString, Function) ()
  -- ^ Adds a listener to an event type.
  addEventListener = method "addEventListener"

  hasEventListener :: Method object (MisoString, Function) ()
  -- ^ Checks if listener is added to an event type.
  hasEventListener = method "hasEventListener"

  removeEventListener :: Method object (MisoString, Function) ()
  -- ^ Removes a listener from an event type.
  removeEventListener = method "removeEventListener"

  dispatchEvent :: Method object Object ()
  -- ^ Dispatches an Event
  dispatchEvent = method "dispatchEvent"
-----------------------------------------------------------------------------
instance EventDispatcher JSVal
-----------------------------------------------------------------------------


