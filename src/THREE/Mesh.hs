-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Mesh
  ( -- * Types
    Mesh (..)
    -- * Methods
  , new
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/objects/Mesh
newtype Mesh
  = Mesh
  { unMesh :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
new :: JSM Mesh
new = THREE.new Mesh "Mesh" ([] :: [JSString])
-----------------------------------------------------------------------------
