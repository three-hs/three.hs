-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.CatmullRomCurve3
  ( -- * Types
    CatmullRomCurve3 (..)
    -- * Methods
  , newCatmullRomCurve3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/CatmullRomCurve3
newtype CatmullRomCurve3
  = CatmullRomCurve3
  { unCatmullRomCurve3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/CatmullRomCurve3
newCatmullRomCurve3 :: JSM CatmullRomCurve3
newCatmullRomCurve3 = THREE.new CatmullRomCurve3 "CatmullRomCurve3" ([] :: [JSString])
-----------------------------------------------------------------------------
