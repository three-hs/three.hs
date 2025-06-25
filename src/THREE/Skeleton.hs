-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Skeleton
  ( -- * Types
    Skeleton (..)
    -- * Methods
  , THREE.Skeleton.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Skeleton
newtype Skeleton
  = Skeleton
  { unSkeletonCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Skeleton
new :: THREE.Three Skeleton
new = THREE.new Skeleton "Skeleton" ([] :: [JSString])
-----------------------------------------------------------------------------
