-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.Renderer
  ( -- * Types
    Renderer (..)
    -- * Methods
  , newRenderer
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Renderer
newtype Renderer
  = Renderer
  { unRendererCamera :: JSVal
  } deriving (MakeObject)
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Renderer
newRenderer :: JSM Renderer
newRenderer = THREE.new Renderer "Renderer" ([] :: [JSString])
-----------------------------------------------------------------------------
