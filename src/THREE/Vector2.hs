-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Vector2
  ( -- * Types
    Vector2 (..)
    -- * Methods
  , newVector2
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
newVector2 :: JSM Vector2
newVector2 = THREE.new Vector2 "Vector2" ([] :: [JSString])
-----------------------------------------------------------------------------
