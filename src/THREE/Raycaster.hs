-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Raycaster
  ( -- * Types
    Raycaster (..)
    -- * Methods
  , THREE.Raycaster.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Raycaster
newtype Raycaster
  = Raycaster
  { unRaycasterCamera :: JSVal
  } deriving (ToJSVal, ToObject)
-----------------------------------------------------------------------------
instance FromJSVal Raycaster where
  fromJSVal = pure . pure . Raycaster
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Raycaster
new :: THREE.Three Raycaster
new = THREE.new Raycaster "Raycaster" ([] :: [MisoString])
-----------------------------------------------------------------------------
