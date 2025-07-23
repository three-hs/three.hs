-----------------------------------------------------------------------------
{-# LANGUAGE LambdaCase #-}
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/index.html#api/en/constants/CustomBlendingEquations
module THREE.Constants.CustomBlendingEquations
  ( -- * Types
    BlendingEquations (..)
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------

data BlendingEquations
  = AddEquation
  | SubtractEquation
  | ReverseSubtractEquation
  | MinEquation 
  | MaxEquation

instance ToJSVal BlendingEquations where
  toJSVal = toJSVal . go
    where
      go :: BlendingEquations -> Int
      go = \case
        AddEquation             -> 100
        SubtractEquation        -> 101
        ReverseSubtractEquation -> 102
        MinEquation             -> 103
        MaxEquation             -> 104

instance FromJSVal BlendingEquations where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe BlendingEquations
      go = \case
        100 -> Just AddEquation
        101 -> Just SubtractEquation
        102 -> Just ReverseSubtractEquation
        103 -> Just MinEquation
        104 -> Just MaxEquation
        _ -> Nothing

-----------------------------------------------------------------------------
