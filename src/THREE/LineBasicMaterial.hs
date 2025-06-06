-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineBasicMaterial
  ( -- * Types
    LineBasicMaterial (..)
    -- * Methods
  , newLineBasicMaterial
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
newLineBasicMaterial :: JSM LineBasicMaterial
newLineBasicMaterial = THREE.new LineBasicMaterial "LineBasicMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
