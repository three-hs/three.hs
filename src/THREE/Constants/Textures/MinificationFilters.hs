------------------------------------------------------------------------------
{-# LANGUAGE LambdaCase #-}
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/index.html#api/en/constants/Textures
module THREE.Constants.Textures.MinificationFilters
  ( MinificationFilters (..)
  ) where
-----------------------------------------------------------------------------
import           Miso
-----------------------------------------------------------------------------

data MinificationFilters
  = NearestFilter 
  | NearestMipmapNearestFilter
  | NearestMipmapLinearFilter 
  | LinearFilter
  | LinearMipmapNearestFilter 
  | LinearMipmapLinearFilter

instance ToJSVal MinificationFilters where
  toJSVal = toJSVal . go
    where
      go :: MinificationFilters -> Int
      go = \case
        NearestFilter               -> 1003
        NearestMipmapNearestFilter  -> 1004
        NearestMipmapLinearFilter   -> 1005
        LinearFilter                -> 1006
        LinearMipmapNearestFilter   -> 1007
        LinearMipmapLinearFilter    -> 1008

instance FromJSVal MinificationFilters where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe MinificationFilters
      go = \case
        1003 -> Just NearestFilter 
        1004 -> Just NearestMipmapNearestFilter
        1005 -> Just NearestMipmapLinearFilter 
        1006 -> Just LinearFilter
        1007 -> Just LinearMipmapNearestFilter 
        1008 -> Just LinearMipmapLinearFilter
        _ -> Nothing

----------------------------------------------------------------------------

