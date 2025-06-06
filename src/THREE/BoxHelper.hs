-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.BoxHelper
  ( -- * Types
    BoxHelper (..)
    -- * Methods
  , newBoxHelper
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/BoxHelper
newtype BoxHelper
  = BoxHelper
  { unBoxHelperCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/BoxHelper
newBoxHelper :: JSM BoxHelper
newBoxHelper = THREE.new BoxHelper "BoxHelper" ([] :: [JSString])
-----------------------------------------------------------------------------
