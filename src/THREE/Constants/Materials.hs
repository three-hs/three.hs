-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.Materials
  ( -- * Types
    Materials (..)
    -- * Methods
  , newMaterials
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Materials
newtype Materials
  = Materials
  { unMaterialsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Materials
newMaterials :: JSM Materials
newMaterials = THREE.new Materials "Materials" ([] :: [JSString])
-----------------------------------------------------------------------------
