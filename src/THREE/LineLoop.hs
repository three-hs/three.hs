-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineLoop
  ( -- * Types
    LineLoop (..)
    -- * Methods
  , THREE.LineLoop.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineLoop
newtype LineLoop
  = LineLoop
  { unLineLoopCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineLoop
new :: THREE.Three LineLoop
new = THREE.new LineLoop "LineLoop" ([] :: [MisoString])
-----------------------------------------------------------------------------
