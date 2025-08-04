-----------------------------------------------------------------------------
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
module THREE.BufferAttribute
  ( -- * Types
    BufferAttribute (..)
    -- * Methods
  , THREE.BufferAttribute.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BufferAttribute
newtype BufferAttribute
  = BufferAttribute
  { unBufferAttribute :: JSVal
  } deriving newtype (MakeArgs, MakeObject, ToJSVal)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BufferAttribute
new :: THREE.Three BufferAttribute
new = THREE.new BufferAttribute "BufferAttribute" ([] :: [JSString])
-----------------------------------------------------------------------------
