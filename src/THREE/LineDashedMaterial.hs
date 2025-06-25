-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LineDashedMaterial
  ( -- * Types
    LineDashedMaterial (..)
    -- * Methods
  , THREE.LineDashedMaterial.new
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
new :: THREE.Three LineDashedMaterial
new = THREE.new LineDashedMaterial "LineDashedMaterial" ([] :: [JSString])
-----------------------------------------------------------------------------
