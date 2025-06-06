-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BoxGeometry
  ( -- * Types
    BoxGeometry (..)
    -- * Methods
  , new
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/geometries/BoxGeometry
newtype BoxGeometry
  = BoxGeometry
  { unBoxGeometry :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
new :: JSM BoxGeometry
new = THREE.new BoxGeometry "BoxGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
