-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LOD
  ( -- * Types
    LOD (..)
    -- * Methods
  , newLOD
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LOD
newtype LOD
  = LOD
  { unLODCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LOD
newLOD :: JSM LOD
newLOD = THREE.new LOD "LOD" ([] :: [JSString])
-----------------------------------------------------------------------------
