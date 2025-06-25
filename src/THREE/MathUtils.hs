-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.MathUtils
  ( -- * Types
    MathUtils (..)
    -- * Methods
  , THREE.MathUtils.new
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
new :: THREE.Three MathUtils
new = THREE.new MathUtils "MathUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
