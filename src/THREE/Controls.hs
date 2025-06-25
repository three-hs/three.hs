-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Controls
  ( -- * Types
    Controls (..)
    -- * Methods
  , THREE.Controls.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Controls
newtype Controls
  = Controls
  { unControlsCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Controls
new :: THREE.Three Controls
new = THREE.new Controls "Controls" ([] :: [JSString])
-----------------------------------------------------------------------------
