-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CatmullRomCurve3
  ( -- * Types
    CatmullRomCurve3 (..)
    -- * Methods
  , THREE.CatmullRomCurve3.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CatmullRomCurve3
newtype CatmullRomCurve3
  = CatmullRomCurve3
  { unCatmullRomCurve3Camera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CatmullRomCurve3
new :: THREE.Three CatmullRomCurve3
new = THREE.new CatmullRomCurve3 "CatmullRomCurve3" ([] :: [MisoString])
-----------------------------------------------------------------------------
