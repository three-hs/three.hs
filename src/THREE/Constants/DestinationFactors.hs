-----------------------------------------------------------------------------
{-# LANGUAGE LambdaCase #-}
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/index.html#api/en/constants/CustomBlendingEquations
module THREE.Constants.DestinationFactors
  ( -- * Types
    DestinationFactors (..)
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------

-- same as SourceFactors, w/o SrcAlphaSaturateFactor

data DestinationFactors
  = ZeroFactor 
  | OneFactor 
  | SrcColorFactor
  | OneMinusSrcColorFactor 
  | SrcAlphaFactor
  | OneMinusSrcAlphaFactor 
  | DstAlphaFactor
  | OneMinusDstAlphaFactor 
  | DstColorFactor
  | OneMinusDstColorFactor 
  | ConstantColorFactor
  | OneMinusConstantColorFactor
  | ConstantAlphaFactor
  | OneMinusConstantAlphaFactor

instance ToJSVal DestinationFactors where
  toJSVal = toJSVal . go
    where
      go :: DestinationFactors -> Int
      go = \case
        ZeroFactor                    -> 200
        OneFactor                     -> 201
        SrcColorFactor                -> 202
        OneMinusSrcColorFactor        -> 203
        SrcAlphaFactor                -> 204
        OneMinusSrcAlphaFactor        -> 205
        DstAlphaFactor                -> 206
        OneMinusDstAlphaFactor        -> 207
        DstColorFactor                -> 208
        OneMinusDstColorFactor        -> 209
        ConstantColorFactor           -> 211
        OneMinusConstantColorFactor   -> 212
        ConstantAlphaFactor           -> 213
        OneMinusConstantAlphaFactor   -> 214

instance FromJSVal DestinationFactors where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe DestinationFactors
      go = \case
        200 -> Just ZeroFactor
        201 -> Just OneFactor
        202 -> Just SrcColorFactor
        203 -> Just OneMinusSrcColorFactor
        204 -> Just SrcAlphaFactor
        205 -> Just OneMinusSrcAlphaFactor
        206 -> Just DstAlphaFactor
        207 -> Just OneMinusDstAlphaFactor
        208 -> Just DstColorFactor
        209 -> Just OneMinusDstColorFactor
        211 -> Just ConstantColorFactor
        212 -> Just OneMinusConstantColorFactor
        213 -> Just ConstantAlphaFactor
        214 -> Just OneMinusConstantAlphaFactor
        _ -> Nothing

-----------------------------------------------------------------------------
