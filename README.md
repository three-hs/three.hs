three.hs
=========================

Haskell bindings to the [three.js](https://threejs.org) JavaScript library.

### Build

```bash
$ nix-build
```

### Dev

```bash
$ nix-shell --run 'cabal build'
```

### API coverage

#### Animation
  - [ ] [AnimationAction](https://threejs.org/docs/#api/en/animation/AnimationAction)
  - [ ] [AnimationClip](https://threejs.org/docs/#api/en/animation/AnimationClip)
  - [ ] [AnimationMixer](https://threejs.org/docs/#api/en/animation/AnimationMixer)
  - [ ] [AnimationObjectGroup](https://threejs.org/docs/#api/en/animation/AnimationObjectGroup)
  - [ ] [AnimationUtils](https://threejs.org/docs/#api/en/animation/AnimationUtils)
  - [ ] [KeyframeTrack](https://threejs.org/docs/#api/en/animation/KeyframeTrack)
  - [ ] [PropertyBinding](https://threejs.org/docs/#api/en/animation/PropertyBinding)
  - [ ] [PropertyMixer](https://threejs.org/docs/#api/en/animation/PropertyMixer)
  - [ ] [BooleanKeyframeTrack](https://threejs.org/docs/#api/en/animation/tracks/BooleanKeyframeTrack)
  - [ ] [ColorKeyframeTrack](https://threejs.org/docs/#api/en/animation/tracks/ColorKeyframeTrack)
  - [ ] [NumberKeyframeTrack](https://threejs.org/docs/#api/en/animation/tracks/NumberKeyframeTrack)
  - [ ] [QuaternionKeyframeTrack](https://threejs.org/docs/#api/en/animation/tracks/QuaternionKeyframeTrack)
  - [ ] [StringKeyframeTrack](https://threejs.org/docs/#api/en/animation/tracks/StringKeyframeTrack)
  - [ ] [VectorKeyframeTrack](https://threejs.org/docs/#api/en/animation/tracks/VectorKeyframeTrack)

#### Audio
  - [ ] [AudioAnalyser](https://threejs.org/docs/#api/en/audio/AudioAnalyser)
  - [ ] [AudioContext](https://threejs.org/docs/#api/en/audio/AudioContext)
  - [ ] [Audio](https://threejs.org/docs/#api/en/audio/Audio)
  - [ ] [AudioListener](https://threejs.org/docs/#api/en/audio/AudioListener)
  - [ ] [PositionalAudio](https://threejs.org/docs/#api/en/audio/PositionalAudio)

#### Cameras
  - [ ] [ArrayCamera](https://threejs.org/docs/#api/en/cameras/ArrayCamera)
  - [ ] [Camera](https://threejs.org/docs/#api/en/cameras/Camera)
  - [ ] [CubeCamera](https://threejs.org/docs/#api/en/cameras/CubeCamera)
  - [ ] [OrthographicCamera](https://threejs.org/docs/#api/en/cameras/OrthographicCamera)
  - [ ] [PerspectiveCamera](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)
  - [ ] [StereoCamera](https://threejs.org/docs/#api/en/cameras/StereoCamera)

#### Constants
  - [ ] [Animation](https://threejs.org/docs/#api/en/constants/Animation)
  - [x] [CustomBlendingEquations](https://threejs.org/docs/#api/en/constants/CustomBlendingEquations)
  - [x] [CustomBlendingEquations/DestinationFactors](https://threejs.org/docs/#api/en/constants/CustomBlendingEquations)
  - [x] [CustomBlendingEquations/SourceFactors](https://threejs.org/docs/#api/en/constants/CustomBlendingEquations)
  - [ ] [BufferAttributeUsage](https://threejs.org/docs/#api/en/constants/BufferAttributeUsage)
  - [ ] [Core](https://threejs.org/docs/#api/en/constants/Core)
  - [x] [Materials](https://threejs.org/docs/#api/en/constants/Materials)
  - [ ] [Renderer](https://threejs.org/docs/#api/en/constants/Renderer)
  - [x] [Textures](https://threejs.org/docs/#api/en/constants/Textures)
  - [x] [Textures/MagnificationFilters](https://threejs.org/docs/#api/en/constants/Textures)
  - [x] [Textures/MinificationFilters](https://threejs.org/docs/#api/en/constants/Textures)

#### Core
  - [ ] [BufferAttribute](https://threejs.org/docs/#api/en/core/BufferAttribute)
  - [ ] [BufferAttributeTypes](https://threejs.org/docs/#api/en/core/bufferAttributeTypes/BufferAttributeTypes)
  - [ ] [BufferGeometry](https://threejs.org/docs/#api/en/core/BufferGeometry)
  - [ ] [Clock](https://threejs.org/docs/#api/en/core/Clock)
  - [ ] [EventDispatcher](https://threejs.org/docs/#api/en/core/EventDispatcher)
  - [ ] [GLBufferAttribute](https://threejs.org/docs/#api/en/core/GLBufferAttribute)
  - [ ] [InstancedBufferAttribute](https://threejs.org/docs/#api/en/core/InstancedBufferAttribute)
  - [ ] [InstancedBufferGeometry](https://threejs.org/docs/#api/en/core/InstancedBufferGeometry)
  - [ ] [InstancedInterleavedBuffer](https://threejs.org/docs/#api/en/core/InstancedInterleavedBuffer)
  - [ ] [InterleavedBufferAttribute](https://threejs.org/docs/#api/en/core/InterleavedBufferAttribute)
  - [ ] [InterleavedBuffer](https://threejs.org/docs/#api/en/core/InterleavedBuffer)
  - [ ] [Layers](https://threejs.org/docs/#api/en/core/Layers)
  - [ ] [Object3D](https://threejs.org/docs/#api/en/core/Object3D)
  - [ ] [Raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
  - [ ] [Uniform](https://threejs.org/docs/#api/en/core/Uniform)

#### Extras
  - [ ] [Controls](https://threejs.org/docs/#api/en/extras/Controls)
  - [ ] [Curve](https://threejs.org/docs/#api/en/extras/core/Curve)
  - [ ] [CurvePath](https://threejs.org/docs/#api/en/extras/core/CurvePath)
  - [ ] [Interpolations](https://threejs.org/docs/#api/en/extras/core/Interpolations)
  - [ ] [Path](https://threejs.org/docs/#api/en/extras/core/Path)
  - [ ] [Shape](https://threejs.org/docs/#api/en/extras/core/Shape)
  - [ ] [ShapePath](https://threejs.org/docs/#api/en/extras/core/ShapePath)
  - [ ] [ArcCurve](https://threejs.org/docs/#api/en/extras/curves/ArcCurve)
  - [ ] [CatmullRomCurve3](https://threejs.org/docs/#api/en/extras/curves/CatmullRomCurve3)
  - [ ] [CubicBezierCurve3](https://threejs.org/docs/#api/en/extras/curves/CubicBezierCurve3)
  - [ ] [CubicBezierCurve](https://threejs.org/docs/#api/en/extras/curves/CubicBezierCurve)
  - [ ] [EllipseCurve](https://threejs.org/docs/#api/en/extras/curves/EllipseCurve)
  - [ ] [LineCurve3](https://threejs.org/docs/#api/en/extras/curves/LineCurve3)
  - [ ] [LineCurve](https://threejs.org/docs/#api/en/extras/curves/LineCurve)
  - [ ] [QuadraticBezierCurve3](https://threejs.org/docs/#api/en/extras/curves/QuadraticBezierCurve3)
  - [ ] [QuadraticBezierCurve](https://threejs.org/docs/#api/en/extras/curves/QuadraticBezierCurve)
  - [ ] [SplineCurve](https://threejs.org/docs/#api/en/extras/curves/SplineCurve)
  - [ ] [DataUtils](https://threejs.org/docs/#api/en/extras/DataUtils)
  - [ ] [Earcut](https://threejs.org/docs/#api/en/extras/Earcut)
  - [ ] [ImageUtils](https://threejs.org/docs/#api/en/extras/ImageUtils)
  - [ ] [PMREMGenerator](https://threejs.org/docs/#api/en/extras/PMREMGenerator)
  - [ ] [ShapeUtils](https://threejs.org/docs/#api/en/extras/ShapeUtils)
  - [ ] [TextureUtils](https://threejs.org/docs/#api/en/extras/TextureUtils)

#### Geometries
  - [ ] [BoxGeometry](https://threejs.org/docs/#api/en/geometries/BoxGeometry)
  - [ ] [CapsuleGeometry](https://threejs.org/docs/#api/en/geometries/CapsuleGeometry)
  - [ ] [CircleGeometry](https://threejs.org/docs/#api/en/geometries/CircleGeometry)
  - [ ] [ConeGeometry](https://threejs.org/docs/#api/en/geometries/ConeGeometry)
  - [ ] [CylinderGeometry](https://threejs.org/docs/#api/en/geometries/CylinderGeometry)
  - [ ] [DodecahedronGeometry](https://threejs.org/docs/#api/en/geometries/DodecahedronGeometry)
  - [ ] [EdgesGeometry](https://threejs.org/docs/#api/en/geometries/EdgesGeometry)
  - [ ] [ExtrudeGeometry](https://threejs.org/docs/#api/en/geometries/ExtrudeGeometry)
  - [ ] [IcosahedronGeometry](https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry)
  - [ ] [LatheGeometry](https://threejs.org/docs/#api/en/geometries/LatheGeometry)
  - [ ] [OctahedronGeometry](https://threejs.org/docs/#api/en/geometries/OctahedronGeometry)
  - [ ] [PlaneGeometry](https://threejs.org/docs/#api/en/geometries/PlaneGeometry)
  - [ ] [PolyhedronGeometry](https://threejs.org/docs/#api/en/geometries/PolyhedronGeometry)
  - [ ] [RingGeometry](https://threejs.org/docs/#api/en/geometries/RingGeometry)
  - [ ] [ShapeGeometry](https://threejs.org/docs/#api/en/geometries/ShapeGeometry)
  - [ ] [SphereGeometry](https://threejs.org/docs/#api/en/geometries/SphereGeometry)
  - [ ] [TetrahedronGeometry](https://threejs.org/docs/#api/en/geometries/TetrahedronGeometry)
  - [ ] [TorusGeometry](https://threejs.org/docs/#api/en/geometries/TorusGeometry)
  - [ ] [TorusKnotGeometry](https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry)
  - [ ] [TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry)
  - [ ] [WireframeGeometry](https://threejs.org/docs/#api/en/geometries/WireframeGeometry)

#### Helpers
  - [ ] [ArrowHelper](https://threejs.org/docs/#api/en/helpers/ArrowHelper)
  - [ ] [AxesHelper](https://threejs.org/docs/#api/en/helpers/AxesHelper)
  - [ ] [Box3Helper](https://threejs.org/docs/#api/en/helpers/Box3Helper)
  - [ ] [BoxHelper](https://threejs.org/docs/#api/en/helpers/BoxHelper)
  - [ ] [CameraHelper](https://threejs.org/docs/#api/en/helpers/CameraHelper)
  - [ ] [DirectionalLightHelper](https://threejs.org/docs/#api/en/helpers/DirectionalLightHelper)
  - [ ] [GridHelper](https://threejs.org/docs/#api/en/helpers/GridHelper)
  - [ ] [HemisphereLightHelper](https://threejs.org/docs/#api/en/helpers/HemisphereLightHelper)
  - [ ] [PlaneHelper](https://threejs.org/docs/#api/en/helpers/PlaneHelper)
  - [ ] [PointLightHelper](https://threejs.org/docs/#api/en/helpers/PointLightHelper)
  - [ ] [PolarGridHelper](https://threejs.org/docs/#api/en/helpers/PolarGridHelper)
  - [ ] [SkeletonHelper](https://threejs.org/docs/#api/en/helpers/SkeletonHelper)
  - [ ] [SpotLightHelper](https://threejs.org/docs/#api/en/helpers/SpotLightHelper)

#### Lights
  - [x] [AmbientLight](https://threejs.org/docs/#api/en/lights/AmbientLight)
  - [x] [DirectionalLight](https://threejs.org/docs/#api/en/lights/DirectionalLight)
  - [x] [HemisphereLight](https://threejs.org/docs/#api/en/lights/HemisphereLight)
  - [x] [Light](https://threejs.org/docs/#api/en/lights/Light)
  - [x] [LightProbe](https://threejs.org/docs/#api/en/lights/LightProbe)
  - [x] [PointLight](https://threejs.org/docs/#api/en/lights/PointLight)
  - [x] [RectAreaLight](https://threejs.org/docs/#api/en/lights/RectAreaLight)
  - [x] [SpotLight](https://threejs.org/docs/#api/en/lights/SpotLight)

#### Loaders
  - [ ] [AnimationLoader](https://threejs.org/docs/#api/en/loaders/AnimationLoader)
  - [ ] [AudioLoader](https://threejs.org/docs/#api/en/loaders/AudioLoader)
  - [ ] [BufferGeometryLoader](https://threejs.org/docs/#api/en/loaders/BufferGeometryLoader)
  - [ ] [Cache](https://threejs.org/docs/#api/en/loaders/Cache)
  - [ ] [CompressedTextureLoader](https://threejs.org/docs/#api/en/loaders/CompressedTextureLoader)
  - [ ] [CubeTextureLoader](https://threejs.org/docs/#api/en/loaders/CubeTextureLoader)
  - [ ] [DataTextureLoader](https://threejs.org/docs/#api/en/loaders/DataTextureLoader)
  - [ ] [FileLoader](https://threejs.org/docs/#api/en/loaders/FileLoader)
  - [ ] [ImageBitmapLoader](https://threejs.org/docs/#api/en/loaders/ImageBitmapLoader)
  - [ ] [ImageLoader](https://threejs.org/docs/#api/en/loaders/ImageLoader)
  - [ ] [Loader](https://threejs.org/docs/#api/en/loaders/Loader)
  - [ ] [LoaderUtils](https://threejs.org/docs/#api/en/loaders/LoaderUtils)
  - [ ] [DefaultLoadingManager](https://threejs.org/docs/#api/en/loaders/managers/DefaultLoadingManager)
  - [ ] [LoadingManager](https://threejs.org/docs/#api/en/loaders/managers/LoadingManager)
  - [ ] [MaterialLoader](https://threejs.org/docs/#api/en/loaders/MaterialLoader)
  - [ ] [ObjectLoader](https://threejs.org/docs/#api/en/loaders/ObjectLoader)
  - [ ] [TextureLoader](https://threejs.org/docs/#api/en/loaders/TextureLoader)

#### Materials
  - [x] [LineBasicMaterial](https://threejs.org/docs/#api/en/materials/LineBasicMaterial)
  - [x] [LineDashedMaterial](https://threejs.org/docs/#api/en/materials/LineDashedMaterial)
  - [x] [Material](https://threejs.org/docs/#api/en/materials/Material)
  - [x] [MeshBasicMaterial](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial)
  - [x] [MeshDepthMaterial](https://threejs.org/docs/#api/en/materials/MeshDepthMaterial)
  - [x] [MeshDistanceMaterial](https://threejs.org/docs/#api/en/materials/MeshDistanceMaterial)
  - [x] [MeshLambertMaterial](https://threejs.org/docs/#api/en/materials/MeshLambertMaterial)
  - [x] [MeshMatcapMaterial](https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial)
  - [x] [MeshNormalMaterial](https://threejs.org/docs/#api/en/materials/MeshNormalMaterial)
  - [x] [MeshPhongMaterial](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial)
  - [x] [MeshPhysicalMaterial](https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial)
  - [x] [MeshStandardMaterial](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)
  - [x] [MeshToonMaterial](https://threejs.org/docs/#api/en/materials/MeshToonMaterial)
  - [x] [PointsMaterial](https://threejs.org/docs/#api/en/materials/PointsMaterial)
  - [x] [RawShaderMaterial](https://threejs.org/docs/#api/en/materials/RawShaderMaterial)
  - [x] [ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial)
  - [x] [ShadowMaterial](https://threejs.org/docs/#api/en/materials/ShadowMaterial)
  - [x] [SpriteMaterial](https://threejs.org/docs/#api/en/materials/SpriteMaterial)

#### Math
  - [ ] [Box2](https://threejs.org/docs/#api/en/math/Box2)
  - [ ] [Box3](https://threejs.org/docs/#api/en/math/Box3)
  - [ ] [Color](https://threejs.org/docs/#api/en/math/Color)
  - [ ] [Cylindrical](https://threejs.org/docs/#api/en/math/Cylindrical)
  - [ ] [Euler](https://threejs.org/docs/#api/en/math/Euler)
  - [ ] [Frustum](https://threejs.org/docs/#api/en/math/Frustum)
  - [ ] [Interpolant](https://threejs.org/docs/#api/en/math/Interpolant)
  - [ ] [CubicInterpolant](https://threejs.org/docs/#api/en/math/CubicInterpolant)
  - [ ] [DiscreteInterpolant](https://threejs.org/docs/#api/en/math/DiscreteInterpolant)
  - [ ] [LinearInterpolant](https://threejs.org/docs/#api/en/math/LinearInterpolant)
  - [ ] [QuaternionLinearInterpolant](https://threejs.org/docs/#api/en/math/QuaternionLinearInterpolant)
  - [ ] [Line3](https://threejs.org/docs/#api/en/math/Line3)
  - [ ] [MathUtils](https://threejs.org/docs/#api/en/math/MathUtils)
  - [ ] [Matrix2](https://threejs.org/docs/#api/en/math/Matrix2)
  - [ ] [Matrix3](https://threejs.org/docs/#api/en/math/Matrix3)
  - [ ] [Matrix4](https://threejs.org/docs/#api/en/math/Matrix4)
  - [ ] [Plane](https://threejs.org/docs/#api/en/math/Plane)
  - [ ] [Quaternion](https://threejs.org/docs/#api/en/math/Quaternion)
  - [ ] [Ray](https://threejs.org/docs/#api/en/math/Ray)
  - [ ] [Sphere](https://threejs.org/docs/#api/en/math/Sphere)
  - [ ] [SphericalHarmonics3](https://threejs.org/docs/#api/en/math/SphericalHarmonics3)
  - [ ] [Spherical](https://threejs.org/docs/#api/en/math/Spherical)
  - [ ] [Triangle](https://threejs.org/docs/#api/en/math/Triangle)
  - [ ] [Vector2](https://threejs.org/docs/#api/en/math/Vector2)
  - [ ] [Vector3](https://threejs.org/docs/#api/en/math/Vector3)
  - [ ] [Vector4](https://threejs.org/docs/#api/en/math/Vector4)

#### Objects
  - [ ] [BatchedMesh](https://threejs.org/docs/#api/en/objects/BatchedMesh)
  - [ ] [Bone](https://threejs.org/docs/#api/en/objects/Bone)
  - [ ] [ClippingGroup](https://threejs.org/docs/#api/en/objects/ClippingGroup)
  - [ ] [Group](https://threejs.org/docs/#api/en/objects/Group)
  - [ ] [InstancedMesh](https://threejs.org/docs/#api/en/objects/InstancedMesh)
  - [ ] [Line](https://threejs.org/docs/#api/en/objects/Line)
  - [ ] [LineLoop](https://threejs.org/docs/#api/en/objects/LineLoop)
  - [ ] [LineSegments](https://threejs.org/docs/#api/en/objects/LineSegments)
  - [ ] [LOD](https://threejs.org/docs/#api/en/objects/LOD)
  - [ ] [Mesh](https://threejs.org/docs/#api/en/objects/Mesh)
  - [ ] [Points](https://threejs.org/docs/#api/en/objects/Points)
  - [ ] [Skeleton](https://threejs.org/docs/#api/en/objects/Skeleton)
  - [ ] [SkinnedMesh](https://threejs.org/docs/#api/en/objects/SkinnedMesh)
  - [ ] [Sprite](https://threejs.org/docs/#api/en/objects/Sprite)

#### Renderers
  - [ ] [ShaderChunk](https://threejs.org/docs/#api/en/renderers/ShaderChunk)
  - [ ] [ShaderLib](https://threejs.org/docs/#api/en/renderers/ShaderLib)
  - [ ] [UniformsLib](https://threejs.org/docs/#api/en/renderers/UniformsLib)
  - [ ] [UniformsUtils](https://threejs.org/docs/#api/en/renderers/UniformsUtils)
  - [ ] [WebGLProgram](https://threejs.org/docs/#api/en/renderers/WebGLProgram)
  - [ ] [WebGL3DRenderTarget](https://threejs.org/docs/#api/en/renderers/WebGL3DRenderTarget)
  - [ ] [WebGLArrayRenderTarget](https://threejs.org/docs/#api/en/renderers/WebGLArrayRenderTarget)
  - [ ] [WebGLCubeRenderTarget](https://threejs.org/docs/#api/en/renderers/WebGLCubeRenderTarget)
  - [ ] [WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
  - [ ] [WebGLRenderTarget](https://threejs.org/docs/#api/en/renderers/WebGLRenderTarget)
  - [ ] [WebXRManager](https://threejs.org/docs/#api/en/renderers/WebXRManager)

#### Scenes
  - [x] [FogExp2](https://threejs.org/docs/#api/en/scenes/FogExp2)
  - [x] [Fog](https://threejs.org/docs/#api/en/scenes/Fog)
  - [x] [Scene](https://threejs.org/docs/#api/en/scenes/Scene)

#### Textures
  - [x] [CanvasTexture](https://threejs.org/docs/#api/en/textures/CanvasTexture)
  - [x] [CompressedArrayTexture](https://threejs.org/docs/#api/en/textures/CompressedArrayTexture)
  - [x] [CompressedTexture](https://threejs.org/docs/#api/en/textures/CompressedTexture)
  - [x] [CubeTexture](https://threejs.org/docs/#api/en/textures/CubeTexture)
  - [x] [Data3DTexture](https://threejs.org/docs/#api/en/textures/Data3DTexture)
  - [x] [DataArrayTexture](https://threejs.org/docs/#api/en/textures/DataArrayTexture)
  - [x] [DataTexture](https://threejs.org/docs/#api/en/textures/DataTexture)
  - [x] [DepthTexture](https://threejs.org/docs/#api/en/textures/DepthTexture)
  - [x] [FramebufferTexture](https://threejs.org/docs/#api/en/textures/FramebufferTexture)
  - [x] [Source](https://threejs.org/docs/#api/en/textures/Source)
  - [x] [Texture](https://threejs.org/docs/#api/en/textures/Texture)
  - [x] [VideoFrameTexture](https://threejs.org/docs/#api/en/textures/VideoFrameTexture)
  - [x] [VideoTexture](https://threejs.org/docs/#api/en/textures/VideoTexture)

### Addons coverage

#### Controls
  - [ ] [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)

