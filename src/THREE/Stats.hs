-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Stats
  ( -- * Types
    Stats (..)
    -- * Methods
  , THREE.Stats.new
  , showPanel
  , update
    -- * Property
  , dom
  ) where
-----------------------------------------------------------------------------
import Miso hiding (update)
import qualified Miso as J
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Stats
newtype Stats
  = Stats
  { unStats :: JSVal
  } deriving (ToObject, ToJSVal)
-----------------------------------------------------------------------------
instance FromJSVal Stats where
  fromJSVal = pure . pure . Stats
-----------------------------------------------------------------------------
new :: () -> THREE.Three Stats
new () = do
  v <- jsg ("Stats" :: MisoString)
  Stats <$> J.new v ()
-----------------------------------------------------------------------------
-- | stats.showPanel(1);
-- 0: FPS, 1: MS, 2: MB, 3+: CUSTOM
--
showPanel :: THREE.Method Stats Int ()
showPanel = THREE.method "showPanel"
-----------------------------------------------------------------------------
update :: THREE.Method Stats () ()
update = THREE.method "update"
-----------------------------------------------------------------------------
dom :: THREE.Property Stats JSVal
dom = THREE.property "dom"
-----------------------------------------------------------------------------
