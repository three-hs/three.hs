{-# LANGUAGE OverloadedStrings #-}
module THREE.Internal
  ( new
  , Geometry
  , Material
  , Object3D (..)
  ) where

import           Control.Monad
import qualified Language.Javascript.JSaddle as J
import           Language.Javascript.JSaddle hiding (new)

-- | Smart constructor for THREE namespace objects
new
  :: ToJSVal a
  => (JSVal -> b)
  -> JSString
  -> [a]
  -> JSM b
new f name args = do
  v <- jsg ("THREE" :: JSString) ! name
  f <$> J.new v args

-- | https://threejs.org/docs/#api/en/materials/Geometry
class Geometry geometry

-- | https://threejs.org/docs/#api/en/materials/Material
class Material material

-- | dmj: these need to be fleshed out / updated, might be off.
-- only derive against newtypes that are truly Object3D
class Object3D object where
  add :: ToJSVal a => object -> a -> JSM ()
  rotateX :: object -> Float -> JSM ()
  rotateY :: object -> Float -> JSM ()


instance Object3D JSVal where
  add object v = void $ object # ("add" :: JSString) $ [v]
  rotateX object x = (object <# ("rotateX" :: JSString)) x
  rotateY object x = (object <# ("rotateY" :: JSString)) x
