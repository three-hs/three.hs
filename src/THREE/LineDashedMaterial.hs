-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineDashedMaterial
  ( -- * Types
    LineDashedMaterial (..)
    -- * Methods
  , newLineDashedMaterial
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LineDashedMaterial
newtype LineDashedMaterial
  = LineDashedMaterial
  { unLineDashedMaterialCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LineDashedMaterial
newLineDashedMaterial :: JSM LineDashedMaterial
newLineDashedMaterial = THREE.new LineDashedMaterial "LineDashedMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
