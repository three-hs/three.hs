-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Vector2
  ( -- * Types
    Vector2 (..)
    -- * Methods
  , THREE.Vector2.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Vector2
newtype Vector2
  = Vector2
  { unVector2Camera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Vector2
new :: THREE.Three Vector2
new = THREE.new Vector2 "Vector2" ([] :: [JSString])
-----------------------------------------------------------------------------
