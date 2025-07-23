-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Group
  ( -- * Types
    Group (..)
    -- * Methods
  , THREE.Group.new
    -- * Properties
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import qualified THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/scenes/Group
newtype Group
  = Group
  { unGroupCamera :: JSVal
  } deriving (MakeArgs, MakeObject, ToJSVal) 
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/cameras/Group
new :: THREE.Three Group
new = THREE.new Group "Group" ([] :: [JSString])
-----------------------------------------------------------------------------
