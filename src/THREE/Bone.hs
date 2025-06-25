-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Bone
  ( -- * Types
    Bone (..)
    -- * Methods
  , THREE.Bone.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Bone
newtype Bone
  = Bone
  { unBoneCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Bone
new :: THREE.Three Bone
new = THREE.new Bone "Bone" ([] :: [JSString])
-----------------------------------------------------------------------------
