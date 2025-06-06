-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.TorusGeometry
  ( -- * Types
    TorusGeometry (..)
    -- * Methods
  , newTorusGeometry
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/TorusGeometry
newtype TorusGeometry
  = TorusGeometry
  { unTorusGeometryCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/TorusGeometry
newTorusGeometry :: JSM TorusGeometry
newTorusGeometry = THREE.new TorusGeometry "TorusGeometry" ([] :: [JSString])
-----------------------------------------------------------------------------
