-----------------------------------------------------------------------------
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DataKinds #-}
-----------------------------------------------------------------------------
module THREE.Euler
  ( -- * Types
    Euler (..)
    -- * Constructors
    -- * Read-only properties
    -- * Properties
  -- * Optional properties
  -- * Methods
  -- * Helper functions
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle hiding (new)
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/math/Euler
newtype Euler 
  = Euler
  { unEuler :: JSVal
  } deriving (ToJSVal, MakeObject, X, Y, Z)
-----------------------------------------------------------------------------
instance FromJSVal Euler where
  fromJSVal = pure . Just . Euler
-----------------------------------------------------------------------------
-- constructors
-----------------------------------------------------------------------------
-- read-only properties
-----------------------------------------------------------------------------
-- properties
-----------------------------------------------------------------------------
-- optional properties
-----------------------------------------------------------------------------
-- methods
-----------------------------------------------------------------------------
-- helper functions
-----------------------------------------------------------------------------

