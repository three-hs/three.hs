-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.GridHelper
  ( -- * Types
    GridHelper (..)
    -- * Methods
  , newGridHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/GridHelper
newtype GridHelper
  = GridHelper
  { unGridHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/GridHelper
newGridHelper :: JSM GridHelper
newGridHelper = THREE.new GridHelper "GridHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
