-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Matrix2
  ( -- * Types
    Matrix2 (..)
    -- * Methods
  , newMatrix2
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Matrix2
newtype Matrix2
  = Matrix2
  { unMatrix2Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Matrix2
newMatrix2 :: JSM Matrix2
newMatrix2 = THREE.new Matrix2 "Matrix2" ([] :: [JSString])
-----------------------------------------------------------------------------
