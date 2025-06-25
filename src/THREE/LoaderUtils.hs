-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LoaderUtils
  ( -- * Types
    LoaderUtils (..)
    -- * Methods
  , THREE.LoaderUtils.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/LoaderUtils
newtype LoaderUtils
  = LoaderUtils
  { unLoaderUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/LoaderUtils
new :: THREE.Three LoaderUtils
new = THREE.new LoaderUtils "LoaderUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
