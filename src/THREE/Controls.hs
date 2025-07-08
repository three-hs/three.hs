------------------------------------------------------------------------------
{-# LANGUAGE DataKinds               #-}
{-# LANGUAGE TypeApplications        #-}
{-# LANGUAGE OverloadedStrings       #-}
{-# LANGUAGE ConstrainedClassMethods #-}
-----------------------------------------------------------------------------
module THREE.Controls
  ( -- * Class
    Controls (..)
  ) where
-----------------------------------------------------------------------------
import           Language.Javascript.JSaddle
-----------------------------------------------------------------------------
import           THREE.EventDispatcher as THREE
import           THREE.Internal        as THREE
-----------------------------------------------------------------------------
-- | https://threejs.org/docs/#api/en/extras/Controls
class EventDispatcher controls => Controls controls where
  enabled :: Property controls Bool
  enabled = property "enabled"
 ----------------------------------------------------------------------------
