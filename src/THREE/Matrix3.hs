-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Matrix3
  ( -- * Types
    Matrix3 (..)
    -- * Methods
  , newMatrix3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Matrix3
newtype Matrix3
  = Matrix3
  { unMatrix3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Matrix3
newMatrix3 :: JSM Matrix3
newMatrix3 = THREE.new Matrix3 "Matrix3" ([] :: [JSString])
-----------------------------------------------------------------------------
