-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ImageUtils
  ( -- * Types
    ImageUtils (..)
    -- * Methods
  , THREE.ImageUtils.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ImageUtils
newtype ImageUtils
  = ImageUtils
  { unImageUtilsCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ImageUtils
new :: THREE.Three ImageUtils
new = THREE.new ImageUtils "ImageUtils" ([] :: [MisoString])
-----------------------------------------------------------------------------
