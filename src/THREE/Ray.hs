-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Ray
  ( -- * Types
    Ray (..)
    -- * Methods
  , THREE.Ray.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Ray
newtype Ray
  = Ray
  { unRayCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Ray
new :: THREE.Three Ray
new = THREE.new Ray "Ray" ([] :: [JSString])
-----------------------------------------------------------------------------
