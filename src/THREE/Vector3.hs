-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Vector3
  ( -- * Types
    Vector3 (..)
    -- * Methods
  , newVector3
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Vector3
newtype Vector3
  = Vector3
  { unVector3Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Vector3
newVector3 :: JSM Vector3
newVector3 = THREE.new Vector3 "Vector3" ([] :: [JSString])
-----------------------------------------------------------------------------
