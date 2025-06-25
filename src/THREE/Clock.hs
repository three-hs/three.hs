-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Clock
  ( -- * Types
    Clock (..)
    -- * Methods
  , THREE.Clock.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Clock
newtype Clock
  = Clock
  { unClockCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Clock
new :: THREE.Three Clock
new = THREE.new Clock "Clock" ([] :: [JSString])
-----------------------------------------------------------------------------
