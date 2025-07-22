------------------------------------------------------------------------------
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/index.html#api/en/constants/Textures
module THREE.Constants.Textures
  ( MappingModes (..)
  , WrappingModes (..)
  , Types (..)
  , Formats (..)
  , DdsS3tcFormats (..)
  , PvrtcFormats (..)
  , EtcFormats (..)
  , AstcFormats (..)
  , BptcFormats (..)
  , RgtcFormats (..)
  , TextureComparisonFunctions (..)
  , InternalFormats (..)
  , DepthPacking (..)
  , ColorSpace (..)
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
import           Text.Read (readMaybe)
-----------------------------------------------------------------------------

data MappingModes
  = UVMapping
  | CubeReflectionMapping 
  | CubeRefractionMapping
  | EquirectangularReflectionMapping
  | EquirectangularRefractionMapping 
  | CubeUVReflectionMapping

instance ToJSVal MappingModes where
  toJSVal = toJSVal . go
    where
      go :: MappingModes -> Int
      go = \case
        UVMapping                         -> 300
        CubeReflectionMapping             -> 301
        CubeRefractionMapping             -> 302
        EquirectangularReflectionMapping  -> 303
        EquirectangularRefractionMapping  -> 304
        CubeUVReflectionMapping           -> 306

instance FromJSVal MappingModes where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe MappingModes
      go = \case
        300 -> Just UVMapping
        301 -> Just CubeReflectionMapping 
        302 -> Just CubeRefractionMapping
        303 -> Just EquirectangularReflectionMapping
        304 -> Just EquirectangularRefractionMapping 
        306 -> Just CubeUVReflectionMapping
        _ -> Nothing

----------------------------------------------------------------------------

data WrappingModes
  = RepeatWrapping 
  | ClampToEdgeWrapping
  | MirroredRepeatWrapping

instance ToJSVal WrappingModes where
  toJSVal = toJSVal . go
    where
      go :: WrappingModes -> Int
      go = \case
        RepeatWrapping          -> 1000
        ClampToEdgeWrapping     -> 1001
        MirroredRepeatWrapping  -> 1002

instance FromJSVal WrappingModes where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe WrappingModes
      go = \case
        1000 -> Just RepeatWrapping
        1001 -> Just ClampToEdgeWrapping
        1002 -> Just MirroredRepeatWrapping
        _ -> Nothing

----------------------------------------------------------------------------

data Types
  = UnsignedByteType 
  | ByteType 
  | ShortType
  | UnsignedShortType 
  | IntType 
  | UnsignedIntType
  | FloatType 
  | HalfFloatType 
  | UnsignedShort4444Type
  | UnsignedShort5551Type 
  | UnsignedInt248Type
  | UnsignedInt5999Type

instance ToJSVal Types where
  toJSVal = toJSVal . go
    where
      go :: Types -> Int
      go = \case
        UnsignedByteType        -> 1009
        ByteType                -> 1010
        ShortType               -> 1011
        UnsignedShortType       -> 1012
        IntType                 -> 1013
        UnsignedIntType         -> 1014
        FloatType               -> 1015
        HalfFloatType           -> 1016
        UnsignedShort4444Type   -> 1017
        UnsignedShort5551Type   -> 1018
        UnsignedInt248Type      -> 1020
        UnsignedInt5999Type     -> 35902

instance FromJSVal Types where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe Types
      go = \case
        1009  -> Just UnsignedByteType 
        1010  -> Just ByteType 
        1011  -> Just ShortType
        1012  -> Just UnsignedShortType 
        1013  -> Just IntType 
        1014  -> Just UnsignedIntType
        1015  -> Just FloatType 
        1016  -> Just HalfFloatType 
        1017  -> Just UnsignedShort4444Type
        1018  -> Just UnsignedShort5551Type 
        1020  -> Just UnsignedInt248Type
        35902 -> Just UnsignedInt5999Type
        _ -> Nothing

----------------------------------------------------------------------------

data Formats
  = AlphaFormat 
  | RGBFormat
  | RGBAFormat 
  | DepthFormat
  | DepthStencilFormat
  | RedFormat 
  | RedIntegerFormat 
  | RGFormat
  | RGIntegerFormat 
  | RGBAIntegerFormat

instance ToJSVal Formats where
  toJSVal = toJSVal . go
    where
      go :: Formats -> Int
      go = \case
        AlphaFormat         -> 1021
        RGBFormat           -> 1022
        RGBAFormat          -> 1023
        DepthFormat         -> 1026
        DepthStencilFormat  -> 1027
        RedFormat           -> 1028
        RedIntegerFormat    -> 1029
        RGFormat            -> 1030
        RGIntegerFormat     -> 1031
        RGBAIntegerFormat   -> 1033

instance FromJSVal Formats where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe Formats
      go = \case
        1021 -> Just AlphaFormat 
        1022 -> Just RGBFormat
        1023 -> Just RGBAFormat 
        1026 -> Just DepthFormat
        1027 -> Just DepthStencilFormat
        1028 -> Just RedFormat 
        1029 -> Just RedIntegerFormat 
        1030 -> Just RGFormat
        1031 -> Just RGIntegerFormat 
        1033 -> Just RGBAIntegerFormat
        _ -> Nothing

----------------------------------------------------------------------------

data DdsS3tcFormats
  = RGB_S3TC_DXT1_Format 
  | RGBA_S3TC_DXT1_Format
  | RGBA_S3TC_DXT3_Format 
  | RGBA_S3TC_DXT5_Format

instance ToJSVal DdsS3tcFormats where
  toJSVal = toJSVal . go
    where
      go :: DdsS3tcFormats -> Int
      go = \case
        RGB_S3TC_DXT1_Format  -> 33776
        RGBA_S3TC_DXT1_Format -> 33777
        RGBA_S3TC_DXT3_Format -> 33778
        RGBA_S3TC_DXT5_Format -> 33779

instance FromJSVal DdsS3tcFormats where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe DdsS3tcFormats
      go = \case
        33776 -> Just RGB_S3TC_DXT1_Format 
        33777 -> Just RGBA_S3TC_DXT1_Format
        33778 -> Just RGBA_S3TC_DXT3_Format 
        33779 -> Just RGBA_S3TC_DXT5_Format
        _ -> Nothing

----------------------------------------------------------------------------

data PvrtcFormats
  = RGB_PVRTC_4BPPV1_Format
  | RGB_PVRTC_2BPPV1_Format
  | RGBA_PVRTC_4BPPV1_Format 
  | RGBA_PVRTC_2BPPV1_Format

instance ToJSVal PvrtcFormats where
  toJSVal = toJSVal . go
    where
      go :: PvrtcFormats -> Int
      go = \case
        RGB_PVRTC_4BPPV1_Format   -> 35840
        RGB_PVRTC_2BPPV1_Format   -> 35841
        RGBA_PVRTC_4BPPV1_Format  -> 35842
        RGBA_PVRTC_2BPPV1_Format  -> 35843

instance FromJSVal PvrtcFormats where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe PvrtcFormats
      go = \case
        35840 -> Just RGB_PVRTC_4BPPV1_Format
        35841 -> Just RGB_PVRTC_2BPPV1_Format
        35842 -> Just RGBA_PVRTC_4BPPV1_Format 
        35843 -> Just RGBA_PVRTC_2BPPV1_Format
        _ -> Nothing

----------------------------------------------------------------------------

data EtcFormats
  = RGB_ETC1_Format 
  | RGB_ETC2_Format 
  | RGBA_ETC2_EAC_Format

instance ToJSVal EtcFormats where
  toJSVal = toJSVal . go
    where
      go :: EtcFormats -> Int
      go = \case
        RGB_ETC1_Format       -> 36196
        RGB_ETC2_Format       -> 37492
        RGBA_ETC2_EAC_Format  -> 37496

instance FromJSVal EtcFormats where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe EtcFormats
      go = \case
        36196 -> Just RGB_ETC1_Format 
        37492 -> Just RGB_ETC2_Format 
        37496 -> Just RGBA_ETC2_EAC_Format
        _ -> Nothing

----------------------------------------------------------------------------

data AstcFormats
  = RGBA_ASTC_4x4_Format 
  | RGBA_ASTC_5x4_Format
  | RGBA_ASTC_5x5_Format 
  | RGBA_ASTC_6x5_Format
  | RGBA_ASTC_6x6_Format 
  | RGBA_ASTC_8x5_Format
  | RGBA_ASTC_8x6_Format 
  | RGBA_ASTC_8x8_Format
  | RGBA_ASTC_10x5_Format 
  | RGBA_ASTC_10x6_Format
  | RGBA_ASTC_10x8_Format 
  | RGBA_ASTC_10x10_Format
  | RGBA_ASTC_12x10_Format 
  | RGBA_ASTC_12x12_Format

instance ToJSVal AstcFormats where
  toJSVal = toJSVal . go
    where
      go :: AstcFormats -> Int
      go = \case
        RGBA_ASTC_4x4_Format    -> 37808
        RGBA_ASTC_5x4_Format    -> 37809
        RGBA_ASTC_5x5_Format    -> 37810
        RGBA_ASTC_6x5_Format    -> 37811
        RGBA_ASTC_6x6_Format    -> 37812
        RGBA_ASTC_8x5_Format    -> 37813
        RGBA_ASTC_8x6_Format    -> 37814
        RGBA_ASTC_8x8_Format    -> 37815
        RGBA_ASTC_10x5_Format   -> 37816
        RGBA_ASTC_10x6_Format   -> 37817
        RGBA_ASTC_10x8_Format   -> 37818
        RGBA_ASTC_10x10_Format  -> 37819
        RGBA_ASTC_12x10_Format  -> 37820
        RGBA_ASTC_12x12_Format  -> 37821

instance FromJSVal AstcFormats where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe AstcFormats
      go = \case
        37808 -> Just RGBA_ASTC_4x4_Format 
        37809 -> Just RGBA_ASTC_5x4_Format
        37810 -> Just RGBA_ASTC_5x5_Format 
        37811 -> Just RGBA_ASTC_6x5_Format
        37812 -> Just RGBA_ASTC_6x6_Format 
        37813 -> Just RGBA_ASTC_8x5_Format
        37814 -> Just RGBA_ASTC_8x6_Format 
        37815 -> Just RGBA_ASTC_8x8_Format
        37816 -> Just RGBA_ASTC_10x5_Format 
        37817 -> Just RGBA_ASTC_10x6_Format
        37818 -> Just RGBA_ASTC_10x8_Format 
        37819 -> Just RGBA_ASTC_10x10_Format
        37820 -> Just RGBA_ASTC_12x10_Format 
        37821 -> Just RGBA_ASTC_12x12_Format
        _ -> Nothing

----------------------------------------------------------------------------

data BptcFormats
  = RGBA_BPTC_Format 
  | RGB_BPTC_SIGNED_Format
  | RGB_BPTC_UNSIGNED_Format

instance ToJSVal BptcFormats where
  toJSVal = toJSVal . go
    where
      go :: BptcFormats -> Int
      go = \case
        RGBA_BPTC_Format          -> 36492
        RGB_BPTC_SIGNED_Format    -> 36494
        RGB_BPTC_UNSIGNED_Format  -> 36495

instance FromJSVal BptcFormats where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe BptcFormats
      go = \case
        36492 -> Just RGBA_BPTC_Format 
        36494 -> Just RGB_BPTC_SIGNED_Format
        36495 -> Just RGB_BPTC_UNSIGNED_Format
        _ -> Nothing

----------------------------------------------------------------------------

data RgtcFormats
  = RED_RGTC1_Format
  | SIGNED_RED_RGTC1_Format
  | RED_GREEN_RGTC2_Format
  | SIGNED_RED_GREEN_RGTC2_Format

instance ToJSVal RgtcFormats where
  toJSVal = toJSVal . go
    where
      go :: RgtcFormats -> Int
      go = \case
        RED_RGTC1_Format              -> 36283
        SIGNED_RED_RGTC1_Format       -> 36284
        RED_GREEN_RGTC2_Format        -> 36285
        SIGNED_RED_GREEN_RGTC2_Format -> 36286

instance FromJSVal RgtcFormats where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe RgtcFormats
      go = \case
        36283 -> Just RED_RGTC1_Format
        36284 -> Just SIGNED_RED_RGTC1_Format
        36285 -> Just RED_GREEN_RGTC2_Format
        36286 -> Just SIGNED_RED_GREEN_RGTC2_Format
        _ -> Nothing

----------------------------------------------------------------------------

data TextureComparisonFunctions
  = NeverCompare
  | LessCompare
  | EqualCompare
  | LessEqualCompare
  | GreaterCompare
  | NotEqualCompare
  | GreaterEqualCompare
  | AlwaysCompare

instance ToJSVal TextureComparisonFunctions where
  toJSVal = toJSVal . go
    where
      go :: TextureComparisonFunctions -> Int
      go = \case
        NeverCompare          -> 512
        LessCompare           -> 513
        EqualCompare          -> 514
        LessEqualCompare      -> 515
        GreaterCompare        -> 516
        NotEqualCompare       -> 517
        GreaterEqualCompare   -> 518
        AlwaysCompare         -> 519

instance FromJSVal TextureComparisonFunctions where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe TextureComparisonFunctions
      go = \case
        512 -> Just NeverCompare
        513 -> Just LessCompare
        514 -> Just EqualCompare
        515 -> Just LessEqualCompare
        516 -> Just GreaterCompare
        517 -> Just NotEqualCompare
        518 -> Just GreaterEqualCompare
        519 -> Just AlwaysCompare
        _ -> Nothing

----------------------------------------------------------------------------

data InternalFormats
  = ALPHA
  | RGB
  | RGBA
  | LUMINANCE
  | LUMINANCE_ALPHA
  | RED_INTEGER
  | R8
  | R8_SNORM
  | R8I
  | R8UI
  | R16I
  | R16UI
  | R16F
  | R32I
  | R32UI
  | R32F
  | RG8
  | RG8_SNORM
  | RG8I
  | RG8UI
  | RG16I
  | RG16UI
  | RG16F
  | RG32I
  | RG32UI
  | RG32F
  | RGB565
  | RGB8
  | RGB8_SNORM
  | RGB8I
  | RGB8UI
  | RGB16I
  | RGB16UI
  | RGB16F
  | RGB32I
  | RGB32UI
  | RGB32F
  | RGB9_E5
  | SRGB8
  | R11F_G11F_B10F
  | RGBA4
  | RGBA8
  | RGBA8_SNORM
  | RGBA8I
  | RGBA8UI
  | RGBA16I
  | RGBA16UI
  | RGBA16F
  | RGBA32I
  | RGBA32UI
  | RGBA32F
  | RGB5_A1
  | RGB10_A2
  | RGB10_A2UI
  | SRGB8_ALPHA8
  | DEPTH_COMPONENT16
  | DEPTH_COMPONENT24
  | DEPTH_COMPONENT32F
  | DEPTH24_STENCIL8
  | DEPTH32F_STENCIL8
  deriving (Read, Show)

-- TODO write custom instances of ToJSVal/FromJSVal instead of using Show/Read?
instance ToJSVal InternalFormats where
  toJSVal = toJSVal . show

instance FromJSVal InternalFormats where
  fromJSVal = fmap (>>= readMaybe) . fromJSVal

----------------------------------------------------------------------------

data DepthPacking
  = BasicDepthPacking 
  | RGBADepthPacking

instance ToJSVal DepthPacking where
  toJSVal = toJSVal . go
    where
      go :: DepthPacking -> Int
      go = \case
        BasicDepthPacking -> 3200
        RGBADepthPacking  -> 3201

instance FromJSVal DepthPacking where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: Int -> Maybe DepthPacking
      go = \case
        3200 -> Just BasicDepthPacking
        3201 -> Just RGBADepthPacking 
        _ -> Nothing

----------------------------------------------------------------------------

data ColorSpace
  = NoColorSpace
  | SRGBColorSpace
  | LinearSRGBColorSpace

instance ToJSVal ColorSpace where
  toJSVal = toJSVal . go
    where
      go :: ColorSpace -> JSString
      go = \case
        NoColorSpace          -> ""
        SRGBColorSpace        -> "srgb"
        LinearSRGBColorSpace  -> "srgb-linear"

instance FromJSVal ColorSpace where
  fromJSVal = fmap (>>= go) . fromJSVal
    where
      go :: JSString -> Maybe ColorSpace
      go = \case
        ""            -> Just NoColorSpace
        "srgb"        -> Just SRGBColorSpace
        "srgb-linear" -> Just LinearSRGBColorSpace
        _ -> Nothing

----------------------------------------------------------------------------
