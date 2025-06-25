-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.CustomBlendingEquations
  ( -- * Types
    CustomBlendingEquations (..)
    -- * Methods
  , THREE.Constants.CustomBlendingEquations.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CustomBlendingEquations
newtype CustomBlendingEquations
  = CustomBlendingEquations
  { unCustomBlendingEquationsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CustomBlendingEquations
new :: THREE.Three CustomBlendingEquations
new = THREE.new CustomBlendingEquations "CustomBlendingEquations" ([] :: [JSString])
-----------------------------------------------------------------------------
