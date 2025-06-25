-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Constants.Renderer
  ( -- * Types
    Renderer (..)
    -- * Methods
  , THREE.Constants.Renderer.new
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
new :: THREE.Three Renderer
new = THREE.new Renderer "Renderer" ([] :: [JSString])
-----------------------------------------------------------------------------
