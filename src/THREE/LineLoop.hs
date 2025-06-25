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
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineLoop
newtype LineLoop
  = LineLoop
  { unLineLoopCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineLoop
new :: THREE.Three LineLoop
new = THREE.new LineLoop "LineLoop" ([] :: [JSString])
-----------------------------------------------------------------------------
