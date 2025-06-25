-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Matrix3
  ( -- * Types
    Matrix3 (..)
    -- * Methods
  , THREE.Matrix3.new
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
new :: THREE.Three Matrix3
new = THREE.new Matrix3 "Matrix3" ([] :: [JSString])
-----------------------------------------------------------------------------
