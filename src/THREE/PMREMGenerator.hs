-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PMREMGenerator
  ( -- * Types
    PMREMGenerator (..)
    -- * Methods
  , THREE.PMREMGenerator.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PMREMGenerator
newtype PMREMGenerator
  = PMREMGenerator
  { unPMREMGeneratorCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PMREMGenerator
new :: THREE.Three PMREMGenerator
new = THREE.new PMREMGenerator "PMREMGenerator" ([] :: [JSString])
-----------------------------------------------------------------------------
