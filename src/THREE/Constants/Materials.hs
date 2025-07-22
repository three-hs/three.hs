-----------------------------------------------------------------------------
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/constants/Materials
module THREE.Constants.Materials
  ( -- * Types
    Side (..)
  , BlendingMode (..)
  , DepthMode (..)
  , TextureCombineOperations (..)
  , StencilFunctions (..)
  , StencilOperations (..)
  , NormalMapType (..)
  , GlslVersion (..)
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------

data Side
  = FrontSide 
  | BackSide 
  | DoubleSide

instance ToJSVal Side where
  toJSVal = toJSVal . go
    where
      go :: Side -> Int
      go = \case
        FrontSide  -> 0
        BackSide   -> 1
        DoubleSide -> 2

instance FromJSVal Side where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe Side
      go = \case
        0 -> Just FrontSide
        1 -> Just BackSide
        2 -> Just DoubleSide
        _ -> Nothing

-----------------------------------------------------------------------------

data BlendingMode
  = NoBlending 
  | NormalBlending 
  | AdditiveBlending
  | SubtractiveBlending 
  | MultiplyBlending 
  | CustomBlending

instance ToJSVal BlendingMode where
  toJSVal = toJSVal . go
    where
      go :: BlendingMode -> Int
      go = \case
        NoBlending          -> 0
        NormalBlending      -> 1
        AdditiveBlending    -> 2
        SubtractiveBlending -> 3
        MultiplyBlending    -> 4
        CustomBlending      -> 5

instance FromJSVal BlendingMode where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe BlendingMode
      go = \case
        0 -> Just NoBlending
        1 -> Just NormalBlending
        2 -> Just AdditiveBlending
        3 -> Just SubtractiveBlending
        4 -> Just MultiplyBlending
        5 -> Just CustomBlending
        _ -> Nothing

-----------------------------------------------------------------------------

data DepthMode
  = NeverDepth
  | AlwaysDepth 
  | EqualDepth 
  | LessDepth
  | LessEqualDepth 
  | GreaterEqualDepth 
  | GreaterDepth
  | NotEqualDepth

instance ToJSVal DepthMode where
  toJSVal = toJSVal . go
    where
      go :: DepthMode -> Int
      go = \case
        NeverDepth        -> 0
        AlwaysDepth       -> 1
        EqualDepth        -> 2
        LessDepth         -> 3
        LessEqualDepth    -> 4
        GreaterEqualDepth -> 5
        GreaterDepth      -> 6
        NotEqualDepth     -> 7

instance FromJSVal DepthMode where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe DepthMode
      go = \case
        0 -> Just NeverDepth
        1 -> Just AlwaysDepth
        2 -> Just EqualDepth
        3 -> Just LessDepth
        4 -> Just LessEqualDepth
        5 -> Just GreaterEqualDepth
        6 -> Just GreaterDepth
        7 -> Just NotEqualDepth
        _ -> Nothing

-----------------------------------------------------------------------------

data TextureCombineOperations
  = MultiplyOperation
  | MixOperation
  | AddOperation

instance ToJSVal TextureCombineOperations where
  toJSVal = toJSVal . go
    where
      go :: TextureCombineOperations -> Int
      go = \case
        MultiplyOperation -> 0
        MixOperation      -> 1
        AddOperation      -> 2

instance FromJSVal TextureCombineOperations where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe TextureCombineOperations
      go = \case
        0 -> Just MultiplyOperation
        1 -> Just MixOperation
        2 -> Just AddOperation
        _ -> Nothing

-----------------------------------------------------------------------------

data StencilFunctions
  = NeverStencilFunc 
  | LessStencilFunc 
  | EqualStencilFunc
  | LessEqualStencilFunc 
  | GreaterStencilFunc
  | NotEqualStencilFunc 
  | GreaterEqualStencilFunc
  | AlwaysStencilFunc

instance ToJSVal StencilFunctions where
  toJSVal = toJSVal . go
    where
      go :: StencilFunctions -> Int
      go = \case
        NeverStencilFunc        -> 512
        LessStencilFunc         -> 513
        EqualStencilFunc        -> 514
        LessEqualStencilFunc    -> 515
        GreaterStencilFunc      -> 516
        NotEqualStencilFunc     -> 517
        GreaterEqualStencilFunc -> 518
        AlwaysStencilFunc       -> 519

instance FromJSVal StencilFunctions where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe StencilFunctions
      go = \case
        512 -> Just NeverStencilFunc 
        513 -> Just LessStencilFunc 
        514 -> Just EqualStencilFunc
        515 -> Just LessEqualStencilFunc 
        516 -> Just GreaterStencilFunc
        517 -> Just NotEqualStencilFunc 
        518 -> Just GreaterEqualStencilFunc
        519 -> Just AlwaysStencilFunc
        _ -> Nothing

-----------------------------------------------------------------------------

data StencilOperations
  = ZeroStencilOp 
  | KeepStencilOp 
  | ReplaceStencilOp
  | IncrementStencilOp 
  | DecrementStencilOp
  | IncrementWrapStencilOp 
  | DecrementWrapStencilOp
  | InvertStencilOp

instance ToJSVal StencilOperations where
  toJSVal = toJSVal . go
    where
      go :: StencilOperations -> Int
      go = \case
        ZeroStencilOp           -> 0
        KeepStencilOp           -> 7680
        ReplaceStencilOp        -> 7681
        IncrementStencilOp      -> 7682 
        DecrementStencilOp      -> 7683
        IncrementWrapStencilOp  -> 34055
        DecrementWrapStencilOp  -> 34056
        InvertStencilOp         -> 5386

instance FromJSVal StencilOperations where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe StencilOperations
      go = \case
        0     -> Just ZeroStencilOp 
        7680  -> Just KeepStencilOp 
        7681  -> Just ReplaceStencilOp
        7682  -> Just IncrementStencilOp 
        7683  -> Just DecrementStencilOp
        34055 -> Just IncrementWrapStencilOp 
        34056 -> Just DecrementWrapStencilOp
        5386  -> Just InvertStencilOp
        _ -> Nothing

-----------------------------------------------------------------------------

data NormalMapType
  = TangentSpaceNormalMap 
  | ObjectSpaceNormalMap

instance ToJSVal NormalMapType where
  toJSVal = toJSVal . go
    where
      go :: NormalMapType -> Int
      go = \case
        TangentSpaceNormalMap -> 0
        ObjectSpaceNormalMap  -> 1

instance FromJSVal NormalMapType where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe NormalMapType
      go = \case
        0 -> Just TangentSpaceNormalMap 
        1 -> Just ObjectSpaceNormalMap 
        _ -> Nothing

-----------------------------------------------------------------------------

data GlslVersion
  = GLSL1 
  | GLSL3

instance ToJSVal GlslVersion where
  toJSVal = toJSVal . go
    where
      go :: GlslVersion -> JSString
      go = \case
        GLSL1 -> "100"
        GLSL3 -> "300 es"

instance FromJSVal GlslVersion where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: JSString -> Maybe GlslVersion
      go = \case
        "100"    -> Just GLSL1 
        "300 es" -> Just GLSL3 
        _ -> Nothing

-----------------------------------------------------------------------------
