-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Stats
  ( -- * Types
    Stats (..)
    -- * Methods
  , THREE.Stats.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
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
