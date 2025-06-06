-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LatheGeometry
  ( -- * Types
    LatheGeometry (..)
    -- * Methods
  , newLatheGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LatheGeometry
newtype LatheGeometry
  = LatheGeometry
  { unLatheGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LatheGeometry
newLatheGeometry :: JSM LatheGeometry
newLatheGeometry = THREE.new LatheGeometry "LatheGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
