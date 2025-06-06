-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Euler
  ( -- * Types
    Euler (..)
    -- * Methods
  , newEuler
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Euler
newtype Euler
  = Euler
  { unEulerCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Euler
newEuler :: JSM Euler
newEuler = THREE.new Euler "Euler" ([] :: [JSString])
-----------------------------------------------------------------------------
