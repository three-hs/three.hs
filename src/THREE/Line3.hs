-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Line3
  ( -- * Types
    Line3 (..)
    -- * Methods
  , newLine3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Line3
newtype Line3
  = Line3
  { unLine3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Line3
newLine3 :: JSM Line3
newLine3 = THREE.new Line3 "Line3" ([] :: [JSString])
-----------------------------------------------------------------------------
