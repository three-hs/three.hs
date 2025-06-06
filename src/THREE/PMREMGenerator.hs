-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PMREMGenerator
  ( -- * Types
    PMREMGenerator (..)
    -- * Methods
  , newPMREMGenerator
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
newPMREMGenerator :: JSM PMREMGenerator
newPMREMGenerator = THREE.new PMREMGenerator "PMREMGenerator" ([] :: [JSString])
-----------------------------------------------------------------------------
