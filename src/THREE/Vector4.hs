-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Vector4
  ( -- * Types
    Vector4 (..)
    -- * Methods
  , newVector4
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Vector4
newtype Vector4
  = Vector4
  { unVector4Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Vector4
newVector4 :: JSM Vector4
newVector4 = THREE.new Vector4 "Vector4" ([] :: [JSString])
-----------------------------------------------------------------------------
