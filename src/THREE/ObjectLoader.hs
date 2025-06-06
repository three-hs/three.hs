-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ObjectLoader
  ( -- * Types
    ObjectLoader (..)
    -- * Methods
  , newObjectLoader
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ObjectLoader
newtype ObjectLoader
  = ObjectLoader
  { unObjectLoaderCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ObjectLoader
newObjectLoader :: JSM ObjectLoader
newObjectLoader = THREE.new ObjectLoader "ObjectLoader" ([] :: [JSString])
-----------------------------------------------------------------------------
