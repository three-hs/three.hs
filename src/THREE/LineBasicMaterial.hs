-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineBasicMaterial
  ( -- * Types
    LineBasicMaterial (..)
    -- * Methods
  , THREE.LineBasicMaterial.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineBasicMaterial
newtype LineBasicMaterial
  = LineBasicMaterial
  { unLineBasicMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineBasicMaterial
new :: THREE.Three LineBasicMaterial
new = THREE.new LineBasicMaterial "LineBasicMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
