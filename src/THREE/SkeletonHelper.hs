-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.SkeletonHelper
  ( -- * Types
    SkeletonHelper (..)
    -- * Methods
  , THREE.SkeletonHelper.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/SkeletonHelper
newtype SkeletonHelper
  = SkeletonHelper
  { unSkeletonHelperCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/SkeletonHelper
new :: THREE.Three SkeletonHelper
new = THREE.new SkeletonHelper "SkeletonHelper" ([] :: [MisoString])
-----------------------------------------------------------------------------
