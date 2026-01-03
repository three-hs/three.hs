-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Line3
  ( -- * Types
    Line3 (..)
    -- * Methods
  , THREE.Line3.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Line3
newtype Line3
  = Line3
  { unLine3Camera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Line3
new :: THREE.Three Line3
new = THREE.new Line3 "Line3" ([] :: [MisoString])
-----------------------------------------------------------------------------
