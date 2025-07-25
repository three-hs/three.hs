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
  , begin
  , end
    -- * Property
  , dom
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Stats
newtype Stats
  = Stats
  { unStatsCamera :: JSVal
  } deriving (MakeObject, ToJSVal)
-----------------------------------------------------------------------------
instance FromJSVal Stats where
  fromJSVal = pure . pure . Stats
-----------------------------------------------------------------------------
new :: THREE.Three Stats
new = THREE.new Stats "Stats" ()
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
begin :: THREE.Method Stats () ()
begin = THREE.method "begin"
-----------------------------------------------------------------------------
end :: THREE.Method Stats () ()
end = THREE.method "end"
-----------------------------------------------------------------------------
dom :: THREE.Property Stats ()
dom = THREE.property "dom"
-----------------------------------------------------------------------------
