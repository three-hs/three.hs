-----------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
-----------------------------------------------------------------------------
module THREE.Source
  ( -- * Types
    Source (..)
    -- * Constructor
  , THREE.Source.new
    -- * Properties
  , data_
  , needsUpdate
  , dataReady
  , uuid
  , version
    -- * Methods
  , toJSON
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.Internal as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/textures/Source
newtype Source
  = Source
  { unSource :: JSVal
  } deriving (MakeObject, ToJSVal, MakeArgs)

instance FromJSVal Source where
  fromJSVal = pure . Just . Source

-----------------------------------------------------------------------------

-- Constructor

-- TODO define a typeclass for source data? 
new :: (MakeArgs a) => a -> THREE.Three Source
new = THREE.new Source "Source"

-- ReadOnly

uuid :: ReadOnly Source JSString
uuid = readonly "uuid"

-----------------------------------------------------------------------------

-- Property

data_ :: (FromJSVal a, ToJSVal a) => Property Source (Maybe a)
data_ = optional "data"

needsUpdate :: Property Source Bool
needsUpdate = property "needsUpdate"

dataReady :: Property Source Bool
dataReady = property "dataReady"

version :: Property Source Int
version = property "version"

-----------------------------------------------------------------------------

-- Method

toJSON :: Method Source Object Object
toJSON = method "toJSON"

-----------------------------------------------------------------------------
