-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MathUtils
  ( -- * Types
    MathUtils (..)
    -- * Methods
  , newMathUtils
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/MathUtils
newtype MathUtils
  = MathUtils
  { unMathUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/MathUtils
newMathUtils :: JSM MathUtils
newMathUtils = THREE.new MathUtils "MathUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
