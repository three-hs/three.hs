-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.PolarGridHelper
  ( -- * Types
    PolarGridHelper (..)
    -- * Methods
  , newPolarGridHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/PolarGridHelper
newtype PolarGridHelper
  = PolarGridHelper
  { unPolarGridHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/PolarGridHelper
newPolarGridHelper :: JSM PolarGridHelper
newPolarGridHelper = THREE.new PolarGridHelper "PolarGridHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
