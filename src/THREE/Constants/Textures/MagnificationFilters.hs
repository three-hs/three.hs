------------------------------------------------------------------------------
{-# LANGUAGE LambdaCase #-}
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/index.html#api/en/constants/Textures
module THREE.Constants.Textures.MagnificationFilters
  ( MagnificationFilters (..)
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------

data MagnificationFilters
  = NearestFilter 
  | LinearFilter

instance ToJSVal MagnificationFilters where
  toJSVal = toJSVal . go
    where
      go :: MagnificationFilters -> Int
      go = \case
        NearestFilter   -> 1003
        LinearFilter    -> 1006

instance FromJSVal MagnificationFilters where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe MagnificationFilters
      go = \case
        1003 -> Just NearestFilter
        1006 -> Just LinearFilter
        _ -> Nothing

----------------------------------------------------------------------------

