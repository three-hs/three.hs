-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.LineDashedMaterial
  ( -- * Types
    LineDashedMaterial (..)
    -- * Constructors
  , THREE.LineDashedMaterial.new
    -- * Read-only Properties
    -- * Properties
  , dashSize
  , gapSize
  , scale
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.EventDispatcher
import           THREE.LineBasicMaterial
import           THREE.Internal as THREE
import           THREE.Material
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/LineDashedMaterial
newtype LineDashedMaterial
  = LineDashedMaterial
  { unLineDashedMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher, LineBasicMaterialClass)

instance FromJSVal LineDashedMaterial where
  fromJSVal = pure . Just . LineDashedMaterial

-- Constructor

new :: THREE.Three LineDashedMaterial
new = THREE.new LineDashedMaterial "LineDashedMaterial" ()

-- ReadOnly

-- Property

dashSize :: Property LineDashedMaterial Double
dashSize = property "dashSize" 

gapSize :: Property LineDashedMaterial Double
gapSize = property "gapSize"

scale :: Property LineDashedMaterial Double
scale = property "scale"

-- Method

