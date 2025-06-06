-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.LoaderUtils
  ( -- * Types
    LoaderUtils (..)
    -- * Methods
  , newLoaderUtils
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
newLoaderUtils :: JSM LoaderUtils
newLoaderUtils = THREE.new LoaderUtils "LoaderUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
