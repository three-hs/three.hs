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
  , x
  , y
  , z
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
  } deriving (MakeObject, ToJSVal, MakeArgs)
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
x :: THREE.Property Euler "x" Double
x = property
-----------------------------------------------------------------------------
y :: THREE.Property Euler "y" Double
y = property
-----------------------------------------------------------------------------
z :: THREE.Property Euler "z" Double
z = property
-----------------------------------------------------------------------------
-- optional properties
-----------------------------------------------------------------------------
-- methods
-----------------------------------------------------------------------------
-- helper functions
-----------------------------------------------------------------------------

