-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Earcut
  ( -- * Types
    Earcut (..)
    -- * Methods
  , newEarcut
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Earcut
newtype Earcut
  = Earcut
  { unEarcutCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Earcut
newEarcut :: JSM Earcut
newEarcut = THREE.new Earcut "Earcut" ([] :: [JSString])
-----------------------------------------------------------------------------
