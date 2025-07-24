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
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Stats
new :: THREE.Three Stats
new = THREE.new Stats "Stats" ([] :: [JSString])
-----------------------------------------------------------------------------
-- | stats.showPanel(1);
-- 0: FPS, 1: MS, 2: MB, 3+: CUSTOM
--
showPanel :: THREE.Method Stats Int ()
showPanel = THREE.method "showPanel"
-----------------------------------------------------------------------------
