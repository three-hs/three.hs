-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Matrix2
  ( -- * Types
    Matrix2 (..)
    -- * Methods
  , THREE.Matrix2.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Matrix2
newtype Matrix2
  = Matrix2
  { unMatrix2Camera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Matrix2
new :: THREE.Three Matrix2
new = THREE.new Matrix2 "Matrix2" ([] :: [MisoString])
-----------------------------------------------------------------------------
