-----------------------------------------------------------------------------
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.LineBasicMaterial
  ( -- * Types
    LineBasicMaterial (..)
  , LineBasicMaterialClass (..)
    -- * Constructors
  , THREE.LineBasicMaterial.new
    -- * Read-only Properties
    -- * Properties
    -- * Methods
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Color
import           THREE.Constants.Materials
import           THREE.EventDispatcher
import           THREE.Internal as THREE
import           THREE.Material
import           THREE.Texture
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/materials/LineBasicMaterial
class (Material material) => LineBasicMaterialClass material where

  -- ReadOnly

  -- Property

  color :: Property material Color
  color = property "color" 

  fog :: Property material Bool
  fog = property "fog"

  linewidth :: Property material Double
  linewidth = property "linewidth"

  linecap :: Property material Linecap
  linecap = property "linecap"

  linejoin :: Property material Linejoin
  linejoin = property "linejoin"

  map :: Property material (Maybe Texture)
  map = optional "map"

  -- Method

instance LineBasicMaterialClass JSVal

-----------------------------------------------------------------------------

newtype LineBasicMaterial
  = LineBasicMaterial
  { unLineBasicMaterial :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
    deriving anyclass (Material, EventDispatcher, LineBasicMaterialClass)

instance FromJSVal LineBasicMaterial where
  fromJSVal = pure . Just . LineBasicMaterial

-- Constructor

new :: THREE.Three LineBasicMaterial
new = THREE.new LineBasicMaterial "LineBasicMaterial" ()

