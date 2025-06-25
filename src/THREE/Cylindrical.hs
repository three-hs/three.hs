-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Cylindrical
  ( -- * Types
    Cylindrical (..)
    -- * Methods
  , THREE.Cylindrical.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Cylindrical
newtype Cylindrical
  = Cylindrical
  { unCylindricalCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Cylindrical
new :: THREE.Three Cylindrical
new = THREE.new Cylindrical "Cylindrical" ([] :: [JSString])
-----------------------------------------------------------------------------
