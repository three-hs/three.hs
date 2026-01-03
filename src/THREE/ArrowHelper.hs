-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.ArrowHelper
  ( -- * Types
    ArrowHelper (..)
    -- * Methods
  , THREE.ArrowHelper.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/ArrowHelper
newtype ArrowHelper
  = ArrowHelper
  { unArrowHelperCamera :: JSVal
  } deriving (ToObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/ArrowHelper
new :: THREE.Three ArrowHelper
new = THREE.new ArrowHelper "ArrowHelper" ([] :: [MisoString])
-----------------------------------------------------------------------------
