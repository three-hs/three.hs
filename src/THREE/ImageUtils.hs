-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ImageUtils
  ( -- * Types
    ImageUtils (..)
    -- * Methods
  , newImageUtils
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ImageUtils
newtype ImageUtils
  = ImageUtils
  { unImageUtilsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ImageUtils
newImageUtils :: JSM ImageUtils
newImageUtils = THREE.new ImageUtils "ImageUtils" ([] :: [JSString])
-----------------------------------------------------------------------------
