var QH="178",DU={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},OU={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZH=0,nZ=1,$H=2,RU=3,FU=0,sZ=1,WH=2,D8=3,e9=0,i0=1,O8=2,m8=0,f7=1,iZ=2,oZ=3,aZ=4,KH=5,J7=100,HH=101,YH=102,XH=103,UH=104,GH=200,EH=201,NH=202,qH=203,DH=204,OH=205,RH=206,FH=207,MH=208,kH=209,VH=210,LH=211,zH=212,BH=213,IH=214,t6=0,e6=1,JQ=2,b7=3,QQ=4,ZQ=5,$Q=6,WQ=7,_H=0,wH=1,CH=2,T8=0,PH=1,AH=2,TH=3,SH=4,jH=5,yH=6,vH=7,MU="attached",kU="detached",VU=300,Q7=301,O9=302,KQ=303,HQ=304,h7=306,fH=1000,bH=1001,hH=1002,Z7=1003,xH=1004,LU=1004,x7=1005,zU=1005,R9=1006,YQ=1007,BU=1007,$7=1008,IU=1008,d8=1009,gH=1010,pH=1011,g7=1012,rZ=1013,W7=1014,l8=1015,p7=1016,tZ=1017,eZ=1018,K7=1020,mH=35902,dH=1021,lH=1022,R8=1023,XQ=1026,m7=1027,uH=1028,J$=1029,cH=1030,Q$=1031,_U=1032,Z$=1033,UQ=33776,GQ=33777,EQ=33778,NQ=33779,$$=35840,W$=35841,K$=35842,H$=35843,Y$=36196,X$=37492,U$=37496,G$=37808,E$=37809,N$=37810,q$=37811,D$=37812,O$=37813,R$=37814,F$=37815,M$=37816,k$=37817,V$=37818,L$=37819,z$=37820,B$=37821,qQ=36492,I$=36494,_$=36495,nH=36283,w$=36284,C$=36285,P$=36286,wU=2200,CU=2201,PU=2202,AU=2300,TU=2301,SU=2302,jU=2400,yU=2401,vU=2402,fU=2500,bU=2501,hU=0,xU=1,gU=2,pU=3200,sH=3201,mU=3202,dU=3203,iH=0,oH=1,F9="",aH="srgb",d7="srgb-linear",A$="linear",G0="srgb",lU=0,uU=7680,cU=7681,nU=7682,sU=7683,iU=34055,oU=34056,aU=5386,rU=512,tU=513,eU=514,JG=515,QG=516,ZG=517,$G=518,WG=519,rH=512,tH=513,eH=514,T$=515,JY=516,QY=517,ZY=518,$Y=519,KG=35044,HG=35048,YG=35040,XG=35045,UG=35049,GG=35041,EG=35046,NG=35050,qG=35042,DG="100",S$="300 es",WY=2000,OG=2001,RG={COMPUTE:"compute",RENDER:"render"},FG={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},MG={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};class H8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let $=Z[J];if($!==void 0){let W=$.indexOf(Q);if(W!==-1)$.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let $=Z.slice(0);for(let W=0,K=$.length;W<K;W++)$[W].call(this,J);J.target=null}}}var P0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iW=1234567,U9=Math.PI/180,G9=180/Math.PI;function n0(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,$=Math.random()*4294967295|0;return(P0[J&255]+P0[J>>8&255]+P0[J>>16&255]+P0[J>>24&255]+"-"+P0[Q&255]+P0[Q>>8&255]+"-"+P0[Q>>16&15|64]+P0[Q>>24&255]+"-"+P0[Z&63|128]+P0[Z>>8&255]+"-"+P0[Z>>16&255]+P0[Z>>24&255]+P0[$&255]+P0[$>>8&255]+P0[$>>16&255]+P0[$>>24&255]).toLowerCase()}function pJ(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function j$(J,Q){return(J%Q+Q)%Q}function kG(J,Q,Z,$,W){return $+(J-Q)*(W-$)/(Z-Q)}function VG(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function P7(J,Q,Z){return(1-Z)*J+Z*Q}function LG(J,Q,Z,$){return P7(J,Q,1-Math.exp(-Z*$))}function zG(J,Q=1){return Q-Math.abs(j$(J,Q*2)-Q)}function BG(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function IG(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function _G(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function wG(J,Q){return J+Math.random()*(Q-J)}function CG(J){return J*(0.5-Math.random())}function PG(J){if(J!==void 0)iW=J;let Q=iW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function AG(J){return J*U9}function TG(J){return J*G9}function SG(J){return(J&J-1)===0&&J!==0}function jG(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function yG(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function vG(J,Q,Z,$,W){let{cos:K,sin:H}=Math,Y=K(Z/2),X=H(Z/2),U=K((Q+$)/2),G=H((Q+$)/2),E=K((Q-$)/2),N=H((Q-$)/2),q=K(($-Q)/2),R=H(($-Q)/2);switch(W){case"XYX":J.set(Y*G,X*E,X*N,Y*U);break;case"YZY":J.set(X*N,Y*G,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*N,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*R,X*q,Y*U);break;case"YXY":J.set(X*q,Y*G,X*R,Y*U);break;case"ZYZ":J.set(X*R,X*q,Y*G,Y*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function f0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function uJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var fG={DEG2RAD:U9,RAD2DEG:G9,generateUUID:n0,clamp:pJ,euclideanModulo:j$,mapLinear:kG,inverseLerp:VG,lerp:P7,damp:LG,pingpong:zG,smoothstep:BG,smootherstep:IG,randInt:_G,randFloat:wG,randFloatSpread:CG,seededRandom:PG,degToRad:AG,radToDeg:TG,isPowerOfTwo:SG,ceilPowerOfTwo:jG,floorPowerOfTwo:yG,setQuaternionFromProperEuler:vG,normalize:uJ,denormalize:f0};class o{constructor(J=0,Q=0){o.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6],this.y=$[1]*Q+$[4]*Z+$[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=pJ(this.x,J.x,Q.x),this.y=pJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=pJ(this.x,J,Q),this.y=pJ(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(pJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(pJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*Z-K*$+J.x,this.y=W*$+K*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class b0{constructor(J=0,Q=0,Z=0,$=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=$}static slerpFlat(J,Q,Z,$,W,K,H){let Y=Z[$+0],X=Z[$+1],U=Z[$+2],G=Z[$+3],E=W[K+0],N=W[K+1],q=W[K+2],R=W[K+3];if(H===0){J[Q+0]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G;return}if(H===1){J[Q+0]=E,J[Q+1]=N,J[Q+2]=q,J[Q+3]=R;return}if(G!==R||Y!==E||X!==N||U!==q){let F=1-H,O=Y*E+X*N+U*q+G*R,D=O>=0?1:-1,k=1-O*O;if(k>Number.EPSILON){let B=Math.sqrt(k),T=Math.atan2(B,O*D);F=Math.sin(F*T)/B,H=Math.sin(H*T)/B}let M=H*D;if(Y=Y*F+E*M,X=X*F+N*M,U=U*F+q*M,G=G*F+R*M,F===1-H){let B=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=B,X*=B,U*=B,G*=B}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,Z,$,W,K){let H=Z[$],Y=Z[$+1],X=Z[$+2],U=Z[$+3],G=W[K],E=W[K+1],N=W[K+2],q=W[K+3];return J[Q]=H*q+U*G+Y*N-X*E,J[Q+1]=Y*q+U*E+X*G-H*N,J[Q+2]=X*q+U*N+H*E-Y*G,J[Q+3]=U*q-H*G-Y*E-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,$){return this._x=J,this._y=Q,this._z=Z,this._w=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:$,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H(Z/2),U=H($/2),G=H(W/2),E=Y(Z/2),N=Y($/2),q=Y(W/2);switch(K){case"XYZ":this._x=E*U*G+X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G-E*N*q;break;case"YXZ":this._x=E*U*G+X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G+E*N*q;break;case"ZXY":this._x=E*U*G-X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G-E*N*q;break;case"ZYX":this._x=E*U*G-X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G+E*N*q;break;case"YZX":this._x=E*U*G+X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G-E*N*q;break;case"XZY":this._x=E*U*G-X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G+E*N*q;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,$=Math.sin(Z);return this._x=J.x*$,this._y=J.y*$,this._z=J.z*$,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],$=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],E=Z+H+G;if(E>0){let N=0.5/Math.sqrt(E+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(W-X)*N,this._z=(K-$)*N}else if(Z>H&&Z>G){let N=2*Math.sqrt(1+Z-H-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=($+K)/N,this._z=(W+X)/N}else if(H>G){let N=2*Math.sqrt(1+H-Z-G);this._w=(W-X)/N,this._x=($+K)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-Z-H);this._w=(K-$)/N,this._x=(W+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(pJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let $=Math.min(1,Q/Z);return this.slerp(J,$),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:$,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=Z*U+K*H+$*X-W*Y,this._y=$*U+K*Y+W*H-Z*X,this._z=W*U+K*X+Z*Y-$*H,this._w=K*U-Z*H-$*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let Z=this._x,$=this._y,W=this._z,K=this._w,H=K*J._w+Z*J._x+$*J._y+W*J._z;if(H<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,H=-H;else this.copy(J);if(H>=1)return this._w=K,this._x=Z,this._y=$,this._z=W,this;let Y=1-H*H;if(Y<=Number.EPSILON){let N=1-Q;return this._w=N*K+Q*this._w,this._x=N*Z+Q*this._x,this._y=N*$+Q*this._y,this._z=N*W+Q*this._z,this.normalize(),this}let X=Math.sqrt(Y),U=Math.atan2(X,H),G=Math.sin((1-Q)*U)/X,E=Math.sin(Q*U)/X;return this._w=K*G+this._w*E,this._x=Z*G+this._x*E,this._y=$*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),$=Math.sqrt(1-Z),W=Math.sqrt(Z);return this.set($*Math.sin(J),$*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(J=0,Q=0,Z=0){P.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(oW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(oW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*Z+W[6]*$,this.y=W[1]*Q+W[4]*Z+W[7]*$,this.z=W[2]*Q+W[5]*Z+W[8]*$,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*Z+W[11]*$+W[15]);return this.x=(W[0]*Q+W[4]*Z+W[8]*$+W[12])*K,this.y=(W[1]*Q+W[5]*Z+W[9]*$+W[13])*K,this.z=(W[2]*Q+W[6]*Z+W[10]*$+W[14])*K,this}applyQuaternion(J){let Q=this.x,Z=this.y,$=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*$-H*Z),U=2*(H*Q-W*$),G=2*(W*Z-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=Z+Y*U+H*X-W*G,this.z=$+Y*G+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*$,this.y=W[1]*Q+W[5]*Z+W[9]*$,this.z=W[2]*Q+W[6]*Z+W[10]*$,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=pJ(this.x,J.x,Q.x),this.y=pJ(this.y,J.y,Q.y),this.z=pJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=pJ(this.x,J,Q),this.y=pJ(this.y,J,Q),this.z=pJ(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(pJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:$,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=$*Y-W*H,this.y=W*K-Z*Y,this.z=Z*H-$*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return WZ.copy(this).projectOnVector(J),this.sub(WZ)}reflect(J){return this.sub(WZ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(pJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,$=this.z-J.z;return Q*Q+Z*Z+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let $=Math.sin(Q)*J;return this.x=$*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=$*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),$=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=$,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var WZ=new P,oW=new b0;class dJ{constructor(J,Q,Z,$,W,K,H,Y,X){if(dJ.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,K,H,Y,X)}set(J,Q,Z,$,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=$,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=Z,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,K=Z[0],H=Z[3],Y=Z[6],X=Z[1],U=Z[4],G=Z[7],E=Z[2],N=Z[5],q=Z[8],R=$[0],F=$[3],O=$[6],D=$[1],k=$[4],M=$[7],B=$[2],T=$[5],_=$[8];return W[0]=K*R+H*D+Y*B,W[3]=K*F+H*k+Y*T,W[6]=K*O+H*M+Y*_,W[1]=X*R+U*D+G*B,W[4]=X*F+U*k+G*T,W[7]=X*O+U*M+G*_,W[2]=E*R+N*D+q*B,W[5]=E*F+N*k+q*T,W[8]=E*O+N*M+q*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-Z*W*U+Z*H*Y+$*W*X-$*K*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,E=H*Y-U*W,N=X*W-K*Y,q=Q*G+Z*E+$*N;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=G*R,J[1]=($*X-U*Z)*R,J[2]=(H*Z-$*K)*R,J[3]=E*R,J[4]=(U*Q-$*Y)*R,J[5]=($*W-H*Q)*R,J[6]=N*R,J[7]=(Z*Y-X*Q)*R,J[8]=(K*Q-Z*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,$,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set(Z*Y,Z*X,-Z*(Y*K+X*H)+K+J,-$*X,$*Y,-$*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return this.premultiply(KZ.makeScale(J,Q)),this}rotate(J){return this.premultiply(KZ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(KZ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<9;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var KZ=new dJ;function y$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}var bG={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function c9(J,Q){return new bG[J](Q)}function s9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function KY(){let J=s9("canvas");return J.style.display="block",J}var aW={};function E9(J){if(J in aW)return;aW[J]=!0,console.warn(J)}function HY(J,Q,Z){return new Promise(function($,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,Z);break;default:$()}}setTimeout(K,Z)})}function YY(J){let Q=J.elements;Q[2]=0.5*Q[2]+0.5*Q[3],Q[6]=0.5*Q[6]+0.5*Q[7],Q[10]=0.5*Q[10]+0.5*Q[11],Q[14]=0.5*Q[14]+0.5*Q[15]}function XY(J){let Q=J.elements;if(Q[11]===-1)Q[10]=-Q[10]-1,Q[14]=-Q[14];else Q[10]=-Q[10],Q[14]=-Q[14]+1}var rW=new dJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),tW=new dJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function hG(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=P8(W.r),W.g=P8(W.g),W.b=P8(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=n9(W.r),W.g=n9(W.g),W.b=n9(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return E9("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return E9("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],$=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:$,transfer:"linear",toXYZ:rW,fromXYZ:tW,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:$,transfer:"srgb",toXYZ:rW,fromXYZ:tW,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var J0=hG();function P8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function n9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var C9;class v${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(C9===void 0)C9=s9("canvas");C9.width=J.width,C9.height=J.height;let $=C9.getContext("2d");if(J instanceof ImageData)$.putImageData(J,0,0);else $.drawImage(J,0,0,J.width,J.height);Z=C9}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=s9("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let $=Z.getImageData(0,0,J.width,J.height),W=$.data;for(let K=0;K<W.length;K++)W[K]=P8(W[K]/255)*255;return Z.putImageData($,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(P8(Q[Z]/255)*255);else Q[Z]=P8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var xG=0;class C8{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xG++}),this.uuid=n0(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},$=this.data;if($!==null){let W;if(Array.isArray($)){W=[];for(let K=0,H=$.length;K<H;K++)if($[K].isDataTexture)W.push(HZ($[K].image));else W.push(HZ($[K]))}else W=HZ($);Z.url=W}if(!Q)J.images[this.uuid]=Z;return Z}}function HZ(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return v$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var gG=0,YZ=new P;class F0 extends H8{constructor(J=F0.DEFAULT_IMAGE,Q=F0.DEFAULT_MAPPING,Z=1001,$=1001,W=1006,K=1008,H=1023,Y=1009,X=F0.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:gG++}),this.uuid=n0(),this.name="",this.source=new C8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=$,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new o(0,0),this.repeat=new o(1,1),this.center=new o(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(YZ).x}get height(){return this.source.getSize(YZ).y}get depth(){return this.source.getSize(YZ).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if($&&Z&&($.isVector2&&Z.isVector2))$.copy(Z);else if($&&Z&&($.isVector3&&Z.isVector3))$.copy(Z);else if($&&Z&&($.isMatrix3&&Z.isMatrix3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}F0.DEFAULT_IMAGE=null;F0.DEFAULT_MAPPING=300;F0.DEFAULT_ANISOTROPY=1;class Z0{constructor(J=0,Q=0,Z=0,$=1){Z0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=Z,this.w=$}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,$){return this.x=J,this.y=Q,this.z=Z,this.w=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*Z+K[8]*$+K[12]*W,this.y=K[1]*Q+K[5]*Z+K[9]*$+K[13]*W,this.z=K[2]*Q+K[6]*Z+K[10]*$+K[14]*W,this.w=K[3]*Q+K[7]*Z+K[11]*$+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,$,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],E=Y[1],N=Y[5],q=Y[9],R=Y[2],F=Y[6],O=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(G-R)<0.01&&Math.abs(q-F)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+R)<0.1&&Math.abs(q+F)<0.1&&Math.abs(X+N+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let k=(X+1)/2,M=(N+1)/2,B=(O+1)/2,T=(U+E)/4,_=(G+R)/4,C=(q+F)/4;if(k>M&&k>B)if(k<0.01)Z=0,$=0.707106781,W=0.707106781;else Z=Math.sqrt(k),$=T/Z,W=_/Z;else if(M>B)if(M<0.01)Z=0.707106781,$=0,W=0.707106781;else $=Math.sqrt(M),Z=T/$,W=C/$;else if(B<0.01)Z=0.707106781,$=0.707106781,W=0;else W=Math.sqrt(B),Z=_/W,$=C/W;return this.set(Z,$,W,Q),this}let D=Math.sqrt((F-q)*(F-q)+(G-R)*(G-R)+(E-U)*(E-U));if(Math.abs(D)<0.001)D=1;return this.x=(F-q)/D,this.y=(G-R)/D,this.z=(E-U)/D,this.w=Math.acos((X+N+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=pJ(this.x,J.x,Q.x),this.y=pJ(this.y,J.y,Q.y),this.z=pJ(this.z,J.z,Q.z),this.w=pJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=pJ(this.x,J,Q),this.y=pJ(this.y,J,Q),this.z=pJ(this.z,J,Q),this.w=pJ(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(pJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DQ extends H8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new Z0(0,0,J,Q),this.scissorTest=!1,this.viewport=new Z0(0,0,J,Q);let $={width:J,height:Q,depth:Z.depth},W=new F0($);this.textures=[];let K=Z.count;for(let H=0;H<K;H++)this.textures[H]=W.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let $=0,W=this.textures.length;$<W;$++)this.textures[$].image.width=J,this.textures[$].image.height=Q,this.textures[$].image.depth=Z,this.textures[$].isArrayTexture=this.textures[$].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let $=Object.assign({},J.textures[Q].image);this.textures[Q].source=new C8($)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Y8 extends DQ{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class l7 extends F0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class UY extends Y8{constructor(J=1,Q=1,Z=1,$={}){super(J,Q,$);this.isWebGLArrayRenderTarget=!0,this.depth=Z,this.texture=new l7(null,J,Q,Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}}class u7 extends F0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GY extends Y8{constructor(J=1,Q=1,Z=1,$={}){super(J,Q,$);this.isWebGL3DRenderTarget=!0,this.depth=Z,this.texture=new u7(null,J,Q,Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}}class w0{constructor(J=new P(1/0,1/0,1/0),Q=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(Q8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(Q8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=Q8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let W=Z.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,Q8);else Q8.fromBufferAttribute(W,K);Q8.applyMatrix4(J.matrixWorld),this.expandByPoint(Q8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();H6.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();H6.copy(Z.boundingBox)}H6.applyMatrix4(J.matrixWorld),this.union(H6)}}let $=J.children;for(let W=0,K=$.length;W<K;W++)this.expandByObject($[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,Q8),Q8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(D7),Y6.subVectors(this.max,D7),P9.subVectors(J.a,D7),A9.subVectors(J.b,D7),T9.subVectors(J.c,D7),y8.subVectors(A9,P9),v8.subVectors(T9,A9),o8.subVectors(P9,T9);let Q=[0,-y8.z,y8.y,0,-v8.z,v8.y,0,-o8.z,o8.y,y8.z,0,-y8.x,v8.z,0,-v8.x,o8.z,0,-o8.x,-y8.y,y8.x,0,-v8.y,v8.x,0,-o8.y,o8.x,0];if(!XZ(Q,P9,A9,T9,Y6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!XZ(Q,P9,A9,T9,Y6))return!1;return X6.crossVectors(y8,v8),Q=[X6.x,X6.y,X6.z],XZ(Q,P9,A9,T9,Y6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,Q8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(Q8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return k8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),k8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),k8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),k8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),k8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),k8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),k8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),k8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(k8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var k8=[new P,new P,new P,new P,new P,new P,new P,new P],Q8=new P,H6=new w0,P9=new P,A9=new P,T9=new P,y8=new P,v8=new P,o8=new P,D7=new P,Y6=new P,X6=new P,a8=new P;function XZ(J,Q,Z,$,W){for(let K=0,H=J.length-3;K<=H;K+=3){a8.fromArray(J,K);let Y=W.x*Math.abs(a8.x)+W.y*Math.abs(a8.y)+W.z*Math.abs(a8.z),X=Q.dot(a8),U=Z.dot(a8),G=$.dot(a8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var pG=new w0,O7=new P,UZ=new P;class _0{constructor(J=new P,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else pG.setFromPoints(J).getCenter(Z);let $=0;for(let W=0,K=J.length;W<K;W++)$=Math.max($,Z.distanceToSquared(J[W]));return this.radius=Math.sqrt($),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;O7.subVectors(J,this.center);let Q=O7.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),$=(Z-this.radius)*0.5;this.center.addScaledVector(O7,$/Z),this.radius+=$}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else UZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(O7.copy(J.center).add(UZ)),this.expandByPoint(O7.copy(J.center).sub(UZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var V8=new P,GZ=new P,U6=new P,f8=new P,EZ=new P,G6=new P,NZ=new P;class M9{constructor(J=new P,Q=new P(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,V8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=V8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return V8.copy(this.origin).addScaledVector(this.direction,Q),V8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,$){GZ.copy(J).add(Q).multiplyScalar(0.5),U6.copy(Q).sub(J).normalize(),f8.copy(this.origin).sub(GZ);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(U6),H=f8.dot(this.direction),Y=-f8.dot(U6),X=f8.lengthSq(),U=Math.abs(1-K*K),G,E,N,q;if(U>0)if(G=K*Y-H,E=K*H-Y,q=W*U,G>=0)if(E>=-q)if(E<=q){let R=1/U;G*=R,E*=R,N=G*(G+K*E+2*H)+E*(K*G+E+2*Y)+X}else E=W,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else E=-W,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else if(E<=-q)G=Math.max(0,-(-K*W+H)),E=G>0?-W:Math.min(Math.max(-W,-Y),W),N=-G*G+E*(E+2*Y)+X;else if(E<=q)G=0,E=Math.min(Math.max(-W,-Y),W),N=E*(E+2*Y)+X;else G=Math.max(0,-(K*W+H)),E=G>0?W:Math.min(Math.max(-W,-Y),W),N=-G*G+E*(E+2*Y)+X;else E=K>0?-W:W,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;if(Z)Z.copy(this.origin).addScaledVector(this.direction,G);if($)$.copy(GZ).addScaledVector(U6,E);return N}intersectSphere(J,Q){V8.subVectors(J.center,this.origin);let Z=V8.dot(this.direction),$=V8.dot(V8)-Z*Z,W=J.radius*J.radius;if($>W)return null;let K=Math.sqrt(W-$),H=Z-K,Y=Z+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,$,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(X>=0)Z=(J.min.x-E.x)*X,$=(J.max.x-E.x)*X;else Z=(J.max.x-E.x)*X,$=(J.min.x-E.x)*X;if(U>=0)W=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if(Z>K||W>$)return null;if(W>Z||isNaN(Z))Z=W;if(K<$||isNaN($))$=K;if(G>=0)H=(J.min.z-E.z)*G,Y=(J.max.z-E.z)*G;else H=(J.max.z-E.z)*G,Y=(J.min.z-E.z)*G;if(Z>Y||H>$)return null;if(H>Z||Z!==Z)Z=H;if(Y<$||$!==$)$=Y;if($<0)return null;return this.at(Z>=0?Z:$,Q)}intersectsBox(J){return this.intersectBox(J,V8)!==null}intersectTriangle(J,Q,Z,$,W){EZ.subVectors(Q,J),G6.subVectors(Z,J),NZ.crossVectors(EZ,G6);let K=this.direction.dot(NZ),H;if(K>0){if($)return null;H=1}else if(K<0)H=-1,K=-K;else return null;f8.subVectors(this.origin,J);let Y=H*this.direction.dot(G6.crossVectors(f8,G6));if(Y<0)return null;let X=H*this.direction.dot(EZ.cross(f8));if(X<0)return null;if(Y+X>K)return null;let U=-H*f8.dot(NZ);if(U<0)return null;return this.at(U/K,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vJ{constructor(J,Q,Z,$,W,K,H,Y,X,U,G,E,N,q,R,F){if(vJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,K,H,Y,X,U,G,E,N,q,R,F)}set(J,Q,Z,$,W,K,H,Y,X,U,G,E,N,q,R,F){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=Z,O[12]=$,O[1]=W,O[5]=K,O[9]=H,O[13]=Y,O[2]=X,O[6]=U,O[10]=G,O[14]=E,O[3]=N,O[7]=q,O[11]=R,O[15]=F,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vJ().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,Z=J.elements,$=1/S9.setFromMatrixColumn(J,0).length(),W=1/S9.setFromMatrixColumn(J,1).length(),K=1/S9.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*$,Q[1]=Z[1]*$,Q[2]=Z[2]*$,Q[3]=0,Q[4]=Z[4]*W,Q[5]=Z[5]*W,Q[6]=Z[6]*W,Q[7]=0,Q[8]=Z[8]*K,Q[9]=Z[9]*K,Q[10]=Z[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z,K=Math.cos(Z),H=Math.sin(Z),Y=Math.cos($),X=Math.sin($),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=K*U,N=K*G,q=H*U,R=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=N+q*X,Q[5]=E-R*X,Q[9]=-H*Y,Q[2]=R-E*X,Q[6]=q+N*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,N=Y*G,q=X*U,R=X*G;Q[0]=E+R*H,Q[4]=q*H-N,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=N*H-q,Q[6]=R+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,N=Y*G,q=X*U,R=X*G;Q[0]=E-R*H,Q[4]=-K*G,Q[8]=q+N*H,Q[1]=N+q*H,Q[5]=K*U,Q[9]=R-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,N=K*G,q=H*U,R=H*G;Q[0]=Y*U,Q[4]=q*X-N,Q[8]=E*X+R,Q[1]=Y*G,Q[5]=R*X+E,Q[9]=N*X-q,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,N=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=R-E*G,Q[8]=q*G+N,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=N*G+q,Q[10]=E-R*G}else if(J.order==="XZY"){let E=K*Y,N=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=E*G+R,Q[5]=K*U,Q[9]=N*G-q,Q[2]=q*G-N,Q[6]=H*U,Q[10]=R*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(mG,J,dG)}lookAt(J,Q,Z){let $=this.elements;if(u0.subVectors(J,Q),u0.lengthSq()===0)u0.z=1;if(u0.normalize(),b8.crossVectors(Z,u0),b8.lengthSq()===0){if(Math.abs(Z.z)===1)u0.x+=0.0001;else u0.z+=0.0001;u0.normalize(),b8.crossVectors(Z,u0)}return b8.normalize(),E6.crossVectors(u0,b8),$[0]=b8.x,$[4]=E6.x,$[8]=u0.x,$[1]=b8.y,$[5]=E6.y,$[9]=u0.y,$[2]=b8.z,$[6]=E6.z,$[10]=u0.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,K=Z[0],H=Z[4],Y=Z[8],X=Z[12],U=Z[1],G=Z[5],E=Z[9],N=Z[13],q=Z[2],R=Z[6],F=Z[10],O=Z[14],D=Z[3],k=Z[7],M=Z[11],B=Z[15],T=$[0],_=$[4],C=$[8],y=$[12],L=$[1],I=$[5],S=$[9],h=$[13],m=$[2],p=$[6],a=$[10],l=$[14],JJ=$[3],d=$[7],qJ=$[11],GJ=$[15];return W[0]=K*T+H*L+Y*m+X*JJ,W[4]=K*_+H*I+Y*p+X*d,W[8]=K*C+H*S+Y*a+X*qJ,W[12]=K*y+H*h+Y*l+X*GJ,W[1]=U*T+G*L+E*m+N*JJ,W[5]=U*_+G*I+E*p+N*d,W[9]=U*C+G*S+E*a+N*qJ,W[13]=U*y+G*h+E*l+N*GJ,W[2]=q*T+R*L+F*m+O*JJ,W[6]=q*_+R*I+F*p+O*d,W[10]=q*C+R*S+F*a+O*qJ,W[14]=q*y+R*h+F*l+O*GJ,W[3]=D*T+k*L+M*m+B*JJ,W[7]=D*_+k*I+M*p+B*d,W[11]=D*C+k*S+M*a+B*qJ,W[15]=D*y+k*h+M*l+B*GJ,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],$=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],E=J[10],N=J[14],q=J[3],R=J[7],F=J[11],O=J[15];return q*(+W*Y*G-$*X*G-W*H*E+Z*X*E+$*H*N-Z*Y*N)+R*(+Q*Y*N-Q*X*E+W*K*E-$*K*N+$*X*U-W*Y*U)+F*(+Q*X*G-Q*H*N-W*K*G+Z*K*N+W*H*U-Z*X*U)+O*(-$*H*U-Q*Y*G+Q*H*E+$*K*G-Z*K*E+Z*Y*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let $=this.elements;if(J.isVector3)$[12]=J.x,$[13]=J.y,$[14]=J.z;else $[12]=J,$[13]=Q,$[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],E=J[10],N=J[11],q=J[12],R=J[13],F=J[14],O=J[15],D=G*F*X-R*E*X+R*Y*N-H*F*N-G*Y*O+H*E*O,k=q*E*X-U*F*X-q*Y*N+K*F*N+U*Y*O-K*E*O,M=U*R*X-q*G*X+q*H*N-K*R*N-U*H*O+K*G*O,B=q*G*Y-U*R*Y-q*H*E+K*R*E+U*H*F-K*G*F,T=Q*D+Z*k+$*M+W*B;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/T;return J[0]=D*_,J[1]=(R*E*W-G*F*W-R*$*N+Z*F*N+G*$*O-Z*E*O)*_,J[2]=(H*F*W-R*Y*W+R*$*X-Z*F*X-H*$*O+Z*Y*O)*_,J[3]=(G*Y*W-H*E*W-G*$*X+Z*E*X+H*$*N-Z*Y*N)*_,J[4]=k*_,J[5]=(U*F*W-q*E*W+q*$*N-Q*F*N-U*$*O+Q*E*O)*_,J[6]=(q*Y*W-K*F*W-q*$*X+Q*F*X+K*$*O-Q*Y*O)*_,J[7]=(K*E*W-U*Y*W+U*$*X-Q*E*X-K*$*N+Q*Y*N)*_,J[8]=M*_,J[9]=(q*G*W-U*R*W-q*Z*N+Q*R*N+U*Z*O-Q*G*O)*_,J[10]=(K*R*W-q*H*W+q*Z*X-Q*R*X-K*Z*O+Q*H*O)*_,J[11]=(U*H*W-K*G*W-U*Z*X+Q*G*X+K*Z*N-Q*H*N)*_,J[12]=B*_,J[13]=(U*R*$-q*G*$+q*Z*E-Q*R*E-U*Z*F+Q*G*F)*_,J[14]=(q*H*$-K*R*$-q*Z*Y+Q*R*Y+K*Z*F-Q*H*F)*_,J[15]=(K*G*$-U*H*$+U*Z*Y-Q*G*Y-K*Z*E+Q*H*E)*_,this}scale(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z;return Q[0]*=Z,Q[4]*=$,Q[8]*=W,Q[1]*=Z,Q[5]*=$,Q[9]*=W,Q[2]*=Z,Q[6]*=$,Q[10]*=W,Q[3]*=Z,Q[7]*=$,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],$=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,$))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=1-Z,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+Z,X*H-$*Y,X*Y+$*H,0,X*H+$*Y,U*H+Z,U*Y-$*K,0,X*Y-$*H,U*Y+$*K,W*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,$,W,K){return this.set(1,Z,W,0,J,1,K,0,Q,$,1,0,0,0,0,1),this}compose(J,Q,Z){let $=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,G=H+H,E=W*X,N=W*U,q=W*G,R=K*U,F=K*G,O=H*G,D=Y*X,k=Y*U,M=Y*G,B=Z.x,T=Z.y,_=Z.z;return $[0]=(1-(R+O))*B,$[1]=(N+M)*B,$[2]=(q-k)*B,$[3]=0,$[4]=(N-M)*T,$[5]=(1-(E+O))*T,$[6]=(F+D)*T,$[7]=0,$[8]=(q+k)*_,$[9]=(F-D)*_,$[10]=(1-(E+R))*_,$[11]=0,$[12]=J.x,$[13]=J.y,$[14]=J.z,$[15]=1,this}decompose(J,Q,Z){let $=this.elements,W=S9.set($[0],$[1],$[2]).length(),K=S9.set($[4],$[5],$[6]).length(),H=S9.set($[8],$[9],$[10]).length();if(this.determinant()<0)W=-W;J.x=$[12],J.y=$[13],J.z=$[14],Z8.copy(this);let X=1/W,U=1/K,G=1/H;return Z8.elements[0]*=X,Z8.elements[1]*=X,Z8.elements[2]*=X,Z8.elements[4]*=U,Z8.elements[5]*=U,Z8.elements[6]*=U,Z8.elements[8]*=G,Z8.elements[9]*=G,Z8.elements[10]*=G,Q.setFromRotationMatrix(Z8),Z.x=W,Z.y=K,Z.z=H,this}makePerspective(J,Q,Z,$,W,K,H=2000){let Y=this.elements,X=2*W/(Q-J),U=2*W/(Z-$),G=(Q+J)/(Q-J),E=(Z+$)/(Z-$),N,q;if(H===2000)N=-(K+W)/(K-W),q=-2*K*W/(K-W);else if(H===2001)N=-K/(K-W),q=-K*W/(K-W);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return Y[0]=X,Y[4]=0,Y[8]=G,Y[12]=0,Y[1]=0,Y[5]=U,Y[9]=E,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=N,Y[14]=q,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic(J,Q,Z,$,W,K,H=2000){let Y=this.elements,X=1/(Q-J),U=1/(Z-$),G=1/(K-W),E=(Q+J)*X,N=(Z+$)*U,q,R;if(H===2000)q=(K+W)*G,R=-2*G;else if(H===2001)q=W*G,R=-1*G;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return Y[0]=2*X,Y[4]=0,Y[8]=0,Y[12]=-E,Y[1]=0,Y[5]=2*U,Y[9]=0,Y[13]=-N,Y[2]=0,Y[6]=0,Y[10]=R,Y[14]=-q,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<16;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var S9=new P,Z8=new vJ,mG=new P(0,0,0),dG=new P(1,1,1),b8=new P,E6=new P,u0=new P,eW=new vJ,JK=new b0;class s0{constructor(J=0,Q=0,Z=0,$=s0.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=$}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,$=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let $=J.elements,W=$[0],K=$[4],H=$[8],Y=$[1],X=$[5],U=$[9],G=$[2],E=$[6],N=$[10];switch(Q){case"XYZ":if(this._y=Math.asin(pJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-pJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(pJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-pJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,N),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(pJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-pJ(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,N),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return eW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(eW,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return JK.setFromEuler(this),this.setFromQuaternion(JK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}s0.DEFAULT_ORDER="XYZ";class c7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var lG=0,QK=new P,j9=new b0,L8=new vJ,N6=new P,R7=new P,uG=new P,cG=new b0,ZK=new P(1,0,0),$K=new P(0,1,0),WK=new P(0,0,1),KK={type:"added"},nG={type:"removed"},y9={type:"childadded",child:null},qZ={type:"childremoved",child:null};class $0 extends H8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:lG++}),this.uuid=n0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$0.DEFAULT_UP.clone();let J=new P,Q=new s0,Z=new b0,$=new P(1,1,1);function W(){Z.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange(W),Z._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:$},modelViewMatrix:{value:new vJ},normalMatrix:{value:new dJ}}),this.matrix=new vJ,this.matrixWorld=new vJ,this.matrixAutoUpdate=$0.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return j9.setFromAxisAngle(J,Q),this.quaternion.multiply(j9),this}rotateOnWorldAxis(J,Q){return j9.setFromAxisAngle(J,Q),this.quaternion.premultiply(j9),this}rotateX(J){return this.rotateOnAxis(ZK,J)}rotateY(J){return this.rotateOnAxis($K,J)}rotateZ(J){return this.rotateOnAxis(WK,J)}translateOnAxis(J,Q){return QK.copy(J).applyQuaternion(this.quaternion),this.position.add(QK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(ZK,J)}translateY(J){return this.translateOnAxis($K,J)}translateZ(J){return this.translateOnAxis(WK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(L8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)N6.copy(J);else N6.set(J,Q,Z);let $=this.parent;if(this.updateWorldMatrix(!0,!1),R7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)L8.lookAt(R7,N6,this.up);else L8.lookAt(N6,R7,this.up);if(this.quaternion.setFromRotationMatrix(L8),$)L8.extractRotation($.matrixWorld),j9.setFromRotationMatrix(L8),this.quaternion.premultiply(j9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(KK),y9.child=J,this.dispatchEvent(y9),y9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(nG),qZ.child=J,this.dispatchEvent(qZ),qZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),L8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),L8.multiply(J.parent.matrixWorld);return J.applyMatrix4(L8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(KK),y9.child=J,this.dispatchEvent(y9),y9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,$=this.children.length;Z<$;Z++){let K=this.children[Z].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let $=this.children;for(let W=0,K=$.length;W<K;W++)$[W].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R7,J,uG),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R7,cG,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let $=this.children;for(let W=0,K=$.length;W<K;W++)$[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let $={};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.castShadow===!0)$.castShadow=!0;if(this.receiveShadow===!0)$.receiveShadow=!0;if(this.visible===!1)$.visible=!1;if(this.frustumCulled===!1)$.frustumCulled=!1;if(this.renderOrder!==0)$.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)$.userData=this.userData;if($.layers=this.layers.mask,$.matrix=this.matrix.toArray(),$.up=this.up.toArray(),this.matrixAutoUpdate===!1)$.matrixAutoUpdate=!1;if(this.isInstancedMesh){if($.type="InstancedMesh",$.count=this.count,$.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)$.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if($.type="BatchedMesh",$.perObjectFrustumCulled=this.perObjectFrustumCulled,$.sortObjects=this.sortObjects,$.drawRanges=this._drawRanges,$.reservedRanges=this._reservedRanges,$.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),$.instanceInfo=this._instanceInfo.map((H)=>({...H})),$.availableInstanceIds=this._availableInstanceIds.slice(),$.availableGeometryIds=this._availableGeometryIds.slice(),$.nextIndexStart=this._nextIndexStart,$.nextVertexStart=this._nextVertexStart,$.geometryCount=this._geometryCount,$.maxInstanceCount=this._maxInstanceCount,$.maxVertexCount=this._maxVertexCount,$.maxIndexCount=this._maxIndexCount,$.geometryInitialized=this._geometryInitialized,$.matricesTexture=this._matricesTexture.toJSON(J),$.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)$.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)$.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)$.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)$.background=this.background.toJSON();else if(this.background.isTexture)$.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)$.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){$.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];W(J.shapes,G)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if($.bindMode=this.bindMode,$.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),$.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));$.material=H}else $.material=W(J.materials,this.material);if(this.children.length>0){$.children=[];for(let H=0;H<this.children.length;H++)$.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){$.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];$.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),E=K(J.skeletons),N=K(J.animations),q=K(J.nodes);if(H.length>0)Z.geometries=H;if(Y.length>0)Z.materials=Y;if(X.length>0)Z.textures=X;if(U.length>0)Z.images=U;if(G.length>0)Z.shapes=G;if(E.length>0)Z.skeletons=E;if(N.length>0)Z.animations=N;if(q.length>0)Z.nodes=q}return Z.object=$,Z;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let $=J.children[Z];this.add($.clone())}return this}}$0.DEFAULT_UP=new P(0,1,0);$0.DEFAULT_MATRIX_AUTO_UPDATE=!0;$0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $8=new P,z8=new P,DZ=new P,B8=new P,v9=new P,f9=new P,HK=new P,OZ=new P,RZ=new P,FZ=new P,MZ=new Z0,kZ=new Z0,VZ=new Z0;class m0{constructor(J=new P,Q=new P,Z=new P){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,$){$.subVectors(Z,Q),$8.subVectors(J,Q),$.cross($8);let W=$.lengthSq();if(W>0)return $.multiplyScalar(1/Math.sqrt(W));return $.set(0,0,0)}static getBarycoord(J,Q,Z,$,W){$8.subVectors($,Q),z8.subVectors(Z,Q),DZ.subVectors(J,Q);let K=$8.dot($8),H=$8.dot(z8),Y=$8.dot(DZ),X=z8.dot(z8),U=z8.dot(DZ),G=K*X-H*H;if(G===0)return W.set(0,0,0),null;let E=1/G,N=(X*Y-H*U)*E,q=(K*U-H*Y)*E;return W.set(1-N-q,q,N)}static containsPoint(J,Q,Z,$){if(this.getBarycoord(J,Q,Z,$,B8)===null)return!1;return B8.x>=0&&B8.y>=0&&B8.x+B8.y<=1}static getInterpolation(J,Q,Z,$,W,K,H,Y){if(this.getBarycoord(J,Q,Z,$,B8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,B8.x),Y.addScaledVector(K,B8.y),Y.addScaledVector(H,B8.z),Y}static getInterpolatedAttribute(J,Q,Z,$,W,K){return MZ.setScalar(0),kZ.setScalar(0),VZ.setScalar(0),MZ.fromBufferAttribute(J,Q),kZ.fromBufferAttribute(J,Z),VZ.fromBufferAttribute(J,$),K.setScalar(0),K.addScaledVector(MZ,W.x),K.addScaledVector(kZ,W.y),K.addScaledVector(VZ,W.z),K}static isFrontFacing(J,Q,Z,$){return $8.subVectors(Z,Q),z8.subVectors(J,Q),$8.cross(z8).dot($)<0?!0:!1}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,$){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[$]),this}setFromAttributeAndIndices(J,Q,Z,$){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,$),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return $8.subVectors(this.c,this.b),z8.subVectors(this.a,this.b),$8.cross(z8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return m0.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return m0.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,$,W){return m0.getInterpolation(J,this.a,this.b,this.c,Q,Z,$,W)}containsPoint(J){return m0.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return m0.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,$=this.b,W=this.c,K,H;v9.subVectors($,Z),f9.subVectors(W,Z),OZ.subVectors(J,Z);let Y=v9.dot(OZ),X=f9.dot(OZ);if(Y<=0&&X<=0)return Q.copy(Z);RZ.subVectors(J,$);let U=v9.dot(RZ),G=f9.dot(RZ);if(U>=0&&G<=U)return Q.copy($);let E=Y*G-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy(Z).addScaledVector(v9,K);FZ.subVectors(J,W);let N=v9.dot(FZ),q=f9.dot(FZ);if(q>=0&&N<=q)return Q.copy(W);let R=N*X-Y*q;if(R<=0&&X>=0&&q<=0)return H=X/(X-q),Q.copy(Z).addScaledVector(f9,H);let F=U*q-N*G;if(F<=0&&G-U>=0&&N-q>=0)return HK.subVectors(W,$),H=(G-U)/(G-U+(N-q)),Q.copy($).addScaledVector(HK,H);let O=1/(F+R+E);return K=R*O,H=E*O,Q.copy(Z).addScaledVector(v9,K).addScaledVector(f9,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var EY={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},h8={h:0,s:0,l:0},q6={h:0,s:0,l:0};function LZ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class RJ{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let $=J;if($&&$.isColor)this.copy($);else if(typeof $==="number")this.setHex($);else if(typeof $==="string")this.setStyle($)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,J0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,$=J0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,J0.colorSpaceToWorking(this,$),this}setHSL(J,Q,Z,$=J0.workingColorSpace){if(J=j$(J,1),Q=pJ(Q,0,1),Z=pJ(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let W=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,K=2*Z-W;this.r=LZ(K,W,J+0.3333333333333333),this.g=LZ(K,W,J),this.b=LZ(K,W,J-0.3333333333333333)}return J0.colorSpaceToWorking(this,$),this}setStyle(J,Q="srgb"){function Z(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let $;if($=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=$[1],H=$[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return Z(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return Z(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return Z(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if($=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=$[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=EY[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=P8(J.r),this.g=P8(J.g),this.b=P8(J.b),this}copyLinearToSRGB(J){return this.r=n9(J.r),this.g=n9(J.g),this.b=n9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return J0.workingToColorSpace(A0.copy(this),J),Math.round(pJ(A0.r*255,0,255))*65536+Math.round(pJ(A0.g*255,0,255))*256+Math.round(pJ(A0.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=J0.workingColorSpace){J0.workingToColorSpace(A0.copy(this),Q);let{r:Z,g:$,b:W}=A0,K=Math.max(Z,$,W),H=Math.min(Z,$,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case Z:Y=($-W)/G+($<W?6:0);break;case $:Y=(W-Z)/G+2;break;case W:Y=(Z-$)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=J0.workingColorSpace){return J0.workingToColorSpace(A0.copy(this),Q),J.r=A0.r,J.g=A0.g,J.b=A0.b,J}getStyle(J="srgb"){J0.workingToColorSpace(A0.copy(this),J);let{r:Q,g:Z,b:$}=A0;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${$.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round($*255)})`}offsetHSL(J,Q,Z){return this.getHSL(h8),this.setHSL(h8.h+J,h8.s+Q,h8.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(h8),J.getHSL(q6);let Z=P7(h8.h,q6.h,Q),$=P7(h8.s,q6.s,Q),W=P7(h8.l,q6.l,Q);return this.setHSL(Z,$,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,$=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*Z+W[6]*$,this.g=W[1]*Q+W[4]*Z+W[7]*$,this.b=W[2]*Q+W[5]*Z+W[8]*$,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var A0=new RJ;RJ.NAMES=EY;var sG=0;class C0 extends H8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:sG++}),this.uuid=n0(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new RJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if($&&$.isColor)$.set(Z);else if($&&$.isVector3&&(Z&&Z.isVector3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function $(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=$(J.textures),K=$(J.images);if(W.length>0)Z.textures=W;if(K.length>0)Z.images=K}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let $=Q.length;Z=new Array($);for(let W=0;W!==$;++W)Z[W]=Q[W].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class S8 extends C0{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new RJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var w8=iG();function iG(){let J=new ArrayBuffer(4),Q=new Float32Array(J),Z=new Uint32Array(J),$=new Uint32Array(512),W=new Uint32Array(512);for(let X=0;X<256;++X){let U=X-127;if(U<-27)$[X]=0,$[X|256]=32768,W[X]=24,W[X|256]=24;else if(U<-14)$[X]=1024>>-U-14,$[X|256]=1024>>-U-14|32768,W[X]=-U-1,W[X|256]=-U-1;else if(U<=15)$[X]=U+15<<10,$[X|256]=U+15<<10|32768,W[X]=13,W[X|256]=13;else if(U<128)$[X]=31744,$[X|256]=64512,W[X]=24,W[X|256]=24;else $[X]=31744,$[X|256]=64512,W[X]=13,W[X|256]=13}let K=new Uint32Array(2048),H=new Uint32Array(64),Y=new Uint32Array(64);for(let X=1;X<1024;++X){let U=X<<13,G=0;while((U&8388608)===0)U<<=1,G-=8388608;U&=-8388609,G+=947912704,K[X]=U|G}for(let X=1024;X<2048;++X)K[X]=939524096+(X-1024<<13);for(let X=1;X<31;++X)H[X]=X<<23;H[31]=1199570944,H[32]=2147483648;for(let X=33;X<63;++X)H[X]=2147483648+(X-32<<23);H[63]=3347054592;for(let X=1;X<64;++X)if(X!==32)Y[X]=1024;return{floatView:Q,uint32View:Z,baseTable:$,shiftTable:W,mantissaTable:K,exponentTable:H,offsetTable:Y}}function p0(J){if(Math.abs(J)>65504)console.warn("THREE.DataUtils.toHalfFloat(): Value out of range.");J=pJ(J,-65504,65504),w8.floatView[0]=J;let Q=w8.uint32View[0],Z=Q>>23&511;return w8.baseTable[Z]+((Q&8388607)>>w8.shiftTable[Z])}function w7(J){let Q=J>>10;return w8.uint32View[0]=w8.mantissaTable[w8.offsetTable[Q]+(J&1023)]+w8.exponentTable[Q],w8.floatView[0]}class NY{static toHalfFloat(J){return p0(J)}static fromHalfFloat(J){return w7(J)}}var V0=new P,D6=new o,oG=0;class H0{constructor(J,Q,Z=!1){if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oG++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let $=0,W=this.itemSize;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)D6.fromBufferAttribute(this,Q),D6.applyMatrix3(J),this.setXY(Q,D6.x,D6.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)V0.fromBufferAttribute(this,Q),V0.applyMatrix3(J),this.setXYZ(Q,V0.x,V0.y,V0.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)V0.fromBufferAttribute(this,Q),V0.applyMatrix4(J),this.setXYZ(Q,V0.x,V0.y,V0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)V0.fromBufferAttribute(this,Q),V0.applyNormalMatrix(J),this.setXYZ(Q,V0.x,V0.y,V0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)V0.fromBufferAttribute(this,Q),V0.transformDirection(J),this.setXYZ(Q,V0.x,V0.y,V0.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=f0(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=uJ(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=f0(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=f0(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=f0(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=f0(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array),$=uJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array),$=uJ($,this.array),W=uJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class qY extends H0{constructor(J,Q,Z){super(new Int8Array(J),Q,Z)}}class DY extends H0{constructor(J,Q,Z){super(new Uint8Array(J),Q,Z)}}class OY extends H0{constructor(J,Q,Z){super(new Uint8ClampedArray(J),Q,Z)}}class RY extends H0{constructor(J,Q,Z){super(new Int16Array(J),Q,Z)}}class OQ extends H0{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class FY extends H0{constructor(J,Q,Z){super(new Int32Array(J),Q,Z)}}class RQ extends H0{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class MY extends H0{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z);this.isFloat16BufferAttribute=!0}getX(J){let Q=w7(this.array[J*this.itemSize]);if(this.normalized)Q=f0(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize]=p0(Q),this}getY(J){let Q=w7(this.array[J*this.itemSize+1]);if(this.normalized)Q=f0(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize+1]=p0(Q),this}getZ(J){let Q=w7(this.array[J*this.itemSize+2]);if(this.normalized)Q=f0(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize+2]=p0(Q),this}getW(J){let Q=w7(this.array[J*this.itemSize+3]);if(this.normalized)Q=f0(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.array[J*this.itemSize+3]=p0(Q),this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array);return this.array[J+0]=p0(Q),this.array[J+1]=p0(Z),this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array),$=uJ($,this.array);return this.array[J+0]=p0(Q),this.array[J+1]=p0(Z),this.array[J+2]=p0($),this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array),$=uJ($,this.array),W=uJ(W,this.array);return this.array[J+0]=p0(Q),this.array[J+1]=p0(Z),this.array[J+2]=p0($),this.array[J+3]=p0(W),this}}class kJ extends H0{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var aG=0,t0=new vJ,zZ=new $0,b9=new P,c0=new w0,F7=new w0,B0=new P;class cJ extends H8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aG++}),this.uuid=n0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((y$(J))?RQ:OQ)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let W=new dJ().getNormalMatrix(J);Z.applyNormalMatrix(W),Z.needsUpdate=!0}let $=this.attributes.tangent;if($!==void 0)$.transformDirection(J),$.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return t0.makeRotationFromQuaternion(J),this.applyMatrix4(t0),this}rotateX(J){return t0.makeRotationX(J),this.applyMatrix4(t0),this}rotateY(J){return t0.makeRotationY(J),this.applyMatrix4(t0),this}rotateZ(J){return t0.makeRotationZ(J),this.applyMatrix4(t0),this}translate(J,Q,Z){return t0.makeTranslation(J,Q,Z),this.applyMatrix4(t0),this}scale(J,Q,Z){return t0.makeScale(J,Q,Z),this.applyMatrix4(t0),this}lookAt(J){return zZ.lookAt(J),zZ.updateMatrix(),this.applyMatrix4(zZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(b9).negate(),this.translate(b9.x,b9.y,b9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let $=0,W=J.length;$<W;$++){let K=J[$];Z.push(K.x,K.y,K.z||0)}this.setAttribute("position",new kJ(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let $=0;$<Z;$++){let W=J[$];Q.setXYZ($,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new w0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(c0.setFromBufferAttribute(W),this.morphTargetsRelative)B0.addVectors(this.boundingBox.min,c0.min),this.boundingBox.expandByPoint(B0),B0.addVectors(this.boundingBox.max,c0.max),this.boundingBox.expandByPoint(B0);else this.boundingBox.expandByPoint(c0.min),this.boundingBox.expandByPoint(c0.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new _0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(J){let Z=this.boundingSphere.center;if(c0.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(F7.setFromBufferAttribute(H),this.morphTargetsRelative)B0.addVectors(c0.min,F7.min),c0.expandByPoint(B0),B0.addVectors(c0.max,F7.max),c0.expandByPoint(B0);else c0.expandByPoint(F7.min),c0.expandByPoint(F7.max)}c0.getCenter(Z);let $=0;for(let W=0,K=J.count;W<K;W++)B0.fromBufferAttribute(J,W),$=Math.max($,Z.distanceToSquared(B0));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(B0.fromBufferAttribute(H,X),Y)b9.fromBufferAttribute(J,X),B0.add(b9);$=Math.max($,Z.distanceToSquared(B0))}}if(this.boundingSphere.radius=Math.sqrt($),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:$,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new H0(new Float32Array(4*Z.count),4));let K=this.getAttribute("tangent"),H=[],Y=[];for(let C=0;C<Z.count;C++)H[C]=new P,Y[C]=new P;let X=new P,U=new P,G=new P,E=new o,N=new o,q=new o,R=new P,F=new P;function O(C,y,L){X.fromBufferAttribute(Z,C),U.fromBufferAttribute(Z,y),G.fromBufferAttribute(Z,L),E.fromBufferAttribute(W,C),N.fromBufferAttribute(W,y),q.fromBufferAttribute(W,L),U.sub(X),G.sub(X),N.sub(E),q.sub(E);let I=1/(N.x*q.y-q.x*N.y);if(!isFinite(I))return;R.copy(U).multiplyScalar(q.y).addScaledVector(G,-N.y).multiplyScalar(I),F.copy(G).multiplyScalar(N.x).addScaledVector(U,-q.x).multiplyScalar(I),H[C].add(R),H[y].add(R),H[L].add(R),Y[C].add(F),Y[y].add(F),Y[L].add(F)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let C=0,y=D.length;C<y;++C){let L=D[C],I=L.start,S=L.count;for(let h=I,m=I+S;h<m;h+=3)O(J.getX(h+0),J.getX(h+1),J.getX(h+2))}let k=new P,M=new P,B=new P,T=new P;function _(C){B.fromBufferAttribute($,C),T.copy(B);let y=H[C];k.copy(y),k.sub(B.multiplyScalar(B.dot(y))).normalize(),M.crossVectors(T,y);let I=M.dot(Y[C])<0?-1:1;K.setXYZW(C,k.x,k.y,k.z,I)}for(let C=0,y=D.length;C<y;++C){let L=D[C],I=L.start,S=L.count;for(let h=I,m=I+S;h<m;h+=3)_(J.getX(h+0)),_(J.getX(h+1)),_(J.getX(h+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new H0(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let E=0,N=Z.count;E<N;E++)Z.setXYZ(E,0,0,0);let $=new P,W=new P,K=new P,H=new P,Y=new P,X=new P,U=new P,G=new P;if(J)for(let E=0,N=J.count;E<N;E+=3){let q=J.getX(E+0),R=J.getX(E+1),F=J.getX(E+2);$.fromBufferAttribute(Q,q),W.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,F),U.subVectors(K,W),G.subVectors($,W),U.cross(G),H.fromBufferAttribute(Z,q),Y.fromBufferAttribute(Z,R),X.fromBufferAttribute(Z,F),H.add(U),Y.add(U),X.add(U),Z.setXYZ(q,H.x,H.y,H.z),Z.setXYZ(R,Y.x,Y.y,Y.z),Z.setXYZ(F,X.x,X.y,X.z)}else for(let E=0,N=Q.count;E<N;E+=3)$.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,W),G.subVectors($,W),U.cross(G),Z.setXYZ(E+0,U.x,U.y,U.z),Z.setXYZ(E+1,U.x,U.y,U.z),Z.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)B0.fromBufferAttribute(J,Q),B0.normalize(),J.setXYZ(Q,B0.x,B0.y,B0.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,E=new X.constructor(Y.length*U),N=0,q=0;for(let R=0,F=Y.length;R<F;R++){if(H.isInterleavedBufferAttribute)N=Y[R]*H.data.stride+H.offset;else N=Y[R]*U;for(let O=0;O<U;O++)E[q++]=X[N++]}return new H0(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new cJ,Z=this.index.array,$=this.attributes;for(let H in $){let Y=$[H],X=J(Y,Z);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,G=X.length;U<G;U++){let E=X[U],N=J(E,Z);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let X=Z[Y];J.data.attributes[Y]=X.toJSON(J.data)}let $={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)$[Y]=U,W=!0}if(W)J.data.morphAttributes=$,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let $=J.attributes;for(let X in $){let U=$[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],G=W[X];for(let E=0,N=G.length;E<N;E++)U.push(G[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var YK=new vJ,r8=new M9,O6=new _0,XK=new P,R6=new P,F6=new P,M6=new P,BZ=new P,k6=new P,UK=new P,V6=new P;class k0 extends $0{constructor(J=new cJ,Q=new S8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=$.length;W<K;W++){let H=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let Z=this.geometry,$=Z.attributes.position,W=Z.morphAttributes.position,K=Z.morphTargetsRelative;Q.fromBufferAttribute($,J);let H=this.morphTargetInfluences;if(W&&H){k6.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],G=W[Y];if(U===0)continue;if(BZ.fromBufferAttribute(G,J),K)k6.addScaledVector(BZ,U);else k6.addScaledVector(BZ.sub(Q),U)}Q.add(k6)}return Q}raycast(J,Q){let Z=this.geometry,$=this.material,W=this.matrixWorld;if($===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(O6.copy(Z.boundingSphere),O6.applyMatrix4(W),r8.copy(J.ray).recast(J.near),O6.containsPoint(r8.origin)===!1){if(r8.intersectSphere(O6,XK)===null)return;if(r8.origin.distanceToSquared(XK)>(J.far-J.near)**2)return}if(YK.copy(W).invert(),r8.copy(J.ray).applyMatrix4(YK),Z.boundingBox!==null){if(r8.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,r8)}_computeIntersections(J,Q,Z){let $,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,N=W.drawRange;if(H!==null)if(Array.isArray(K))for(let q=0,R=E.length;q<R;q++){let F=E[q],O=K[F.materialIndex],D=Math.max(F.start,N.start),k=Math.min(H.count,Math.min(F.start+F.count,N.start+N.count));for(let M=D,B=k;M<B;M+=3){let T=H.getX(M),_=H.getX(M+1),C=H.getX(M+2);if($=L6(this,O,J,Z,X,U,G,T,_,C),$)$.faceIndex=Math.floor(M/3),$.face.materialIndex=F.materialIndex,Q.push($)}}else{let q=Math.max(0,N.start),R=Math.min(H.count,N.start+N.count);for(let F=q,O=R;F<O;F+=3){let D=H.getX(F),k=H.getX(F+1),M=H.getX(F+2);if($=L6(this,K,J,Z,X,U,G,D,k,M),$)$.faceIndex=Math.floor(F/3),Q.push($)}}else if(Y!==void 0)if(Array.isArray(K))for(let q=0,R=E.length;q<R;q++){let F=E[q],O=K[F.materialIndex],D=Math.max(F.start,N.start),k=Math.min(Y.count,Math.min(F.start+F.count,N.start+N.count));for(let M=D,B=k;M<B;M+=3){let T=M,_=M+1,C=M+2;if($=L6(this,O,J,Z,X,U,G,T,_,C),$)$.faceIndex=Math.floor(M/3),$.face.materialIndex=F.materialIndex,Q.push($)}}else{let q=Math.max(0,N.start),R=Math.min(Y.count,N.start+N.count);for(let F=q,O=R;F<O;F+=3){let D=F,k=F+1,M=F+2;if($=L6(this,K,J,Z,X,U,G,D,k,M),$)$.faceIndex=Math.floor(F/3),Q.push($)}}}}function rG(J,Q,Z,$,W,K,H,Y){let X;if(Q.side===1)X=$.intersectTriangle(H,K,W,!0,Y);else X=$.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;V6.copy(Y),V6.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(V6);if(U<Z.near||U>Z.far)return null;return{distance:U,point:V6.clone(),object:J}}function L6(J,Q,Z,$,W,K,H,Y,X,U){J.getVertexPosition(Y,R6),J.getVertexPosition(X,F6),J.getVertexPosition(U,M6);let G=rG(J,Q,Z,$,R6,F6,M6,UK);if(G){let E=new P;if(m0.getBarycoord(UK,R6,F6,M6,E),W)G.uv=m0.getInterpolatedAttribute(W,Y,X,U,E,new o);if(K)G.uv1=m0.getInterpolatedAttribute(K,Y,X,U,E,new o);if(H){if(G.normal=m0.getInterpolatedAttribute(H,Y,X,U,E,new P),G.normal.dot($.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new P,materialIndex:0};m0.getNormal(R6,F6,M6,N.normal),G.face=N,G.barycoord=E}return G}class k9 extends cJ{constructor(J=1,Q=1,Z=1,$=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:$,heightSegments:W,depthSegments:K};let H=this;$=Math.floor($),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],G=[],E=0,N=0;q("z","y","x",-1,-1,Z,Q,J,K,W,0),q("z","y","x",1,-1,Z,Q,-J,K,W,1),q("x","z","y",1,1,J,Z,Q,$,K,2),q("x","z","y",1,-1,J,Z,-Q,$,K,3),q("x","y","z",1,-1,J,Q,Z,$,W,4),q("x","y","z",-1,-1,J,Q,-Z,$,W,5),this.setIndex(Y),this.setAttribute("position",new kJ(X,3)),this.setAttribute("normal",new kJ(U,3)),this.setAttribute("uv",new kJ(G,2));function q(R,F,O,D,k,M,B,T,_,C,y){let L=M/_,I=B/C,S=M/2,h=B/2,m=T/2,p=_+1,a=C+1,l=0,JJ=0,d=new P;for(let qJ=0;qJ<a;qJ++){let GJ=qJ*I-h;for(let yJ=0;yJ<p;yJ++){let gJ=yJ*L-S;d[R]=gJ*D,d[F]=GJ*k,d[O]=m,X.push(d.x,d.y,d.z),d[R]=0,d[F]=0,d[O]=T>0?1:-1,U.push(d.x,d.y,d.z),G.push(yJ/_),G.push(1-qJ/C),l+=1}}for(let qJ=0;qJ<C;qJ++)for(let GJ=0;GJ<_;GJ++){let yJ=E+GJ+p*qJ,gJ=E+GJ+p*(qJ+1),n=E+(GJ+1)+p*(qJ+1),KJ=E+(GJ+1)+p*qJ;Y.push(yJ,gJ,KJ),Y.push(gJ,n,KJ),JJ+=6}H.addGroup(N,JJ,y),N+=JJ,E+=l}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new k9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function V9(J){let Q={};for(let Z in J){Q[Z]={};for(let $ in J[Z]){let W=J[Z][$];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][$]=null;else Q[Z][$]=W.clone();else if(Array.isArray(W))Q[Z][$]=W.slice();else Q[Z][$]=W}}return Q}function S0(J){let Q={};for(let Z=0;Z<J.length;Z++){let $=V9(J[Z]);for(let W in $)Q[W]=$[W]}return Q}function tG(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function f$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return J0.workingColorSpace}var kY={clone:V9,merge:S0},eG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class e0 extends C0{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eG,this.fragmentShader=JE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=V9(J.uniforms),this.uniformsGroups=tG(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let $ in this.uniforms){let K=this.uniforms[$].value;if(K&&K.isTexture)Q.uniforms[$]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[$]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[$]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[$]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[$]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[$]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[$]={type:"m4",value:K.toArray()};else Q.uniforms[$]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let $ in this.extensions)if(this.extensions[$]===!0)Z[$]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}}class n7 extends $0{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vJ,this.projectionMatrix=new vJ,this.projectionMatrixInverse=new vJ,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var x8=new P,GK=new o,EK=new o;class I0 extends n7{constructor(J=50,Q=1,Z=0.1,$=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=$,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=G9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(U9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return G9*2*Math.atan(Math.tan(U9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){x8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(x8.x,x8.y).multiplyScalar(-J/x8.z),x8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(x8.x,x8.y).multiplyScalar(-J/x8.z)}getViewSize(J,Q){return this.getViewBounds(J,GK,EK),Q.subVectors(EK,GK)}setViewOffset(J,Q,Z,$,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(U9*0.5*this.fov)/this.zoom,Z=2*Q,$=this.aspect*Z,W=-0.5*$,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*$/Y,Q-=K.offsetY*Z/X,$*=K.width/Y,Z*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+$,Q,Q-Z,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var h9=-90,x9=1;class b$ extends $0{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let $=new I0(h9,x9,J,Q);$.layers=this.layers,this.add($);let W=new I0(h9,x9,J,Q);W.layers=this.layers,this.add(W);let K=new I0(h9,x9,J,Q);K.layers=this.layers,this.add(K);let H=new I0(h9,x9,J,Q);H.layers=this.layers,this.add(H);let Y=new I0(h9,x9,J,Q);Y.layers=this.layers,this.add(Y);let X=new I0(h9,x9,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,$,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),$.up.set(0,1,0),$.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),$.up.set(0,-1,0),$.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:$}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,$),J.render(Q,W),J.setRenderTarget(Z,1,$),J.render(Q,K),J.setRenderTarget(Z,2,$),J.render(Q,H),J.setRenderTarget(Z,3,$),J.render(Q,Y),J.setRenderTarget(Z,4,$),J.render(Q,X),Z.texture.generateMipmaps=R,J.setRenderTarget(Z,5,$),J.render(Q,U),J.setRenderTarget(G,E,N),J.xr.enabled=q,Z.texture.needsPMREMUpdate=!0}}class H7 extends F0{constructor(J=[],Q=301,Z,$,W,K,H,Y,X,U){super(J,Q,Z,$,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class h$ extends Y8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},$=[Z,Z,Z,Z,Z,Z];this.texture=new H7($),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},$=new k9(5,5,5),W=new e0({name:"CubemapFromEquirect",uniforms:V9(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let K=new k0($,W),H=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new b$(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,Z=!0,$=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,Z,$);J.setRenderTarget(W)}}class Y9 extends $0{constructor(){super();this.isGroup=!0,this.type="Group"}}var QE={type:"move"};class s7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Y9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Y9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Y9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let $=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let R of J.hand.values()){let F=Q.getJointPose(R,Z),O=this._getHandJoint(X,R);if(F!==null)O.matrix.fromArray(F.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=F.radius;O.visible=F!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],E=U.position.distanceTo(G.position),N=0.02,q=0.005;if(X.inputState.pinching&&E>N+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=N-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,Z),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1}}if(H!==null){if($=Q.getPose(J.targetRaySpace,Z),$===null&&W!==null)$=W;if($!==null){if(H.matrix.fromArray($.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,$.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy($.linearVelocity);else H.hasLinearVelocity=!1;if($.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy($.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(QE)}}}if(H!==null)H.visible=$!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new Y9;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}class FQ{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new RJ(J),this.density=Q}clone(){return new FQ(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class MQ{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new RJ(J),this.near=Q,this.far=Z}clone(){return new MQ(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class x$ extends $0{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new s0,this.environmentIntensity=1,this.environmentRotation=new s0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class i7{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=n0()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let $=0,W=this.stride;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var v0=new P;class N9{constructor(J,Q,Z,$=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=$}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)v0.fromBufferAttribute(this,Q),v0.applyMatrix4(J),this.setXYZ(Q,v0.x,v0.y,v0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)v0.fromBufferAttribute(this,Q),v0.applyNormalMatrix(J),this.setXYZ(Q,v0.x,v0.y,v0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)v0.fromBufferAttribute(this,Q),v0.transformDirection(J),this.setXYZ(Q,v0.x,v0.y,v0.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=f0(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=uJ(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=uJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=f0(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=f0(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=f0(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=f0(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array),$=uJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=uJ(Q,this.array),Z=uJ(Z,this.array),$=uJ($,this.array),W=uJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return new H0(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new N9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}class kQ extends C0{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new RJ(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var g9,M7=new P,p9=new P,m9=new P,d9=new o,k7=new o,VY=new vJ,z6=new P,V7=new P,B6=new P,NK=new o,IZ=new o,qK=new o;class g$ extends $0{constructor(J=new kQ){super();if(this.isSprite=!0,this.type="Sprite",g9===void 0){g9=new cJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Z=new i7(Q,5);g9.setIndex([0,1,2,0,2,3]),g9.setAttribute("position",new N9(Z,3,0,!1)),g9.setAttribute("uv",new N9(Z,2,3,!1))}this.geometry=g9,this.material=J,this.center=new o(0.5,0.5),this.count=1}raycast(J,Q){if(J.camera===null)console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(p9.setFromMatrixScale(this.matrixWorld),VY.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),m9.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)p9.multiplyScalar(-m9.z);let Z=this.material.rotation,$,W;if(Z!==0)W=Math.cos(Z),$=Math.sin(Z);let K=this.center;I6(z6.set(-0.5,-0.5,0),m9,K,p9,$,W),I6(V7.set(0.5,-0.5,0),m9,K,p9,$,W),I6(B6.set(0.5,0.5,0),m9,K,p9,$,W),NK.set(0,0),IZ.set(1,0),qK.set(1,1);let H=J.ray.intersectTriangle(z6,V7,B6,!1,M7);if(H===null){if(I6(V7.set(-0.5,0.5,0),m9,K,p9,$,W),IZ.set(0,1),H=J.ray.intersectTriangle(z6,B6,V7,!1,M7),H===null)return}let Y=J.ray.origin.distanceTo(M7);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:M7.clone(),uv:m0.getInterpolation(M7,z6,V7,B6,NK,IZ,qK,new o),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function I6(J,Q,Z,$,W,K){if(d9.subVectors(J,Z).addScalar(0.5).multiply($),W!==void 0)k7.x=K*d9.x-W*d9.y,k7.y=W*d9.x+K*d9.y;else k7.copy(d9);J.copy(Q),J.x+=k7.x,J.y+=k7.y,J.applyMatrix4(VY)}var _6=new P,DK=new P;class p$ extends $0{constructor(){super();this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(J){super.copy(J,!1);let Q=J.levels;for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];this.addLevel(W.object.clone(),W.distance,W.hysteresis)}return this.autoUpdate=J.autoUpdate,this}addLevel(J,Q=0,Z=0){Q=Math.abs(Q);let $=this.levels,W;for(W=0;W<$.length;W++)if(Q<$[W].distance)break;return $.splice(W,0,{distance:Q,hysteresis:Z,object:J}),this.add(J),this}removeLevel(J){let Q=this.levels;for(let Z=0;Z<Q.length;Z++)if(Q[Z].distance===J){let $=Q.splice(Z,1);return this.remove($[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(J){let Q=this.levels;if(Q.length>0){let Z,$;for(Z=1,$=Q.length;Z<$;Z++){let W=Q[Z].distance;if(Q[Z].object.visible)W-=W*Q[Z].hysteresis;if(J<W)break}return Q[Z-1].object}return null}raycast(J,Q){if(this.levels.length>0){_6.setFromMatrixPosition(this.matrixWorld);let $=J.ray.origin.distanceTo(_6);this.getObjectForDistance($).raycast(J,Q)}}update(J){let Q=this.levels;if(Q.length>1){_6.setFromMatrixPosition(J.matrixWorld),DK.setFromMatrixPosition(this.matrixWorld);let Z=_6.distanceTo(DK)/J.zoom;Q[0].object.visible=!0;let $,W;for($=1,W=Q.length;$<W;$++){let K=Q[$].distance;if(Q[$].object.visible)K-=K*Q[$].hysteresis;if(Z>=K)Q[$-1].object.visible=!1,Q[$].object.visible=!0;else break}this._currentLevel=$-1;for(;$<W;$++)Q[$].object.visible=!1}}toJSON(J){let Q=super.toJSON(J);if(this.autoUpdate===!1)Q.object.autoUpdate=!1;Q.object.levels=[];let Z=this.levels;for(let $=0,W=Z.length;$<W;$++){let K=Z[$];Q.object.levels.push({object:K.object.uuid,distance:K.distance,hysteresis:K.hysteresis})}return Q}}var OK=new P,RK=new Z0,FK=new Z0,ZE=new P,MK=new vJ,w6=new P,_Z=new _0,kK=new vJ,wZ=new M9;class m$ extends k0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new vJ,this.bindMatrixInverse=new vJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new w0;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,w6),this.boundingBox.expandByPoint(w6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new _0;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,w6),this.boundingSphere.expandByPoint(w6)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let Z=this.material,$=this.matrixWorld;if(Z===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(_Z.copy(this.boundingSphere),_Z.applyMatrix4($),J.ray.intersectsSphere(_Z)===!1)return;if(kK.copy($).invert(),wZ.copy(J.ray).applyMatrix4(kK),this.boundingBox!==null){if(wZ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,wZ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new Z0,Q=this.geometry.attributes.skinWeight;for(let Z=0,$=Q.count;Z<$;Z++){J.fromBufferAttribute(Q,Z);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW(Z,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let Z=this.skeleton,$=this.geometry;RK.fromBufferAttribute($.attributes.skinIndex,J),FK.fromBufferAttribute($.attributes.skinWeight,J),OK.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let K=FK.getComponent(W);if(K!==0){let H=RK.getComponent(W);MK.multiplyMatrices(Z.bones[H].matrixWorld,Z.boneInverses[H]),Q.addScaledVector(ZE.copy(OK).applyMatrix4(MK),K)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class VQ extends $0{constructor(){super();this.isBone=!0,this.type="Bone"}}class K8 extends F0{constructor(J=null,Q=1,Z=1,$,W,K,H,Y,X=1003,U=1003,G,E){super(null,K,H,Y,X,U,$,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var VK=new vJ,$E=new vJ;class LQ{constructor(J=[],Q=[]){this.uuid=n0(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Z=0,$=this.bones.length;Z<$;Z++)this.boneInverses.push(new vJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let Z=new vJ;if(this.bones[J])Z.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Z)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z)Z.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z){if(Z.parent&&Z.parent.isBone)Z.matrix.copy(Z.parent.matrixWorld).invert(),Z.matrix.multiply(Z.matrixWorld);else Z.matrix.copy(Z.matrixWorld);Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)}}}update(){let J=this.bones,Q=this.boneInverses,Z=this.boneMatrices,$=this.boneTexture;for(let W=0,K=J.length;W<K;W++){let H=J[W]?J[W].matrixWorld:$E;VK.multiplyMatrices(H,Q[W]),VK.toArray(Z,W*16)}if($!==null)$.needsUpdate=!0}clone(){return new LQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let Z=new K8(Q,J,J,1023,1015);return Z.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=Z,this}getBoneByName(J){for(let Q=0,Z=this.bones.length;Q<Z;Q++){let $=this.bones[Q];if($.name===J)return $}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let Z=0,$=J.bones.length;Z<$;Z++){let W=J.bones[Z],K=Q[W];if(K===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),K=new VQ;this.bones.push(K),this.boneInverses.push(new vJ().fromArray(J.boneInverses[Z]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,Z=this.boneInverses;for(let $=0,W=Q.length;$<W;$++){let K=Q[$];J.bones.push(K.uuid);let H=Z[$];J.boneInverses.push(H.toArray())}return J}}class q9 extends H0{constructor(J,Q,Z,$=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var l9=new vJ,LK=new vJ,C6=[],zK=new w0,WE=new vJ,L7=new k0,z7=new _0;class d$ extends k0{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new q9(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let $=0;$<Z;$++)this.setMatrixAt($,WE)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new w0;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,l9),zK.copy(J.boundingBox).applyMatrix4(l9),this.boundingBox.union(zK)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new _0;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,l9),z7.copy(J.boundingSphere).applyMatrix4(l9),this.boundingSphere.union(z7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=this.morphTexture.source.data.data,W=Z.length+1,K=J*W+1;for(let H=0;H<Z.length;H++)Z[H]=$[K+H]}raycast(J,Q){let Z=this.matrixWorld,$=this.count;if(L7.geometry=this.geometry,L7.material=this.material,L7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(z7.copy(this.boundingSphere),z7.applyMatrix4(Z),J.ray.intersectsSphere(z7)===!1)return;for(let W=0;W<$;W++){this.getMatrixAt(W,l9),LK.multiplyMatrices(Z,l9),L7.matrixWorld=LK,L7.raycast(J,C6);for(let K=0,H=C6.length;K<H;K++){let Y=C6[K];Y.instanceId=W,Y.object=this,Q.push(Y)}C6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new q9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=Z.length+1;if(this.morphTexture===null)this.morphTexture=new K8(new Float32Array($*this.count),$,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let X=0;X<Z.length;X++)K+=Z[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=$*J;W[Y]=H,W.set(Z,Y+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var CZ=new P,KE=new P,HE=new dJ;class _8{constructor(J=new P(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,$){return this.normal.set(J,Q,Z),this.constant=$,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let $=CZ.subVectors(Z,Q).cross(KE.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint($,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let Z=J.delta(CZ),$=this.normal.dot(Z);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||HE.getNormalMatrix(J),$=this.coplanarPoint(CZ).applyMatrix4(J),W=this.normal.applyMatrix3(Z).normalize();return this.constant=-$.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var t8=new _0,YE=new o(0.5,0.5),P6=new P;class L9{constructor(J=new _8,Q=new _8,Z=new _8,$=new _8,W=new _8,K=new _8){this.planes=[J,Q,Z,$,W,K]}set(J,Q,Z,$,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy(Z),H[3].copy($),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000){let Z=this.planes,$=J.elements,W=$[0],K=$[1],H=$[2],Y=$[3],X=$[4],U=$[5],G=$[6],E=$[7],N=$[8],q=$[9],R=$[10],F=$[11],O=$[12],D=$[13],k=$[14],M=$[15];if(Z[0].setComponents(Y-W,E-X,F-N,M-O).normalize(),Z[1].setComponents(Y+W,E+X,F+N,M+O).normalize(),Z[2].setComponents(Y+K,E+U,F+q,M+D).normalize(),Z[3].setComponents(Y-K,E-U,F-q,M-D).normalize(),Z[4].setComponents(Y-H,E-G,F-R,M-k).normalize(),Q===2000)Z[5].setComponents(Y+H,E+G,F+R,M+k).normalize();else if(Q===2001)Z[5].setComponents(H,G,R,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();t8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();t8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(t8)}intersectsSprite(J){t8.center.set(0,0,0);let Q=YE.distanceTo(J.center);return t8.radius=0.7071067811865476+Q,t8.applyMatrix4(J.matrixWorld),this.intersectsSphere(t8)}intersectsSphere(J){let Q=this.planes,Z=J.center,$=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint(Z)<$)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let $=Q[Z];if(P6.x=$.normal.x>0?J.max.x:J.min.x,P6.y=$.normal.y>0?J.max.y:J.min.y,P6.z=$.normal.z>0?J.max.z:J.min.z,$.distanceToPoint(P6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var G8=new vJ,E8=new L9;class zQ{constructor(){this.coordinateSystem=2000}intersectsObject(J,Q){if(!Q.isArrayCamera||Q.cameras.length===0)return!1;for(let Z=0;Z<Q.cameras.length;Z++){let $=Q.cameras[Z];if(G8.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),E8.setFromProjectionMatrix(G8,this.coordinateSystem),E8.intersectsObject(J))return!0}return!1}intersectsSprite(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let Z=0;Z<Q.cameras.length;Z++){let $=Q.cameras[Z];if(G8.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),E8.setFromProjectionMatrix(G8,this.coordinateSystem),E8.intersectsSprite(J))return!0}return!1}intersectsSphere(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let Z=0;Z<Q.cameras.length;Z++){let $=Q.cameras[Z];if(G8.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),E8.setFromProjectionMatrix(G8,this.coordinateSystem),E8.intersectsSphere(J))return!0}return!1}intersectsBox(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let Z=0;Z<Q.cameras.length;Z++){let $=Q.cameras[Z];if(G8.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),E8.setFromProjectionMatrix(G8,this.coordinateSystem),E8.intersectsBox(J))return!0}return!1}containsPoint(J,Q){if(!Q||!Q.cameras||Q.cameras.length===0)return!1;for(let Z=0;Z<Q.cameras.length;Z++){let $=Q.cameras[Z];if(G8.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),E8.setFromProjectionMatrix(G8,this.coordinateSystem),E8.containsPoint(J))return!0}return!1}clone(){return new zQ}}function PZ(J,Q){return J-Q}function XE(J,Q){return J.z-Q.z}function UE(J,Q){return Q.z-J.z}class LY{constructor(){this.index=0,this.pool=[],this.list=[]}push(J,Q,Z,$){let W=this.pool,K=this.list;if(this.index>=W.length)W.push({start:-1,count:-1,z:-1,index:-1});let H=W[this.index];K.push(H),this.index++,H.start=J,H.count=Q,H.z=Z,H.index=$}reset(){this.list.length=0,this.index=0}}var g0=new vJ,GE=new RJ(1,1,1),BK=new L9,EE=new zQ,A6=new w0,e8=new _0,B7=new P,IK=new P,NE=new P,AZ=new LY,T0=new k0,T6=[];function qE(J,Q,Z=0){let $=Q.itemSize;if(J.isInterleavedBufferAttribute||J.array.constructor!==Q.array.constructor){let W=J.count;for(let K=0;K<W;K++)for(let H=0;H<$;H++)Q.setComponent(K+Z,H,J.getComponent(K,H))}else Q.array.set(J.array,Z*$);Q.needsUpdate=!0}function J9(J,Q){if(J.constructor!==Q.constructor){let Z=Math.min(J.length,Q.length);for(let $=0;$<Z;$++)Q[$]=J[$]}else{let Z=Math.min(J.length,Q.length);Q.set(new J.constructor(J.buffer,0,Z))}}class l$ extends k0{constructor(J,Q,Z=Q*2,$){super(new cJ,$);this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=J,this._maxVertexCount=Q,this._maxIndexCount=Z,this._multiDrawCounts=new Int32Array(J),this._multiDrawStarts=new Int32Array(J),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let J=Math.sqrt(this._maxInstanceCount*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4),Z=new K8(Q,J,J,1023,1015);this._matricesTexture=Z}_initIndirectTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Uint32Array(J*J),Z=new K8(Q,J,J,1029,1014);this._indirectTexture=Z}_initColorsTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Float32Array(J*J*4).fill(1),Z=new K8(Q,J,J,1023,1015);Z.colorSpace=J0.workingColorSpace,this._colorsTexture=Z}_initializeGeometry(J){let Q=this.geometry,Z=this._maxVertexCount,$=this._maxIndexCount;if(this._geometryInitialized===!1){for(let W in J.attributes){let K=J.getAttribute(W),{array:H,itemSize:Y,normalized:X}=K,U=new H.constructor(Z*Y),G=new H0(U,Y,X);Q.setAttribute(W,G)}if(J.getIndex()!==null){let W=Z>65535?new Uint32Array($):new Uint16Array($);Q.setIndex(new H0(W,1))}this._geometryInitialized=!0}}_validateGeometry(J){let Q=this.geometry;if(Boolean(J.getIndex())!==Boolean(Q.getIndex()))throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let Z in Q.attributes){if(!J.hasAttribute(Z))throw new Error(`THREE.BatchedMesh: Added geometry missing "${Z}". All geometries must have consistent attributes.`);let $=J.getAttribute(Z),W=Q.getAttribute(Z);if($.itemSize!==W.itemSize||$.normalized!==W.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(J){let Q=this._instanceInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${J}. Instance is either out of range or has been deleted.`)}validateGeometryId(J){let Q=this._geometryInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${J}. Geometry is either out of range or has been deleted.`)}setCustomSort(J){return this.customSort=J,this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new w0;let J=this.boundingBox,Q=this._instanceInfo;J.makeEmpty();for(let Z=0,$=Q.length;Z<$;Z++){if(Q[Z].active===!1)continue;let W=Q[Z].geometryIndex;this.getMatrixAt(Z,g0),this.getBoundingBoxAt(W,A6).applyMatrix4(g0),J.union(A6)}}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new _0;let J=this.boundingSphere,Q=this._instanceInfo;J.makeEmpty();for(let Z=0,$=Q.length;Z<$;Z++){if(Q[Z].active===!1)continue;let W=Q[Z].geometryIndex;this.getMatrixAt(Z,g0),this.getBoundingSphereAt(W,e8).applyMatrix4(g0),J.union(e8)}}addInstance(J){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let Z={visible:!0,active:!0,geometryIndex:J},$=null;if(this._availableInstanceIds.length>0)this._availableInstanceIds.sort(PZ),$=this._availableInstanceIds.shift(),this._instanceInfo[$]=Z;else $=this._instanceInfo.length,this._instanceInfo.push(Z);let W=this._matricesTexture;g0.identity().toArray(W.image.data,$*16),W.needsUpdate=!0;let K=this._colorsTexture;if(K)GE.toArray(K.image.data,$*4),K.needsUpdate=!0;return this._visibilityChanged=!0,$}addGeometry(J,Q=-1,Z=-1){this._initializeGeometry(J),this._validateGeometry(J);let $={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},W=this._geometryInfo;$.vertexStart=this._nextVertexStart,$.reservedVertexCount=Q===-1?J.getAttribute("position").count:Q;let K=J.getIndex();if(K!==null)$.indexStart=this._nextIndexStart,$.reservedIndexCount=Z===-1?K.count:Z;if($.indexStart!==-1&&$.indexStart+$.reservedIndexCount>this._maxIndexCount||$.vertexStart+$.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let Y;if(this._availableGeometryIds.length>0)this._availableGeometryIds.sort(PZ),Y=this._availableGeometryIds.shift(),W[Y]=$;else Y=this._geometryCount,this._geometryCount++,W.push($);return this.setGeometryAt(Y,J),this._nextIndexStart=$.indexStart+$.reservedIndexCount,this._nextVertexStart=$.vertexStart+$.reservedVertexCount,Y}setGeometryAt(J,Q){if(J>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(Q);let Z=this.geometry,$=Z.getIndex()!==null,W=Z.getIndex(),K=Q.getIndex(),H=this._geometryInfo[J];if($&&K.count>H.reservedIndexCount||Q.attributes.position.count>H.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let{vertexStart:Y,reservedVertexCount:X}=H;H.vertexCount=Q.getAttribute("position").count;for(let U in Z.attributes){let G=Q.getAttribute(U),E=Z.getAttribute(U);qE(G,E,Y);let N=G.itemSize;for(let q=G.count,R=X;q<R;q++){let F=Y+q;for(let O=0;O<N;O++)E.setComponent(F,O,0)}E.needsUpdate=!0,E.addUpdateRange(Y*N,X*N)}if($){let{indexStart:U,reservedIndexCount:G}=H;H.indexCount=Q.getIndex().count;for(let E=0;E<K.count;E++)W.setX(U+E,Y+K.getX(E));for(let E=K.count,N=G;E<N;E++)W.setX(U+E,Y);W.needsUpdate=!0,W.addUpdateRange(U,H.reservedIndexCount)}if(H.start=$?H.indexStart:H.vertexStart,H.count=$?H.indexCount:H.vertexCount,H.boundingBox=null,Q.boundingBox!==null)H.boundingBox=Q.boundingBox.clone();if(H.boundingSphere=null,Q.boundingSphere!==null)H.boundingSphere=Q.boundingSphere.clone();return this._visibilityChanged=!0,J}deleteGeometry(J){let Q=this._geometryInfo;if(J>=Q.length||Q[J].active===!1)return this;let Z=this._instanceInfo;for(let $=0,W=Z.length;$<W;$++)if(Z[$].active&&Z[$].geometryIndex===J)this.deleteInstance($);return Q[J].active=!1,this._availableGeometryIds.push(J),this._visibilityChanged=!0,this}deleteInstance(J){return this.validateInstanceId(J),this._instanceInfo[J].active=!1,this._availableInstanceIds.push(J),this._visibilityChanged=!0,this}optimize(){let J=0,Q=0,Z=this._geometryInfo,$=Z.map((K,H)=>H).sort((K,H)=>{return Z[K].vertexStart-Z[H].vertexStart}),W=this.geometry;for(let K=0,H=Z.length;K<H;K++){let Y=$[K],X=Z[Y];if(X.active===!1)continue;if(W.index!==null){if(X.indexStart!==Q){let{indexStart:U,vertexStart:G,reservedIndexCount:E}=X,N=W.index,q=N.array,R=J-G;for(let F=U;F<U+E;F++)q[F]=q[F]+R;N.array.copyWithin(Q,U,U+E),N.addUpdateRange(Q,E),X.indexStart=Q}Q+=X.reservedIndexCount}if(X.vertexStart!==J){let{vertexStart:U,reservedVertexCount:G}=X,E=W.attributes;for(let N in E){let q=E[N],{array:R,itemSize:F}=q;R.copyWithin(J*F,U*F,(U+G)*F),q.addUpdateRange(J*F,G*F)}X.vertexStart=J}J+=X.reservedVertexCount,X.start=W.index?X.indexStart:X.vertexStart,this._nextIndexStart=W.index?X.indexStart+X.reservedIndexCount:0,this._nextVertexStart=X.vertexStart+X.reservedVertexCount}return this}getBoundingBoxAt(J,Q){if(J>=this._geometryCount)return null;let Z=this.geometry,$=this._geometryInfo[J];if($.boundingBox===null){let W=new w0,K=Z.index,H=Z.attributes.position;for(let Y=$.start,X=$.start+$.count;Y<X;Y++){let U=Y;if(K)U=K.getX(U);W.expandByPoint(B7.fromBufferAttribute(H,U))}$.boundingBox=W}return Q.copy($.boundingBox),Q}getBoundingSphereAt(J,Q){if(J>=this._geometryCount)return null;let Z=this.geometry,$=this._geometryInfo[J];if($.boundingSphere===null){let W=new _0;this.getBoundingBoxAt(J,A6),A6.getCenter(W.center);let K=Z.index,H=Z.attributes.position,Y=0;for(let X=$.start,U=$.start+$.count;X<U;X++){let G=X;if(K)G=K.getX(G);B7.fromBufferAttribute(H,G),Y=Math.max(Y,W.center.distanceToSquared(B7))}W.radius=Math.sqrt(Y),$.boundingSphere=W}return Q.copy($.boundingSphere),Q}setMatrixAt(J,Q){this.validateInstanceId(J);let Z=this._matricesTexture,$=this._matricesTexture.image.data;return Q.toArray($,J*16),Z.needsUpdate=!0,this}getMatrixAt(J,Q){return this.validateInstanceId(J),Q.fromArray(this._matricesTexture.image.data,J*16)}setColorAt(J,Q){if(this.validateInstanceId(J),this._colorsTexture===null)this._initColorsTexture();return Q.toArray(this._colorsTexture.image.data,J*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(J,Q){return this.validateInstanceId(J),Q.fromArray(this._colorsTexture.image.data,J*4)}setVisibleAt(J,Q){if(this.validateInstanceId(J),this._instanceInfo[J].visible===Q)return this;return this._instanceInfo[J].visible=Q,this._visibilityChanged=!0,this}getVisibleAt(J){return this.validateInstanceId(J),this._instanceInfo[J].visible}setGeometryIdAt(J,Q){return this.validateInstanceId(J),this.validateGeometryId(Q),this._instanceInfo[J].geometryIndex=Q,this}getGeometryIdAt(J){return this.validateInstanceId(J),this._instanceInfo[J].geometryIndex}getGeometryRangeAt(J,Q={}){this.validateGeometryId(J);let Z=this._geometryInfo[J];return Q.vertexStart=Z.vertexStart,Q.vertexCount=Z.vertexCount,Q.reservedVertexCount=Z.reservedVertexCount,Q.indexStart=Z.indexStart,Q.indexCount=Z.indexCount,Q.reservedIndexCount=Z.reservedIndexCount,Q.start=Z.start,Q.count=Z.count,Q}setInstanceCount(J){let Q=this._availableInstanceIds,Z=this._instanceInfo;Q.sort(PZ);while(Q[Q.length-1]===Z.length)Z.pop(),Q.pop();if(J<Z.length)throw new Error(`BatchedMesh: Instance ids outside the range ${J} are being used. Cannot shrink instance count.`);let $=new Int32Array(J),W=new Int32Array(J);J9(this._multiDrawCounts,$),J9(this._multiDrawStarts,W),this._multiDrawCounts=$,this._multiDrawStarts=W,this._maxInstanceCount=J;let K=this._indirectTexture,H=this._matricesTexture,Y=this._colorsTexture;if(K.dispose(),this._initIndirectTexture(),J9(K.image.data,this._indirectTexture.image.data),H.dispose(),this._initMatricesTexture(),J9(H.image.data,this._matricesTexture.image.data),Y)Y.dispose(),this._initColorsTexture(),J9(Y.image.data,this._colorsTexture.image.data)}setGeometrySize(J,Q){let Z=[...this._geometryInfo].filter((H)=>H.active);if(Math.max(...Z.map((H)=>H.vertexStart+H.reservedVertexCount))>J)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${Q}. Cannot shrink further.`);if(this.geometry.index){if(Math.max(...Z.map((Y)=>Y.indexStart+Y.reservedIndexCount))>Q)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${Q}. Cannot shrink further.`)}let W=this.geometry;if(W.dispose(),this._maxVertexCount=J,this._maxIndexCount=Q,this._geometryInitialized)this._geometryInitialized=!1,this.geometry=new cJ,this._initializeGeometry(W);let K=this.geometry;if(W.index)J9(W.index.array,K.index.array);for(let H in W.attributes)J9(W.attributes[H].array,K.attributes[H].array)}raycast(J,Q){let Z=this._instanceInfo,$=this._geometryInfo,W=this.matrixWorld,K=this.geometry;if(T0.material=this.material,T0.geometry.index=K.index,T0.geometry.attributes=K.attributes,T0.geometry.boundingBox===null)T0.geometry.boundingBox=new w0;if(T0.geometry.boundingSphere===null)T0.geometry.boundingSphere=new _0;for(let H=0,Y=Z.length;H<Y;H++){if(!Z[H].visible||!Z[H].active)continue;let X=Z[H].geometryIndex,U=$[X];T0.geometry.setDrawRange(U.start,U.count),this.getMatrixAt(H,T0.matrixWorld).premultiply(W),this.getBoundingBoxAt(X,T0.geometry.boundingBox),this.getBoundingSphereAt(X,T0.geometry.boundingSphere),T0.raycast(J,T6);for(let G=0,E=T6.length;G<E;G++){let N=T6[G];N.object=this,N.batchId=H,Q.push(N)}T6.length=0}T0.material=null,T0.geometry.index=null,T0.geometry.attributes={},T0.geometry.setDrawRange(0,1/0)}copy(J){if(super.copy(J),this.geometry=J.geometry.clone(),this.perObjectFrustumCulled=J.perObjectFrustumCulled,this.sortObjects=J.sortObjects,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this._geometryInfo=J._geometryInfo.map((Q)=>({...Q,boundingBox:Q.boundingBox!==null?Q.boundingBox.clone():null,boundingSphere:Q.boundingSphere!==null?Q.boundingSphere.clone():null})),this._instanceInfo=J._instanceInfo.map((Q)=>({...Q})),this._availableInstanceIds=J._availableInstanceIds.slice(),this._availableGeometryIds=J._availableGeometryIds.slice(),this._nextIndexStart=J._nextIndexStart,this._nextVertexStart=J._nextVertexStart,this._geometryCount=J._geometryCount,this._maxInstanceCount=J._maxInstanceCount,this._maxVertexCount=J._maxVertexCount,this._maxIndexCount=J._maxIndexCount,this._geometryInitialized=J._geometryInitialized,this._multiDrawCounts=J._multiDrawCounts.slice(),this._multiDrawStarts=J._multiDrawStarts.slice(),this._indirectTexture=J._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=J._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null)this._colorsTexture=J._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice();return this}dispose(){if(this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null)this._colorsTexture.dispose(),this._colorsTexture=null}onBeforeRender(J,Q,Z,$,W){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let K=$.getIndex(),H=K===null?1:K.array.BYTES_PER_ELEMENT,Y=this._instanceInfo,X=this._multiDrawStarts,U=this._multiDrawCounts,G=this._geometryInfo,E=this.perObjectFrustumCulled,N=this._indirectTexture,q=N.image.data,R=Z.isArrayCamera?EE:BK;if(E&&!Z.isArrayCamera)g0.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse).multiply(this.matrixWorld),BK.setFromProjectionMatrix(g0,J.coordinateSystem);let F=0;if(this.sortObjects){g0.copy(this.matrixWorld).invert(),B7.setFromMatrixPosition(Z.matrixWorld).applyMatrix4(g0),IK.set(0,0,-1).transformDirection(Z.matrixWorld).transformDirection(g0);for(let k=0,M=Y.length;k<M;k++)if(Y[k].visible&&Y[k].active){let B=Y[k].geometryIndex;this.getMatrixAt(k,g0),this.getBoundingSphereAt(B,e8).applyMatrix4(g0);let T=!1;if(E)T=!R.intersectsSphere(e8,Z);if(!T){let _=G[B],C=NE.subVectors(e8.center,B7).dot(IK);AZ.push(_.start,_.count,C,k)}}let O=AZ.list,D=this.customSort;if(D===null)O.sort(W.transparent?UE:XE);else D.call(this,O,Z);for(let k=0,M=O.length;k<M;k++){let B=O[k];X[F]=B.start*H,U[F]=B.count,q[F]=B.index,F++}AZ.reset()}else for(let O=0,D=Y.length;O<D;O++)if(Y[O].visible&&Y[O].active){let k=Y[O].geometryIndex,M=!1;if(E)this.getMatrixAt(O,g0),this.getBoundingSphereAt(k,e8).applyMatrix4(g0),M=!R.intersectsSphere(e8,Z);if(!M){let B=G[k];X[F]=B.start*H,U[F]=B.count,q[F]=O,F++}}N.needsUpdate=!0,this._multiDrawCount=F,this._visibilityChanged=!1}onBeforeShadow(J,Q,Z,$,W,K){this.onBeforeRender(J,null,$,W,K)}}class j0 extends C0{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new RJ(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var i6=new P,o6=new P,_K=new vJ,I7=new M9,S6=new _0,TZ=new P,wK=new P;class A8 extends $0{constructor(J=new cJ,Q=new j0){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[0];for(let $=1,W=Q.count;$<W;$++)i6.fromBufferAttribute(Q,$-1),o6.fromBufferAttribute(Q,$),Z[$]=Z[$-1],Z[$]+=i6.distanceTo(o6);J.setAttribute("lineDistance",new kJ(Z,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Line.threshold,K=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(S6.copy(Z.boundingSphere),S6.applyMatrix4($),S6.radius+=W,J.ray.intersectsSphere(S6)===!1)return;_K.copy($).invert(),I7.copy(J.ray).applyMatrix4(_K);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=Z.index,E=Z.attributes.position;if(U!==null){let N=Math.max(0,K.start),q=Math.min(U.count,K.start+K.count);for(let R=N,F=q-1;R<F;R+=X){let O=U.getX(R),D=U.getX(R+1),k=j6(this,J,I7,Y,O,D,R);if(k)Q.push(k)}if(this.isLineLoop){let R=U.getX(q-1),F=U.getX(N),O=j6(this,J,I7,Y,R,F,q-1);if(O)Q.push(O)}}else{let N=Math.max(0,K.start),q=Math.min(E.count,K.start+K.count);for(let R=N,F=q-1;R<F;R+=X){let O=j6(this,J,I7,Y,R,R+1,R);if(O)Q.push(O)}if(this.isLineLoop){let R=j6(this,J,I7,Y,q-1,N,q-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=$.length;W<K;W++){let H=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function j6(J,Q,Z,$,W,K,H){let Y=J.geometry.attributes.position;if(i6.fromBufferAttribute(Y,W),o6.fromBufferAttribute(Y,K),Z.distanceSqToSegment(i6,o6,TZ,wK)>$)return;TZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(TZ);if(U<Q.near||U>Q.far)return;return{distance:U,point:wK.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var CK=new P,PK=new P;class X8 extends A8{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[];for(let $=0,W=Q.count;$<W;$+=2)CK.fromBufferAttribute(Q,$),PK.fromBufferAttribute(Q,$+1),Z[$]=$===0?0:Z[$-1],Z[$+1]=Z[$]+CK.distanceTo(PK);J.setAttribute("lineDistance",new kJ(Z,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u$ extends A8{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class BQ extends C0{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new RJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var AK=new vJ,mZ=new M9,y6=new _0,v6=new P;class c$ extends $0{constructor(J=new cJ,Q=new BQ){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Points.threshold,K=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(y6.copy(Z.boundingSphere),y6.applyMatrix4($),y6.radius+=W,J.ray.intersectsSphere(y6)===!1)return;AK.copy($).invert(),mZ.copy(J.ray).applyMatrix4(AK);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=Z.index,G=Z.attributes.position;if(X!==null){let E=Math.max(0,K.start),N=Math.min(X.count,K.start+K.count);for(let q=E,R=N;q<R;q++){let F=X.getX(q);v6.fromBufferAttribute(G,F),TK(v6,F,Y,$,J,Q,this)}}else{let E=Math.max(0,K.start),N=Math.min(G.count,K.start+K.count);for(let q=E,R=N;q<R;q++)v6.fromBufferAttribute(G,q),TK(v6,q,Y,$,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=$.length;W<K;W++){let H=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function TK(J,Q,Z,$,W,K,H){let Y=mZ.distanceSqToPoint(J);if(Y<Z){let X=new P;mZ.closestPointToPoint(J,X),X.applyMatrix4($);let U=W.ray.origin.distanceTo(X);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class n$ extends F0{constructor(J,Q,Z,$,W=1006,K=1006,H,Y,X){super(J,Q,Z,$,W,K,H,Y,X);this.isVideoTexture=!0,this.generateMipmaps=!1;let U=this;function G(){U.needsUpdate=!0,J.requestVideoFrameCallback(G)}if("requestVideoFrameCallback"in J)J.requestVideoFrameCallback(G)}clone(){return new this.constructor(this.image).copy(this)}update(){let J=this.image;if("requestVideoFrameCallback"in J===!1&&J.readyState>=J.HAVE_CURRENT_DATA)this.needsUpdate=!0}}class zY extends n${constructor(J,Q,Z,$,W,K,H,Y){super({},J,Q,Z,$,W,K,H,Y);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(J){this.image=J,this.needsUpdate=!0}}class BY extends F0{constructor(J,Q){super({width:J,height:Q});this.isFramebufferTexture=!0,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}class o7 extends F0{constructor(J,Q,Z,$,W,K,H,Y,X,U,G,E){super(null,K,H,Y,X,U,$,W,G,E);this.isCompressedTexture=!0,this.image={width:Q,height:Z},this.mipmaps=J,this.flipY=!1,this.generateMipmaps=!1}}class IY extends o7{constructor(J,Q,Z,$,W,K){super(J,Q,Z,W,K);this.isCompressedArrayTexture=!0,this.image.depth=$,this.wrapR=1001,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class _Y extends o7{constructor(J,Q,Z){super(void 0,J[0].width,J[0].height,Q,Z,301);this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=J}}class wY extends F0{constructor(J,Q,Z,$,W,K,H,Y,X){super(J,Q,Z,$,W,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class IQ extends F0{constructor(J,Q,Z=1014,$,W,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,$,W,K,H,Y,U,Z,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new C8(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class _Q extends cJ{constructor(J=1,Q=1,Z=4,$=8,W=1){super();this.type="CapsuleGeometry",this.parameters={radius:J,height:Q,capSegments:Z,radialSegments:$,heightSegments:W},Q=Math.max(0,Q),Z=Math.max(1,Math.floor(Z)),$=Math.max(3,Math.floor($)),W=Math.max(1,Math.floor(W));let K=[],H=[],Y=[],X=[],U=Q/2,G=Math.PI/2*J,E=Q,N=2*G+E,q=Z*2+W,R=$+1,F=new P,O=new P;for(let D=0;D<=q;D++){let k=0,M=0,B=0,T=0;if(D<=Z){let y=D/Z,L=y*Math.PI/2;M=-U-J*Math.cos(L),B=J*Math.sin(L),T=-J*Math.cos(L),k=y*G}else if(D<=Z+W){let y=(D-Z)/W;M=-U+y*Q,B=J,T=0,k=G+y*E}else{let y=(D-Z-W)/Z,L=y*Math.PI/2;M=U+J*Math.sin(L),B=J*Math.cos(L),T=J*Math.sin(L),k=G+E+y*G}let _=Math.max(0,Math.min(1,k/N)),C=0;if(D===0)C=0.5/$;else if(D===q)C=-0.5/$;for(let y=0;y<=$;y++){let L=y/$,I=L*Math.PI*2,S=Math.sin(I),h=Math.cos(I);O.x=-B*h,O.y=M,O.z=B*S,H.push(O.x,O.y,O.z),F.set(-B*h,T,B*S),F.normalize(),Y.push(F.x,F.y,F.z),X.push(L+C,_)}if(D>0){let y=(D-1)*R;for(let L=0;L<$;L++){let I=y+L,S=y+L+1,h=D*R+L,m=D*R+L+1;K.push(I,S,h),K.push(S,m,h)}}}this.setIndex(K),this.setAttribute("position",new kJ(H,3)),this.setAttribute("normal",new kJ(Y,3)),this.setAttribute("uv",new kJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _Q(J.radius,J.height,J.capSegments,J.radialSegments,J.heightSegments)}}class wQ extends cJ{constructor(J=1,Q=32,Z=0,$=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:Z,thetaLength:$},Q=Math.max(3,Q);let W=[],K=[],H=[],Y=[],X=new P,U=new o;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let G=0,E=3;G<=Q;G++,E+=3){let N=Z+G/Q*$;X.x=J*Math.cos(N),X.y=J*Math.sin(N),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=Q;G++)W.push(G,G+1,0);this.setIndex(W),this.setAttribute("position",new kJ(K,3)),this.setAttribute("normal",new kJ(H,3)),this.setAttribute("uv",new kJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new wQ(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class a7 extends cJ{constructor(J=1,Q=1,Z=1,$=32,W=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:Z,radialSegments:$,heightSegments:W,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;$=Math.floor($),W=Math.floor(W);let U=[],G=[],E=[],N=[],q=0,R=[],F=Z/2,O=0;if(D(),K===!1){if(J>0)k(!0);if(Q>0)k(!1)}this.setIndex(U),this.setAttribute("position",new kJ(G,3)),this.setAttribute("normal",new kJ(E,3)),this.setAttribute("uv",new kJ(N,2));function D(){let M=new P,B=new P,T=0,_=(Q-J)/Z;for(let C=0;C<=W;C++){let y=[],L=C/W,I=L*(Q-J)+J;for(let S=0;S<=$;S++){let h=S/$,m=h*Y+H,p=Math.sin(m),a=Math.cos(m);B.x=I*p,B.y=-L*Z+F,B.z=I*a,G.push(B.x,B.y,B.z),M.set(p,_,a).normalize(),E.push(M.x,M.y,M.z),N.push(h,1-L),y.push(q++)}R.push(y)}for(let C=0;C<$;C++)for(let y=0;y<W;y++){let L=R[y][C],I=R[y+1][C],S=R[y+1][C+1],h=R[y][C+1];if(J>0||y!==0)U.push(L,I,h),T+=3;if(Q>0||y!==W-1)U.push(I,S,h),T+=3}X.addGroup(O,T,0),O+=T}function k(M){let B=q,T=new o,_=new P,C=0,y=M===!0?J:Q,L=M===!0?1:-1;for(let S=1;S<=$;S++)G.push(0,F*L,0),E.push(0,L,0),N.push(0.5,0.5),q++;let I=q;for(let S=0;S<=$;S++){let m=S/$*Y+H,p=Math.cos(m),a=Math.sin(m);_.x=y*a,_.y=F*L,_.z=y*p,G.push(_.x,_.y,_.z),E.push(0,L,0),T.x=p*0.5+0.5,T.y=a*0.5*L+0.5,N.push(T.x,T.y),q++}for(let S=0;S<$;S++){let h=B+S,m=I+S;if(M===!0)U.push(m,m+1,h);else U.push(m+1,m,h);C+=3}X.addGroup(O,C,M===!0?1:2),O+=C}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a7(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class r7 extends a7{constructor(J=1,Q=1,Z=32,$=1,W=!1,K=0,H=Math.PI*2){super(0,J,Q,Z,$,W,K,H);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:Z,heightSegments:$,openEnded:W,thetaStart:K,thetaLength:H}}static fromJSON(J){return new r7(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class u8 extends cJ{constructor(J=[],Q=[],Z=1,$=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:Z,detail:$};let W=[],K=[];if(H($),X(Z),U(),this.setAttribute("position",new kJ(W,3)),this.setAttribute("normal",new kJ(W.slice(),3)),this.setAttribute("uv",new kJ(K,2)),$===0)this.computeVertexNormals();else this.normalizeNormals();function H(D){let k=new P,M=new P,B=new P;for(let T=0;T<Q.length;T+=3)N(Q[T+0],k),N(Q[T+1],M),N(Q[T+2],B),Y(k,M,B,D)}function Y(D,k,M,B){let T=B+1,_=[];for(let C=0;C<=T;C++){_[C]=[];let y=D.clone().lerp(M,C/T),L=k.clone().lerp(M,C/T),I=T-C;for(let S=0;S<=I;S++)if(S===0&&C===T)_[C][S]=y;else _[C][S]=y.clone().lerp(L,S/I)}for(let C=0;C<T;C++)for(let y=0;y<2*(T-C)-1;y++){let L=Math.floor(y/2);if(y%2===0)E(_[C][L+1]),E(_[C+1][L]),E(_[C][L]);else E(_[C][L+1]),E(_[C+1][L+1]),E(_[C+1][L])}}function X(D){let k=new P;for(let M=0;M<W.length;M+=3)k.x=W[M+0],k.y=W[M+1],k.z=W[M+2],k.normalize().multiplyScalar(D),W[M+0]=k.x,W[M+1]=k.y,W[M+2]=k.z}function U(){let D=new P;for(let k=0;k<W.length;k+=3){D.x=W[k+0],D.y=W[k+1],D.z=W[k+2];let M=F(D)/2/Math.PI+0.5,B=O(D)/Math.PI+0.5;K.push(M,1-B)}q(),G()}function G(){for(let D=0;D<K.length;D+=6){let k=K[D+0],M=K[D+2],B=K[D+4],T=Math.max(k,M,B),_=Math.min(k,M,B);if(T>0.9&&_<0.1){if(k<0.2)K[D+0]+=1;if(M<0.2)K[D+2]+=1;if(B<0.2)K[D+4]+=1}}}function E(D){W.push(D.x,D.y,D.z)}function N(D,k){let M=D*3;k.x=J[M+0],k.y=J[M+1],k.z=J[M+2]}function q(){let D=new P,k=new P,M=new P,B=new P,T=new o,_=new o,C=new o;for(let y=0,L=0;y<W.length;y+=9,L+=6){D.set(W[y+0],W[y+1],W[y+2]),k.set(W[y+3],W[y+4],W[y+5]),M.set(W[y+6],W[y+7],W[y+8]),T.set(K[L+0],K[L+1]),_.set(K[L+2],K[L+3]),C.set(K[L+4],K[L+5]),B.copy(D).add(k).add(M).divideScalar(3);let I=F(B);R(T,L+0,D,I),R(_,L+2,k,I),R(C,L+4,M,I)}}function R(D,k,M,B){if(B<0&&D.x===1)K[k]=D.x-1;if(M.x===0&&M.z===0)K[k]=B/2/Math.PI+0.5}function F(D){return Math.atan2(D.z,-D.x)}function O(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new u8(J.vertices,J.indices,J.radius,J.details)}}class CQ extends u8{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,$=1/Z,W=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-$,-Z,0,-$,Z,0,$,-Z,0,$,Z,-$,-Z,0,-$,Z,0,$,-Z,0,$,Z,0,-Z,0,-$,Z,0,-$,-Z,0,$,Z,0,$],K=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(W,K,J,Q);this.type="DodecahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new CQ(J.radius,J.detail)}}var f6=new P,b6=new P,SZ=new P,h6=new m0;class s$ extends cJ{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let $=Math.pow(10,4),W=Math.cos(U9*Q),K=J.getIndex(),H=J.getAttribute("position"),Y=K?K.count:H.count,X=[0,0,0],U=["a","b","c"],G=new Array(3),E={},N=[];for(let q=0;q<Y;q+=3){if(K)X[0]=K.getX(q),X[1]=K.getX(q+1),X[2]=K.getX(q+2);else X[0]=q,X[1]=q+1,X[2]=q+2;let{a:R,b:F,c:O}=h6;if(R.fromBufferAttribute(H,X[0]),F.fromBufferAttribute(H,X[1]),O.fromBufferAttribute(H,X[2]),h6.getNormal(SZ),G[0]=`${Math.round(R.x*$)},${Math.round(R.y*$)},${Math.round(R.z*$)}`,G[1]=`${Math.round(F.x*$)},${Math.round(F.y*$)},${Math.round(F.z*$)}`,G[2]=`${Math.round(O.x*$)},${Math.round(O.y*$)},${Math.round(O.z*$)}`,G[0]===G[1]||G[1]===G[2]||G[2]===G[0])continue;for(let D=0;D<3;D++){let k=(D+1)%3,M=G[D],B=G[k],T=h6[U[D]],_=h6[U[k]],C=`${M}_${B}`,y=`${B}_${M}`;if(y in E&&E[y]){if(SZ.dot(E[y].normal)<=W)N.push(T.x,T.y,T.z),N.push(_.x,_.y,_.z);E[y]=null}else if(!(C in E))E[C]={index0:X[D],index1:X[k],normal:SZ.clone()}}}for(let q in E)if(E[q]){let{index0:R,index1:F}=E[q];f6.fromBufferAttribute(H,R),b6.fromBufferAttribute(H,F),N.push(f6.x,f6.y,f6.z),N.push(b6.x,b6.y,b6.z)}this.setAttribute("position",new kJ(N,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class J8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(J,Q){let Z=this.getUtoTmapping(J);return this.getPoint(Z,Q)}getPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));return Q}getSpacedPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPointAt(Z/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],Z,$=this.getPoint(0),W=0;Q.push(0);for(let K=1;K<=J;K++)Z=this.getPoint(K/J),W+=Z.distanceTo($),Q.push(W),$=Z;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let Z=this.getLengths(),$=0,W=Z.length,K;if(Q)K=Q;else K=J*Z[W-1];let H=0,Y=W-1,X;while(H<=Y)if($=Math.floor(H+(Y-H)/2),X=Z[$]-K,X<0)H=$+1;else if(X>0)Y=$-1;else{Y=$;break}if($=Y,Z[$]===K)return $/(W-1);let U=Z[$],E=Z[$+1]-U,N=(K-U)/E;return($+N)/(W-1)}getTangent(J,Q){let $=J-0.0001,W=J+0.0001;if($<0)$=0;if(W>1)W=1;let K=this.getPoint($),H=this.getPoint(W),Y=Q||(K.isVector2?new o:new P);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let Z=this.getUtoTmapping(J);return this.getTangent(Z,Q)}computeFrenetFrames(J,Q=!1){let Z=new P,$=[],W=[],K=[],H=new P,Y=new vJ;for(let N=0;N<=J;N++){let q=N/J;$[N]=this.getTangentAt(q,new P)}W[0]=new P,K[0]=new P;let X=Number.MAX_VALUE,U=Math.abs($[0].x),G=Math.abs($[0].y),E=Math.abs($[0].z);if(U<=X)X=U,Z.set(1,0,0);if(G<=X)X=G,Z.set(0,1,0);if(E<=X)Z.set(0,0,1);H.crossVectors($[0],Z).normalize(),W[0].crossVectors($[0],H),K[0].crossVectors($[0],W[0]);for(let N=1;N<=J;N++){if(W[N]=W[N-1].clone(),K[N]=K[N-1].clone(),H.crossVectors($[N-1],$[N]),H.length()>Number.EPSILON){H.normalize();let q=Math.acos(pJ($[N-1].dot($[N]),-1,1));W[N].applyMatrix4(Y.makeRotationAxis(H,q))}K[N].crossVectors($[N],W[N])}if(Q===!0){let N=Math.acos(pJ(W[0].dot(W[J]),-1,1));if(N/=J,$[0].dot(H.crossVectors(W[0],W[J]))>0)N=-N;for(let q=1;q<=J;q++)W[q].applyMatrix4(Y.makeRotationAxis($[q],N*q)),K[q].crossVectors($[q],W[q])}return{tangents:$,normals:W,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class t7 extends J8{constructor(J=0,Q=0,Z=1,$=1,W=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=Z,this.yRadius=$,this.aStartAngle=W,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new o){let Z=Q,$=Math.PI*2,W=this.aEndAngle-this.aStartAngle,K=Math.abs(W)<Number.EPSILON;while(W<0)W+=$;while(W>$)W-=$;if(W<Number.EPSILON)if(K)W=0;else W=$;if(this.aClockwise===!0&&!K)if(W===$)W=-$;else W=W-$;let H=this.aStartAngle+J*W,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),E=Y-this.aX,N=X-this.aY;Y=E*U-N*G+this.aX,X=E*G+N*U+this.aY}return Z.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class i$ extends t7{constructor(J,Q,Z,$,W,K){super(J,Q,Z,Z,$,W,K);this.isArcCurve=!0,this.type="ArcCurve"}}function o$(){let J=0,Q=0,Z=0,$=0;function W(K,H,Y,X){J=K,Q=Y,Z=-3*K+3*H-2*Y-X,$=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){W(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,G,E){let N=(H-K)/U-(Y-K)/(U+G)+(Y-H)/G,q=(Y-H)/G-(X-H)/(G+E)+(X-Y)/E;N*=G,q*=G,W(H,Y,N,q)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+Z*H+$*Y}}}var x6=new P,jZ=new o$,yZ=new o$,vZ=new o$;class a$ extends J8{constructor(J=[],Q=!1,Z="centripetal",$=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=Z,this.tension=$}getPoint(J,Q=new P){let Z=Q,$=this.points,W=$.length,K=(W-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/W)+1)*W;else if(Y===0&&H===W-1)H=W-2,Y=1;let X,U;if(this.closed||H>0)X=$[(H-1)%W];else x6.subVectors($[0],$[1]).add($[0]),X=x6;let G=$[H%W],E=$[(H+1)%W];if(this.closed||H+2<W)U=$[(H+2)%W];else x6.subVectors($[W-1],$[W-2]).add($[W-1]),U=x6;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,q=Math.pow(X.distanceToSquared(G),N),R=Math.pow(G.distanceToSquared(E),N),F=Math.pow(E.distanceToSquared(U),N);if(R<0.0001)R=1;if(q<0.0001)q=R;if(F<0.0001)F=R;jZ.initNonuniformCatmullRom(X.x,G.x,E.x,U.x,q,R,F),yZ.initNonuniformCatmullRom(X.y,G.y,E.y,U.y,q,R,F),vZ.initNonuniformCatmullRom(X.z,G.z,E.z,U.z,q,R,F)}else if(this.curveType==="catmullrom")jZ.initCatmullRom(X.x,G.x,E.x,U.x,this.tension),yZ.initCatmullRom(X.y,G.y,E.y,U.y,this.tension),vZ.initCatmullRom(X.z,G.z,E.z,U.z,this.tension);return Z.set(jZ.calc(Y),yZ.calc(Y),vZ.calc(Y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push($.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let $=this.points[Q];J.points.push($.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push(new P().fromArray($))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function SK(J,Q,Z,$,W){let K=($-Q)*0.5,H=(W-Z)*0.5,Y=J*J,X=J*Y;return(2*Z-2*$+K+H)*X+(-3*Z+3*$-2*K-H)*Y+K*J+Z}function DE(J,Q){let Z=1-J;return Z*Z*Q}function OE(J,Q){return 2*(1-J)*J*Q}function RE(J,Q){return J*J*Q}function A7(J,Q,Z,$){return DE(J,Q)+OE(J,Z)+RE(J,$)}function FE(J,Q){let Z=1-J;return Z*Z*Z*Q}function ME(J,Q){let Z=1-J;return 3*Z*Z*J*Q}function kE(J,Q){return 3*(1-J)*J*J*Q}function VE(J,Q){return J*J*J*Q}function T7(J,Q,Z,$,W){return FE(J,Q)+ME(J,Z)+kE(J,$)+VE(J,W)}class PQ extends J8{constructor(J=new o,Q=new o,Z=new o,$=new o){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=Z,this.v3=$}getPoint(J,Q=new o){let Z=Q,$=this.v0,W=this.v1,K=this.v2,H=this.v3;return Z.set(T7(J,$.x,W.x,K.x,H.x),T7(J,$.y,W.y,K.y,H.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class r$ extends J8{constructor(J=new P,Q=new P,Z=new P,$=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z,this.v3=$}getPoint(J,Q=new P){let Z=Q,$=this.v0,W=this.v1,K=this.v2,H=this.v3;return Z.set(T7(J,$.x,W.x,K.x,H.x),T7(J,$.y,W.y,K.y,H.y),T7(J,$.z,W.z,K.z,H.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class AQ extends J8{constructor(J=new o,Q=new o){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new o){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new o){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class t$ extends J8{constructor(J=new P,Q=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new P){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new P){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class TQ extends J8{constructor(J=new o,Q=new o,Z=new o){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new o){let Z=Q,$=this.v0,W=this.v1,K=this.v2;return Z.set(A7(J,$.x,W.x,K.x),A7(J,$.y,W.y,K.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class SQ extends J8{constructor(J=new P,Q=new P,Z=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new P){let Z=Q,$=this.v0,W=this.v1,K=this.v2;return Z.set(A7(J,$.x,W.x,K.x),A7(J,$.y,W.y,K.y),A7(J,$.z,W.z,K.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class jQ extends J8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new o){let Z=Q,$=this.points,W=($.length-1)*J,K=Math.floor(W),H=W-K,Y=$[K===0?K:K-1],X=$[K],U=$[K>$.length-2?$.length-1:K+1],G=$[K>$.length-3?$.length-1:K+2];return Z.set(SK(H,Y.x,X.x,U.x,G.x),SK(H,Y.y,X.y,U.y,G.y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push($.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let $=this.points[Q];J.points.push($.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push(new o().fromArray($))}return this}}var a6=Object.freeze({__proto__:null,ArcCurve:i$,CatmullRomCurve3:a$,CubicBezierCurve:PQ,CubicBezierCurve3:r$,EllipseCurve:t7,LineCurve:AQ,LineCurve3:t$,QuadraticBezierCurve:TQ,QuadraticBezierCurve3:SQ,SplineCurve:jQ});class e$ extends J8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let Z=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new a6[Z](Q,J))}return this}getPoint(J,Q){let Z=J*this.getLength(),$=this.getCurveLengths(),W=0;while(W<$.length){if($[W]>=Z){let K=$[W]-Z,H=this.curves[W],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}W++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let Z=0,$=this.curves.length;Z<$;Z++)Q+=this.curves[Z].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],Z;for(let $=0,W=this.curves;$<W.length;$++){let K=W[$],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if(Z&&Z.equals(U))continue;Q.push(U),Z=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let $=J.curves[Q];this.curves.push($.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,Z=this.curves.length;Q<Z;Q++){let $=this.curves[Q];J.curves.push($.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let $=J.curves[Q];this.curves.push(new a6[$.type]().fromJSON($))}return this}}class S7 extends e${constructor(J){super();if(this.type="Path",this.currentPoint=new o,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,Z=J.length;Q<Z;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let Z=new AQ(this.currentPoint.clone(),new o(J,Q));return this.curves.push(Z),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,Z,$){let W=new TQ(this.currentPoint.clone(),new o(J,Q),new o(Z,$));return this.curves.push(W),this.currentPoint.set(Z,$),this}bezierCurveTo(J,Q,Z,$,W,K){let H=new PQ(this.currentPoint.clone(),new o(J,Q),new o(Z,$),new o(W,K));return this.curves.push(H),this.currentPoint.set(W,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),Z=new jQ(Q);return this.curves.push(Z),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,Z,$,W,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,Z,$,W,K),this}absarc(J,Q,Z,$,W,K){return this.absellipse(J,Q,Z,Z,$,W,K),this}ellipse(J,Q,Z,$,W,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,Z,$,W,K,H,Y),this}absellipse(J,Q,Z,$,W,K,H,Y){let X=new t7(J,Q,Z,$,W,K,H,Y);if(this.curves.length>0){let G=X.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class p8 extends S7{constructor(J){super(J);this.uuid=n0(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let Z=0,$=this.holes.length;Z<$;Z++)Q[Z]=this.holes[Z].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let $=J.holes[Q];this.holes.push($.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++){let $=this.holes[Q];J.holes.push($.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let $=J.holes[Q];this.holes.push(new S7().fromJSON($))}return this}}function LE(J,Q,Z=2){let $=Q&&Q.length,W=$?Q[0]*Z:J.length,K=CY(J,0,W,Z,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if($)K=wE(J,Q,K,Z);if(J.length>80*Z){Y=1/0,X=1/0;let G=-1/0,E=-1/0;for(let N=Z;N<W;N+=Z){let q=J[N],R=J[N+1];if(q<Y)Y=q;if(R<X)X=R;if(q>G)G=q;if(R>E)E=R}U=Math.max(G-Y,E-X),U=U!==0?32767/U:0}return j7(K,H,Z,Y,X,U,0),H}function CY(J,Q,Z,$,W){let K;if(W===hE(J,Q,Z,$)>0)for(let H=Q;H<Z;H+=$)K=jK(H/$|0,J[H],J[H+1],K);else for(let H=Z-$;H>=Q;H-=$)K=jK(H/$|0,J[H],J[H+1],K);if(K&&i9(K,K.next))v7(K),K=K.next;return K}function D9(J,Q){if(!J)return J;if(!Q)Q=J;let Z=J,$;do if($=!1,!Z.steiner&&(i9(Z,Z.next)||D0(Z.prev,Z,Z.next)===0)){if(v7(Z),Z=Q=Z.prev,Z===Z.next)break;$=!0}else Z=Z.next;while($||Z!==Q);return Q}function j7(J,Q,Z,$,W,K,H){if(!J)return;if(!H&&K)SE(J,$,W,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?BE(J,$,W,K):zE(J)){Q.push(X.i,J.i,U.i),v7(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)j7(D9(J),Q,Z,$,W,K,1);else if(H===1)J=IE(D9(J),Q),j7(J,Q,Z,$,W,K,2);else if(H===2)_E(J,Q,Z,$,W,K);break}}}function zE(J){let Q=J.prev,Z=J,$=J.next;if(D0(Q,Z,$)>=0)return!1;let W=Q.x,K=Z.x,H=$.x,Y=Q.y,X=Z.y,U=$.y,G=Math.min(W,K,H),E=Math.min(Y,X,U),N=Math.max(W,K,H),q=Math.max(Y,X,U),R=$.next;while(R!==Q){if(R.x>=G&&R.x<=N&&R.y>=E&&R.y<=q&&C7(W,Y,K,X,H,U,R.x,R.y)&&D0(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function BE(J,Q,Z,$){let W=J.prev,K=J,H=J.next;if(D0(W,K,H)>=0)return!1;let Y=W.x,X=K.x,U=H.x,G=W.y,E=K.y,N=H.y,q=Math.min(Y,X,U),R=Math.min(G,E,N),F=Math.max(Y,X,U),O=Math.max(G,E,N),D=dZ(q,R,Q,Z,$),k=dZ(F,O,Q,Z,$),M=J.prevZ,B=J.nextZ;while(M&&M.z>=D&&B&&B.z<=k){if(M.x>=q&&M.x<=F&&M.y>=R&&M.y<=O&&M!==W&&M!==H&&C7(Y,G,X,E,U,N,M.x,M.y)&&D0(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,B.x>=q&&B.x<=F&&B.y>=R&&B.y<=O&&B!==W&&B!==H&&C7(Y,G,X,E,U,N,B.x,B.y)&&D0(B.prev,B,B.next)>=0)return!1;B=B.nextZ}while(M&&M.z>=D){if(M.x>=q&&M.x<=F&&M.y>=R&&M.y<=O&&M!==W&&M!==H&&C7(Y,G,X,E,U,N,M.x,M.y)&&D0(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(B&&B.z<=k){if(B.x>=q&&B.x<=F&&B.y>=R&&B.y<=O&&B!==W&&B!==H&&C7(Y,G,X,E,U,N,B.x,B.y)&&D0(B.prev,B,B.next)>=0)return!1;B=B.nextZ}return!0}function IE(J,Q){let Z=J;do{let $=Z.prev,W=Z.next.next;if(!i9($,W)&&AY($,Z,Z.next,W)&&y7($,W)&&y7(W,$))Q.push($.i,Z.i,W.i),v7(Z),v7(Z.next),Z=J=W;Z=Z.next}while(Z!==J);return D9(Z)}function _E(J,Q,Z,$,W,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&vE(H,Y)){let X=TY(H,Y);H=D9(H,H.next),X=D9(X,X.next),j7(H,Q,Z,$,W,K,0),j7(X,Q,Z,$,W,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function wE(J,Q,Z,$){let W=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*$,X=K<H-1?Q[K+1]*$:J.length,U=CY(J,Y,X,$,!1);if(U===U.next)U.steiner=!0;W.push(yE(U))}W.sort(CE);for(let K=0;K<W.length;K++)Z=PE(W[K],Z);return Z}function CE(J,Q){let Z=J.x-Q.x;if(Z===0){if(Z=J.y-Q.y,Z===0){let $=(J.next.y-J.y)/(J.next.x-J.x),W=(Q.next.y-Q.y)/(Q.next.x-Q.x);Z=$-W}}return Z}function PE(J,Q){let Z=AE(J,Q);if(!Z)return Q;let $=TY(Z,J);return D9($,$.next),D9(Z,Z.next)}function AE(J,Q){let Z=Q,$=J.x,W=J.y,K=-1/0,H;if(i9(J,Z))return Z;do{if(i9(J,Z.next))return Z.next;else if(W<=Z.y&&W>=Z.next.y&&Z.next.y!==Z.y){let E=Z.x+(W-Z.y)*(Z.next.x-Z.x)/(Z.next.y-Z.y);if(E<=$&&E>K){if(K=E,H=Z.x<Z.next.x?Z:Z.next,E===$)return H}}Z=Z.next}while(Z!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,G=1/0;Z=H;do{if($>=Z.x&&Z.x>=X&&$!==Z.x&&PY(W<U?$:K,W,X,U,W<U?K:$,W,Z.x,Z.y)){let E=Math.abs(W-Z.y)/($-Z.x);if(y7(Z,J)&&(E<G||E===G&&(Z.x>H.x||Z.x===H.x&&TE(H,Z))))H=Z,G=E}Z=Z.next}while(Z!==Y);return H}function TE(J,Q){return D0(J.prev,J,Q.prev)<0&&D0(Q.next,J,J.next)<0}function SE(J,Q,Z,$){let W=J;do{if(W.z===0)W.z=dZ(W.x,W.y,Q,Z,$);W.prevZ=W.prev,W.nextZ=W.next,W=W.next}while(W!==J);W.prevZ.nextZ=null,W.prevZ=null,jE(W)}function jE(J){let Q,Z=1;do{let $=J,W;J=null;let K=null;Q=0;while($){Q++;let H=$,Y=0;for(let U=0;U<Z;U++)if(Y++,H=H.nextZ,!H)break;let X=Z;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||$.z<=H.z))W=$,$=$.nextZ,Y--;else W=H,H=H.nextZ,X--;if(K)K.nextZ=W;else J=W;W.prevZ=K,K=W}$=H}K.nextZ=null,Z*=2}while(Q>1);return J}function dZ(J,Q,Z,$,W){return J=(J-Z)*W|0,Q=(Q-$)*W|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function yE(J){let Q=J,Z=J;do{if(Q.x<Z.x||Q.x===Z.x&&Q.y<Z.y)Z=Q;Q=Q.next}while(Q!==J);return Z}function PY(J,Q,Z,$,W,K,H,Y){return(W-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*($-Y)>=(Z-H)*(Q-Y)&&(Z-H)*(K-Y)>=(W-H)*($-Y)}function C7(J,Q,Z,$,W,K,H,Y){return!(J===H&&Q===Y)&&PY(J,Q,Z,$,W,K,H,Y)}function vE(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!fE(J,Q)&&(y7(J,Q)&&y7(Q,J)&&bE(J,Q)&&(D0(J.prev,J,Q.prev)||D0(J,Q.prev,Q))||i9(J,Q)&&D0(J.prev,J,J.next)>0&&D0(Q.prev,Q,Q.next)>0)}function D0(J,Q,Z){return(Q.y-J.y)*(Z.x-Q.x)-(Q.x-J.x)*(Z.y-Q.y)}function i9(J,Q){return J.x===Q.x&&J.y===Q.y}function AY(J,Q,Z,$){let W=p6(D0(J,Q,Z)),K=p6(D0(J,Q,$)),H=p6(D0(Z,$,J)),Y=p6(D0(Z,$,Q));if(W!==K&&H!==Y)return!0;if(W===0&&g6(J,Z,Q))return!0;if(K===0&&g6(J,$,Q))return!0;if(H===0&&g6(Z,J,$))return!0;if(Y===0&&g6(Z,Q,$))return!0;return!1}function g6(J,Q,Z){return Q.x<=Math.max(J.x,Z.x)&&Q.x>=Math.min(J.x,Z.x)&&Q.y<=Math.max(J.y,Z.y)&&Q.y>=Math.min(J.y,Z.y)}function p6(J){return J>0?1:J<0?-1:0}function fE(J,Q){let Z=J;do{if(Z.i!==J.i&&Z.next.i!==J.i&&Z.i!==Q.i&&Z.next.i!==Q.i&&AY(Z,Z.next,J,Q))return!0;Z=Z.next}while(Z!==J);return!1}function y7(J,Q){return D0(J.prev,J,J.next)<0?D0(J,Q,J.next)>=0&&D0(J,J.prev,Q)>=0:D0(J,Q,J.prev)<0||D0(J,J.next,Q)<0}function bE(J,Q){let Z=J,$=!1,W=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if(Z.y>K!==Z.next.y>K&&Z.next.y!==Z.y&&W<(Z.next.x-Z.x)*(K-Z.y)/(Z.next.y-Z.y)+Z.x)$=!$;Z=Z.next}while(Z!==J);return $}function TY(J,Q){let Z=lZ(J.i,J.x,J.y),$=lZ(Q.i,Q.x,Q.y),W=J.next,K=Q.prev;return J.next=Q,Q.prev=J,Z.next=W,W.prev=Z,$.next=Z,Z.prev=$,K.next=$,$.prev=K,$}function jK(J,Q,Z,$){let W=lZ(J,Q,Z);if(!$)W.prev=W,W.next=W;else W.next=$.next,W.prev=$,$.next.prev=W,$.next=W;return W}function v7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function lZ(J,Q,Z){return{i:J,x:Q,y:Z,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hE(J,Q,Z,$){let W=0;for(let K=Q,H=Z-$;K<Z;K+=$)W+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return W}class SY{static triangulate(J,Q,Z=2){return LE(J,Q,Z)}}class W8{static area(J){let Q=J.length,Z=0;for(let $=Q-1,W=0;W<Q;$=W++)Z+=J[$].x*J[W].y-J[W].x*J[$].y;return Z*0.5}static isClockWise(J){return W8.area(J)<0}static triangulateShape(J,Q){let Z=[],$=[],W=[];yK(J),vK(Z,J);let K=J.length;Q.forEach(yK);for(let Y=0;Y<Q.length;Y++)$.push(K),K+=Q[Y].length,vK(Z,Q[Y]);let H=SY.triangulate(Z,$);for(let Y=0;Y<H.length;Y+=3)W.push(H.slice(Y,Y+3));return W}}function yK(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function vK(J,Q){for(let Z=0;Z<Q.length;Z++)J.push(Q[Z].x),J.push(Q[Z].y)}class yQ extends cJ{constructor(J=new p8([new o(0.5,0.5),new o(-0.5,0.5),new o(-0.5,-0.5),new o(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let Z=this,$=[],W=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H];K(X)}this.setAttribute("position",new kJ($,3)),this.setAttribute("uv",new kJ(W,2)),this.computeVertexNormals();function K(H){let Y=[],X=Q.curveSegments!==void 0?Q.curveSegments:12,U=Q.steps!==void 0?Q.steps:1,G=Q.depth!==void 0?Q.depth:1,E=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,N=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,q=Q.bevelSize!==void 0?Q.bevelSize:N-0.1,R=Q.bevelOffset!==void 0?Q.bevelOffset:0,F=Q.bevelSegments!==void 0?Q.bevelSegments:3,O=Q.extrudePath,D=Q.UVGenerator!==void 0?Q.UVGenerator:xE,k,M=!1,B,T,_,C;if(O)k=O.getSpacedPoints(U),M=!0,E=!1,B=O.computeFrenetFrames(U,!1),T=new P,_=new P,C=new P;if(!E)F=0,N=0,q=0,R=0;let y=H.extractPoints(X),L=y.shape,I=y.holes;if(!W8.isClockWise(L)){L=L.reverse();for(let w=0,YJ=I.length;w<YJ;w++){let e=I[w];if(W8.isClockWise(e))I[w]=e.reverse()}}function h(w){let XJ=w[0];for(let s=1;s<=w.length;s++){let wJ=s%w.length,r=w[wJ],VJ=r.x-XJ.x,iJ=r.y-XJ.y,aJ=VJ*VJ+iJ*iJ,A=Math.max(Math.abs(r.x),Math.abs(r.y),Math.abs(XJ.x),Math.abs(XJ.y)),V=0.000000000000000000010000000000000001*A*A;if(aJ<=V){w.splice(wJ,1),s--;continue}XJ=r}}h(L),I.forEach(h);let m=I.length,p=L;for(let w=0;w<m;w++){let YJ=I[w];L=L.concat(YJ)}function a(w,YJ,e){if(!YJ)console.error("THREE.ExtrudeGeometry: vec does not exist");return w.clone().addScaledVector(YJ,e)}let l=L.length;function JJ(w,YJ,e){let XJ,s,wJ,r=w.x-YJ.x,VJ=w.y-YJ.y,iJ=e.x-w.x,aJ=e.y-w.y,A=r*r+VJ*VJ,V=r*aJ-VJ*iJ;if(Math.abs(V)>Number.EPSILON){let b=Math.sqrt(A),c=Math.sqrt(iJ*iJ+aJ*aJ),t=YJ.x-VJ/b,u=YJ.y+r/b,CJ=e.x-aJ/c,HJ=e.y+iJ/c,zJ=((CJ-t)*aJ-(HJ-u)*iJ)/(r*aJ-VJ*iJ);XJ=t+r*zJ-w.x,s=u+VJ*zJ-w.y;let IJ=XJ*XJ+s*s;if(IJ<=2)return new o(XJ,s);else wJ=Math.sqrt(IJ/2)}else{let b=!1;if(r>Number.EPSILON){if(iJ>Number.EPSILON)b=!0}else if(r<-Number.EPSILON){if(iJ<-Number.EPSILON)b=!0}else if(Math.sign(VJ)===Math.sign(aJ))b=!0;if(b)XJ=-VJ,s=r,wJ=Math.sqrt(A);else XJ=r,s=VJ,wJ=Math.sqrt(A/2)}return new o(XJ/wJ,s/wJ)}let d=[];for(let w=0,YJ=p.length,e=YJ-1,XJ=w+1;w<YJ;w++,e++,XJ++){if(e===YJ)e=0;if(XJ===YJ)XJ=0;d[w]=JJ(p[w],p[e],p[XJ])}let qJ=[],GJ,yJ=d.concat();for(let w=0,YJ=m;w<YJ;w++){let e=I[w];GJ=[];for(let XJ=0,s=e.length,wJ=s-1,r=XJ+1;XJ<s;XJ++,wJ++,r++){if(wJ===s)wJ=0;if(r===s)r=0;GJ[XJ]=JJ(e[XJ],e[wJ],e[r])}qJ.push(GJ),yJ=yJ.concat(GJ)}let gJ;if(F===0)gJ=W8.triangulateShape(p,I);else{let w=[],YJ=[];for(let e=0;e<F;e++){let XJ=e/F,s=N*Math.cos(XJ*Math.PI/2),wJ=q*Math.sin(XJ*Math.PI/2)+R;for(let r=0,VJ=p.length;r<VJ;r++){let iJ=a(p[r],d[r],wJ);if(SJ(iJ.x,iJ.y,-s),XJ===0)w.push(iJ)}for(let r=0,VJ=m;r<VJ;r++){let iJ=I[r];GJ=qJ[r];let aJ=[];for(let A=0,V=iJ.length;A<V;A++){let b=a(iJ[A],GJ[A],wJ);if(SJ(b.x,b.y,-s),XJ===0)aJ.push(b)}if(XJ===0)YJ.push(aJ)}}gJ=W8.triangulateShape(w,YJ)}let n=gJ.length,KJ=q+R;for(let w=0;w<l;w++){let YJ=E?a(L[w],yJ[w],KJ):L[w];if(!M)SJ(YJ.x,YJ.y,0);else _.copy(B.normals[0]).multiplyScalar(YJ.x),T.copy(B.binormals[0]).multiplyScalar(YJ.y),C.copy(k[0]).add(_).add(T),SJ(C.x,C.y,C.z)}for(let w=1;w<=U;w++)for(let YJ=0;YJ<l;YJ++){let e=E?a(L[YJ],yJ[YJ],KJ):L[YJ];if(!M)SJ(e.x,e.y,G/U*w);else _.copy(B.normals[w]).multiplyScalar(e.x),T.copy(B.binormals[w]).multiplyScalar(e.y),C.copy(k[w]).add(_).add(T),SJ(C.x,C.y,C.z)}for(let w=F-1;w>=0;w--){let YJ=w/F,e=N*Math.cos(YJ*Math.PI/2),XJ=q*Math.sin(YJ*Math.PI/2)+R;for(let s=0,wJ=p.length;s<wJ;s++){let r=a(p[s],d[s],XJ);SJ(r.x,r.y,G+e)}for(let s=0,wJ=I.length;s<wJ;s++){let r=I[s];GJ=qJ[s];for(let VJ=0,iJ=r.length;VJ<iJ;VJ++){let aJ=a(r[VJ],GJ[VJ],XJ);if(!M)SJ(aJ.x,aJ.y,G+e);else SJ(aJ.x,aJ.y+k[U-1].y,k[U-1].x+e)}}}AJ(),fJ();function AJ(){let w=$.length/3;if(E){let YJ=0,e=l*YJ;for(let XJ=0;XJ<n;XJ++){let s=gJ[XJ];lJ(s[2]+e,s[1]+e,s[0]+e)}YJ=U+F*2,e=l*YJ;for(let XJ=0;XJ<n;XJ++){let s=gJ[XJ];lJ(s[0]+e,s[1]+e,s[2]+e)}}else{for(let YJ=0;YJ<n;YJ++){let e=gJ[YJ];lJ(e[2],e[1],e[0])}for(let YJ=0;YJ<n;YJ++){let e=gJ[YJ];lJ(e[0]+l*U,e[1]+l*U,e[2]+l*U)}}Z.addGroup(w,$.length/3-w,0)}function fJ(){let w=$.length/3,YJ=0;NJ(p,YJ),YJ+=p.length;for(let e=0,XJ=I.length;e<XJ;e++){let s=I[e];NJ(s,YJ),YJ+=s.length}Z.addGroup(w,$.length/3-w,1)}function NJ(w,YJ){let e=w.length;while(--e>=0){let XJ=e,s=e-1;if(s<0)s=w.length-1;for(let wJ=0,r=U+F*2;wJ<r;wJ++){let VJ=l*wJ,iJ=l*(wJ+1),aJ=YJ+XJ+VJ,A=YJ+s+VJ,V=YJ+s+iJ,b=YJ+XJ+iJ;rJ(aJ,A,V,b)}}}function SJ(w,YJ,e){Y.push(w),Y.push(YJ),Y.push(e)}function lJ(w,YJ,e){eJ(w),eJ(YJ),eJ(e);let XJ=$.length/3,s=D.generateTopUV(Z,$,XJ-3,XJ-2,XJ-1);sJ(s[0]),sJ(s[1]),sJ(s[2])}function rJ(w,YJ,e,XJ){eJ(w),eJ(YJ),eJ(XJ),eJ(YJ),eJ(e),eJ(XJ);let s=$.length/3,wJ=D.generateSideWallUV(Z,$,s-6,s-3,s-2,s-1);sJ(wJ[0]),sJ(wJ[1]),sJ(wJ[3]),sJ(wJ[1]),sJ(wJ[2]),sJ(wJ[3])}function eJ(w){$.push(Y[w*3+0]),$.push(Y[w*3+1]),$.push(Y[w*3+2])}function sJ(w){W.push(w.x),W.push(w.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,Z=this.parameters.options;return gE(Q,Z,J)}static fromJSON(J,Q){let Z=[];for(let W=0,K=J.shapes.length;W<K;W++){let H=Q[J.shapes[W]];Z.push(H)}let $=J.options.extrudePath;if($!==void 0)J.options.extrudePath=new a6[$.type]().fromJSON($);return new yQ(Z,J.options)}}var xE={generateTopUV:function(J,Q,Z,$,W){let K=Q[Z*3],H=Q[Z*3+1],Y=Q[$*3],X=Q[$*3+1],U=Q[W*3],G=Q[W*3+1];return[new o(K,H),new o(Y,X),new o(U,G)]},generateSideWallUV:function(J,Q,Z,$,W,K){let H=Q[Z*3],Y=Q[Z*3+1],X=Q[Z*3+2],U=Q[$*3],G=Q[$*3+1],E=Q[$*3+2],N=Q[W*3],q=Q[W*3+1],R=Q[W*3+2],F=Q[K*3],O=Q[K*3+1],D=Q[K*3+2];if(Math.abs(Y-G)<Math.abs(H-U))return[new o(H,1-X),new o(U,1-E),new o(N,1-R),new o(F,1-D)];else return[new o(Y,1-X),new o(G,1-E),new o(q,1-R),new o(O,1-D)]}};function gE(J,Q,Z){if(Z.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let K=J[$];Z.shapes.push(K.uuid)}else Z.shapes.push(J.uuid);if(Z.options=Object.assign({},Q),Q.extrudePath!==void 0)Z.options.extrudePath=Q.extrudePath.toJSON();return Z}class vQ extends u8{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,$=[-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,0,0,-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,Z,0,-1,Z,0,1,-Z,0,-1,-Z,0,1],W=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super($,W,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new vQ(J.radius,J.detail)}}class fQ extends cJ{constructor(J=[new o(0,-0.5),new o(0.5,0),new o(0,0.5)],Q=12,Z=0,$=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:Z,phiLength:$},Q=Math.floor(Q),$=pJ($,0,Math.PI*2);let W=[],K=[],H=[],Y=[],X=[],U=1/Q,G=new P,E=new o,N=new P,q=new P,R=new P,F=0,O=0;for(let D=0;D<=J.length-1;D++)switch(D){case 0:F=J[D+1].x-J[D].x,O=J[D+1].y-J[D].y,N.x=O*1,N.y=-F,N.z=O*0,R.copy(N),N.normalize(),Y.push(N.x,N.y,N.z);break;case J.length-1:Y.push(R.x,R.y,R.z);break;default:F=J[D+1].x-J[D].x,O=J[D+1].y-J[D].y,N.x=O*1,N.y=-F,N.z=O*0,q.copy(N),N.x+=R.x,N.y+=R.y,N.z+=R.z,N.normalize(),Y.push(N.x,N.y,N.z),R.copy(q)}for(let D=0;D<=Q;D++){let k=Z+D*U*$,M=Math.sin(k),B=Math.cos(k);for(let T=0;T<=J.length-1;T++){G.x=J[T].x*M,G.y=J[T].y,G.z=J[T].x*B,K.push(G.x,G.y,G.z),E.x=D/Q,E.y=T/(J.length-1),H.push(E.x,E.y);let _=Y[3*T+0]*M,C=Y[3*T+1],y=Y[3*T+0]*B;X.push(_,C,y)}}for(let D=0;D<Q;D++)for(let k=0;k<J.length-1;k++){let M=k+D*J.length,B=M,T=M+J.length,_=M+J.length+1,C=M+1;W.push(B,T,C),W.push(_,C,T)}this.setIndex(W),this.setAttribute("position",new kJ(K,3)),this.setAttribute("uv",new kJ(H,2)),this.setAttribute("normal",new kJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new fQ(J.points,J.segments,J.phiStart,J.phiLength)}}class e7 extends u8{constructor(J=1,Q=0){let Z=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],$=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(Z,$,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new e7(J.radius,J.detail)}}class Y7 extends cJ{constructor(J=1,Q=1,Z=1,$=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:$};let W=J/2,K=Q/2,H=Math.floor(Z),Y=Math.floor($),X=H+1,U=Y+1,G=J/H,E=Q/Y,N=[],q=[],R=[],F=[];for(let O=0;O<U;O++){let D=O*E-K;for(let k=0;k<X;k++){let M=k*G-W;q.push(M,-D,0),R.push(0,0,1),F.push(k/H),F.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let D=0;D<H;D++){let k=D+X*O,M=D+X*(O+1),B=D+1+X*(O+1),T=D+1+X*O;N.push(k,M,T),N.push(M,B,T)}this.setIndex(N),this.setAttribute("position",new kJ(q,3)),this.setAttribute("normal",new kJ(R,3)),this.setAttribute("uv",new kJ(F,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y7(J.width,J.height,J.widthSegments,J.heightSegments)}}class bQ extends cJ{constructor(J=0.5,Q=1,Z=32,$=1,W=0,K=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:Z,phiSegments:$,thetaStart:W,thetaLength:K},Z=Math.max(3,Z),$=Math.max(1,$);let H=[],Y=[],X=[],U=[],G=J,E=(Q-J)/$,N=new P,q=new o;for(let R=0;R<=$;R++){for(let F=0;F<=Z;F++){let O=W+F/Z*K;N.x=G*Math.cos(O),N.y=G*Math.sin(O),Y.push(N.x,N.y,N.z),X.push(0,0,1),q.x=(N.x/Q+1)/2,q.y=(N.y/Q+1)/2,U.push(q.x,q.y)}G+=E}for(let R=0;R<$;R++){let F=R*(Z+1);for(let O=0;O<Z;O++){let D=O+F,k=D,M=D+Z+1,B=D+Z+2,T=D+1;H.push(k,M,T),H.push(M,B,T)}}this.setIndex(H),this.setAttribute("position",new kJ(Y,3)),this.setAttribute("normal",new kJ(X,3)),this.setAttribute("uv",new kJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new bQ(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class hQ extends cJ{constructor(J=new p8([new o(0,0.5),new o(-0.5,-0.5),new o(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let Z=[],$=[],W=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex(Z),this.setAttribute("position",new kJ($,3)),this.setAttribute("normal",new kJ(W,3)),this.setAttribute("uv",new kJ(K,2));function X(U){let G=$.length/3,E=U.extractPoints(Q),N=E.shape,q=E.holes;if(W8.isClockWise(N)===!1)N=N.reverse();for(let F=0,O=q.length;F<O;F++){let D=q[F];if(W8.isClockWise(D)===!0)q[F]=D.reverse()}let R=W8.triangulateShape(N,q);for(let F=0,O=q.length;F<O;F++){let D=q[F];N=N.concat(D)}for(let F=0,O=N.length;F<O;F++){let D=N[F];$.push(D.x,D.y,0),W.push(0,0,1),K.push(D.x,D.y)}for(let F=0,O=R.length;F<O;F++){let D=R[F],k=D[0]+G,M=D[1]+G,B=D[2]+G;Z.push(k,M,B),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return pE(Q,J)}static fromJSON(J,Q){let Z=[];for(let $=0,W=J.shapes.length;$<W;$++){let K=Q[J.shapes[$]];Z.push(K)}return new hQ(Z,J.curveSegments)}}function pE(J,Q){if(Q.shapes=[],Array.isArray(J))for(let Z=0,$=J.length;Z<$;Z++){let W=J[Z];Q.shapes.push(W.uuid)}else Q.shapes.push(J.uuid);return Q}class J6 extends cJ{constructor(J=1,Q=32,Z=16,$=0,W=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:Z,phiStart:$,phiLength:W,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),Z=Math.max(2,Math.floor(Z));let Y=Math.min(K+H,Math.PI),X=0,U=[],G=new P,E=new P,N=[],q=[],R=[],F=[];for(let O=0;O<=Z;O++){let D=[],k=O/Z,M=0;if(O===0&&K===0)M=0.5/Q;else if(O===Z&&Y===Math.PI)M=-0.5/Q;for(let B=0;B<=Q;B++){let T=B/Q;G.x=-J*Math.cos($+T*W)*Math.sin(K+k*H),G.y=J*Math.cos(K+k*H),G.z=J*Math.sin($+T*W)*Math.sin(K+k*H),q.push(G.x,G.y,G.z),E.copy(G).normalize(),R.push(E.x,E.y,E.z),F.push(T+M,1-k),D.push(X++)}U.push(D)}for(let O=0;O<Z;O++)for(let D=0;D<Q;D++){let k=U[O][D+1],M=U[O][D],B=U[O+1][D],T=U[O+1][D+1];if(O!==0||K>0)N.push(k,M,T);if(O!==Z-1||Y<Math.PI)N.push(M,B,T)}this.setIndex(N),this.setAttribute("position",new kJ(q,3)),this.setAttribute("normal",new kJ(R,3)),this.setAttribute("uv",new kJ(F,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J6(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class xQ extends u8{constructor(J=1,Q=0){let Z=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],$=[2,1,0,0,3,2,1,3,0,2,3,1];super(Z,$,J,Q);this.type="TetrahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new xQ(J.radius,J.detail)}}class gQ extends cJ{constructor(J=1,Q=0.4,Z=12,$=48,W=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:Z,tubularSegments:$,arc:W},Z=Math.floor(Z),$=Math.floor($);let K=[],H=[],Y=[],X=[],U=new P,G=new P,E=new P;for(let N=0;N<=Z;N++)for(let q=0;q<=$;q++){let R=q/$*W,F=N/Z*Math.PI*2;G.x=(J+Q*Math.cos(F))*Math.cos(R),G.y=(J+Q*Math.cos(F))*Math.sin(R),G.z=Q*Math.sin(F),H.push(G.x,G.y,G.z),U.x=J*Math.cos(R),U.y=J*Math.sin(R),E.subVectors(G,U).normalize(),Y.push(E.x,E.y,E.z),X.push(q/$),X.push(N/Z)}for(let N=1;N<=Z;N++)for(let q=1;q<=$;q++){let R=($+1)*N+q-1,F=($+1)*(N-1)+q-1,O=($+1)*(N-1)+q,D=($+1)*N+q;K.push(R,F,D),K.push(F,O,D)}this.setIndex(K),this.setAttribute("position",new kJ(H,3)),this.setAttribute("normal",new kJ(Y,3)),this.setAttribute("uv",new kJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new gQ(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}class pQ extends cJ{constructor(J=1,Q=0.4,Z=64,$=8,W=2,K=3){super();this.type="TorusKnotGeometry",this.parameters={radius:J,tube:Q,tubularSegments:Z,radialSegments:$,p:W,q:K},Z=Math.floor(Z),$=Math.floor($);let H=[],Y=[],X=[],U=[],G=new P,E=new P,N=new P,q=new P,R=new P,F=new P,O=new P;for(let k=0;k<=Z;++k){let M=k/Z*W*Math.PI*2;D(M,W,K,J,N),D(M+0.01,W,K,J,q),F.subVectors(q,N),O.addVectors(q,N),R.crossVectors(F,O),O.crossVectors(R,F),R.normalize(),O.normalize();for(let B=0;B<=$;++B){let T=B/$*Math.PI*2,_=-Q*Math.cos(T),C=Q*Math.sin(T);G.x=N.x+(_*O.x+C*R.x),G.y=N.y+(_*O.y+C*R.y),G.z=N.z+(_*O.z+C*R.z),Y.push(G.x,G.y,G.z),E.subVectors(G,N).normalize(),X.push(E.x,E.y,E.z),U.push(k/Z),U.push(B/$)}}for(let k=1;k<=Z;k++)for(let M=1;M<=$;M++){let B=($+1)*(k-1)+(M-1),T=($+1)*k+(M-1),_=($+1)*k+M,C=($+1)*(k-1)+M;H.push(B,T,C),H.push(T,_,C)}this.setIndex(H),this.setAttribute("position",new kJ(Y,3)),this.setAttribute("normal",new kJ(X,3)),this.setAttribute("uv",new kJ(U,2));function D(k,M,B,T,_){let C=Math.cos(k),y=Math.sin(k),L=B/M*k,I=Math.cos(L);_.x=T*(2+I)*0.5*C,_.y=T*(2+I)*y*0.5,_.z=T*Math.sin(L)*0.5}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new pQ(J.radius,J.tube,J.tubularSegments,J.radialSegments,J.p,J.q)}}class mQ extends cJ{constructor(J=new SQ(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),Q=64,Z=1,$=8,W=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:Z,radialSegments:$,closed:W};let K=J.computeFrenetFrames(Q,W);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new P,Y=new P,X=new o,U=new P,G=[],E=[],N=[],q=[];R(),this.setIndex(q),this.setAttribute("position",new kJ(G,3)),this.setAttribute("normal",new kJ(E,3)),this.setAttribute("uv",new kJ(N,2));function R(){for(let k=0;k<Q;k++)F(k);F(W===!1?Q:0),D(),O()}function F(k){U=J.getPointAt(k/Q,U);let M=K.normals[k],B=K.binormals[k];for(let T=0;T<=$;T++){let _=T/$*Math.PI*2,C=Math.sin(_),y=-Math.cos(_);Y.x=y*M.x+C*B.x,Y.y=y*M.y+C*B.y,Y.z=y*M.z+C*B.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+Z*Y.x,H.y=U.y+Z*Y.y,H.z=U.z+Z*Y.z,G.push(H.x,H.y,H.z)}}function O(){for(let k=1;k<=Q;k++)for(let M=1;M<=$;M++){let B=($+1)*(k-1)+(M-1),T=($+1)*k+(M-1),_=($+1)*k+M,C=($+1)*(k-1)+M;q.push(B,T,C),q.push(T,_,C)}}function D(){for(let k=0;k<=Q;k++)for(let M=0;M<=$;M++)X.x=k/Q,X.y=M/$,N.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new mQ(new a6[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}class JW extends cJ{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=new Set,$=new P,W=new P;if(J.index!==null){let K=J.attributes.position,H=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:H.count,materialIndex:0}];for(let X=0,U=Y.length;X<U;++X){let G=Y[X],E=G.start,N=G.count;for(let q=E,R=E+N;q<R;q+=3)for(let F=0;F<3;F++){let O=H.getX(q+F),D=H.getX(q+(F+1)%3);if($.fromBufferAttribute(K,O),W.fromBufferAttribute(K,D),fK($,W,Z)===!0)Q.push($.x,$.y,$.z),Q.push(W.x,W.y,W.z)}}}else{let K=J.attributes.position;for(let H=0,Y=K.count/3;H<Y;H++)for(let X=0;X<3;X++){let U=3*H+X,G=3*H+(X+1)%3;if($.fromBufferAttribute(K,U),W.fromBufferAttribute(K,G),fK($,W,Z)===!0)Q.push($.x,$.y,$.z),Q.push(W.x,W.y,W.z)}}this.setAttribute("position",new kJ(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function fK(J,Q,Z){let $=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,W=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has($)===!0||Z.has(W)===!0)return!1;else return Z.add($),Z.add(W),!0}var bK=Object.freeze({__proto__:null,BoxGeometry:k9,CapsuleGeometry:_Q,CircleGeometry:wQ,ConeGeometry:r7,CylinderGeometry:a7,DodecahedronGeometry:CQ,EdgesGeometry:s$,ExtrudeGeometry:yQ,IcosahedronGeometry:vQ,LatheGeometry:fQ,OctahedronGeometry:e7,PlaneGeometry:Y7,PolyhedronGeometry:u8,RingGeometry:bQ,ShapeGeometry:hQ,SphereGeometry:J6,TetrahedronGeometry:xQ,TorusGeometry:gQ,TorusKnotGeometry:pQ,TubeGeometry:mQ,WireframeGeometry:JW});class QW extends C0{constructor(J){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new RJ(0),this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.fog=J.fog,this}}class ZW extends e0{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dQ extends C0{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new RJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new RJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s0,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class $W extends dQ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new o(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new RJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new RJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new RJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class WW extends C0{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new RJ(16777215),this.specular=new RJ(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new RJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class KW extends C0{constructor(J){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new RJ(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new RJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.gradientMap=J.gradientMap,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}class HW extends C0{constructor(J){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(J)}copy(J){return super.copy(J),this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.flatShading=J.flatShading,this}}class YW extends C0{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new RJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new RJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new s0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class lQ extends C0{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class uQ extends C0{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}class XW extends C0{constructor(J){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new RJ(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new o(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={MATCAP:""},this.color.copy(J.color),this.matcap=J.matcap,this.map=J.map,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.flatShading=J.flatShading,this.fog=J.fog,this}}class UW extends j0{constructor(J){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(J)}copy(J){return super.copy(J),this.scale=J.scale,this.dashSize=J.dashSize,this.gapSize=J.gapSize,this}}function X9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function jY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function yY(J){function Q(W,K){return J[W]-J[K]}let Z=J.length,$=new Array(Z);for(let W=0;W!==Z;++W)$[W]=W;return $.sort(Q),$}function uZ(J,Q,Z){let $=J.length,W=new J.constructor($);for(let K=0,H=0;H!==$;++K){let Y=Z[K]*Q;for(let X=0;X!==Q;++X)W[H++]=J[Y+X]}return W}function GW(J,Q,Z,$){let W=1,K=J[0];while(K!==void 0&&K[$]===void 0)K=J[W++];if(K===void 0)return;let H=K[$];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[$],H!==void 0)Q.push(K.time),Z.push(...H);K=J[W++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[$],H!==void 0)Q.push(K.time),H.toArray(Z,Z.length);K=J[W++]}while(K!==void 0);else do{if(H=K[$],H!==void 0)Q.push(K.time),Z.push(H);K=J[W++]}while(K!==void 0)}function mE(J,Q,Z,$,W=30){let K=J.clone();K.name=Q;let H=[];for(let X=0;X<K.tracks.length;++X){let U=K.tracks[X],G=U.getValueSize(),E=[],N=[];for(let q=0;q<U.times.length;++q){let R=U.times[q]*W;if(R<Z||R>=$)continue;E.push(U.times[q]);for(let F=0;F<G;++F)N.push(U.values[q*G+F])}if(E.length===0)continue;U.times=X9(E,U.times.constructor),U.values=X9(N,U.values.constructor),H.push(U)}K.tracks=H;let Y=1/0;for(let X=0;X<K.tracks.length;++X)if(Y>K.tracks[X].times[0])Y=K.tracks[X].times[0];for(let X=0;X<K.tracks.length;++X)K.tracks[X].shift(-1*Y);return K.resetDuration(),K}function dE(J,Q=0,Z=J,$=30){if($<=0)$=30;let W=Z.tracks.length,K=Q/$;for(let H=0;H<W;++H){let Y=Z.tracks[H],X=Y.ValueTypeName;if(X==="bool"||X==="string")continue;let U=J.tracks.find(function(D){return D.name===Y.name&&D.ValueTypeName===X});if(U===void 0)continue;let G=0,E=Y.getValueSize();if(Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)G=E/3;let N=0,q=U.getValueSize();if(U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)N=q/3;let R=Y.times.length-1,F;if(K<=Y.times[0]){let D=G,k=E-G;F=Y.values.slice(D,k)}else if(K>=Y.times[R]){let D=R*E+G,k=D+E-G;F=Y.values.slice(D,k)}else{let D=Y.createInterpolant(),k=G,M=E-G;D.evaluate(K),F=D.resultBuffer.slice(k,M)}if(X==="quaternion")new b0().fromArray(F).normalize().conjugate().toArray(F);let O=U.times.length;for(let D=0;D<O;++D){let k=D*q+N;if(X==="quaternion")b0.multiplyQuaternionsFlat(U.values,k,F,0,U.values,k);else{let M=q-N*2;for(let B=0;B<M;++B)U.values[k+B]-=F[B]}}}return J.blendMode=2501,J}class vY{static convertArray(J,Q){return X9(J,Q)}static isTypedArray(J){return jY(J)}static getKeyframeOrder(J){return yY(J)}static sortedArray(J,Q,Z){return uZ(J,Q,Z)}static flattenJSON(J,Q,Z,$){GW(J,Q,Z,$)}static subclip(J,Q,Z,$,W=30){return mE(J,Q,Z,$,W)}static makeClipAdditive(J,Q=0,Z=J,$=30){return dE(J,Q,Z,$)}}class X7{constructor(J,Q,Z,$){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=$!==void 0?$:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,$=Q[Z],W=Q[Z-1];J:{Q:{let K;Z:{$:if(!(J<$)){for(let H=Z+2;;){if($===void 0){if(J<W)break $;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===H)break;if(W=$,$=Q[++Z],J<$)break Q}K=Q.length;break Z}if(!(J>=W)){let H=Q[1];if(J<H)Z=2,W=H;for(let Y=Z-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if($=W,W=Q[--Z-1],J>=W)break Q}K=Z,Z=0;break Z}break J}while(Z<K){let H=Z+K>>>1;if(J<Q[H])K=H;else Z=H+1}if($=Q[Z],W=Q[Z-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,W,$)}return this.interpolate_(Z,W,J,$)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$;for(let K=0;K!==$;++K)Q[K]=Z[W+K];return Q}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class EW extends X7{constructor(J,Q,Z,$){super(J,Q,Z,$);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let $=this.parameterPositions,W=J-2,K=J+1,H=$[W],Y=$[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-Z;break;case 2402:W=$.length-2,H=Q+$[W]-$[W+1];break;default:W=J,H=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*Z-Q;break;case 2402:K=1,Y=Z+$[1]-$[0];break;default:K=J-1,Y=Q}let X=(Z-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-Z),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,Z,$){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,N=this._weightNext,q=(Z-Q)/($-Q),R=q*q,F=R*q,O=-E*F+2*E*R-E*q,D=(1+E)*F+(-1.5-2*E)*R+(-0.5+E)*q+1,k=(-1-N)*F+(1.5+N)*R+0.5*q,M=N*F-N*R;for(let B=0;B!==H;++B)W[B]=O*K[U+B]+D*K[X+B]+k*K[Y+B]+M*K[G+B];return W}}class cQ extends X7{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=(Z-Q)/($-Q),G=1-U;for(let E=0;E!==H;++E)W[E]=K[X+E]*G+K[Y+E]*U;return W}}class NW extends X7{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J){return this.copySampleValue_(J-1)}}class o0{constructor(J,Q,Z,$){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=X9(Q,this.TimeBufferType),this.values=X9(Z,this.ValueBufferType),this.setInterpolation($||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:X9(J.times,Array),values:X9(J.values,Array)};let $=J.getInterpolation();if($!==J.DefaultInterpolation)Z.interpolation=$}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new NW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new cQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new EW(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]*=J}return this}trim(J,Q){let Z=this.times,$=Z.length,W=0,K=$-1;while(W!==$&&Z[W]<J)++W;while(K!==-1&&Z[K]>Q)--K;if(++K,W!==0||K!==$){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=Z.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,$=this.values,W=Z.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=Z[H];if(typeof Y==="number"&&isNaN(Y)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){console.error("THREE.KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if($!==void 0){if(jY($))for(let H=0,Y=$.length;H!==Y;++H){let X=$[H];if(isNaN(X)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),$=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!$){let G=H*Z,E=G-Z,N=G+Z;for(let q=0;q!==Z;++q){let R=Q[G+q];if(R!==Q[E+q]||R!==Q[N+q]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*Z,E=K*Z;for(let N=0;N!==Z;++N)Q[E+N]=Q[G+N]}++K}}if(W>0){J[K]=J[W];for(let H=W*Z,Y=K*Z,X=0;X!==Z;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),$=new this.constructor(this.name,J,Q);return $.createInterpolant=this.createInterpolant,$}}o0.prototype.ValueTypeName="";o0.prototype.TimeBufferType=Float32Array;o0.prototype.ValueBufferType=Float32Array;o0.prototype.DefaultInterpolation=2301;class c8 extends o0{constructor(J,Q,Z){super(J,Q,Z)}}c8.prototype.ValueTypeName="bool";c8.prototype.ValueBufferType=Array;c8.prototype.DefaultInterpolation=2300;c8.prototype.InterpolantFactoryMethodLinear=void 0;c8.prototype.InterpolantFactoryMethodSmooth=void 0;class nQ extends o0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}nQ.prototype.ValueTypeName="color";class o9 extends o0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}o9.prototype.ValueTypeName="number";class qW extends X7{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=(Z-Q)/($-Q),X=J*H;for(let U=X+H;X!==U;X+=4)b0.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class U7 extends o0{constructor(J,Q,Z,$){super(J,Q,Z,$)}InterpolantFactoryMethodLinear(J){return new qW(this.times,this.values,this.getValueSize(),J)}}U7.prototype.ValueTypeName="quaternion";U7.prototype.InterpolantFactoryMethodSmooth=void 0;class n8 extends o0{constructor(J,Q,Z){super(J,Q,Z)}}n8.prototype.ValueTypeName="string";n8.prototype.ValueBufferType=Array;n8.prototype.DefaultInterpolation=2300;n8.prototype.InterpolantFactoryMethodLinear=void 0;n8.prototype.InterpolantFactoryMethodSmooth=void 0;class a9 extends o0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}a9.prototype.ValueTypeName="vector";class r9{constructor(J="",Q=-1,Z=[],$=2500){if(this.name=J,this.tracks=Z,this.duration=Q,this.blendMode=$,this.uuid=n0(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],Z=J.tracks,$=1/(J.fps||1);for(let K=0,H=Z.length;K!==H;++K)Q.push(uE(Z[K]).scale($));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],Z=J.tracks,$={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,K=Z.length;W!==K;++W)Q.push(o0.toJSON(Z[W]));return $}static CreateFromMorphTargetSequence(J,Q,Z,$){let W=Q.length,K=[];for(let H=0;H<W;H++){let Y=[],X=[];Y.push((H+W-1)%W,H,(H+1)%W),X.push(0,1,0);let U=yY(Y);if(Y=uZ(Y,1,U),X=uZ(X,1,U),!$&&Y[0]===0)Y.push(W),X.push(X[0]);K.push(new o9(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/Z))}return new this(J,-1,K)}static findByName(J,Q){let Z=J;if(!Array.isArray(J)){let $=J;Z=$.geometry&&$.geometry.animations||$.animations}for(let $=0;$<Z.length;$++)if(Z[$].name===Q)return Z[$];return null}static CreateClipsFromMorphTargetSequences(J,Q,Z){let $={},W=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(W);if(U&&U.length>1){let G=U[1],E=$[G];if(!E)$[G]=E=[];E.push(X)}}let K=[];for(let H in $)K.push(this.CreateFromMorphTargetSequence(H,$[H],Q,Z));return K}static parseAnimation(J,Q){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Z=function(G,E,N,q,R){if(N.length!==0){let F=[],O=[];if(GW(N,F,O,q),F.length!==0)R.push(new G(E,F,O))}},$=[],W=J.name||"default",K=J.fps||30,H=J.blendMode,Y=J.length||-1,X=J.hierarchy||[];for(let G=0;G<X.length;G++){let E=X[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let N={},q;for(q=0;q<E.length;q++)if(E[q].morphTargets)for(let R=0;R<E[q].morphTargets.length;R++)N[E[q].morphTargets[R]]=-1;for(let R in N){let F=[],O=[];for(let D=0;D!==E[q].morphTargets.length;++D){let k=E[q];F.push(k.time),O.push(k.morphTarget===R?1:0)}$.push(new o9(".morphTargetInfluence["+R+"]",F,O))}Y=N.length*K}else{let N=".bones["+Q[G].name+"]";Z(a9,N+".position",E,"pos",$),Z(U7,N+".quaternion",E,"rot",$),Z(a9,N+".scale",E,"scl",$)}}if($.length===0)return null;return new this(W,Y,$,H)}resetDuration(){let J=this.tracks,Q=0;for(let Z=0,$=J.length;Z!==$;++Z){let W=this.tracks[Z];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function lE(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return o9;case"vector":case"vector2":case"vector3":case"vector4":return a9;case"color":return nQ;case"quaternion":return U7;case"bool":case"boolean":return c8;case"string":return n8}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function uE(J){if(J.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=lE(J.type);if(J.times===void 0){let Z=[],$=[];GW(J.keys,Z,$,"value"),J.times=Z,J.values=$}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var N8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class sQ{constructor(J,Q,Z){let $=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this.itemStart=function(U){if(H++,W===!1){if($.onStart!==void 0)$.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,$.onProgress!==void 0)$.onProgress(U,K,H);if(K===H){if(W=!1,$.onLoad!==void 0)$.onLoad()}},this.itemError=function(U){if($.onError!==void 0)$.onError(U)},this.resolveURL=function(U){if(Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=X.length;G<E;G+=2){let N=X[G],q=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return q}return null}}}var fY=new sQ;class h0{constructor(J){this.manager=J!==void 0?J:fY,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let Z=this;return new Promise(function($,W){Z.load(J,$,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}h0.DEFAULT_MATERIAL_NAME="__DEFAULT";var I8={};class bY extends Error{constructor(J,Q){super(J);this.response=Q}}class q8 extends h0{constructor(J){super(J);this.mimeType="",this.responseType=""}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=N8.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(I8[J]!==void 0){I8[J].push({onLoad:Q,onProgress:Z,onError:$});return}I8[J]=[],I8[J].push({onLoad:Q,onProgress:Z,onError:$});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream==="undefined"||X.body===void 0||X.body.getReader===void 0)return X;let U=I8[J],G=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),N=E?parseInt(E):0,q=N!==0,R=0,F=new ReadableStream({start(O){D();function D(){G.read().then(({done:k,value:M})=>{if(k)O.close();else{R+=M.byteLength;let B=new ProgressEvent("progress",{lengthComputable:q,loaded:R,total:N});for(let T=0,_=U.length;T<_;T++){let C=U[T];if(C.onProgress)C.onProgress(B)}O.enqueue(M),D()}},(k)=>{O.error(k)})}}});return new Response(F)}else throw new bY(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),E=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(E);return X.arrayBuffer().then((q)=>N.decode(q))}}}).then((X)=>{N8.add(`file:${J}`,X);let U=I8[J];delete I8[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onLoad)N.onLoad(X)}}).catch((X)=>{let U=I8[J];if(U===void 0)throw this.manager.itemError(J),X;delete I8[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onError)N.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}class hY extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,K=new q8(this.manager);K.setPath(this.path),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(J,function(H){try{Q(W.parse(JSON.parse(H)))}catch(Y){if($)$(Y);else console.error(Y);W.manager.itemError(J)}},Z,$)}parse(J){let Q=[];for(let Z=0;Z<J.length;Z++){let $=r9.parse(J[Z]);Q.push($)}return Q}}class xY extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,K=[],H=new o7,Y=new q8(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(W.withCredentials);let X=0;function U(G){Y.load(J[G],function(E){let N=W.parse(E,!0);if(K[G]={width:N.width,height:N.height,format:N.format,mipmaps:N.mipmaps},X+=1,X===6){if(N.mipmapCount===1)H.minFilter=1006;if(H.image=K,H.format=N.format,H.needsUpdate=!0,Q)Q(H)}},Z,$)}if(Array.isArray(J))for(let G=0,E=J.length;G<E;++G)U(G);else Y.load(J,function(G){let E=W.parse(G,!0);if(E.isCubemap){let N=E.mipmaps.length/E.mipmapCount;for(let q=0;q<N;q++){K[q]={mipmaps:[]};for(let R=0;R<E.mipmapCount;R++)K[q].mipmaps.push(E.mipmaps[q*E.mipmapCount+R]),K[q].format=E.format,K[q].width=E.width,K[q].height=E.height}H.image=K}else H.image.width=E.width,H.image.height=E.height,H.mipmaps=E.mipmaps;if(E.mipmapCount===1)H.minFilter=1006;if(H.format=E.format,H.needsUpdate=!0,Q)Q(H)},Z,$);return H}}var u9=new WeakMap;class t9 extends h0{constructor(J){super(J)}load(J,Q,Z,$){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=N8.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);else{let G=u9.get(K);if(G===void 0)G=[],u9.set(K,G);G.push({onLoad:Q,onError:$})}return K}let H=s9("img");function Y(){if(U(),Q)Q(this);let G=u9.get(this)||[];for(let E=0;E<G.length;E++){let N=G[E];if(N.onLoad)N.onLoad(this)}u9.delete(this),W.manager.itemEnd(J)}function X(G){if(U(),$)$(G);N8.remove(`image:${J}`);let E=u9.get(this)||[];for(let N=0;N<E.length;N++){let q=E[N];if(q.onError)q.onError(G)}u9.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return N8.add(`image:${J}`,H),W.manager.itemStart(J),H.src=J,H}}class gY extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=new H7;W.colorSpace="srgb";let K=new t9(this.manager);K.setCrossOrigin(this.crossOrigin),K.setPath(this.path);let H=0;function Y(X){K.load(J[X],function(U){if(W.images[X]=U,H++,H===6){if(W.needsUpdate=!0,Q)Q(W)}},void 0,$)}for(let X=0;X<J.length;++X)Y(X);return W}}class pY extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,K=new K8,H=new q8(this.manager);return H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setPath(this.path),H.setWithCredentials(W.withCredentials),H.load(J,function(Y){let X;try{X=W.parse(Y)}catch(U){if($!==void 0)$(U);else{console.error(U);return}}if(X.image!==void 0)K.image=X.image;else if(X.data!==void 0)K.image.width=X.width,K.image.height=X.height,K.image.data=X.data;if(K.wrapS=X.wrapS!==void 0?X.wrapS:1001,K.wrapT=X.wrapT!==void 0?X.wrapT:1001,K.magFilter=X.magFilter!==void 0?X.magFilter:1006,K.minFilter=X.minFilter!==void 0?X.minFilter:1006,K.anisotropy=X.anisotropy!==void 0?X.anisotropy:1,X.colorSpace!==void 0)K.colorSpace=X.colorSpace;if(X.flipY!==void 0)K.flipY=X.flipY;if(X.format!==void 0)K.format=X.format;if(X.type!==void 0)K.type=X.type;if(X.mipmaps!==void 0)K.mipmaps=X.mipmaps,K.minFilter=1008;if(X.mipmapCount===1)K.minFilter=1006;if(X.generateMipmaps!==void 0)K.generateMipmaps=X.generateMipmaps;if(K.needsUpdate=!0,Q)Q(K,X)},Z,$),K}}class mY extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=new F0,K=new t9(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(W.image=H,W.needsUpdate=!0,Q!==void 0)Q(W)},Z,$),W}}class j8 extends $0{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new RJ(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class DW extends j8{constructor(J,Q,Z){super(J,Z);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($0.DEFAULT_UP),this.updateMatrix(),this.groundColor=new RJ(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var fZ=new vJ,hK=new P,xK=new P;class iQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new o(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new vJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new L9,this._frameExtents=new o(1,1),this._viewportCount=1,this._viewports=[new Z0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,Z=this.matrix;hK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(hK),xK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(xK),Q.updateMatrixWorld(),fZ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fZ),Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Z.multiply(fZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class dY extends iQ{constructor(){super(new I0(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,Z=G9*2*J.angle*this.focus,$=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if(Z!==Q.fov||$!==Q.aspect||W!==Q.far)Q.fov=Z,Q.aspect=$,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class OW extends j8{constructor(J,Q,Z=0,$=Math.PI/3,W=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy($0.DEFAULT_UP),this.updateMatrix(),this.target=new $0,this.distance=Z,this.angle=$,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new dY}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var gK=new vJ,_7=new P,bZ=new P;class lY extends iQ{constructor(){super(new I0(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new o(4,2),this._viewportCount=6,this._viewports=[new Z0(2,1,1,1),new Z0(0,1,1,1),new Z0(3,1,1,1),new Z0(1,1,1,1),new Z0(3,0,1,1),new Z0(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(J,Q=0){let Z=this.camera,$=this.matrix,W=J.distance||Z.far;if(W!==Z.far)Z.far=W,Z.updateProjectionMatrix();_7.setFromMatrixPosition(J.matrixWorld),Z.position.copy(_7),bZ.copy(Z.position),bZ.add(this._cubeDirections[Q]),Z.up.copy(this._cubeUps[Q]),Z.lookAt(bZ),Z.updateMatrixWorld(),$.makeTranslation(-_7.x,-_7.y,-_7.z),gK.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gK)}}class RW extends j8{constructor(J,Q,Z=0,$=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=$,this.shadow=new lY}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class Q6 extends n7{constructor(J=-1,Q=1,Z=1,$=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=$,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,$,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,$=(this.top+this.bottom)/2,W=Z-J,K=Z+J,H=$+Q,Y=$-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class uY extends iQ{constructor(){super(new Q6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class FW extends j8{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($0.DEFAULT_UP),this.updateMatrix(),this.target=new $0,this.shadow=new uY}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class MW extends j8{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class kW extends j8{constructor(J,Q,Z=10,$=10){super(J,Q);this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=Z,this.height=$}get power(){return this.intensity*this.width*this.height*Math.PI}set power(J){this.intensity=J/(this.width*this.height*Math.PI)}copy(J){return super.copy(J),this.width=J.width,this.height=J.height,this}toJSON(J){let Q=super.toJSON(J);return Q.object.width=this.width,Q.object.height=this.height,Q}}class VW{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let J=0;J<9;J++)this.coefficients.push(new P)}set(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].copy(J[Q]);return this}zero(){for(let J=0;J<9;J++)this.coefficients[J].set(0,0,0);return this}getAt(J,Q){let{x:Z,y:$,z:W}=J,K=this.coefficients;return Q.copy(K[0]).multiplyScalar(0.282095),Q.addScaledVector(K[1],0.488603*$),Q.addScaledVector(K[2],0.488603*W),Q.addScaledVector(K[3],0.488603*Z),Q.addScaledVector(K[4],1.092548*(Z*$)),Q.addScaledVector(K[5],1.092548*($*W)),Q.addScaledVector(K[6],0.315392*(3*W*W-1)),Q.addScaledVector(K[7],1.092548*(Z*W)),Q.addScaledVector(K[8],0.546274*(Z*Z-$*$)),Q}getIrradianceAt(J,Q){let{x:Z,y:$,z:W}=J,K=this.coefficients;return Q.copy(K[0]).multiplyScalar(0.886227),Q.addScaledVector(K[1],1.023328*$),Q.addScaledVector(K[2],1.023328*W),Q.addScaledVector(K[3],1.023328*Z),Q.addScaledVector(K[4],0.858086*Z*$),Q.addScaledVector(K[5],0.858086*$*W),Q.addScaledVector(K[6],0.743125*W*W-0.247708),Q.addScaledVector(K[7],0.858086*Z*W),Q.addScaledVector(K[8],0.429043*(Z*Z-$*$)),Q}add(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].add(J.coefficients[Q]);return this}addScaledSH(J,Q){for(let Z=0;Z<9;Z++)this.coefficients[Z].addScaledVector(J.coefficients[Z],Q);return this}scale(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].multiplyScalar(J);return this}lerp(J,Q){for(let Z=0;Z<9;Z++)this.coefficients[Z].lerp(J.coefficients[Z],Q);return this}equals(J){for(let Q=0;Q<9;Q++)if(!this.coefficients[Q].equals(J.coefficients[Q]))return!1;return!0}copy(J){return this.set(J.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(J,Q=0){let Z=this.coefficients;for(let $=0;$<9;$++)Z[$].fromArray(J,Q+$*3);return this}toArray(J=[],Q=0){let Z=this.coefficients;for(let $=0;$<9;$++)Z[$].toArray(J,Q+$*3);return J}static getBasisAt(J,Q){let{x:Z,y:$,z:W}=J;Q[0]=0.282095,Q[1]=0.488603*$,Q[2]=0.488603*W,Q[3]=0.488603*Z,Q[4]=1.092548*Z*$,Q[5]=1.092548*$*W,Q[6]=0.315392*(3*W*W-1),Q[7]=1.092548*Z*W,Q[8]=0.546274*(Z*Z-$*$)}}class LW extends j8{constructor(J=new VW,Q=1){super(void 0,Q);this.isLightProbe=!0,this.sh=J}copy(J){return super.copy(J),this.sh.copy(J.sh),this}fromJSON(J){return this.intensity=J.intensity,this.sh.fromArray(J.sh),this}toJSON(J){let Q=super.toJSON(J);return Q.object.sh=this.sh.toArray(),Q}}class oQ extends h0{constructor(J){super(J);this.textures={}}load(J,Q,Z,$){let W=this,K=new q8(W.manager);K.setPath(W.path),K.setRequestHeader(W.requestHeader),K.setWithCredentials(W.withCredentials),K.load(J,function(H){try{Q(W.parse(JSON.parse(H)))}catch(Y){if($)$(Y);else console.error(Y);W.manager.itemError(J)}},Z,$)}parse(J){let Q=this.textures;function Z(W){if(Q[W]===void 0)console.warn("THREE.MaterialLoader: Undefined texture",W);return Q[W]}let $=this.createMaterialFromType(J.type);if(J.uuid!==void 0)$.uuid=J.uuid;if(J.name!==void 0)$.name=J.name;if(J.color!==void 0&&$.color!==void 0)$.color.setHex(J.color);if(J.roughness!==void 0)$.roughness=J.roughness;if(J.metalness!==void 0)$.metalness=J.metalness;if(J.sheen!==void 0)$.sheen=J.sheen;if(J.sheenColor!==void 0)$.sheenColor=new RJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)$.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&$.emissive!==void 0)$.emissive.setHex(J.emissive);if(J.specular!==void 0&&$.specular!==void 0)$.specular.setHex(J.specular);if(J.specularIntensity!==void 0)$.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&$.specularColor!==void 0)$.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)$.shininess=J.shininess;if(J.clearcoat!==void 0)$.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)$.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)$.dispersion=J.dispersion;if(J.iridescence!==void 0)$.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)$.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)$.transmission=J.transmission;if(J.thickness!==void 0)$.thickness=J.thickness;if(J.attenuationDistance!==void 0)$.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&$.attenuationColor!==void 0)$.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)$.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)$.fog=J.fog;if(J.flatShading!==void 0)$.flatShading=J.flatShading;if(J.blending!==void 0)$.blending=J.blending;if(J.combine!==void 0)$.combine=J.combine;if(J.side!==void 0)$.side=J.side;if(J.shadowSide!==void 0)$.shadowSide=J.shadowSide;if(J.opacity!==void 0)$.opacity=J.opacity;if(J.transparent!==void 0)$.transparent=J.transparent;if(J.alphaTest!==void 0)$.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)$.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)$.depthFunc=J.depthFunc;if(J.depthTest!==void 0)$.depthTest=J.depthTest;if(J.depthWrite!==void 0)$.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)$.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)$.blendSrc=J.blendSrc;if(J.blendDst!==void 0)$.blendDst=J.blendDst;if(J.blendEquation!==void 0)$.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)$.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)$.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)$.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&$.blendColor!==void 0)$.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)$.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)$.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)$.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)$.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)$.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)$.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)$.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)$.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)$.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)$.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)$.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)$.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)$.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)$.rotation=J.rotation;if(J.linewidth!==void 0)$.linewidth=J.linewidth;if(J.dashSize!==void 0)$.dashSize=J.dashSize;if(J.gapSize!==void 0)$.gapSize=J.gapSize;if(J.scale!==void 0)$.scale=J.scale;if(J.polygonOffset!==void 0)$.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)$.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)$.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)$.dithering=J.dithering;if(J.alphaToCoverage!==void 0)$.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)$.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)$.forceSinglePass=J.forceSinglePass;if(J.visible!==void 0)$.visible=J.visible;if(J.toneMapped!==void 0)$.toneMapped=J.toneMapped;if(J.userData!==void 0)$.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")$.vertexColors=J.vertexColors>0?!0:!1;else $.vertexColors=J.vertexColors;if(J.uniforms!==void 0)for(let W in J.uniforms){let K=J.uniforms[W];switch($.uniforms[W]={},K.type){case"t":$.uniforms[W].value=Z(K.value);break;case"c":$.uniforms[W].value=new RJ().setHex(K.value);break;case"v2":$.uniforms[W].value=new o().fromArray(K.value);break;case"v3":$.uniforms[W].value=new P().fromArray(K.value);break;case"v4":$.uniforms[W].value=new Z0().fromArray(K.value);break;case"m3":$.uniforms[W].value=new dJ().fromArray(K.value);break;case"m4":$.uniforms[W].value=new vJ().fromArray(K.value);break;default:$.uniforms[W].value=K.value}}if(J.defines!==void 0)$.defines=J.defines;if(J.vertexShader!==void 0)$.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)$.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)$.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let W in J.extensions)$.extensions[W]=J.extensions[W];if(J.lights!==void 0)$.lights=J.lights;if(J.clipping!==void 0)$.clipping=J.clipping;if(J.size!==void 0)$.size=J.size;if(J.sizeAttenuation!==void 0)$.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)$.map=Z(J.map);if(J.matcap!==void 0)$.matcap=Z(J.matcap);if(J.alphaMap!==void 0)$.alphaMap=Z(J.alphaMap);if(J.bumpMap!==void 0)$.bumpMap=Z(J.bumpMap);if(J.bumpScale!==void 0)$.bumpScale=J.bumpScale;if(J.normalMap!==void 0)$.normalMap=Z(J.normalMap);if(J.normalMapType!==void 0)$.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let W=J.normalScale;if(Array.isArray(W)===!1)W=[W,W];$.normalScale=new o().fromArray(W)}if(J.displacementMap!==void 0)$.displacementMap=Z(J.displacementMap);if(J.displacementScale!==void 0)$.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)$.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)$.roughnessMap=Z(J.roughnessMap);if(J.metalnessMap!==void 0)$.metalnessMap=Z(J.metalnessMap);if(J.emissiveMap!==void 0)$.emissiveMap=Z(J.emissiveMap);if(J.emissiveIntensity!==void 0)$.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)$.specularMap=Z(J.specularMap);if(J.specularIntensityMap!==void 0)$.specularIntensityMap=Z(J.specularIntensityMap);if(J.specularColorMap!==void 0)$.specularColorMap=Z(J.specularColorMap);if(J.envMap!==void 0)$.envMap=Z(J.envMap);if(J.envMapRotation!==void 0)$.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)$.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)$.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)$.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)$.lightMap=Z(J.lightMap);if(J.lightMapIntensity!==void 0)$.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)$.aoMap=Z(J.aoMap);if(J.aoMapIntensity!==void 0)$.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)$.gradientMap=Z(J.gradientMap);if(J.clearcoatMap!==void 0)$.clearcoatMap=Z(J.clearcoatMap);if(J.clearcoatRoughnessMap!==void 0)$.clearcoatRoughnessMap=Z(J.clearcoatRoughnessMap);if(J.clearcoatNormalMap!==void 0)$.clearcoatNormalMap=Z(J.clearcoatNormalMap);if(J.clearcoatNormalScale!==void 0)$.clearcoatNormalScale=new o().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)$.iridescenceMap=Z(J.iridescenceMap);if(J.iridescenceThicknessMap!==void 0)$.iridescenceThicknessMap=Z(J.iridescenceThicknessMap);if(J.transmissionMap!==void 0)$.transmissionMap=Z(J.transmissionMap);if(J.thicknessMap!==void 0)$.thicknessMap=Z(J.thicknessMap);if(J.anisotropyMap!==void 0)$.anisotropyMap=Z(J.anisotropyMap);if(J.sheenColorMap!==void 0)$.sheenColorMap=Z(J.sheenColorMap);if(J.sheenRoughnessMap!==void 0)$.sheenRoughnessMap=Z(J.sheenRoughnessMap);return $}setTextures(J){return this.textures=J,this}createMaterialFromType(J){return oQ.createMaterialFromType(J)}static createMaterialFromType(J){return new{ShadowMaterial:QW,SpriteMaterial:kQ,RawShaderMaterial:ZW,ShaderMaterial:e0,PointsMaterial:BQ,MeshPhysicalMaterial:$W,MeshStandardMaterial:dQ,MeshPhongMaterial:WW,MeshToonMaterial:KW,MeshNormalMaterial:HW,MeshLambertMaterial:YW,MeshDepthMaterial:lQ,MeshDistanceMaterial:uQ,MeshBasicMaterial:S8,MeshMatcapMaterial:XW,LineDashedMaterial:UW,LineBasicMaterial:j0,Material:C0}[J]}}class r6{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class zW extends cJ{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}class BW extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,K=new q8(W.manager);K.setPath(W.path),K.setRequestHeader(W.requestHeader),K.setWithCredentials(W.withCredentials),K.load(J,function(H){try{Q(W.parse(JSON.parse(H)))}catch(Y){if($)$(Y);else console.error(Y);W.manager.itemError(J)}},Z,$)}parse(J){let Q={},Z={};function $(N,q){if(Q[q]!==void 0)return Q[q];let F=N.interleavedBuffers[q],O=W(N,F.buffer),D=c9(F.type,O),k=new i7(D,F.stride);return k.uuid=F.uuid,Q[q]=k,k}function W(N,q){if(Z[q]!==void 0)return Z[q];let F=N.arrayBuffers[q],O=new Uint32Array(F).buffer;return Z[q]=O,O}let K=J.isInstancedBufferGeometry?new zW:new cJ,H=J.data.index;if(H!==void 0){let N=c9(H.type,H.array);K.setIndex(new H0(N,1))}let Y=J.data.attributes;for(let N in Y){let q=Y[N],R;if(q.isInterleavedBufferAttribute){let F=$(J.data,q.data);R=new N9(F,q.itemSize,q.offset,q.normalized)}else{let F=c9(q.type,q.array);R=new(q.isInstancedBufferAttribute?q9:H0)(F,q.itemSize,q.normalized)}if(q.name!==void 0)R.name=q.name;if(q.usage!==void 0)R.setUsage(q.usage);K.setAttribute(N,R)}let X=J.data.morphAttributes;if(X)for(let N in X){let q=X[N],R=[];for(let F=0,O=q.length;F<O;F++){let D=q[F],k;if(D.isInterleavedBufferAttribute){let M=$(J.data,D.data);k=new N9(M,D.itemSize,D.offset,D.normalized)}else{let M=c9(D.type,D.array);k=new H0(M,D.itemSize,D.normalized)}if(D.name!==void 0)k.name=D.name;R.push(k)}K.morphAttributes[N]=R}if(J.data.morphTargetsRelative)K.morphTargetsRelative=!0;let G=J.data.groups||J.data.drawcalls||J.data.offsets;if(G!==void 0)for(let N=0,q=G.length;N!==q;++N){let R=G[N];K.addGroup(R.start,R.count,R.materialIndex)}let E=J.data.boundingSphere;if(E!==void 0)K.boundingSphere=new _0().fromJSON(E);if(J.name)K.name=J.name;if(J.userData)K.userData=J.userData;return K}}class cY extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,K=this.path===""?r6.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||K;let H=new q8(this.manager);H.setPath(this.path),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(Y){let X=null;try{X=JSON.parse(Y)}catch(G){if($!==void 0)$(G);console.error("THREE:ObjectLoader: Can't parse "+J+".",G.message);return}let U=X.metadata;if(U===void 0||U.type===void 0||U.type.toLowerCase()==="geometry"){if($!==void 0)$(new Error("THREE.ObjectLoader: Can't load "+J));console.error("THREE.ObjectLoader: Can't load "+J);return}W.parse(X,Q)},Z,$)}async loadAsync(J,Q){let Z=this,$=this.path===""?r6.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||$;let W=new q8(this.manager);W.setPath(this.path),W.setRequestHeader(this.requestHeader),W.setWithCredentials(this.withCredentials);let K=await W.loadAsync(J,Q),H=JSON.parse(K),Y=H.metadata;if(Y===void 0||Y.type===void 0||Y.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+J);return await Z.parseAsync(H)}parse(J,Q){let Z=this.parseAnimations(J.animations),$=this.parseShapes(J.shapes),W=this.parseGeometries(J.geometries,$),K=this.parseImages(J.images,function(){if(Q!==void 0)Q(X)}),H=this.parseTextures(J.textures,K),Y=this.parseMaterials(J.materials,H),X=this.parseObject(J.object,W,Y,H,Z),U=this.parseSkeletons(J.skeletons,X);if(this.bindSkeletons(X,U),this.bindLightTargets(X),Q!==void 0){let G=!1;for(let E in K)if(K[E].data instanceof HTMLImageElement){G=!0;break}if(G===!1)Q(X)}return X}async parseAsync(J){let Q=this.parseAnimations(J.animations),Z=this.parseShapes(J.shapes),$=this.parseGeometries(J.geometries,Z),W=await this.parseImagesAsync(J.images),K=this.parseTextures(J.textures,W),H=this.parseMaterials(J.materials,K),Y=this.parseObject(J.object,$,H,K,Q),X=this.parseSkeletons(J.skeletons,Y);return this.bindSkeletons(Y,X),this.bindLightTargets(Y),Y}parseShapes(J){let Q={};if(J!==void 0)for(let Z=0,$=J.length;Z<$;Z++){let W=new p8().fromJSON(J[Z]);Q[W.uuid]=W}return Q}parseSkeletons(J,Q){let Z={},$={};if(Q.traverse(function(W){if(W.isBone)$[W.uuid]=W}),J!==void 0)for(let W=0,K=J.length;W<K;W++){let H=new LQ().fromJSON(J[W],$);Z[H.uuid]=H}return Z}parseGeometries(J,Q){let Z={};if(J!==void 0){let $=new BW;for(let W=0,K=J.length;W<K;W++){let H,Y=J[W];switch(Y.type){case"BufferGeometry":case"InstancedBufferGeometry":H=$.parse(Y);break;default:if(Y.type in bK)H=bK[Y.type].fromJSON(Y,Q);else console.warn(`THREE.ObjectLoader: Unsupported geometry type "${Y.type}"`)}if(H.uuid=Y.uuid,Y.name!==void 0)H.name=Y.name;if(Y.userData!==void 0)H.userData=Y.userData;Z[Y.uuid]=H}}return Z}parseMaterials(J,Q){let Z={},$={};if(J!==void 0){let W=new oQ;W.setTextures(Q);for(let K=0,H=J.length;K<H;K++){let Y=J[K];if(Z[Y.uuid]===void 0)Z[Y.uuid]=W.parse(Y);$[Y.uuid]=Z[Y.uuid]}}return $}parseAnimations(J){let Q={};if(J!==void 0)for(let Z=0;Z<J.length;Z++){let $=J[Z],W=r9.parse($);Q[W.uuid]=W}return Q}parseImages(J,Q){let Z=this,$={},W;function K(Y){return Z.manager.itemStart(Y),W.load(Y,function(){Z.manager.itemEnd(Y)},void 0,function(){Z.manager.itemError(Y),Z.manager.itemEnd(Y)})}function H(Y){if(typeof Y==="string"){let X=Y,U=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(X)?X:Z.resourcePath+X;return K(U)}else if(Y.data)return{data:c9(Y.type,Y.data),width:Y.width,height:Y.height};else return null}if(J!==void 0&&J.length>0){let Y=new sQ(Q);W=new t9(Y),W.setCrossOrigin(this.crossOrigin);for(let X=0,U=J.length;X<U;X++){let G=J[X],E=G.url;if(Array.isArray(E)){let N=[];for(let q=0,R=E.length;q<R;q++){let F=E[q],O=H(F);if(O!==null)if(O instanceof HTMLImageElement)N.push(O);else N.push(new K8(O.data,O.width,O.height))}$[G.uuid]=new C8(N)}else{let N=H(G.url);$[G.uuid]=new C8(N)}}}return $}async parseImagesAsync(J){let Q=this,Z={},$;async function W(K){if(typeof K==="string"){let H=K,Y=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(H)?H:Q.resourcePath+H;return await $.loadAsync(Y)}else if(K.data)return{data:c9(K.type,K.data),width:K.width,height:K.height};else return null}if(J!==void 0&&J.length>0){$=new t9(this.manager),$.setCrossOrigin(this.crossOrigin);for(let K=0,H=J.length;K<H;K++){let Y=J[K],X=Y.url;if(Array.isArray(X)){let U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G],q=await W(N);if(q!==null)if(q instanceof HTMLImageElement)U.push(q);else U.push(new K8(q.data,q.width,q.height))}Z[Y.uuid]=new C8(U)}else{let U=await W(Y.url);Z[Y.uuid]=new C8(U)}}}return Z}parseTextures(J,Q){function Z(W,K){if(typeof W==="number")return W;return console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",W),K[W]}let $={};if(J!==void 0)for(let W=0,K=J.length;W<K;W++){let H=J[W];if(H.image===void 0)console.warn('THREE.ObjectLoader: No "image" specified for',H.uuid);if(Q[H.image]===void 0)console.warn("THREE.ObjectLoader: Undefined image",H.image);let Y=Q[H.image],X=Y.data,U;if(Array.isArray(X)){if(U=new H7,X.length===6)U.needsUpdate=!0}else{if(X&&X.data)U=new K8;else U=new F0;if(X)U.needsUpdate=!0}if(U.source=Y,U.uuid=H.uuid,H.name!==void 0)U.name=H.name;if(H.mapping!==void 0)U.mapping=Z(H.mapping,cE);if(H.channel!==void 0)U.channel=H.channel;if(H.offset!==void 0)U.offset.fromArray(H.offset);if(H.repeat!==void 0)U.repeat.fromArray(H.repeat);if(H.center!==void 0)U.center.fromArray(H.center);if(H.rotation!==void 0)U.rotation=H.rotation;if(H.wrap!==void 0)U.wrapS=Z(H.wrap[0],pK),U.wrapT=Z(H.wrap[1],pK);if(H.format!==void 0)U.format=H.format;if(H.internalFormat!==void 0)U.internalFormat=H.internalFormat;if(H.type!==void 0)U.type=H.type;if(H.colorSpace!==void 0)U.colorSpace=H.colorSpace;if(H.minFilter!==void 0)U.minFilter=Z(H.minFilter,mK);if(H.magFilter!==void 0)U.magFilter=Z(H.magFilter,mK);if(H.anisotropy!==void 0)U.anisotropy=H.anisotropy;if(H.flipY!==void 0)U.flipY=H.flipY;if(H.generateMipmaps!==void 0)U.generateMipmaps=H.generateMipmaps;if(H.premultiplyAlpha!==void 0)U.premultiplyAlpha=H.premultiplyAlpha;if(H.unpackAlignment!==void 0)U.unpackAlignment=H.unpackAlignment;if(H.compareFunction!==void 0)U.compareFunction=H.compareFunction;if(H.userData!==void 0)U.userData=H.userData;$[H.uuid]=U}return $}parseObject(J,Q,Z,$,W){let K;function H(E){if(Q[E]===void 0)console.warn("THREE.ObjectLoader: Undefined geometry",E);return Q[E]}function Y(E){if(E===void 0)return;if(Array.isArray(E)){let N=[];for(let q=0,R=E.length;q<R;q++){let F=E[q];if(Z[F]===void 0)console.warn("THREE.ObjectLoader: Undefined material",F);N.push(Z[F])}return N}if(Z[E]===void 0)console.warn("THREE.ObjectLoader: Undefined material",E);return Z[E]}function X(E){if($[E]===void 0)console.warn("THREE.ObjectLoader: Undefined texture",E);return $[E]}let U,G;switch(J.type){case"Scene":if(K=new x$,J.background!==void 0)if(Number.isInteger(J.background))K.background=new RJ(J.background);else K.background=X(J.background);if(J.environment!==void 0)K.environment=X(J.environment);if(J.fog!==void 0){if(J.fog.type==="Fog")K.fog=new MQ(J.fog.color,J.fog.near,J.fog.far);else if(J.fog.type==="FogExp2")K.fog=new FQ(J.fog.color,J.fog.density);if(J.fog.name!=="")K.fog.name=J.fog.name}if(J.backgroundBlurriness!==void 0)K.backgroundBlurriness=J.backgroundBlurriness;if(J.backgroundIntensity!==void 0)K.backgroundIntensity=J.backgroundIntensity;if(J.backgroundRotation!==void 0)K.backgroundRotation.fromArray(J.backgroundRotation);if(J.environmentIntensity!==void 0)K.environmentIntensity=J.environmentIntensity;if(J.environmentRotation!==void 0)K.environmentRotation.fromArray(J.environmentRotation);break;case"PerspectiveCamera":if(K=new I0(J.fov,J.aspect,J.near,J.far),J.focus!==void 0)K.focus=J.focus;if(J.zoom!==void 0)K.zoom=J.zoom;if(J.filmGauge!==void 0)K.filmGauge=J.filmGauge;if(J.filmOffset!==void 0)K.filmOffset=J.filmOffset;if(J.view!==void 0)K.view=Object.assign({},J.view);break;case"OrthographicCamera":if(K=new Q6(J.left,J.right,J.top,J.bottom,J.near,J.far),J.zoom!==void 0)K.zoom=J.zoom;if(J.view!==void 0)K.view=Object.assign({},J.view);break;case"AmbientLight":K=new MW(J.color,J.intensity);break;case"DirectionalLight":K=new FW(J.color,J.intensity),K.target=J.target||"";break;case"PointLight":K=new RW(J.color,J.intensity,J.distance,J.decay);break;case"RectAreaLight":K=new kW(J.color,J.intensity,J.width,J.height);break;case"SpotLight":K=new OW(J.color,J.intensity,J.distance,J.angle,J.penumbra,J.decay),K.target=J.target||"";break;case"HemisphereLight":K=new DW(J.color,J.groundColor,J.intensity);break;case"LightProbe":K=new LW().fromJSON(J);break;case"SkinnedMesh":if(U=H(J.geometry),G=Y(J.material),K=new m$(U,G),J.bindMode!==void 0)K.bindMode=J.bindMode;if(J.bindMatrix!==void 0)K.bindMatrix.fromArray(J.bindMatrix);if(J.skeleton!==void 0)K.skeleton=J.skeleton;break;case"Mesh":U=H(J.geometry),G=Y(J.material),K=new k0(U,G);break;case"InstancedMesh":U=H(J.geometry),G=Y(J.material);let{count:E,instanceMatrix:N,instanceColor:q}=J;if(K=new d$(U,G,E),K.instanceMatrix=new q9(new Float32Array(N.array),16),q!==void 0)K.instanceColor=new q9(new Float32Array(q.array),q.itemSize);break;case"BatchedMesh":if(U=H(J.geometry),G=Y(J.material),K=new l$(J.maxInstanceCount,J.maxVertexCount,J.maxIndexCount,G),K.geometry=U,K.perObjectFrustumCulled=J.perObjectFrustumCulled,K.sortObjects=J.sortObjects,K._drawRanges=J.drawRanges,K._reservedRanges=J.reservedRanges,K._geometryInfo=J.geometryInfo.map((R)=>{let F=null,O=null;if(R.boundingBox!==void 0)F=new w0().fromJSON(R.boundingBox);if(R.boundingSphere!==void 0)O=new _0().fromJSON(R.boundingSphere);return{...R,boundingBox:F,boundingSphere:O}}),K._instanceInfo=J.instanceInfo,K._availableInstanceIds=J._availableInstanceIds,K._availableGeometryIds=J._availableGeometryIds,K._nextIndexStart=J.nextIndexStart,K._nextVertexStart=J.nextVertexStart,K._geometryCount=J.geometryCount,K._maxInstanceCount=J.maxInstanceCount,K._maxVertexCount=J.maxVertexCount,K._maxIndexCount=J.maxIndexCount,K._geometryInitialized=J.geometryInitialized,K._matricesTexture=X(J.matricesTexture.uuid),K._indirectTexture=X(J.indirectTexture.uuid),J.colorsTexture!==void 0)K._colorsTexture=X(J.colorsTexture.uuid);if(J.boundingSphere!==void 0)K.boundingSphere=new _0().fromJSON(J.boundingSphere);if(J.boundingBox!==void 0)K.boundingBox=new w0().fromJSON(J.boundingBox);break;case"LOD":K=new p$;break;case"Line":K=new A8(H(J.geometry),Y(J.material));break;case"LineLoop":K=new u$(H(J.geometry),Y(J.material));break;case"LineSegments":K=new X8(H(J.geometry),Y(J.material));break;case"PointCloud":case"Points":K=new c$(H(J.geometry),Y(J.material));break;case"Sprite":K=new g$(Y(J.material));break;case"Group":K=new Y9;break;case"Bone":K=new VQ;break;default:K=new $0}if(K.uuid=J.uuid,J.name!==void 0)K.name=J.name;if(J.matrix!==void 0){if(K.matrix.fromArray(J.matrix),J.matrixAutoUpdate!==void 0)K.matrixAutoUpdate=J.matrixAutoUpdate;if(K.matrixAutoUpdate)K.matrix.decompose(K.position,K.quaternion,K.scale)}else{if(J.position!==void 0)K.position.fromArray(J.position);if(J.rotation!==void 0)K.rotation.fromArray(J.rotation);if(J.quaternion!==void 0)K.quaternion.fromArray(J.quaternion);if(J.scale!==void 0)K.scale.fromArray(J.scale)}if(J.up!==void 0)K.up.fromArray(J.up);if(J.castShadow!==void 0)K.castShadow=J.castShadow;if(J.receiveShadow!==void 0)K.receiveShadow=J.receiveShadow;if(J.shadow){if(J.shadow.intensity!==void 0)K.shadow.intensity=J.shadow.intensity;if(J.shadow.bias!==void 0)K.shadow.bias=J.shadow.bias;if(J.shadow.normalBias!==void 0)K.shadow.normalBias=J.shadow.normalBias;if(J.shadow.radius!==void 0)K.shadow.radius=J.shadow.radius;if(J.shadow.mapSize!==void 0)K.shadow.mapSize.fromArray(J.shadow.mapSize);if(J.shadow.camera!==void 0)K.shadow.camera=this.parseObject(J.shadow.camera)}if(J.visible!==void 0)K.visible=J.visible;if(J.frustumCulled!==void 0)K.frustumCulled=J.frustumCulled;if(J.renderOrder!==void 0)K.renderOrder=J.renderOrder;if(J.userData!==void 0)K.userData=J.userData;if(J.layers!==void 0)K.layers.mask=J.layers;if(J.children!==void 0){let E=J.children;for(let N=0;N<E.length;N++)K.add(this.parseObject(E[N],Q,Z,$,W))}if(J.animations!==void 0){let E=J.animations;for(let N=0;N<E.length;N++){let q=E[N];K.animations.push(W[q])}}if(J.type==="LOD"){if(J.autoUpdate!==void 0)K.autoUpdate=J.autoUpdate;let E=J.levels;for(let N=0;N<E.length;N++){let q=E[N],R=K.getObjectByProperty("uuid",q.object);if(R!==void 0)K.addLevel(R,q.distance,q.hysteresis)}}return K}bindSkeletons(J,Q){if(Object.keys(Q).length===0)return;J.traverse(function(Z){if(Z.isSkinnedMesh===!0&&Z.skeleton!==void 0){let $=Q[Z.skeleton];if($===void 0)console.warn("THREE.ObjectLoader: No skeleton found with UUID:",Z.skeleton);else Z.bind($,Z.bindMatrix)}})}bindLightTargets(J){J.traverse(function(Q){if(Q.isDirectionalLight||Q.isSpotLight){let Z=Q.target,$=J.getObjectByProperty("uuid",Z);if($!==void 0)Q.target=$;else Q.target=new $0}})}}var cE={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},pK={RepeatWrapping:1000,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},mK={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008},hZ=new WeakMap;class nY extends h0{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap==="undefined")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch==="undefined")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=N8.get(`image-bitmap:${J}`);if(K!==void 0){if(W.manager.itemStart(J),K.then){K.then((X)=>{if(hZ.has(K)===!0){if($)$(hZ.get(K));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(X);return W.manager.itemEnd(J),X}});return}return setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0),K}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(X){if(N8.add(`image-bitmap:${J}`,X),Q)Q(X);return W.manager.itemEnd(J),X}).catch(function(X){if($)$(X);hZ.set(Y,X),N8.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});N8.add(`image-bitmap:${J}`,Y),W.manager.itemStart(J)}}var m6;class aQ{static getContext(){if(m6===void 0)m6=new(window.AudioContext||window.webkitAudioContext);return m6}static setContext(J){m6=J}}class sY extends h0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,K=new q8(this.manager);K.setResponseType("arraybuffer"),K.setPath(this.path),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(J,function(Y){try{let X=Y.slice(0);aQ.getContext().decodeAudioData(X,function(G){Q(G)}).catch(H)}catch(X){H(X)}},Z,$);function H(Y){if($)$(Y);else console.error(Y);W.manager.itemError(J)}}}var dK=new vJ,lK=new vJ,Q9=new vJ;class iY{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=0.064,this.cameraL=new I0,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new I0,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(J){let Q=this._cache;if(Q.focus!==J.focus||Q.fov!==J.fov||Q.aspect!==J.aspect*this.aspect||Q.near!==J.near||Q.far!==J.far||Q.zoom!==J.zoom||Q.eyeSep!==this.eyeSep){Q.focus=J.focus,Q.fov=J.fov,Q.aspect=J.aspect*this.aspect,Q.near=J.near,Q.far=J.far,Q.zoom=J.zoom,Q.eyeSep=this.eyeSep,Q9.copy(J.projectionMatrix);let $=Q.eyeSep/2,W=$*Q.near/Q.focus,K=Q.near*Math.tan(U9*Q.fov*0.5)/Q.zoom,H,Y;lK.elements[12]=-$,dK.elements[12]=$,H=-K*Q.aspect+W,Y=K*Q.aspect+W,Q9.elements[0]=2*Q.near/(Y-H),Q9.elements[8]=(Y+H)/(Y-H),this.cameraL.projectionMatrix.copy(Q9),H=-K*Q.aspect-W,Y=K*Q.aspect-W,Q9.elements[0]=2*Q.near/(Y-H),Q9.elements[8]=(Y+H)/(Y-H),this.cameraR.projectionMatrix.copy(Q9)}this.cameraL.matrixWorld.copy(J.matrixWorld).multiply(lK),this.cameraR.matrixWorld.copy(J.matrixWorld).multiply(dK)}}class IW extends I0{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class _W{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}var Z9=new P,xZ=new b0,nE=new P,$9=new P,W9=new P;class oY extends $0{constructor(){super();this.type="AudioListener",this.context=aQ.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new _W}getInput(){return this.gain}removeFilter(){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null;return this}getFilter(){return this.filter}setFilter(J){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination);else this.gain.disconnect(this.context.destination);return this.filter=J,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}updateMatrixWorld(J){super.updateMatrixWorld(J);let Q=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Z9,xZ,nE),$9.set(0,0,-1).applyQuaternion(xZ),W9.set(0,1,0).applyQuaternion(xZ),Q.positionX){let Z=this.context.currentTime+this.timeDelta;Q.positionX.linearRampToValueAtTime(Z9.x,Z),Q.positionY.linearRampToValueAtTime(Z9.y,Z),Q.positionZ.linearRampToValueAtTime(Z9.z,Z),Q.forwardX.linearRampToValueAtTime($9.x,Z),Q.forwardY.linearRampToValueAtTime($9.y,Z),Q.forwardZ.linearRampToValueAtTime($9.z,Z),Q.upX.linearRampToValueAtTime(W9.x,Z),Q.upY.linearRampToValueAtTime(W9.y,Z),Q.upZ.linearRampToValueAtTime(W9.z,Z)}else Q.setPosition(Z9.x,Z9.y,Z9.z),Q.setOrientation($9.x,$9.y,$9.z,W9.x,W9.y,W9.z)}}class wW extends $0{constructor(J){super();this.type="Audio",this.listener=J,this.context=J.context,this.gain=this.context.createGain(),this.gain.connect(J.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(J){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=J,this.connect(),this}setMediaElementSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(J),this.connect(),this}setMediaStreamSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(J),this.connect(),this}setBuffer(J){if(this.buffer=J,this.sourceType="buffer",this.autoplay)this.play();return this}play(J=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+J;let Q=this.context.createBufferSource();return Q.buffer=this.buffer,Q.loop=this.loop,Q.loopStart=this.loopStart,Q.loopEnd=this.loopEnd,Q.onended=this.onEnded.bind(this),Q.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=Q,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this.isPlaying===!0){if(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0)this._progress=this._progress%(this.duration||this.buffer.duration);this.source.stop(),this.source.onended=null,this.isPlaying=!1}return this}stop(J=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this._progress=0,this.source!==null)this.source.stop(this.context.currentTime+J),this.source.onended=null;return this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].connect(this.filters[J]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected===!1)return;if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].disconnect(this.filters[J]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(J){if(!J)J=[];if(this._connected===!0)this.disconnect(),this.filters=J.slice(),this.connect();else this.filters=J.slice();return this}setDetune(J){if(this.detune=J,this.isPlaying===!0&&this.source.detune!==void 0)this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,0.01);return this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(J){return this.setFilters(J?[J]:[])}setPlaybackRate(J){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this.playbackRate=J,this.isPlaying===!0)this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,0.01);return this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){if(this.hasPlaybackControl===!1)return console.warn("THREE.Audio: this Audio has no playback control."),!1;return this.loop}setLoop(J){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}if(this.loop=J,this.isPlaying===!0)this.source.loop=this.loop;return this}setLoopStart(J){return this.loopStart=J,this}setLoopEnd(J){return this.loopEnd=J,this}getVolume(){return this.gain.gain.value}setVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}copy(J,Q){if(super.copy(J,Q),J.sourceType!=="buffer")return console.warn("THREE.Audio: Audio source type cannot be copied."),this;return this.autoplay=J.autoplay,this.buffer=J.buffer,this.detune=J.detune,this.loop=J.loop,this.loopStart=J.loopStart,this.loopEnd=J.loopEnd,this.offset=J.offset,this.duration=J.duration,this.playbackRate=J.playbackRate,this.hasPlaybackControl=J.hasPlaybackControl,this.sourceType=J.sourceType,this.filters=J.filters.slice(),this}clone(J){return new this.constructor(this.listener).copy(this,J)}}var K9=new P,uK=new b0,sE=new P,H9=new P;class aY extends wW{constructor(J){super(J);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(J){return this.panner.refDistance=J,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(J){return this.panner.rolloffFactor=J,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(J){return this.panner.distanceModel=J,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(J){return this.panner.maxDistance=J,this}setDirectionalCone(J,Q,Z){return this.panner.coneInnerAngle=J,this.panner.coneOuterAngle=Q,this.panner.coneOuterGain=Z,this}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(K9,uK,sE),H9.set(0,0,1).applyQuaternion(uK);let Q=this.panner;if(Q.positionX){let Z=this.context.currentTime+this.listener.timeDelta;Q.positionX.linearRampToValueAtTime(K9.x,Z),Q.positionY.linearRampToValueAtTime(K9.y,Z),Q.positionZ.linearRampToValueAtTime(K9.z,Z),Q.orientationX.linearRampToValueAtTime(H9.x,Z),Q.orientationY.linearRampToValueAtTime(H9.y,Z),Q.orientationZ.linearRampToValueAtTime(H9.z,Z)}else Q.setPosition(K9.x,K9.y,K9.z),Q.setOrientation(H9.x,H9.y,H9.z)}}class rY{constructor(J,Q=2048){this.analyser=J.context.createAnalyser(),this.analyser.fftSize=Q,this.data=new Uint8Array(this.analyser.frequencyBinCount),J.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let J=0,Q=this.getFrequencyData();for(let Z=0;Z<Q.length;Z++)J+=Q[Z];return J/Q.length}}class CW{constructor(J,Q,Z){this.binding=J,this.valueSize=Z;let $,W,K;switch(Q){case"quaternion":$=this._slerp,W=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(Z*6),this._workIndex=5;break;case"string":case"bool":$=this._select,W=this._select,K=this._setAdditiveIdentityOther,this.buffer=new Array(Z*5);break;default:$=this._lerp,W=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(Z*5)}this._mixBufferRegion=$,this._mixBufferRegionAdditive=W,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let Z=this.buffer,$=this.valueSize,W=J*$+$,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==$;++H)Z[W+H]=Z[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion(Z,W,0,H,$)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,Z=this.valueSize,$=Z*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,$,0,J,Z),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,Z=this.buffer,$=J*Q+Q,W=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,W<1){let Y=Q*this._origIndex;this._mixBufferRegion(Z,$,Y,1-W,Q)}if(K>0)this._mixBufferRegionAdditive(Z,$,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if(Z[Y]!==Z[Y+Q]){H.setValue(Z,$);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,Z=this.valueSize,$=Z*this._origIndex;J.getValue(Q,$);for(let W=Z,K=$;W!==K;++W)Q[W]=Q[$+W%Z];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let Z=J;Z<Q;Z++)this.buffer[Z]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let Z=0;Z<this.valueSize;Z++)this.buffer[Q+Z]=this.buffer[J+Z]}_select(J,Q,Z,$,W){if($>=0.5)for(let K=0;K!==W;++K)J[Q+K]=J[Z+K]}_slerp(J,Q,Z,$){b0.slerpFlat(J,Q,J,Q,J,Z,$)}_slerpAdditive(J,Q,Z,$,W){let K=this._workIndex*W;b0.multiplyQuaternionsFlat(J,K,J,Q,J,Z),b0.slerpFlat(J,Q,J,Q,J,K,$)}_lerp(J,Q,Z,$,W){let K=1-$;for(let H=0;H!==W;++H){let Y=Q+H;J[Y]=J[Y]*K+J[Z+H]*$}}_lerpAdditive(J,Q,Z,$,W){for(let K=0;K!==W;++K){let H=Q+K;J[H]=J[H]+J[Z+K]*$}}}var PW="\\[\\]\\.:\\/",iE=new RegExp("["+PW+"]","g"),AW="[^"+PW+"]",oE="[^"+PW.replace("\\.","")+"]",aE=/((?:WC+[\/:])*)/.source.replace("WC",AW),rE=/(WCOD+)?/.source.replace("WCOD",oE),tE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",AW),eE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",AW),JN=new RegExp("^"+aE+rE+tE+eE+"$"),QN=["material","materials","bones","map"];class tY{constructor(J,Q,Z){let $=Z||Q0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,$)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,$=this._bindings[Z];if($!==void 0)$.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let $=this._targetGroup.nCachedObjects_,W=Z.length;$!==W;++$)Z[$].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class Q0{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||Q0.parseTrackName(Q),this.node=Q0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new Q0(J,Q,Z);else return new Q0.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iE,"")}static parseTrackName(J){let Q=JN.exec(J);if(Q===null)throw new Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},$=Z.nodeName&&Z.nodeName.lastIndexOf(".");if($!==void 0&&$!==-1){let W=Z.nodeName.substring($+1);if(QN.indexOf(W)!==-1)Z.nodeName=Z.nodeName.substring(0,$),Z.objectName=W}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=Z(H.children);if(Y)return Y}return null},$=Z(J.children);if($)return $}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)J[Q++]=Z[$]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,$=Q.propertyName,W=Q.propertyIndex;if(!J)J=Q0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let X=Q.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(X!==void 0){if(J[X]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[$];if(K===void 0){let X=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+X+"."+$+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if($==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=$;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Q0.Composite=tY;Q0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Q0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Q0.prototype.GetterByBindingType=[Q0.prototype._getValue_direct,Q0.prototype._getValue_array,Q0.prototype._getValue_arrayElement,Q0.prototype._getValue_toArray];Q0.prototype.SetterByBindingTypeAndVersioning=[[Q0.prototype._setValue_direct,Q0.prototype._setValue_direct_setNeedsUpdate,Q0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Q0.prototype._setValue_array,Q0.prototype._setValue_array_setNeedsUpdate,Q0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Q0.prototype._setValue_arrayElement,Q0.prototype._setValue_arrayElement_setNeedsUpdate,Q0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Q0.prototype._setValue_fromArray,Q0.prototype._setValue_fromArray_setNeedsUpdate,Q0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class eY{constructor(){this.isAnimationObjectGroup=!0,this.uuid=n0(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let J={};this._indicesByUUID=J;for(let Z=0,$=arguments.length;Z!==$;++Z)J[arguments[Z].uuid]=Z;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let Q=this;this.stats={objects:{get total(){return Q._objects.length},get inUse(){return this.total-Q.nCachedObjects_}},get bindingsPerObject(){return Q._bindings.length}}}add(){let J=this._objects,Q=this._indicesByUUID,Z=this._paths,$=this._parsedPaths,W=this._bindings,K=W.length,H=void 0,Y=J.length,X=this.nCachedObjects_;for(let U=0,G=arguments.length;U!==G;++U){let E=arguments[U],N=E.uuid,q=Q[N];if(q===void 0){q=Y++,Q[N]=q,J.push(E);for(let R=0,F=K;R!==F;++R)W[R].push(new Q0(E,Z[R],$[R]))}else if(q<X){H=J[q];let R=--X,F=J[R];Q[F.uuid]=q,J[q]=F,Q[N]=R,J[R]=E;for(let O=0,D=K;O!==D;++O){let k=W[O],M=k[R],B=k[q];if(k[q]=M,B===void 0)B=new Q0(E,Z[O],$[O]);k[R]=B}}else if(J[q]!==H)console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=X}remove(){let J=this._objects,Q=this._indicesByUUID,Z=this._bindings,$=Z.length,W=this.nCachedObjects_;for(let K=0,H=arguments.length;K!==H;++K){let Y=arguments[K],X=Y.uuid,U=Q[X];if(U!==void 0&&U>=W){let G=W++,E=J[G];Q[E.uuid]=U,J[U]=E,Q[X]=G,J[G]=Y;for(let N=0,q=$;N!==q;++N){let R=Z[N],F=R[G],O=R[U];R[U]=F,R[G]=O}}}this.nCachedObjects_=W}uncache(){let J=this._objects,Q=this._indicesByUUID,Z=this._bindings,$=Z.length,W=this.nCachedObjects_,K=J.length;for(let H=0,Y=arguments.length;H!==Y;++H){let X=arguments[H],U=X.uuid,G=Q[U];if(G!==void 0)if(delete Q[U],G<W){let E=--W,N=J[E],q=--K,R=J[q];Q[N.uuid]=G,J[G]=N,Q[R.uuid]=E,J[E]=R,J.pop();for(let F=0,O=$;F!==O;++F){let D=Z[F],k=D[E],M=D[q];D[G]=k,D[E]=M,D.pop()}}else{let E=--K,N=J[E];if(E>0)Q[N.uuid]=G;J[G]=N,J.pop();for(let q=0,R=$;q!==R;++q){let F=Z[q];F[G]=F[E],F.pop()}}}this.nCachedObjects_=W}subscribe_(J,Q){let Z=this._bindingsIndicesByPath,$=Z[J],W=this._bindings;if($!==void 0)return W[$];let K=this._paths,H=this._parsedPaths,Y=this._objects,X=Y.length,U=this.nCachedObjects_,G=new Array(X);$=W.length,Z[J]=$,K.push(J),H.push(Q),W.push(G);for(let E=U,N=Y.length;E!==N;++E){let q=Y[E];G[E]=new Q0(q,J,Q)}return G}unsubscribe_(J){let Q=this._bindingsIndicesByPath,Z=Q[J];if(Z!==void 0){let $=this._paths,W=this._parsedPaths,K=this._bindings,H=K.length-1,Y=K[H],X=J[H];Q[X]=Z,K[Z]=Y,K.pop(),W[Z]=W[H],W.pop(),$[Z]=$[H],$.pop()}}}class TW{constructor(J,Q,Z=null,$=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=Z,this.blendMode=$;let W=Q.tracks,K=W.length,H=new Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=W[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=new Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,Z=!1){if(J.fadeOut(Q),this.fadeIn(Q),Z===!0){let $=this._clip.duration,W=J._clip.duration,K=W/$,H=$/W;J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,Z=!1){return J.crossFadeFrom(this,Q,Z)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,Z){let $=this._mixer,W=$.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=$._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=W,Y[1]=W+Z,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,Z,$){if(!this.enabled){this._updateWeight(J);return}let W=this._startTime;if(W!==null){let Y=(J-W)*Z;if(Y<0||Z===0)Q=0;else this._startTime=null,Q=Z*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(K),X[U].accumulate($,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let Z=this._weightInterpolant;if(Z!==null){let $=Z.evaluate(J)[0];if(Q*=$,J>Z.parameterPositions[1]){if(this.stopFading(),$===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let Z=this._timeScaleInterpolant;if(Z!==null){let $=Z.evaluate(J)[0];if(Q*=$,J>Z.parameterPositions[1])if(this.stopWarping(),Q===0)this.paused=!0;else this.timeScale=Q}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,Z=this.loop,$=this.time+J,W=this._loopCount,K=Z===2202;if(J===0){if(W===-1)return $;return K&&(W&1)===1?Q-$:$}if(Z===2200){if(W===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if($>=Q)$=Q;else if($<0)$=0;else{this.time=$;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=$,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(W===-1)if(J>=0)W=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if($>=Q||$<0){let H=Math.floor($/Q);$-=Q*H,W+=Math.abs(H);let Y=this.repetitions-W;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;$=J>0?Q:0,this.time=$,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=W,this.time=$,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this.time=$;if(K&&(W&1)===1)return Q-$}return $}_setEndings(J,Q,Z){let $=this._interpolantSettings;if(Z)$.endingStart=2401,$.endingEnd=2401;else{if(J)$.endingStart=this.zeroSlopeAtStart?2401:2400;else $.endingStart=2402;if(Q)$.endingEnd=this.zeroSlopeAtEnd?2401:2400;else $.endingEnd=2402}}_scheduleFading(J,Q,Z){let $=this._mixer,W=$.time,K=this._weightInterpolant;if(K===null)K=$._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=W,Y[0]=Q,H[1]=W+J,Y[1]=Z,this}}var ZN=new Float32Array(1);class JX extends H8{constructor(J){super();this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(J,Q){let Z=J._localRoot||this._root,$=J._clip.tracks,W=$.length,K=J._propertyBindings,H=J._interpolants,Y=Z.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let G=0;G!==W;++G){let E=$[G],N=E.name,q=U[N];if(q!==void 0)++q.referenceCount,K[G]=q;else{if(q=K[G],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,N);continue}let R=Q&&Q._propertyBindings[G].binding.parsedPath;q=new CW(Q0.create(Z,N,R),E.ValueTypeName,E.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,N),K[G]=q}H[G].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let Z=(J._localRoot||this._root).uuid,$=J._clip.uuid,W=this._actionsByClip[$];this._bindAction(J,W&&W.knownActions[0]),this._addInactiveAction(J,$,Z)}let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(W.useCount++===0)this._lendBinding(W),W.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(--W.useCount===0)W.restoreOriginalState(),this._takeBackBinding(W)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,Z){let $=this._actions,W=this._actionsByClip,K=W[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,W[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=$.length,$.push(J),K.actionByRoot[Z]=J}_removeInactiveAction(J){let Q=this._actions,Z=Q[Q.length-1],$=J._cacheIndex;Z._cacheIndex=$,Q[$]=Z,Q.pop(),J._cacheIndex=null;let W=J._clip.uuid,K=this._actionsByClip,H=K[W],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let G=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete G[E],Y.length===0)delete K[W];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(--W.referenceCount===0)this._removeInactiveBinding(W)}}_lendAction(J){let Q=this._actions,Z=J._cacheIndex,$=this._nActiveActions++,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_takeBackAction(J){let Q=this._actions,Z=J._cacheIndex,$=--this._nActiveActions,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_addInactiveBinding(J,Q,Z){let $=this._bindingsByRootAndName,W=this._bindings,K=$[Q];if(K===void 0)K={},$[Q]=K;K[Z]=J,J._cacheIndex=W.length,W.push(J)}_removeInactiveBinding(J){let Q=this._bindings,Z=J.binding,$=Z.rootNode.uuid,W=Z.path,K=this._bindingsByRootAndName,H=K[$],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[W],Object.keys(H).length===0)delete K[$]}_lendBinding(J){let Q=this._bindings,Z=J._cacheIndex,$=this._nActiveBindings++,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_takeBackBinding(J){let Q=this._bindings,Z=J._cacheIndex,$=--this._nActiveBindings,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,Z=J[Q];if(Z===void 0)Z=new cQ(new Float32Array(2),new Float32Array(2),1,ZN),Z.__cacheIndex=Q,J[Q]=Z;return Z}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,Z=J.__cacheIndex,$=--this._nActiveControlInterpolants,W=Q[$];J.__cacheIndex=$,Q[$]=J,W.__cacheIndex=Z,Q[Z]=W}clipAction(J,Q,Z){let $=Q||this._root,W=$.uuid,K=typeof J==="string"?r9.findByName($,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if(Z===void 0)if(K!==null)Z=K.blendMode;else Z=2500;if(Y!==void 0){let G=Y.actionByRoot[W];if(G!==void 0&&G.blendMode===Z)return G;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new TW(this,K,Q,Z);return this._bindAction(U,X),this._addInactiveAction(U,H,W),U}existingAction(J,Q){let Z=Q||this._root,$=Z.uuid,W=typeof J==="string"?r9.findByName(Z,J):J,K=W?W.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[$]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let Z=Q-1;Z>=0;--Z)J[Z].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,Z=this._nActiveActions,$=this.time+=J,W=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==Z;++X)Q[X]._update($,J,W,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,Z=J.uuid,$=this._actionsByClip,W=$[Z];if(W!==void 0){let K=W.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,G=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,G._cacheIndex=U,Q[U]=G,Q.pop(),this._removeInactiveBindingsForAction(X)}delete $[Z]}}uncacheRoot(J){let Q=J.uuid,Z=this._actionsByClip;for(let K in Z){let H=Z[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let $=this._bindingsByRootAndName,W=$[Q];if(W!==void 0)for(let K in W){let H=W[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let Z=this.existingAction(J,Q);if(Z!==null)this._deactivateAction(Z),this._removeInactiveAction(Z)}}class QX extends DQ{constructor(J=1,Q=1,Z=1,$={}){super(J,Q,$);this.isRenderTarget3D=!0,this.depth=Z,this.texture=new u7(null,J,Q,Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}}class SW{constructor(J){this.value=J}clone(){return new SW(this.value.clone===void 0?this.value:this.value.clone())}}var $N=0;class ZX extends H8{constructor(){super();this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:$N++}),this.name="",this.usage=35044,this.uniforms=[]}add(J){return this.uniforms.push(J),this}remove(J){let Q=this.uniforms.indexOf(J);if(Q!==-1)this.uniforms.splice(Q,1);return this}setName(J){return this.name=J,this}setUsage(J){return this.usage=J,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(J){this.name=J.name,this.usage=J.usage;let Q=J.uniforms;this.uniforms.length=0;for(let Z=0,$=Q.length;Z<$;Z++){let W=Array.isArray(Q[Z])?Q[Z]:[Q[Z]];for(let K=0;K<W.length;K++)this.uniforms.push(W[K].clone())}return this}clone(){return new this.constructor().copy(this)}}class $X extends i7{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class WX{constructor(J,Q,Z,$,W,K=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=J,this.type=Q,this.itemSize=Z,this.elementSize=$,this.count=W,this.normalized=K,this.version=0}set needsUpdate(J){if(J===!0)this.version++}setBuffer(J){return this.buffer=J,this}setType(J,Q){return this.type=J,this.elementSize=Q,this}setItemSize(J){return this.itemSize=J,this}setCount(J){return this.count=J,this}}var cK=new vJ;class KX{constructor(J,Q,Z=0,$=1/0){this.ray=new M9(J,Q),this.near=Z,this.far=$,this.camera=null,this.layers=new c7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else console.error("THREE.Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return cK.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cK),this}intersectObject(J,Q=!0,Z=[]){return cZ(J,this,Z,Q),Z.sort(nK),Z}intersectObjects(J,Q=!0,Z=[]){for(let $=0,W=J.length;$<W;$++)cZ(J[$],this,Z,Q);return Z.sort(nK),Z}}function nK(J,Q){return J.distance-Q.distance}function cZ(J,Q,Z,$){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,Z)===!1)W=!1}if(W===!0&&$===!0){let K=J.children;for(let H=0,Y=K.length;H<Y;H++)cZ(K[H],Q,Z,!0)}}class HX{constructor(J=1,Q=0,Z=0){this.radius=J,this.phi=Q,this.theta=Z}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=pJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(pJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class YX{constructor(J=1,Q=0,Z=0){this.radius=J,this.theta=Q,this.y=Z}set(J,Q,Z){return this.radius=J,this.theta=Q,this.y=Z,this}copy(J){return this.radius=J.radius,this.theta=J.theta,this.y=J.y,this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){return this.radius=Math.sqrt(J*J+Z*Z),this.theta=Math.atan2(J,Z),this.y=Q,this}clone(){return new this.constructor().copy(this)}}class jW{constructor(J,Q,Z,$){if(jW.prototype.isMatrix2=!0,this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,$)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,$){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=Z,W[3]=$,this}}var sK=new o;class XX{constructor(J=new o(1/0,1/0),Q=new o(-1/0,-1/0)){this.isBox2=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=sK.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(J){return this.isEmpty()?J.set(0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,sK).distanceTo(J)}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var iK=new P,d6=new P;class UX{constructor(J=new P,Q=new P){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){iK.subVectors(J,this.start),d6.subVectors(this.end,this.start);let Z=d6.dot(d6),W=d6.dot(iK)/Z;if(Q)W=pJ(W,0,1);return W}closestPointToPoint(J,Q,Z){let $=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar($).add(this.start)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}var oK=new P;class GX extends $0{constructor(J,Q){super();this.light=J,this.matrixAutoUpdate=!1,this.color=Q,this.type="SpotLightHelper";let Z=new cJ,$=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let K=0,H=1,Y=32;K<Y;K++,H++){let X=K/Y*Math.PI*2,U=H/Y*Math.PI*2;$.push(Math.cos(X),Math.sin(X),1,Math.cos(U),Math.sin(U),1)}Z.setAttribute("position",new kJ($,3));let W=new j0({fog:!1,toneMapped:!1});this.cone=new X8(Z,W),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent)this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld);else this.matrix.copy(this.light.matrixWorld);this.matrixWorld.copy(this.light.matrixWorld);let J=this.light.distance?this.light.distance:1000,Q=J*Math.tan(this.light.angle);if(this.cone.scale.set(Q,Q,J),oK.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(oK),this.color!==void 0)this.cone.material.color.set(this.color);else this.cone.material.color.copy(this.light.color)}}var g8=new P,l6=new vJ,gZ=new vJ;class EX extends X8{constructor(J){let Q=NX(J),Z=new cJ,$=[],W=[],K=new RJ(0,0,1),H=new RJ(0,1,0);for(let X=0;X<Q.length;X++){let U=Q[X];if(U.parent&&U.parent.isBone)$.push(0,0,0),$.push(0,0,0),W.push(K.r,K.g,K.b),W.push(H.r,H.g,H.b)}Z.setAttribute("position",new kJ($,3)),Z.setAttribute("color",new kJ(W,3));let Y=new j0({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(Z,Y);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=J,this.bones=Q,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(J){let Q=this.bones,Z=this.geometry,$=Z.getAttribute("position");gZ.copy(this.root.matrixWorld).invert();for(let W=0,K=0;W<Q.length;W++){let H=Q[W];if(H.parent&&H.parent.isBone)l6.multiplyMatrices(gZ,H.matrixWorld),g8.setFromMatrixPosition(l6),$.setXYZ(K,g8.x,g8.y,g8.z),l6.multiplyMatrices(gZ,H.parent.matrixWorld),g8.setFromMatrixPosition(l6),$.setXYZ(K+1,g8.x,g8.y,g8.z),K+=2}Z.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose()}}function NX(J){let Q=[];if(J.isBone===!0)Q.push(J);for(let Z=0;Z<J.children.length;Z++)Q.push(...NX(J.children[Z]));return Q}class qX extends k0{constructor(J,Q,Z){let $=new J6(Q,4,2),W=new S8({wireframe:!0,fog:!1,toneMapped:!1});super($,W);this.light=J,this.color=Z,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.color!==void 0)this.material.color.set(this.color);else this.material.color.copy(this.light.color)}}var WN=new P,aK=new RJ,rK=new RJ;class DX extends $0{constructor(J,Q,Z){super();this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=Z,this.type="HemisphereLightHelper";let $=new e7(Q);if($.rotateY(Math.PI*0.5),this.material=new S8({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0)this.material.vertexColors=!0;let W=$.getAttribute("position"),K=new Float32Array(W.count*3);$.setAttribute("color",new H0(K,3)),this.add(new k0($,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let J=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let Q=J.geometry.getAttribute("color");aK.copy(this.light.color),rK.copy(this.light.groundColor);for(let Z=0,$=Q.count;Z<$;Z++){let W=Z<$/2?aK:rK;Q.setXYZ(Z,W.r,W.g,W.b)}Q.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),J.lookAt(WN.setFromMatrixPosition(this.light.matrixWorld).negate())}}class OX extends X8{constructor(J=10,Q=10,Z=4473924,$=8947848){Z=new RJ(Z),$=new RJ($);let W=Q/2,K=J/Q,H=J/2,Y=[],X=[];for(let E=0,N=0,q=-H;E<=Q;E++,q+=K){Y.push(-H,0,q,H,0,q),Y.push(q,0,-H,q,0,H);let R=E===W?Z:$;R.toArray(X,N),N+=3,R.toArray(X,N),N+=3,R.toArray(X,N),N+=3,R.toArray(X,N),N+=3}let U=new cJ;U.setAttribute("position",new kJ(Y,3)),U.setAttribute("color",new kJ(X,3));let G=new j0({vertexColors:!0,toneMapped:!1});super(U,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class RX extends X8{constructor(J=10,Q=16,Z=8,$=64,W=4473924,K=8947848){W=new RJ(W),K=new RJ(K);let H=[],Y=[];if(Q>1)for(let G=0;G<Q;G++){let E=G/Q*(Math.PI*2),N=Math.sin(E)*J,q=Math.cos(E)*J;H.push(0,0,0),H.push(N,0,q);let R=G&1?W:K;Y.push(R.r,R.g,R.b),Y.push(R.r,R.g,R.b)}for(let G=0;G<Z;G++){let E=G&1?W:K,N=J-J/Z*G;for(let q=0;q<$;q++){let R=q/$*(Math.PI*2),F=Math.sin(R)*N,O=Math.cos(R)*N;H.push(F,0,O),Y.push(E.r,E.g,E.b),R=(q+1)/$*(Math.PI*2),F=Math.sin(R)*N,O=Math.cos(R)*N,H.push(F,0,O),Y.push(E.r,E.g,E.b)}}let X=new cJ;X.setAttribute("position",new kJ(H,3)),X.setAttribute("color",new kJ(Y,3));let U=new j0({vertexColors:!0,toneMapped:!1});super(X,U);this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}var tK=new P,u6=new P,eK=new P;class FX extends $0{constructor(J,Q,Z){super();if(this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=Z,this.type="DirectionalLightHelper",Q===void 0)Q=1;let $=new cJ;$.setAttribute("position",new kJ([-Q,Q,0,Q,Q,0,Q,-Q,0,-Q,-Q,0,-Q,Q,0],3));let W=new j0({fog:!1,toneMapped:!1});this.lightPlane=new A8($,W),this.add(this.lightPlane),$=new cJ,$.setAttribute("position",new kJ([0,0,0,0,0,1],3)),this.targetLine=new A8($,W),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),tK.setFromMatrixPosition(this.light.matrixWorld),u6.setFromMatrixPosition(this.light.target.matrixWorld),eK.subVectors(u6,tK),this.lightPlane.lookAt(u6),this.color!==void 0)this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color);else this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color);this.targetLine.lookAt(u6),this.targetLine.scale.z=eK.length()}}var c6=new P,R0=new n7;class MX extends X8{constructor(J){let Q=new cJ,Z=new j0({color:16777215,vertexColors:!0,toneMapped:!1}),$=[],W=[],K={};H("n1","n2"),H("n2","n4"),H("n4","n3"),H("n3","n1"),H("f1","f2"),H("f2","f4"),H("f4","f3"),H("f3","f1"),H("n1","f1"),H("n2","f2"),H("n3","f3"),H("n4","f4"),H("p","n1"),H("p","n2"),H("p","n3"),H("p","n4"),H("u1","u2"),H("u2","u3"),H("u3","u1"),H("c","t"),H("p","c"),H("cn1","cn2"),H("cn3","cn4"),H("cf1","cf2"),H("cf3","cf4");function H(q,R){Y(q),Y(R)}function Y(q){if($.push(0,0,0),W.push(0,0,0),K[q]===void 0)K[q]=[];K[q].push($.length/3-1)}Q.setAttribute("position",new kJ($,3)),Q.setAttribute("color",new kJ(W,3));super(Q,Z);if(this.type="CameraHelper",this.camera=J,this.camera.updateProjectionMatrix)this.camera.updateProjectionMatrix();this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=K,this.update();let X=new RJ(16755200),U=new RJ(16711680),G=new RJ(43775),E=new RJ(16777215),N=new RJ(3355443);this.setColors(X,U,G,E,N)}setColors(J,Q,Z,$,W){let H=this.geometry.getAttribute("color");H.setXYZ(0,J.r,J.g,J.b),H.setXYZ(1,J.r,J.g,J.b),H.setXYZ(2,J.r,J.g,J.b),H.setXYZ(3,J.r,J.g,J.b),H.setXYZ(4,J.r,J.g,J.b),H.setXYZ(5,J.r,J.g,J.b),H.setXYZ(6,J.r,J.g,J.b),H.setXYZ(7,J.r,J.g,J.b),H.setXYZ(8,J.r,J.g,J.b),H.setXYZ(9,J.r,J.g,J.b),H.setXYZ(10,J.r,J.g,J.b),H.setXYZ(11,J.r,J.g,J.b),H.setXYZ(12,J.r,J.g,J.b),H.setXYZ(13,J.r,J.g,J.b),H.setXYZ(14,J.r,J.g,J.b),H.setXYZ(15,J.r,J.g,J.b),H.setXYZ(16,J.r,J.g,J.b),H.setXYZ(17,J.r,J.g,J.b),H.setXYZ(18,J.r,J.g,J.b),H.setXYZ(19,J.r,J.g,J.b),H.setXYZ(20,J.r,J.g,J.b),H.setXYZ(21,J.r,J.g,J.b),H.setXYZ(22,J.r,J.g,J.b),H.setXYZ(23,J.r,J.g,J.b),H.setXYZ(24,Q.r,Q.g,Q.b),H.setXYZ(25,Q.r,Q.g,Q.b),H.setXYZ(26,Q.r,Q.g,Q.b),H.setXYZ(27,Q.r,Q.g,Q.b),H.setXYZ(28,Q.r,Q.g,Q.b),H.setXYZ(29,Q.r,Q.g,Q.b),H.setXYZ(30,Q.r,Q.g,Q.b),H.setXYZ(31,Q.r,Q.g,Q.b),H.setXYZ(32,Z.r,Z.g,Z.b),H.setXYZ(33,Z.r,Z.g,Z.b),H.setXYZ(34,Z.r,Z.g,Z.b),H.setXYZ(35,Z.r,Z.g,Z.b),H.setXYZ(36,Z.r,Z.g,Z.b),H.setXYZ(37,Z.r,Z.g,Z.b),H.setXYZ(38,$.r,$.g,$.b),H.setXYZ(39,$.r,$.g,$.b),H.setXYZ(40,W.r,W.g,W.b),H.setXYZ(41,W.r,W.g,W.b),H.setXYZ(42,W.r,W.g,W.b),H.setXYZ(43,W.r,W.g,W.b),H.setXYZ(44,W.r,W.g,W.b),H.setXYZ(45,W.r,W.g,W.b),H.setXYZ(46,W.r,W.g,W.b),H.setXYZ(47,W.r,W.g,W.b),H.setXYZ(48,W.r,W.g,W.b),H.setXYZ(49,W.r,W.g,W.b),H.needsUpdate=!0}update(){let J=this.geometry,Q=this.pointMap,Z=1,$=1;R0.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);let W=this.camera.coordinateSystem===2000?-1:0;M0("c",Q,J,R0,0,0,W),M0("t",Q,J,R0,0,0,1),M0("n1",Q,J,R0,-1,-1,W),M0("n2",Q,J,R0,1,-1,W),M0("n3",Q,J,R0,-1,1,W),M0("n4",Q,J,R0,1,1,W),M0("f1",Q,J,R0,-1,-1,1),M0("f2",Q,J,R0,1,-1,1),M0("f3",Q,J,R0,-1,1,1),M0("f4",Q,J,R0,1,1,1),M0("u1",Q,J,R0,0.7,1.1,W),M0("u2",Q,J,R0,-0.7,1.1,W),M0("u3",Q,J,R0,0,2,W),M0("cf1",Q,J,R0,-1,0,1),M0("cf2",Q,J,R0,1,0,1),M0("cf3",Q,J,R0,0,-1,1),M0("cf4",Q,J,R0,0,1,1),M0("cn1",Q,J,R0,-1,0,W),M0("cn2",Q,J,R0,1,0,W),M0("cn3",Q,J,R0,0,-1,W),M0("cn4",Q,J,R0,0,1,W),J.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function M0(J,Q,Z,$,W,K,H){c6.set(W,K,H).unproject($);let Y=Q[J];if(Y!==void 0){let X=Z.getAttribute("position");for(let U=0,G=Y.length;U<G;U++)X.setXYZ(Y[U],c6.x,c6.y,c6.z)}}var n6=new w0;class kX extends X8{constructor(J,Q=16776960){let Z=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),$=new Float32Array(24),W=new cJ;W.setIndex(new H0(Z,1)),W.setAttribute("position",new H0($,3));super(W,new j0({color:Q,toneMapped:!1}));this.object=J,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0)n6.setFromObject(this.object);if(n6.isEmpty())return;let{min:J,max:Q}=n6,Z=this.geometry.attributes.position,$=Z.array;$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=J.x,$[4]=Q.y,$[5]=Q.z,$[6]=J.x,$[7]=J.y,$[8]=Q.z,$[9]=Q.x,$[10]=J.y,$[11]=Q.z,$[12]=Q.x,$[13]=Q.y,$[14]=J.z,$[15]=J.x,$[16]=Q.y,$[17]=J.z,$[18]=J.x,$[19]=J.y,$[20]=J.z,$[21]=Q.x,$[22]=J.y,$[23]=J.z,Z.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(J){return this.object=J,this.update(),this}copy(J,Q){return super.copy(J,Q),this.object=J.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class VX extends X8{constructor(J,Q=16776960){let Z=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),$=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],W=new cJ;W.setIndex(new H0(Z,1)),W.setAttribute("position",new kJ($,3));super(W,new j0({color:Q,toneMapped:!1}));this.box=J,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(J){let Q=this.box;if(Q.isEmpty())return;Q.getCenter(this.position),Q.getSize(this.scale),this.scale.multiplyScalar(0.5),super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose()}}class LX extends A8{constructor(J,Q=1,Z=16776960){let $=Z,W=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],K=new cJ;K.setAttribute("position",new kJ(W,3)),K.computeBoundingSphere();super(K,new j0({color:$,toneMapped:!1}));this.type="PlaneHelper",this.plane=J,this.size=Q;let H=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],Y=new cJ;Y.setAttribute("position",new kJ(H,3)),Y.computeBoundingSphere(),this.add(new k0(Y,new S8({color:$,opacity:0.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(J){this.position.set(0,0,0),this.scale.set(0.5*this.size,0.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var JH=new P,s6,pZ;class zX extends $0{constructor(J=new P(0,0,1),Q=new P(0,0,0),Z=1,$=16776960,W=Z*0.2,K=W*0.2){super();if(this.type="ArrowHelper",s6===void 0)s6=new cJ,s6.setAttribute("position",new kJ([0,0,0,0,1,0],3)),pZ=new r7(0.5,1,5,1),pZ.translate(0,-0.5,0);this.position.copy(Q),this.line=new A8(s6,new j0({color:$,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new k0(pZ,new S8({color:$,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(J),this.setLength(Z,W,K)}setDirection(J){if(J.y>0.99999)this.quaternion.set(0,0,0,1);else if(J.y<-0.99999)this.quaternion.set(1,0,0,0);else{JH.set(J.z,0,-J.x).normalize();let Q=Math.acos(J.y);this.quaternion.setFromAxisAngle(JH,Q)}}setLength(J,Q=J*0.2,Z=Q*0.2){this.line.scale.set(1,Math.max(0.0001,J-Q),1),this.line.updateMatrix(),this.cone.scale.set(Z,Q,Z),this.cone.position.y=J,this.cone.updateMatrix()}setColor(J){this.line.material.color.set(J),this.cone.material.color.set(J)}copy(J){return super.copy(J,!1),this.line.copy(J.line),this.cone.copy(J.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class BX extends X8{constructor(J=1){let Q=[0,0,0,J,0,0,0,0,0,0,J,0,0,0,0,0,0,J],Z=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],$=new cJ;$.setAttribute("position",new kJ(Q,3)),$.setAttribute("color",new kJ(Z,3));let W=new j0({vertexColors:!0,toneMapped:!1});super($,W);this.type="AxesHelper"}setColors(J,Q,Z){let $=new RJ,W=this.geometry.attributes.color.array;return $.set(J),$.toArray(W,0),$.toArray(W,3),$.set(Q),$.toArray(W,6),$.toArray(W,9),$.set(Z),$.toArray(W,12),$.toArray(W,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IX{constructor(){this.type="ShapePath",this.color=new RJ,this.subPaths=[],this.currentPath=null}moveTo(J,Q){return this.currentPath=new S7,this.subPaths.push(this.currentPath),this.currentPath.moveTo(J,Q),this}lineTo(J,Q){return this.currentPath.lineTo(J,Q),this}quadraticCurveTo(J,Q,Z,$){return this.currentPath.quadraticCurveTo(J,Q,Z,$),this}bezierCurveTo(J,Q,Z,$,W,K){return this.currentPath.bezierCurveTo(J,Q,Z,$,W,K),this}splineThru(J){return this.currentPath.splineThru(J),this}toShapes(J){function Q(O){let D=[];for(let k=0,M=O.length;k<M;k++){let B=O[k],T=new p8;T.curves=B.curves,D.push(T)}return D}function Z(O,D){let k=D.length,M=!1;for(let B=k-1,T=0;T<k;B=T++){let _=D[B],C=D[T],y=C.x-_.x,L=C.y-_.y;if(Math.abs(L)>Number.EPSILON){if(L<0)_=D[T],y=-y,C=D[B],L=-L;if(O.y<_.y||O.y>C.y)continue;if(O.y===_.y){if(O.x===_.x)return!0}else{let I=L*(O.x-_.x)-y*(O.y-_.y);if(I===0)return!0;if(I<0)continue;M=!M}}else{if(O.y!==_.y)continue;if(C.x<=O.x&&O.x<=_.x||_.x<=O.x&&O.x<=C.x)return!0}}return M}let $=W8.isClockWise,W=this.subPaths;if(W.length===0)return[];let K,H,Y,X=[];if(W.length===1)return H=W[0],Y=new p8,Y.curves=H.curves,X.push(Y),X;let U=!$(W[0].getPoints());U=J?!U:U;let G=[],E=[],N=[],q=0,R;E[q]=void 0,N[q]=[];for(let O=0,D=W.length;O<D;O++)if(H=W[O],R=H.getPoints(),K=$(R),K=J?!K:K,K){if(!U&&E[q])q++;if(E[q]={s:new p8,p:R},E[q].s.curves=H.curves,U)q++;N[q]=[]}else N[q].push({h:H,p:R[0]});if(!E[0])return Q(W);if(E.length>1){let O=!1,D=0;for(let k=0,M=E.length;k<M;k++)G[k]=[];for(let k=0,M=E.length;k<M;k++){let B=N[k];for(let T=0;T<B.length;T++){let _=B[T],C=!0;for(let y=0;y<E.length;y++)if(Z(_.p,E[y].p)){if(k!==y)D++;if(C)C=!1,G[y].push(_);else O=!0}if(C)G[k].push(_)}}if(D>0&&O===!1)N=G}let F;for(let O=0,D=E.length;O<D;O++){Y=E[O].s,X.push(Y),F=N[O];for(let k=0,M=F.length;k<M;k++)Y.holes.push(F[k].h)}return X}}class _X extends H8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(J===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function KN(J,Q){let Z=J.image&&J.image.width?J.image.width/J.image.height:1;if(Z>Q)J.repeat.x=1,J.repeat.y=Z/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;else J.repeat.x=Q/Z,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;return J}function HN(J,Q){let Z=J.image&&J.image.width?J.image.width/J.image.height:1;if(Z>Q)J.repeat.x=Q/Z,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;else J.repeat.x=1,J.repeat.y=Z/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;return J}function YN(J){return J.repeat.x=1,J.repeat.y=1,J.offset.x=0,J.offset.y=0,J}function rQ(J,Q,Z,$){let W=XN($);switch(Z){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function XN(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}class wX{static contain(J,Q){return KN(J,Q)}static cover(J,Q){return HN(J,Q)}static fill(J){return YN(J)}static getByteLength(J,Q,Z,$){return rQ(J,Q,Z,$)}}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}}));if(typeof window!=="undefined")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="178";function aX(){let J=null,Q=!1,Z=null,$=null;function W(K,H){Z(K,H),$=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if(Z===null)return;$=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame($),Q=!1},setAnimationLoop:function(K){Z=K},setContext:function(K){J=K}}}function UN(J){let Q=new WeakMap;function Z(Y,X){let{array:U,usage:G}=Y,E=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array!=="undefined"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function $(Y,X,U){let{array:G,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,G);else{E.sort((q,R)=>q.start-R.start);let N=0;for(let q=1;q<E.length;q++){let R=E[N],F=E[q];if(F.start<=R.start+R.count+1)R.count=Math.max(R.count,F.start+F.count-R.start);else++N,E[N]=F}E.length=N+1;for(let q=0,R=E.length;q<R;q++){let F=E[q];J.bufferSubData(U,F.start*G.BYTES_PER_ELEMENT,G,F.start,F.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,Z(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");$(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var GN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ON=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MN=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_N=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pN="gl_FragColor = linearToOutputTexel( gl_FragColor );",mN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jq=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qq=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zq=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$q=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wq=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xq=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uq=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gq=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nq=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dq=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oq=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rq=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fq=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mq=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vq=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lq=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zq=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bq=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iq=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_q=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wq=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cq=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pq=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aq=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tq=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sq=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jq=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yq=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vq=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fq=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bq=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hq=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gq=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pq=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mq=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oJ={alphahash_fragment:GN,alphahash_pars_fragment:EN,alphamap_fragment:NN,alphamap_pars_fragment:qN,alphatest_fragment:DN,alphatest_pars_fragment:ON,aomap_fragment:RN,aomap_pars_fragment:FN,batching_pars_vertex:MN,batching_vertex:kN,begin_vertex:VN,beginnormal_vertex:LN,bsdfs:zN,iridescence_fragment:BN,bumpmap_pars_fragment:IN,clipping_planes_fragment:_N,clipping_planes_pars_fragment:wN,clipping_planes_pars_vertex:CN,clipping_planes_vertex:PN,color_fragment:AN,color_pars_fragment:TN,color_pars_vertex:SN,color_vertex:jN,common:yN,cube_uv_reflection_fragment:vN,defaultnormal_vertex:fN,displacementmap_pars_vertex:bN,displacementmap_vertex:hN,emissivemap_fragment:xN,emissivemap_pars_fragment:gN,colorspace_fragment:pN,colorspace_pars_fragment:mN,envmap_fragment:dN,envmap_common_pars_fragment:lN,envmap_pars_fragment:uN,envmap_pars_vertex:cN,envmap_physical_pars_fragment:Z1,envmap_vertex:nN,fog_vertex:sN,fog_pars_vertex:iN,fog_fragment:oN,fog_pars_fragment:aN,gradientmap_pars_fragment:rN,lightmap_pars_fragment:tN,lights_lambert_fragment:eN,lights_lambert_pars_fragment:J1,lights_pars_begin:Q1,lights_toon_fragment:$1,lights_toon_pars_fragment:W1,lights_phong_fragment:K1,lights_phong_pars_fragment:H1,lights_physical_fragment:Y1,lights_physical_pars_fragment:X1,lights_fragment_begin:U1,lights_fragment_maps:G1,lights_fragment_end:E1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:D1,logdepthbuf_vertex:O1,map_fragment:R1,map_pars_fragment:F1,map_particle_fragment:M1,map_particle_pars_fragment:k1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:L1,morphinstance_vertex:z1,morphcolor_vertex:B1,morphnormal_vertex:I1,morphtarget_pars_vertex:_1,morphtarget_vertex:w1,normal_fragment_begin:C1,normal_fragment_maps:P1,normal_pars_fragment:A1,normal_pars_vertex:T1,normal_vertex:S1,normalmap_pars_fragment:j1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:v1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:b1,opaque_fragment:h1,packing:x1,premultiplied_alpha_fragment:g1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:d1,roughnessmap_fragment:l1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:n1,shadowmap_vertex:s1,shadowmask_pars_fragment:i1,skinbase_vertex:o1,skinning_pars_vertex:a1,skinning_vertex:r1,skinnormal_vertex:t1,specularmap_fragment:e1,specularmap_pars_fragment:Jq,tonemapping_fragment:Qq,tonemapping_pars_fragment:Zq,transmission_fragment:$q,transmission_pars_fragment:Wq,uv_pars_fragment:Kq,uv_pars_vertex:Hq,uv_vertex:Yq,worldpos_vertex:Xq,background_vert:Uq,background_frag:Gq,backgroundCube_vert:Eq,backgroundCube_frag:Nq,cube_vert:qq,cube_frag:Dq,depth_vert:Oq,depth_frag:Rq,distanceRGBA_vert:Fq,distanceRGBA_frag:Mq,equirect_vert:kq,equirect_frag:Vq,linedashed_vert:Lq,linedashed_frag:zq,meshbasic_vert:Bq,meshbasic_frag:Iq,meshlambert_vert:_q,meshlambert_frag:wq,meshmatcap_vert:Cq,meshmatcap_frag:Pq,meshnormal_vert:Aq,meshnormal_frag:Tq,meshphong_vert:Sq,meshphong_frag:jq,meshphysical_vert:yq,meshphysical_frag:vq,meshtoon_vert:fq,meshtoon_frag:bq,points_vert:hq,points_frag:xq,shadow_vert:gq,shadow_frag:pq,sprite_vert:mq,sprite_frag:dq},EJ={common:{diffuse:{value:new RJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dJ},alphaMap:{value:null},alphaMapTransform:{value:new dJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dJ}},envmap:{envMap:{value:null},envMapRotation:{value:new dJ},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dJ},normalScale:{value:new o(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new RJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new RJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dJ},alphaTest:{value:0},uvTransform:{value:new dJ}},sprite:{diffuse:{value:new RJ(16777215)},opacity:{value:1},center:{value:new o(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dJ},alphaMap:{value:null},alphaMapTransform:{value:new dJ},alphaTest:{value:0}}},F8={basic:{uniforms:S0([EJ.common,EJ.specularmap,EJ.envmap,EJ.aomap,EJ.lightmap,EJ.fog]),vertexShader:oJ.meshbasic_vert,fragmentShader:oJ.meshbasic_frag},lambert:{uniforms:S0([EJ.common,EJ.specularmap,EJ.envmap,EJ.aomap,EJ.lightmap,EJ.emissivemap,EJ.bumpmap,EJ.normalmap,EJ.displacementmap,EJ.fog,EJ.lights,{emissive:{value:new RJ(0)}}]),vertexShader:oJ.meshlambert_vert,fragmentShader:oJ.meshlambert_frag},phong:{uniforms:S0([EJ.common,EJ.specularmap,EJ.envmap,EJ.aomap,EJ.lightmap,EJ.emissivemap,EJ.bumpmap,EJ.normalmap,EJ.displacementmap,EJ.fog,EJ.lights,{emissive:{value:new RJ(0)},specular:{value:new RJ(1118481)},shininess:{value:30}}]),vertexShader:oJ.meshphong_vert,fragmentShader:oJ.meshphong_frag},standard:{uniforms:S0([EJ.common,EJ.envmap,EJ.aomap,EJ.lightmap,EJ.emissivemap,EJ.bumpmap,EJ.normalmap,EJ.displacementmap,EJ.roughnessmap,EJ.metalnessmap,EJ.fog,EJ.lights,{emissive:{value:new RJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oJ.meshphysical_vert,fragmentShader:oJ.meshphysical_frag},toon:{uniforms:S0([EJ.common,EJ.aomap,EJ.lightmap,EJ.emissivemap,EJ.bumpmap,EJ.normalmap,EJ.displacementmap,EJ.gradientmap,EJ.fog,EJ.lights,{emissive:{value:new RJ(0)}}]),vertexShader:oJ.meshtoon_vert,fragmentShader:oJ.meshtoon_frag},matcap:{uniforms:S0([EJ.common,EJ.bumpmap,EJ.normalmap,EJ.displacementmap,EJ.fog,{matcap:{value:null}}]),vertexShader:oJ.meshmatcap_vert,fragmentShader:oJ.meshmatcap_frag},points:{uniforms:S0([EJ.points,EJ.fog]),vertexShader:oJ.points_vert,fragmentShader:oJ.points_frag},dashed:{uniforms:S0([EJ.common,EJ.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oJ.linedashed_vert,fragmentShader:oJ.linedashed_frag},depth:{uniforms:S0([EJ.common,EJ.displacementmap]),vertexShader:oJ.depth_vert,fragmentShader:oJ.depth_frag},normal:{uniforms:S0([EJ.common,EJ.bumpmap,EJ.normalmap,EJ.displacementmap,{opacity:{value:1}}]),vertexShader:oJ.meshnormal_vert,fragmentShader:oJ.meshnormal_frag},sprite:{uniforms:S0([EJ.sprite,EJ.fog]),vertexShader:oJ.sprite_vert,fragmentShader:oJ.sprite_frag},background:{uniforms:{uvTransform:{value:new dJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oJ.background_vert,fragmentShader:oJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dJ}},vertexShader:oJ.backgroundCube_vert,fragmentShader:oJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oJ.cube_vert,fragmentShader:oJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oJ.equirect_vert,fragmentShader:oJ.equirect_frag},distanceRGBA:{uniforms:S0([EJ.common,EJ.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:oJ.distanceRGBA_vert,fragmentShader:oJ.distanceRGBA_frag},shadow:{uniforms:S0([EJ.lights,EJ.fog,{color:{value:new RJ(0)},opacity:{value:1}}]),vertexShader:oJ.shadow_vert,fragmentShader:oJ.shadow_frag}};F8.physical={uniforms:S0([F8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dJ},clearcoatNormalScale:{value:new o(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dJ},sheen:{value:0},sheenColor:{value:new RJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dJ},transmissionSamplerSize:{value:new o},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dJ},attenuationDistance:{value:0},attenuationColor:{value:new RJ(0)},specularColor:{value:new RJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dJ},anisotropyVector:{value:new o},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dJ}}]),vertexShader:oJ.meshphysical_vert,fragmentShader:oJ.meshphysical_frag};var tQ={r:0,b:0,g:0},z9=new s0,lq=new vJ;function uq(J,Q,Z,$,W,K,H){let Y=new RJ(0),X=K===!0?0:1,U,G,E=null,N=0,q=null;function R(M){let B=M.isScene===!0?M.background:null;if(B&&B.isTexture)B=(M.backgroundBlurriness>0?Z:Q).get(B);return B}function F(M){let B=!1,T=R(M);if(T===null)D(Y,X);else if(T&&T.isColor)D(T,1),B=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")$.buffers.color.setClear(0,0,0,1,H);else if(_==="alpha-blend")$.buffers.color.setClear(0,0,0,0,H);if(J.autoClear||B)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function O(M,B){let T=R(B);if(T&&(T.isCubeTexture||T.mapping===h7)){if(G===void 0)G=new k0(new k9(1,1,1),new e0({name:"BackgroundCubeMaterial",uniforms:V9(F8.backgroundCube.uniforms),vertexShader:F8.backgroundCube.vertexShader,fragmentShader:F8.backgroundCube.fragmentShader,side:i0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(_,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(z9.copy(B.backgroundRotation),z9.x*=-1,z9.y*=-1,z9.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1)z9.y*=-1,z9.z*=-1;if(G.material.uniforms.envMap.value=T,G.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(lq.makeRotationFromEuler(z9)),G.material.toneMapped=J0.getTransfer(T.colorSpace)!==G0,E!==T||N!==T.version||q!==J.toneMapping)G.material.needsUpdate=!0,E=T,N=T.version,q=J.toneMapping;G.layers.enableAll(),M.unshift(G,G.geometry,G.material,0,0,null)}else if(T&&T.isTexture){if(U===void 0)U=new k0(new Y7(2,2),new e0({name:"BackgroundMaterial",uniforms:V9(F8.background.uniforms),vertexShader:F8.background.vertexShader,fragmentShader:F8.background.fragmentShader,side:e9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=T,U.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,U.material.toneMapped=J0.getTransfer(T.colorSpace)!==G0,T.matrixAutoUpdate===!0)T.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(T.matrix),E!==T||N!==T.version||q!==J.toneMapping)U.material.needsUpdate=!0,E=T,N=T.version,q=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}}function D(M,B){M.getRGB(tQ,f$(J)),$.buffers.color.setClear(tQ.r,tQ.g,tQ.b,B,H)}function k(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return Y},setClearColor:function(M,B=1){Y.set(M),X=B,D(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(M){X=M,D(Y,X)},render:F,addToRenderList:O,dispose:k}}function cq(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),$={},W=N(null),K=W,H=!1;function Y(I,S,h,m,p){let a=!1,l=E(m,h,S);if(K!==l)K=l,U(K.object);if(a=q(I,m,h,p),a)R(I,m,h,p);if(p!==null)Q.update(p,J.ELEMENT_ARRAY_BUFFER);if(a||H){if(H=!1,B(I,S,h,m),p!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(p).buffer)}}function X(){return J.createVertexArray()}function U(I){return J.bindVertexArray(I)}function G(I){return J.deleteVertexArray(I)}function E(I,S,h){let m=h.wireframe===!0,p=$[I.id];if(p===void 0)p={},$[I.id]=p;let a=p[S.id];if(a===void 0)a={},p[S.id]=a;let l=a[m];if(l===void 0)l=N(X()),a[m]=l;return l}function N(I){let S=[],h=[],m=[];for(let p=0;p<Z;p++)S[p]=0,h[p]=0,m[p]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:h,attributeDivisors:m,object:I,attributes:{},index:null}}function q(I,S,h,m){let p=K.attributes,a=S.attributes,l=0,JJ=h.getAttributes();for(let d in JJ)if(JJ[d].location>=0){let GJ=p[d],yJ=a[d];if(yJ===void 0){if(d==="instanceMatrix"&&I.instanceMatrix)yJ=I.instanceMatrix;if(d==="instanceColor"&&I.instanceColor)yJ=I.instanceColor}if(GJ===void 0)return!0;if(GJ.attribute!==yJ)return!0;if(yJ&&GJ.data!==yJ.data)return!0;l++}if(K.attributesNum!==l)return!0;if(K.index!==m)return!0;return!1}function R(I,S,h,m){let p={},a=S.attributes,l=0,JJ=h.getAttributes();for(let d in JJ)if(JJ[d].location>=0){let GJ=a[d];if(GJ===void 0){if(d==="instanceMatrix"&&I.instanceMatrix)GJ=I.instanceMatrix;if(d==="instanceColor"&&I.instanceColor)GJ=I.instanceColor}let yJ={};if(yJ.attribute=GJ,GJ&&GJ.data)yJ.data=GJ.data;p[d]=yJ,l++}K.attributes=p,K.attributesNum=l,K.index=m}function F(){let I=K.newAttributes;for(let S=0,h=I.length;S<h;S++)I[S]=0}function O(I){D(I,0)}function D(I,S){let{newAttributes:h,enabledAttributes:m,attributeDivisors:p}=K;if(h[I]=1,m[I]===0)J.enableVertexAttribArray(I),m[I]=1;if(p[I]!==S)J.vertexAttribDivisor(I,S),p[I]=S}function k(){let{newAttributes:I,enabledAttributes:S}=K;for(let h=0,m=S.length;h<m;h++)if(S[h]!==I[h])J.disableVertexAttribArray(h),S[h]=0}function M(I,S,h,m,p,a,l){if(l===!0)J.vertexAttribIPointer(I,S,h,p,a);else J.vertexAttribPointer(I,S,h,m,p,a)}function B(I,S,h,m){F();let p=m.attributes,a=h.getAttributes(),l=S.defaultAttributeValues;for(let JJ in a){let d=a[JJ];if(d.location>=0){let qJ=p[JJ];if(qJ===void 0){if(JJ==="instanceMatrix"&&I.instanceMatrix)qJ=I.instanceMatrix;if(JJ==="instanceColor"&&I.instanceColor)qJ=I.instanceColor}if(qJ!==void 0){let{normalized:GJ,itemSize:yJ}=qJ,gJ=Q.get(qJ);if(gJ===void 0)continue;let{buffer:n,type:KJ,bytesPerElement:AJ}=gJ,fJ=KJ===J.INT||KJ===J.UNSIGNED_INT||qJ.gpuType===rZ;if(qJ.isInterleavedBufferAttribute){let NJ=qJ.data,SJ=NJ.stride,lJ=qJ.offset;if(NJ.isInstancedInterleavedBuffer){for(let rJ=0;rJ<d.locationSize;rJ++)D(d.location+rJ,NJ.meshPerAttribute);if(I.isInstancedMesh!==!0&&m._maxInstanceCount===void 0)m._maxInstanceCount=NJ.meshPerAttribute*NJ.count}else for(let rJ=0;rJ<d.locationSize;rJ++)O(d.location+rJ);J.bindBuffer(J.ARRAY_BUFFER,n);for(let rJ=0;rJ<d.locationSize;rJ++)M(d.location+rJ,yJ/d.locationSize,KJ,GJ,SJ*AJ,(lJ+yJ/d.locationSize*rJ)*AJ,fJ)}else{if(qJ.isInstancedBufferAttribute){for(let NJ=0;NJ<d.locationSize;NJ++)D(d.location+NJ,qJ.meshPerAttribute);if(I.isInstancedMesh!==!0&&m._maxInstanceCount===void 0)m._maxInstanceCount=qJ.meshPerAttribute*qJ.count}else for(let NJ=0;NJ<d.locationSize;NJ++)O(d.location+NJ);J.bindBuffer(J.ARRAY_BUFFER,n);for(let NJ=0;NJ<d.locationSize;NJ++)M(d.location+NJ,yJ/d.locationSize,KJ,GJ,yJ*AJ,yJ/d.locationSize*NJ*AJ,fJ)}}else if(l!==void 0){let GJ=l[JJ];if(GJ!==void 0)switch(GJ.length){case 2:J.vertexAttrib2fv(d.location,GJ);break;case 3:J.vertexAttrib3fv(d.location,GJ);break;case 4:J.vertexAttrib4fv(d.location,GJ);break;default:J.vertexAttrib1fv(d.location,GJ)}}}}k()}function T(){y();for(let I in $){let S=$[I];for(let h in S){let m=S[h];for(let p in m)G(m[p].object),delete m[p];delete S[h]}delete $[I]}}function _(I){if($[I.id]===void 0)return;let S=$[I.id];for(let h in S){let m=S[h];for(let p in m)G(m[p].object),delete m[p];delete S[h]}delete $[I.id]}function C(I){for(let S in $){let h=$[S];if(h[I.id]===void 0)continue;let m=h[I.id];for(let p in m)G(m[p].object),delete m[p];delete h[I.id]}}function y(){if(L(),H=!0,K===W)return;K=W,U(K.object)}function L(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:y,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:_,releaseStatesOfProgram:C,initAttributes:F,enableAttribute:O,disableUnusedAttributes:k}}function nq(J,Q,Z){let $;function W(U){$=U}function K(U,G){J.drawArrays($,U,G),Z.update(G,$,1)}function H(U,G,E){if(E===0)return;J.drawArraysInstanced($,U,G,E),Z.update(G,$,E)}function Y(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL($,U,0,G,0,E);let q=0;for(let R=0;R<E;R++)q+=G[R];Z.update(q,$,1)}function X(U,G,E,N){if(E===0)return;let q=Q.get("WEBGL_multi_draw");if(q===null)for(let R=0;R<U.length;R++)H(U[R],G[R],N[R]);else{q.multiDrawArraysInstancedWEBGL($,U,0,G,0,N,0,E);let R=0;for(let F=0;F<E;F++)R+=G[F]*N[F];Z.update(R,$,1)}}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y,this.renderMultiDrawInstances=X}function sq(J,Q,Z,$){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let C=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(C){if(C!==R8&&$.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(C){let y=C===p7&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(C!==d8&&$.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==l8&&!y)return!1;return!0}function X(C){if(C==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",G=X(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=Z.logarithmicDepthBuffer===!0,N=Z.reverseDepthBuffer===!0&&Q.has("EXT_clip_control"),q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),F=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),D=J.getParameter(J.MAX_VERTEX_ATTRIBS),k=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=R>0,_=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reverseDepthBuffer:N,maxTextures:q,maxVertexTextures:R,maxTextureSize:F,maxCubemapSize:O,maxAttributes:D,maxVertexUniforms:k,maxVaryings:M,maxFragmentUniforms:B,vertexTextures:T,maxSamples:_}}function iq(J){let Q=this,Z=null,$=0,W=!1,K=!1,H=new _8,Y=new dJ,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,N){let q=E.length!==0||N||$!==0||W;return W=N,$=E.length,q},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,N){Z=G(E,N,0)},this.setState=function(E,N,q){let{clippingPlanes:R,clipIntersection:F,clipShadows:O}=E,D=J.get(E);if(!W||R===null||R.length===0||K&&!O)if(K)G(null);else U();else{let k=K?0:$,M=k*4,B=D.clippingState||null;X.value=B,B=G(R,N,M,q);for(let T=0;T!==M;++T)B[T]=Z[T];D.clippingState=B,this.numIntersection=F?this.numPlanes:0,this.numPlanes+=k}};function U(){if(X.value!==Z)X.value=Z,X.needsUpdate=$>0;Q.numPlanes=$,Q.numIntersection=0}function G(E,N,q,R){let F=E!==null?E.length:0,O=null;if(F!==0){if(O=X.value,R!==!0||O===null){let D=q+F*4,k=N.matrixWorldInverse;if(Y.getNormalMatrix(k),O===null||O.length<D)O=new Float32Array(D);for(let M=0,B=q;M!==F;++M,B+=4)H.copy(E[M]).applyMatrix4(k,Y),H.normal.toArray(O,B),O[B+3]=H.constant}X.value=O,X.needsUpdate=!0}return Q.numPlanes=F,Q.numIntersection=0,O}}function oq(J){let Q=new WeakMap;function Z(H,Y){if(Y===KQ)H.mapping=Q7;else if(Y===HQ)H.mapping=O9;return H}function $(H){if(H&&H.isTexture){let Y=H.mapping;if(Y===KQ||Y===HQ)if(Q.has(H)){let X=Q.get(H).texture;return Z(X,H.mapping)}else{let X=H.image;if(X&&X.height>0){let U=new h$(X.height);return U.fromEquirectangularTexture(J,H),Q.set(H,U),H.addEventListener("dispose",W),Z(U.texture,H.mapping)}else return null}}return H}function W(H){let Y=H.target;Y.removeEventListener("dispose",W);let X=Q.get(Y);if(X!==void 0)Q.delete(Y),X.dispose()}function K(){Q=new WeakMap}return{get:$,dispose:K}}var E7=4,CX=[0.125,0.215,0.35,0.446,0.526,0.582],_9=20,yW=new Q6,PX=new RJ,vW=null,fW=0,bW=0,hW=!1,I9=(1+Math.sqrt(5))/2,G7=1/I9,AX=[new P(-I9,G7,0),new P(I9,G7,0),new P(-G7,0,I9),new P(G7,0,I9),new P(0,I9,-G7),new P(0,I9,G7),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],aq=new P;class gW{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,Z=0.1,$=100,W={}){let{size:K=256,position:H=aq}=W;vW=this._renderer.getRenderTarget(),fW=this._renderer.getActiveCubeFace(),bW=this._renderer.getActiveMipmapLevel(),hW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,Z,$,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=jX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=SX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(vW,fW,bW),this._renderer.xr.enabled=hW,J.scissorTest=!1,eQ(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===Q7||J.mapping===O9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);vW=this._renderer.getRenderTarget(),fW=this._renderer.getActiveCubeFace(),bW=this._renderer.getActiveMipmapLevel(),hW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:R9,minFilter:R9,generateMipmaps:!1,type:p7,format:R8,colorSpace:d7,depthBuffer:!1},$=TX(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=TX(J,Q,Z);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rq(W)),this._blurMaterial=tq(W,J,Q)}return $}_compileMaterial(J){let Q=new k0(this._lodPlanes[0],J);this._renderer.compile(Q,yW)}_sceneToCubeUV(J,Q,Z,$,W){let Y=new I0(90,1,Q,Z),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,N=G.toneMapping;G.getClearColor(PX),G.toneMapping=T8,G.autoClear=!1;let q=new S8({name:"PMREM.Background",side:i0,depthWrite:!1,depthTest:!1}),R=new k0(new k9,q),F=!1,O=J.background;if(O){if(O.isColor)q.color.copy(O),J.background=null,F=!0}else q.color.copy(PX),F=!0;for(let D=0;D<6;D++){let k=D%3;if(k===0)Y.up.set(0,X[D],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[D],W.y,W.z);else if(k===1)Y.up.set(0,0,X[D]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[D],W.z);else Y.up.set(0,X[D],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[D]);let M=this._cubeSize;if(eQ($,k*M,D>2?M:0,M,M),G.setRenderTarget($),F)G.render(R,Y);G.render(J,Y)}R.geometry.dispose(),R.material.dispose(),G.toneMapping=N,G.autoClear=E,J.background=O}_textureToCubeUV(J,Q){let Z=this._renderer,$=J.mapping===Q7||J.mapping===O9;if($){if(this._cubemapMaterial===null)this._cubemapMaterial=jX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=SX();let W=$?this._cubemapMaterial:this._equirectMaterial,K=new k0(this._lodPlanes[0],W),H=W.uniforms;H.envMap.value=J;let Y=this._cubeSize;eQ(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(K,yW)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let $=this._lodPlanes.length;for(let W=1;W<$;W++){let K=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),H=AX[($-W-1)%AX.length];this._blur(J,W-1,W,K,H)}Q.autoClear=Z}_blur(J,Q,Z,$,W){let K=this._pingPongRenderTarget;this._halfBlur(J,K,Q,Z,$,"latitudinal",W),this._halfBlur(K,J,Z,Z,$,"longitudinal",W)}_halfBlur(J,Q,Z,$,W,K,H){let Y=this._renderer,X=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new k0(this._lodPlanes[$],X),E=X.uniforms,N=this._sizeLods[Z]-1,q=isFinite(W)?Math.PI/(2*N):2*Math.PI/(2*_9-1),R=W/q,F=isFinite(W)?1+Math.floor(U*R):_9;if(F>_9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${F} samples when the maximum is set to ${_9}`);let O=[],D=0;for(let _=0;_<_9;++_){let C=_/R,y=Math.exp(-C*C/2);if(O.push(y),_===0)D+=y;else if(_<F)D+=2*y}for(let _=0;_<O.length;_++)O[_]=O[_]/D;if(E.envMap.value=J.texture,E.samples.value=F,E.weights.value=O,E.latitudinal.value=K==="latitudinal",H)E.poleAxis.value=H;let{_lodMax:k}=this;E.dTheta.value=q,E.mipInt.value=k-Z;let M=this._sizeLods[$],B=3*M*($>k-E7?$-k+E7:0),T=4*(this._cubeSize-M);eQ(Q,B,T,3*M,2*M),Y.setRenderTarget(Q),Y.render(G,yW)}}function rq(J){let Q=[],Z=[],$=[],W=J,K=J-E7+1+CX.length;for(let H=0;H<K;H++){let Y=Math.pow(2,W);Z.push(Y);let X=1/Y;if(H>J-E7)X=CX[H-J+E7-1];else if(H===0)X=0;$.push(X);let U=1/(Y-2),G=-U,E=1+U,N=[G,G,E,G,E,E,G,G,E,E,G,E],q=6,R=6,F=3,O=2,D=1,k=new Float32Array(F*R*q),M=new Float32Array(O*R*q),B=new Float32Array(D*R*q);for(let _=0;_<q;_++){let C=_%3*2/3-1,y=_>2?0:-1,L=[C,y,0,C+0.6666666666666666,y,0,C+0.6666666666666666,y+1,0,C,y,0,C+0.6666666666666666,y+1,0,C,y+1,0];k.set(L,F*R*_),M.set(N,O*R*_);let I=[_,_,_,_,_,_];B.set(I,D*R*_)}let T=new cJ;if(T.setAttribute("position",new H0(k,F)),T.setAttribute("uv",new H0(M,O)),T.setAttribute("faceIndex",new H0(B,D)),Q.push(T),W>E7)W--}return{lodPlanes:Q,sizeLods:Z,sigmas:$}}function TX(J,Q,Z){let $=new Y8(J,Q,Z);return $.texture.mapping=h7,$.texture.name="PMREM.cubeUv",$.scissorTest=!0,$}function eQ(J,Q,Z,$,W){J.viewport.set(Q,Z,$,W),J.scissor.set(Q,Z,$,W)}function tq(J,Q,Z){let $=new Float32Array(_9),W=new P(0,1,0);return new e0({name:"SphericalGaussianBlur",defines:{n:_9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:$},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:mW(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:m8,depthTest:!1,depthWrite:!1})}function SX(){return new e0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mW(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:m8,depthTest:!1,depthWrite:!1})}function jX(){return new e0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mW(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:m8,depthTest:!1,depthWrite:!1})}function mW(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eq(J){let Q=new WeakMap,Z=null;function $(Y){if(Y&&Y.isTexture){let X=Y.mapping,U=X===KQ||X===HQ,G=X===Q7||X===O9;if(U||G){let E=Q.get(Y),N=E!==void 0?E.texture.pmremVersion:0;if(Y.isRenderTargetTexture&&Y.pmremVersion!==N){if(Z===null)Z=new gW(J);return E=U?Z.fromEquirectangular(Y,E):Z.fromCubemap(Y,E),E.texture.pmremVersion=Y.pmremVersion,Q.set(Y,E),E.texture}else if(E!==void 0)return E.texture;else{let q=Y.image;if(U&&q&&q.height>0||G&&q&&W(q)){if(Z===null)Z=new gW(J);return E=U?Z.fromEquirectangular(Y):Z.fromCubemap(Y),E.texture.pmremVersion=Y.pmremVersion,Q.set(Y,E),Y.addEventListener("dispose",K),E.texture}else return null}}}return Y}function W(Y){let X=0,U=6;for(let G=0;G<U;G++)if(Y[G]!==void 0)X++;return X===U}function K(Y){let X=Y.target;X.removeEventListener("dispose",K);let U=Q.get(X);if(U!==void 0)Q.delete(X),U.dispose()}function H(){if(Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:$,dispose:H}}function JD(J){let Q={};function Z($){if(Q[$]!==void 0)return Q[$];let W;switch($){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension($)}return Q[$]=W,W}return{has:function($){return Z($)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function($){let W=Z($);if(W===null)E9("THREE.WebGLRenderer: "+$+" extension not supported.");return W}}}function QD(J,Q,Z,$){let W={},K=new WeakMap;function H(E){let N=E.target;if(N.index!==null)Q.remove(N.index);for(let R in N.attributes)Q.remove(N.attributes[R]);N.removeEventListener("dispose",H),delete W[N.id];let q=K.get(N);if(q)Q.remove(q),K.delete(N);if($.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Z.memory.geometries--}function Y(E,N){if(W[N.id]===!0)return N;return N.addEventListener("dispose",H),W[N.id]=!0,Z.memory.geometries++,N}function X(E){let N=E.attributes;for(let q in N)Q.update(N[q],J.ARRAY_BUFFER)}function U(E){let N=[],q=E.index,R=E.attributes.position,F=0;if(q!==null){let k=q.array;F=q.version;for(let M=0,B=k.length;M<B;M+=3){let T=k[M+0],_=k[M+1],C=k[M+2];N.push(T,_,_,C,C,T)}}else if(R!==void 0){let k=R.array;F=R.version;for(let M=0,B=k.length/3-1;M<B;M+=3){let T=M+0,_=M+1,C=M+2;N.push(T,_,_,C,C,T)}}else return;let O=new((y$(N))?RQ:OQ)(N,1);O.version=F;let D=K.get(E);if(D)Q.remove(D);K.set(E,O)}function G(E){let N=K.get(E);if(N){let q=E.index;if(q!==null){if(N.version<q.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:G}}function ZD(J,Q,Z){let $;function W(N){$=N}let K,H;function Y(N){K=N.type,H=N.bytesPerElement}function X(N,q){J.drawElements($,q,K,N*H),Z.update(q,$,1)}function U(N,q,R){if(R===0)return;J.drawElementsInstanced($,q,K,N*H,R),Z.update(q,$,R)}function G(N,q,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL($,q,0,K,N,0,R);let O=0;for(let D=0;D<R;D++)O+=q[D];Z.update(O,$,1)}function E(N,q,R,F){if(R===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let D=0;D<N.length;D++)U(N[D]/H,q[D],F[D]);else{O.multiDrawElementsInstancedWEBGL($,q,0,K,N,0,F,0,R);let D=0;for(let k=0;k<R;k++)D+=q[k]*F[k];Z.update(D,$,1)}}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function $D(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function $(K,H,Y){switch(Z.calls++,H){case J.TRIANGLES:Z.triangles+=Y*(K/3);break;case J.LINES:Z.lines+=Y*(K/2);break;case J.LINE_STRIP:Z.lines+=Y*(K-1);break;case J.LINE_LOOP:Z.lines+=Y*K;break;case J.POINTS:Z.points+=Y*K;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",H);break}}function W(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:W,update:$}}function WD(J,Q,Z){let $=new WeakMap,W=new Z0;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=G!==void 0?G.length:0,N=$.get(Y);if(N===void 0||N.count!==E){let L=function(){C.dispose(),$.delete(Y),Y.removeEventListener("dispose",L)};if(N!==void 0)N.texture.dispose();let q=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,F=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],D=Y.morphAttributes.normal||[],k=Y.morphAttributes.color||[],M=0;if(q===!0)M=1;if(R===!0)M=2;if(F===!0)M=3;let B=Y.attributes.position.count*M,T=1;if(B>Q.maxTextureSize)T=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let _=new Float32Array(B*T*4*E),C=new l7(_,B,T,E);C.type=l8,C.needsUpdate=!0;let y=M*4;for(let I=0;I<E;I++){let S=O[I],h=D[I],m=k[I],p=B*T*4*I;for(let a=0;a<S.count;a++){let l=a*y;if(q===!0)W.fromBufferAttribute(S,a),_[p+l+0]=W.x,_[p+l+1]=W.y,_[p+l+2]=W.z,_[p+l+3]=0;if(R===!0)W.fromBufferAttribute(h,a),_[p+l+4]=W.x,_[p+l+5]=W.y,_[p+l+6]=W.z,_[p+l+7]=0;if(F===!0)W.fromBufferAttribute(m,a),_[p+l+8]=W.x,_[p+l+9]=W.y,_[p+l+10]=W.z,_[p+l+11]=m.itemSize===4?W.w:1}}N={count:E,texture:C,size:new o(B,T)},$.set(Y,N),Y.addEventListener("dispose",L)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,Z);else{let q=0;for(let F=0;F<U.length;F++)q+=U[F];let R=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Z),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function KD(J,Q,Z,$){let W=new WeakMap;function K(X){let U=$.render.frame,G=X.geometry,E=Q.get(X,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(X.isInstancedMesh){if(X.hasEventListener("dispose",Y)===!1)X.addEventListener("dispose",Y);if(W.get(X)!==U){if(Z.update(X.instanceMatrix,J.ARRAY_BUFFER),X.instanceColor!==null)Z.update(X.instanceColor,J.ARRAY_BUFFER);W.set(X,U)}}if(X.isSkinnedMesh){let N=X.skeleton;if(W.get(N)!==U)N.update(),W.set(N,U)}return E}function H(){W=new WeakMap}function Y(X){let U=X.target;if(U.removeEventListener("dispose",Y),Z.remove(U.instanceMatrix),U.instanceColor!==null)Z.remove(U.instanceColor)}return{update:K,dispose:H}}var rX=new F0,yX=new IQ(1,1),tX=new l7,eX=new u7,JU=new H7,vX=[],fX=[],bX=new Float32Array(16),hX=new Float32Array(9),xX=new Float32Array(4);function N7(J,Q,Z){let $=J[0];if($<=0||$>0)return J;let W=Q*Z,K=vX[W];if(K===void 0)K=new Float32Array(W),vX[W]=K;if(Q!==0){$.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=Z,J[H].toArray(K,Y)}return K}function L0(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,$=J.length;Z<$;Z++)if(J[Z]!==Q[Z])return!1;return!0}function z0(J,Q){for(let Z=0,$=Q.length;Z<$;Z++)J[Z]=Q[Z]}function QZ(J,Q){let Z=fX[Q];if(Z===void 0)Z=new Int32Array(Q),fX[Q]=Z;for(let $=0;$!==Q;++$)Z[$]=J.allocateTextureUnit();return Z}function HD(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function YD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(L0(Z,Q))return;J.uniform2fv(this.addr,Q),z0(Z,Q)}}function XD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(L0(Z,Q))return;J.uniform3fv(this.addr,Q),z0(Z,Q)}}function UD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(L0(Z,Q))return;J.uniform4fv(this.addr,Q),z0(Z,Q)}}function GD(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(L0(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),z0(Z,Q)}else{if(L0(Z,$))return;xX.set($),J.uniformMatrix2fv(this.addr,!1,xX),z0(Z,$)}}function ED(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(L0(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),z0(Z,Q)}else{if(L0(Z,$))return;hX.set($),J.uniformMatrix3fv(this.addr,!1,hX),z0(Z,$)}}function ND(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(L0(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),z0(Z,Q)}else{if(L0(Z,$))return;bX.set($),J.uniformMatrix4fv(this.addr,!1,bX),z0(Z,$)}}function qD(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function DD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(L0(Z,Q))return;J.uniform2iv(this.addr,Q),z0(Z,Q)}}function OD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(L0(Z,Q))return;J.uniform3iv(this.addr,Q),z0(Z,Q)}}function RD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(L0(Z,Q))return;J.uniform4iv(this.addr,Q),z0(Z,Q)}}function FD(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function MD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(L0(Z,Q))return;J.uniform2uiv(this.addr,Q),z0(Z,Q)}}function kD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(L0(Z,Q))return;J.uniform3uiv(this.addr,Q),z0(Z,Q)}}function VD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(L0(Z,Q))return;J.uniform4uiv(this.addr,Q),z0(Z,Q)}}function LD(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)yX.compareFunction=T$,K=yX;else K=rX;Z.setTexture2D(Q||K,W)}function zD(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture3D(Q||eX,W)}function BD(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTextureCube(Q||JU,W)}function ID(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture2DArray(Q||tX,W)}function _D(J){switch(J){case 5126:return HD;case 35664:return YD;case 35665:return XD;case 35666:return UD;case 35674:return GD;case 35675:return ED;case 35676:return ND;case 5124:case 35670:return qD;case 35667:case 35671:return DD;case 35668:case 35672:return OD;case 35669:case 35673:return RD;case 5125:return FD;case 36294:return MD;case 36295:return kD;case 36296:return VD;case 35678:case 36198:case 36298:case 36306:case 35682:return LD;case 35679:case 36299:case 36307:return zD;case 35680:case 36300:case 36308:case 36293:return BD;case 36289:case 36303:case 36311:case 36292:return ID}}function wD(J,Q){J.uniform1fv(this.addr,Q)}function CD(J,Q){let Z=N7(Q,this.size,2);J.uniform2fv(this.addr,Z)}function PD(J,Q){let Z=N7(Q,this.size,3);J.uniform3fv(this.addr,Z)}function AD(J,Q){let Z=N7(Q,this.size,4);J.uniform4fv(this.addr,Z)}function TD(J,Q){let Z=N7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function SD(J,Q){let Z=N7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function jD(J,Q){let Z=N7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function yD(J,Q){J.uniform1iv(this.addr,Q)}function vD(J,Q){J.uniform2iv(this.addr,Q)}function fD(J,Q){J.uniform3iv(this.addr,Q)}function bD(J,Q){J.uniform4iv(this.addr,Q)}function hD(J,Q){J.uniform1uiv(this.addr,Q)}function xD(J,Q){J.uniform2uiv(this.addr,Q)}function gD(J,Q){J.uniform3uiv(this.addr,Q)}function pD(J,Q){J.uniform4uiv(this.addr,Q)}function mD(J,Q,Z){let $=this.cache,W=Q.length,K=QZ(Z,W);if(!L0($,K))J.uniform1iv(this.addr,K),z0($,K);for(let H=0;H!==W;++H)Z.setTexture2D(Q[H]||rX,K[H])}function dD(J,Q,Z){let $=this.cache,W=Q.length,K=QZ(Z,W);if(!L0($,K))J.uniform1iv(this.addr,K),z0($,K);for(let H=0;H!==W;++H)Z.setTexture3D(Q[H]||eX,K[H])}function lD(J,Q,Z){let $=this.cache,W=Q.length,K=QZ(Z,W);if(!L0($,K))J.uniform1iv(this.addr,K),z0($,K);for(let H=0;H!==W;++H)Z.setTextureCube(Q[H]||JU,K[H])}function uD(J,Q,Z){let $=this.cache,W=Q.length,K=QZ(Z,W);if(!L0($,K))J.uniform1iv(this.addr,K),z0($,K);for(let H=0;H!==W;++H)Z.setTexture2DArray(Q[H]||tX,K[H])}function cD(J){switch(J){case 5126:return wD;case 35664:return CD;case 35665:return PD;case 35666:return AD;case 35674:return TD;case 35675:return SD;case 35676:return jD;case 5124:case 35670:return yD;case 35667:case 35671:return vD;case 35668:case 35672:return fD;case 35669:case 35673:return bD;case 5125:return hD;case 36294:return xD;case 36295:return gD;case 36296:return pD;case 35678:case 36198:case 36298:case 36306:case 35682:return mD;case 35679:case 36299:case 36307:return dD;case 35680:case 36300:case 36308:case 36293:return lD;case 36289:case 36303:case 36311:case 36292:return uD}}class QU{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=_D(Q.type)}}class ZU{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=cD(Q.type)}}class $U{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let $=this.seq;for(let W=0,K=$.length;W!==K;++W){let H=$[W];H.setValue(J,Q[H.id],Z)}}}var xW=/(\w+)(\])?(\[|\.)?/g;function gX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function nD(J,Q,Z){let $=J.name,W=$.length;xW.lastIndex=0;while(!0){let K=xW.exec($),H=xW.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){gX(Z,U===void 0?new QU(Y,J,Q):new ZU(Y,J,Q));break}else{let E=Z.map[Y];if(E===void 0)E=new $U(Y),gX(Z,E);Z=E}}}class $6{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let $=0;$<Z;++$){let W=J.getActiveUniform(Q,$),K=J.getUniformLocation(Q,W.name);nD(W,K,this)}}setValue(J,Q,Z,$){let W=this.map[Q];if(W!==void 0)W.setValue(J,Z,$)}setOptional(J,Q,Z){let $=Q[Z];if($!==void 0)this.setValue(J,Z,$)}static upload(J,Q,Z,$){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=Z[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,$)}}static seqWithValue(J,Q){let Z=[];for(let $=0,W=J.length;$!==W;++$){let K=J[$];if(K.id in Q)Z.push(K)}return Z}}function pX(J,Q,Z){let $=J.createShader(Q);return J.shaderSource($,Z),J.compileShader($),$}var sD=37297,iD=0;function oD(J,Q){let Z=J.split(`
`),$=[],W=Math.max(Q-6,0),K=Math.min(Q+6,Z.length);for(let H=W;H<K;H++){let Y=H+1;$.push(`${Y===Q?">":" "} ${Y}: ${Z[H]}`)}return $.join(`
`)}var mX=new dJ;function aD(J){J0._getMatrix(mX,J0.workingColorSpace,J);let Q=`mat3( ${mX.elements.map((Z)=>Z.toFixed(4))} )`;switch(J0.getTransfer(J)){case A$:return[Q,"LinearTransferOETF"];case G0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function dX(J,Q,Z){let $=J.getShaderParameter(Q,J.COMPILE_STATUS),W=J.getShaderInfoLog(Q).trim();if($&&W==="")return"";let K=/ERROR: 0:(\d+)/.exec(W);if(K){let H=parseInt(K[1]);return Z.toUpperCase()+`

`+W+`

`+oD(J.getShaderSource(Q),H)}else return W}function rD(J,Q){let Z=aD(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function tD(J,Q){let Z;switch(Q){case PH:Z="Linear";break;case AH:Z="Reinhard";break;case TH:Z="Cineon";break;case SH:Z="ACESFilmic";break;case yH:Z="AgX";break;case vH:Z="Neutral";break;case jH:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var JZ=new P;function eD(){J0.getLuminanceCoefficients(JZ);let J=JZ.x.toFixed(4),Q=JZ.y.toFixed(4),Z=JZ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function J5(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Z6).join(`
`)}function Q5(J){let Q=[];for(let Z in J){let $=J[Z];if($===!1)continue;Q.push("#define "+Z+" "+$)}return Q.join(`
`)}function Z5(J,Q){let Z={},$=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<$;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;Z[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return Z}function Z6(J){return J!==""}function lX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function uX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var $5=/^[ \t]*#include +<([\w\d./]+)>/gm;function pW(J){return J.replace($5,K5)}var W5=new Map;function K5(J,Q){let Z=oJ[Q];if(Z===void 0){let $=W5.get(Q);if($!==void 0)Z=oJ[$],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,$);else throw new Error("Can not resolve #include <"+Q+">")}return pW(Z)}var H5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cX(J){return J.replace(H5,Y5)}function Y5(J,Q,Z,$){let W="";for(let K=parseInt(Q);K<parseInt(Z);K++)W+=$.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function nX(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function X5(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===sZ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===WH)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===D8)Q="SHADOWMAP_TYPE_VSM";return Q}function U5(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case Q7:case O9:Q="ENVMAP_TYPE_CUBE";break;case h7:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function G5(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case O9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function E5(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case _H:Q="ENVMAP_BLENDING_MULTIPLY";break;case wH:Q="ENVMAP_BLENDING_MIX";break;case CH:Q="ENVMAP_BLENDING_ADD";break}return Q}function N5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,$=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:$,maxMip:Z}}function q5(J,Q,Z,$){let W=J.getContext(),K=Z.defines,H=Z.vertexShader,Y=Z.fragmentShader,X=X5(Z),U=U5(Z),G=G5(Z),E=E5(Z),N=N5(Z),q=J5(Z),R=Q5(K),F=W.createProgram(),O,D,k=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R].filter(Z6).join(`
`),O.length>0)O+=`
`;if(D=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R].filter(Z6).join(`
`),D.length>0)D+=`
`}else O=[nX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+X:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Z6).join(`
`),D=[nX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+E:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+X:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==T8?"#define TONE_MAPPING":"",Z.toneMapping!==T8?oJ.tonemapping_pars_fragment:"",Z.toneMapping!==T8?tD("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",oJ.colorspace_pars_fragment,rD("linearToOutputTexel",Z.outputColorSpace),eD(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(Z6).join(`
`);if(H=pW(H),H=lX(H,Z),H=uX(H,Z),Y=pW(Y),Y=lX(Y,Z),Y=uX(Y,Z),H=cX(H),Y=cX(Y),Z.isRawShaderMaterial!==!0)k=`#version 300 es
`,O=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,D=["#define varying in",Z.glslVersion===S$?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===S$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let M=k+O+H,B=k+D+Y,T=pX(W,W.VERTEX_SHADER,M),_=pX(W,W.FRAGMENT_SHADER,B);if(W.attachShader(F,T),W.attachShader(F,_),Z.index0AttributeName!==void 0)W.bindAttribLocation(F,0,Z.index0AttributeName);else if(Z.morphTargets===!0)W.bindAttribLocation(F,0,"position");W.linkProgram(F);function C(S){if(J.debug.checkShaderErrors){let h=W.getProgramInfoLog(F).trim(),m=W.getShaderInfoLog(T).trim(),p=W.getShaderInfoLog(_).trim(),a=!0,l=!0;if(W.getProgramParameter(F,W.LINK_STATUS)===!1)if(a=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,F,T,_);else{let JJ=dX(W,T,"vertex"),d=dX(W,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(F,W.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+h+`
`+JJ+`
`+d)}else if(h!=="")console.warn("THREE.WebGLProgram: Program Info Log:",h);else if(m===""||p==="")l=!1;if(l)S.diagnostics={runnable:a,programLog:h,vertexShader:{log:m,prefix:O},fragmentShader:{log:p,prefix:D}}}W.deleteShader(T),W.deleteShader(_),y=new $6(W,F),L=Z5(W,F)}let y;this.getUniforms=function(){if(y===void 0)C(this);return y};let L;this.getAttributes=function(){if(L===void 0)C(this);return L};let I=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(I===!1)I=W.getProgramParameter(F,sD);return I},this.destroy=function(){$.releaseStatesOfProgram(this),W.deleteProgram(F),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=iD++,this.cacheKey=Q,this.usedTimes=1,this.program=F,this.vertexShader=T,this.fragmentShader=_,this}var D5=0;class WU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:Z}=J,$=this._getShaderStage(Q),W=this._getShaderStage(Z),K=this._getShaderCacheForMaterial(J);if(K.has($)===!1)K.add($),$.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new KU(J),Q.set(J,Z);return Z}}class KU{constructor(J){this.id=D5++,this.code=J,this.usedTimes=0}}function O5(J,Q,Z,$,W,K,H){let Y=new c7,X=new WU,U=new Set,G=[],E=W.logarithmicDepthBuffer,N=W.vertexTextures,q=W.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(L){if(U.add(L),L===0)return"uv";return`uv${L}`}function O(L,I,S,h,m){let p=h.fog,a=m.geometry,l=L.isMeshStandardMaterial?h.environment:null,JJ=(L.isMeshStandardMaterial?Z:Q).get(L.envMap||l),d=!!JJ&&JJ.mapping===h7?JJ.image.height:null,qJ=R[L.type];if(L.precision!==null){if(q=W.getMaxPrecision(L.precision),q!==L.precision)console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",q,"instead.")}let GJ=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,yJ=GJ!==void 0?GJ.length:0,gJ=0;if(a.morphAttributes.position!==void 0)gJ=1;if(a.morphAttributes.normal!==void 0)gJ=2;if(a.morphAttributes.color!==void 0)gJ=3;let n,KJ,AJ,fJ;if(qJ){let K0=F8[qJ];n=K0.vertexShader,KJ=K0.fragmentShader}else n=L.vertexShader,KJ=L.fragmentShader,X.update(L),AJ=X.getVertexShaderID(L),fJ=X.getFragmentShaderID(L);let NJ=J.getRenderTarget(),SJ=J.state.buffers.depth.getReversed(),lJ=m.isInstancedMesh===!0,rJ=m.isBatchedMesh===!0,eJ=!!L.map,sJ=!!L.matcap,w=!!JJ,YJ=!!L.aoMap,e=!!L.lightMap,XJ=!!L.bumpMap,s=!!L.normalMap,wJ=!!L.displacementMap,r=!!L.emissiveMap,VJ=!!L.metalnessMap,iJ=!!L.roughnessMap,aJ=L.anisotropy>0,A=L.clearcoat>0,V=L.dispersion>0,b=L.iridescence>0,c=L.sheen>0,t=L.transmission>0,u=aJ&&!!L.anisotropyMap,CJ=A&&!!L.clearcoatMap,HJ=A&&!!L.clearcoatNormalMap,zJ=A&&!!L.clearcoatRoughnessMap,IJ=b&&!!L.iridescenceMap,$J=b&&!!L.iridescenceThicknessMap,FJ=c&&!!L.sheenColorMap,bJ=c&&!!L.sheenRoughnessMap,PJ=!!L.specularMap,DJ=!!L.specularColorMap,nJ=!!L.specularIntensityMap,j=t&&!!L.transmissionMap,WJ=t&&!!L.thicknessMap,UJ=!!L.gradientMap,LJ=!!L.alphaMap,QJ=L.alphaTest>0,i=!!L.alphaHash,_J=!!L.extensions,mJ=T8;if(L.toneMapped){if(NJ===null||NJ.isXRRenderTarget===!0)mJ=J.toneMapping}let U0={shaderID:qJ,shaderType:L.type,shaderName:L.name,vertexShader:n,fragmentShader:KJ,defines:L.defines,customVertexShaderID:AJ,customFragmentShaderID:fJ,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:q,batching:rJ,batchingColor:rJ&&m._colorsTexture!==null,instancing:lJ,instancingColor:lJ&&m.instanceColor!==null,instancingMorph:lJ&&m.morphTexture!==null,supportsVertexTextures:N,outputColorSpace:NJ===null?J.outputColorSpace:NJ.isXRRenderTarget===!0?NJ.texture.colorSpace:d7,alphaToCoverage:!!L.alphaToCoverage,map:eJ,matcap:sJ,envMap:w,envMapMode:w&&JJ.mapping,envMapCubeUVHeight:d,aoMap:YJ,lightMap:e,bumpMap:XJ,normalMap:s,displacementMap:N&&wJ,emissiveMap:r,normalMapObjectSpace:s&&L.normalMapType===oH,normalMapTangentSpace:s&&L.normalMapType===iH,metalnessMap:VJ,roughnessMap:iJ,anisotropy:aJ,anisotropyMap:u,clearcoat:A,clearcoatMap:CJ,clearcoatNormalMap:HJ,clearcoatRoughnessMap:zJ,dispersion:V,iridescence:b,iridescenceMap:IJ,iridescenceThicknessMap:$J,sheen:c,sheenColorMap:FJ,sheenRoughnessMap:bJ,specularMap:PJ,specularColorMap:DJ,specularIntensityMap:nJ,transmission:t,transmissionMap:j,thicknessMap:WJ,gradientMap:UJ,opaque:L.transparent===!1&&L.blending===f7&&L.alphaToCoverage===!1,alphaMap:LJ,alphaTest:QJ,alphaHash:i,combine:L.combine,mapUv:eJ&&F(L.map.channel),aoMapUv:YJ&&F(L.aoMap.channel),lightMapUv:e&&F(L.lightMap.channel),bumpMapUv:XJ&&F(L.bumpMap.channel),normalMapUv:s&&F(L.normalMap.channel),displacementMapUv:wJ&&F(L.displacementMap.channel),emissiveMapUv:r&&F(L.emissiveMap.channel),metalnessMapUv:VJ&&F(L.metalnessMap.channel),roughnessMapUv:iJ&&F(L.roughnessMap.channel),anisotropyMapUv:u&&F(L.anisotropyMap.channel),clearcoatMapUv:CJ&&F(L.clearcoatMap.channel),clearcoatNormalMapUv:HJ&&F(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zJ&&F(L.clearcoatRoughnessMap.channel),iridescenceMapUv:IJ&&F(L.iridescenceMap.channel),iridescenceThicknessMapUv:$J&&F(L.iridescenceThicknessMap.channel),sheenColorMapUv:FJ&&F(L.sheenColorMap.channel),sheenRoughnessMapUv:bJ&&F(L.sheenRoughnessMap.channel),specularMapUv:PJ&&F(L.specularMap.channel),specularColorMapUv:DJ&&F(L.specularColorMap.channel),specularIntensityMapUv:nJ&&F(L.specularIntensityMap.channel),transmissionMapUv:j&&F(L.transmissionMap.channel),thicknessMapUv:WJ&&F(L.thicknessMap.channel),alphaMapUv:LJ&&F(L.alphaMap.channel),vertexTangents:!!a.attributes.tangent&&(s||aJ),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!a.attributes.color&&a.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!a.attributes.uv&&(eJ||LJ),fog:!!p,useFog:L.fog===!0,fogExp2:!!p&&p.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:E,reverseDepthBuffer:SJ,skinning:m.isSkinnedMesh===!0,morphTargets:a.morphAttributes.position!==void 0,morphNormals:a.morphAttributes.normal!==void 0,morphColors:a.morphAttributes.color!==void 0,morphTargetsCount:yJ,morphTextureStride:gJ,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&S.length>0,shadowMapType:J.shadowMap.type,toneMapping:mJ,decodeVideoTexture:eJ&&L.map.isVideoTexture===!0&&J0.getTransfer(L.map.colorSpace)===G0,decodeVideoTextureEmissive:r&&L.emissiveMap.isVideoTexture===!0&&J0.getTransfer(L.emissiveMap.colorSpace)===G0,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===O8,flipSided:L.side===i0,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:_J&&L.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_J&&L.extensions.multiDraw===!0||rJ)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return U0.vertexUv1s=U.has(1),U0.vertexUv2s=U.has(2),U0.vertexUv3s=U.has(3),U.clear(),U0}function D(L){let I=[];if(L.shaderID)I.push(L.shaderID);else I.push(L.customVertexShaderID),I.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let S in L.defines)I.push(S),I.push(L.defines[S]);if(L.isRawShaderMaterial===!1)k(I,L),M(I,L),I.push(J.outputColorSpace);return I.push(L.customProgramCacheKey),I.join()}function k(L,I){L.push(I.precision),L.push(I.outputColorSpace),L.push(I.envMapMode),L.push(I.envMapCubeUVHeight),L.push(I.mapUv),L.push(I.alphaMapUv),L.push(I.lightMapUv),L.push(I.aoMapUv),L.push(I.bumpMapUv),L.push(I.normalMapUv),L.push(I.displacementMapUv),L.push(I.emissiveMapUv),L.push(I.metalnessMapUv),L.push(I.roughnessMapUv),L.push(I.anisotropyMapUv),L.push(I.clearcoatMapUv),L.push(I.clearcoatNormalMapUv),L.push(I.clearcoatRoughnessMapUv),L.push(I.iridescenceMapUv),L.push(I.iridescenceThicknessMapUv),L.push(I.sheenColorMapUv),L.push(I.sheenRoughnessMapUv),L.push(I.specularMapUv),L.push(I.specularColorMapUv),L.push(I.specularIntensityMapUv),L.push(I.transmissionMapUv),L.push(I.thicknessMapUv),L.push(I.combine),L.push(I.fogExp2),L.push(I.sizeAttenuation),L.push(I.morphTargetsCount),L.push(I.morphAttributeCount),L.push(I.numDirLights),L.push(I.numPointLights),L.push(I.numSpotLights),L.push(I.numSpotLightMaps),L.push(I.numHemiLights),L.push(I.numRectAreaLights),L.push(I.numDirLightShadows),L.push(I.numPointLightShadows),L.push(I.numSpotLightShadows),L.push(I.numSpotLightShadowsWithMaps),L.push(I.numLightProbes),L.push(I.shadowMapType),L.push(I.toneMapping),L.push(I.numClippingPlanes),L.push(I.numClipIntersection),L.push(I.depthPacking)}function M(L,I){if(Y.disableAll(),I.supportsVertexTextures)Y.enable(0);if(I.instancing)Y.enable(1);if(I.instancingColor)Y.enable(2);if(I.instancingMorph)Y.enable(3);if(I.matcap)Y.enable(4);if(I.envMap)Y.enable(5);if(I.normalMapObjectSpace)Y.enable(6);if(I.normalMapTangentSpace)Y.enable(7);if(I.clearcoat)Y.enable(8);if(I.iridescence)Y.enable(9);if(I.alphaTest)Y.enable(10);if(I.vertexColors)Y.enable(11);if(I.vertexAlphas)Y.enable(12);if(I.vertexUv1s)Y.enable(13);if(I.vertexUv2s)Y.enable(14);if(I.vertexUv3s)Y.enable(15);if(I.vertexTangents)Y.enable(16);if(I.anisotropy)Y.enable(17);if(I.alphaHash)Y.enable(18);if(I.batching)Y.enable(19);if(I.dispersion)Y.enable(20);if(I.batchingColor)Y.enable(21);if(I.gradientMap)Y.enable(22);if(L.push(Y.mask),Y.disableAll(),I.fog)Y.enable(0);if(I.useFog)Y.enable(1);if(I.flatShading)Y.enable(2);if(I.logarithmicDepthBuffer)Y.enable(3);if(I.reverseDepthBuffer)Y.enable(4);if(I.skinning)Y.enable(5);if(I.morphTargets)Y.enable(6);if(I.morphNormals)Y.enable(7);if(I.morphColors)Y.enable(8);if(I.premultipliedAlpha)Y.enable(9);if(I.shadowMapEnabled)Y.enable(10);if(I.doubleSided)Y.enable(11);if(I.flipSided)Y.enable(12);if(I.useDepthPacking)Y.enable(13);if(I.dithering)Y.enable(14);if(I.transmission)Y.enable(15);if(I.sheen)Y.enable(16);if(I.opaque)Y.enable(17);if(I.pointsUvs)Y.enable(18);if(I.decodeVideoTexture)Y.enable(19);if(I.decodeVideoTextureEmissive)Y.enable(20);if(I.alphaToCoverage)Y.enable(21);L.push(Y.mask)}function B(L){let I=R[L.type],S;if(I){let h=F8[I];S=kY.clone(h.uniforms)}else S=L.uniforms;return S}function T(L,I){let S;for(let h=0,m=G.length;h<m;h++){let p=G[h];if(p.cacheKey===I){S=p,++S.usedTimes;break}}if(S===void 0)S=new q5(J,I,L,K),G.push(S);return S}function _(L){if(--L.usedTimes===0){let I=G.indexOf(L);G[I]=G[G.length-1],G.pop(),L.destroy()}}function C(L){X.remove(L)}function y(){X.dispose()}return{getParameters:O,getProgramCacheKey:D,getUniforms:B,acquireProgram:T,releaseProgram:_,releaseShaderCache:C,programs:G,dispose:y}}function R5(){let J=new WeakMap;function Q(H){return J.has(H)}function Z(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function $(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:Z,remove:$,update:W,dispose:K}}function F5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function sX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function iX(){let J=[],Q=0,Z=[],$=[],W=[];function K(){Q=0,Z.length=0,$.length=0,W.length=0}function H(E,N,q,R,F,O){let D=J[Q];if(D===void 0)D={id:E.id,object:E,geometry:N,material:q,groupOrder:R,renderOrder:E.renderOrder,z:F,group:O},J[Q]=D;else D.id=E.id,D.object=E,D.geometry=N,D.material=q,D.groupOrder=R,D.renderOrder=E.renderOrder,D.z=F,D.group=O;return Q++,D}function Y(E,N,q,R,F,O){let D=H(E,N,q,R,F,O);if(q.transmission>0)$.push(D);else if(q.transparent===!0)W.push(D);else Z.push(D)}function X(E,N,q,R,F,O){let D=H(E,N,q,R,F,O);if(q.transmission>0)$.unshift(D);else if(q.transparent===!0)W.unshift(D);else Z.unshift(D)}function U(E,N){if(Z.length>1)Z.sort(E||F5);if($.length>1)$.sort(N||sX);if(W.length>1)W.sort(N||sX)}function G(){for(let E=Q,N=J.length;E<N;E++){let q=J[E];if(q.id===null)break;q.id=null,q.object=null,q.geometry=null,q.material=null,q.group=null}}return{opaque:Z,transmissive:$,transparent:W,init:K,push:Y,unshift:X,finish:G,sort:U}}function M5(){let J=new WeakMap;function Q($,W){let K=J.get($),H;if(K===void 0)H=new iX,J.set($,[H]);else if(W>=K.length)H=new iX,K.push(H);else H=K[W];return H}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function k5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={direction:new P,color:new RJ};break;case"SpotLight":Z={position:new P,direction:new P,color:new RJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new P,color:new RJ,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new P,skyColor:new RJ,groundColor:new RJ};break;case"RectAreaLight":Z={color:new RJ,position:new P,halfWidth:new P,halfHeight:new P};break}return J[Q.id]=Z,Z}}}function V5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var L5=0;function z5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function B5(J){let Q=new k5,Z=V5(),$={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)$.probe.push(new P);let W=new P,K=new vJ,H=new vJ;function Y(U){let G=0,E=0,N=0;for(let L=0;L<9;L++)$.probe[L].set(0,0,0);let q=0,R=0,F=0,O=0,D=0,k=0,M=0,B=0,T=0,_=0,C=0;U.sort(z5);for(let L=0,I=U.length;L<I;L++){let S=U[L],h=S.color,m=S.intensity,p=S.distance,a=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)G+=h.r*m,E+=h.g*m,N+=h.b*m;else if(S.isLightProbe){for(let l=0;l<9;l++)$.probe[l].addScaledVector(S.sh.coefficients[l],m);C++}else if(S.isDirectionalLight){let l=Q.get(S);if(l.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let JJ=S.shadow,d=Z.get(S);d.shadowIntensity=JJ.intensity,d.shadowBias=JJ.bias,d.shadowNormalBias=JJ.normalBias,d.shadowRadius=JJ.radius,d.shadowMapSize=JJ.mapSize,$.directionalShadow[q]=d,$.directionalShadowMap[q]=a,$.directionalShadowMatrix[q]=S.shadow.matrix,k++}$.directional[q]=l,q++}else if(S.isSpotLight){let l=Q.get(S);l.position.setFromMatrixPosition(S.matrixWorld),l.color.copy(h).multiplyScalar(m),l.distance=p,l.coneCos=Math.cos(S.angle),l.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),l.decay=S.decay,$.spot[F]=l;let JJ=S.shadow;if(S.map){if($.spotLightMap[T]=S.map,T++,JJ.updateMatrices(S),S.castShadow)_++}if($.spotLightMatrix[F]=JJ.matrix,S.castShadow){let d=Z.get(S);d.shadowIntensity=JJ.intensity,d.shadowBias=JJ.bias,d.shadowNormalBias=JJ.normalBias,d.shadowRadius=JJ.radius,d.shadowMapSize=JJ.mapSize,$.spotShadow[F]=d,$.spotShadowMap[F]=a,B++}F++}else if(S.isRectAreaLight){let l=Q.get(S);l.color.copy(h).multiplyScalar(m),l.halfWidth.set(S.width*0.5,0,0),l.halfHeight.set(0,S.height*0.5,0),$.rectArea[O]=l,O++}else if(S.isPointLight){let l=Q.get(S);if(l.color.copy(S.color).multiplyScalar(S.intensity),l.distance=S.distance,l.decay=S.decay,S.castShadow){let JJ=S.shadow,d=Z.get(S);d.shadowIntensity=JJ.intensity,d.shadowBias=JJ.bias,d.shadowNormalBias=JJ.normalBias,d.shadowRadius=JJ.radius,d.shadowMapSize=JJ.mapSize,d.shadowCameraNear=JJ.camera.near,d.shadowCameraFar=JJ.camera.far,$.pointShadow[R]=d,$.pointShadowMap[R]=a,$.pointShadowMatrix[R]=S.shadow.matrix,M++}$.point[R]=l,R++}else if(S.isHemisphereLight){let l=Q.get(S);l.skyColor.copy(S.color).multiplyScalar(m),l.groundColor.copy(S.groundColor).multiplyScalar(m),$.hemi[D]=l,D++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)$.rectAreaLTC1=EJ.LTC_FLOAT_1,$.rectAreaLTC2=EJ.LTC_FLOAT_2;else $.rectAreaLTC1=EJ.LTC_HALF_1,$.rectAreaLTC2=EJ.LTC_HALF_2;$.ambient[0]=G,$.ambient[1]=E,$.ambient[2]=N;let y=$.hash;if(y.directionalLength!==q||y.pointLength!==R||y.spotLength!==F||y.rectAreaLength!==O||y.hemiLength!==D||y.numDirectionalShadows!==k||y.numPointShadows!==M||y.numSpotShadows!==B||y.numSpotMaps!==T||y.numLightProbes!==C)$.directional.length=q,$.spot.length=F,$.rectArea.length=O,$.point.length=R,$.hemi.length=D,$.directionalShadow.length=k,$.directionalShadowMap.length=k,$.pointShadow.length=M,$.pointShadowMap.length=M,$.spotShadow.length=B,$.spotShadowMap.length=B,$.directionalShadowMatrix.length=k,$.pointShadowMatrix.length=M,$.spotLightMatrix.length=B+T-_,$.spotLightMap.length=T,$.numSpotLightShadowsWithMaps=_,$.numLightProbes=C,y.directionalLength=q,y.pointLength=R,y.spotLength=F,y.rectAreaLength=O,y.hemiLength=D,y.numDirectionalShadows=k,y.numPointShadows=M,y.numSpotShadows=B,y.numSpotMaps=T,y.numLightProbes=C,$.version=L5++}function X(U,G){let E=0,N=0,q=0,R=0,F=0,O=G.matrixWorldInverse;for(let D=0,k=U.length;D<k;D++){let M=U[D];if(M.isDirectionalLight){let B=$.directional[E];B.direction.setFromMatrixPosition(M.matrixWorld),W.setFromMatrixPosition(M.target.matrixWorld),B.direction.sub(W),B.direction.transformDirection(O),E++}else if(M.isSpotLight){let B=$.spot[q];B.position.setFromMatrixPosition(M.matrixWorld),B.position.applyMatrix4(O),B.direction.setFromMatrixPosition(M.matrixWorld),W.setFromMatrixPosition(M.target.matrixWorld),B.direction.sub(W),B.direction.transformDirection(O),q++}else if(M.isRectAreaLight){let B=$.rectArea[R];B.position.setFromMatrixPosition(M.matrixWorld),B.position.applyMatrix4(O),H.identity(),K.copy(M.matrixWorld),K.premultiply(O),H.extractRotation(K),B.halfWidth.set(M.width*0.5,0,0),B.halfHeight.set(0,M.height*0.5,0),B.halfWidth.applyMatrix4(H),B.halfHeight.applyMatrix4(H),R++}else if(M.isPointLight){let B=$.point[N];B.position.setFromMatrixPosition(M.matrixWorld),B.position.applyMatrix4(O),N++}else if(M.isHemisphereLight){let B=$.hemi[F];B.direction.setFromMatrixPosition(M.matrixWorld),B.direction.transformDirection(O),F++}}}return{setup:Y,setupView:X,state:$}}function oX(J){let Q=new B5(J),Z=[],$=[];function W(G){U.camera=G,Z.length=0,$.length=0}function K(G){Z.push(G)}function H(G){$.push(G)}function Y(){Q.setup(Z)}function X(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:$,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:Y,setupLightsView:X,pushLight:K,pushShadow:H}}function I5(J){let Q=new WeakMap;function Z(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new oX(J),Q.set(W,[Y]);else if(K>=H.length)Y=new oX(J),H.push(Y);else Y=H[K];return Y}function $(){Q=new WeakMap}return{get:Z,dispose:$}}var _5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C5(J,Q,Z){let $=new L9,W=new o,K=new o,H=new Z0,Y=new lQ({depthPacking:sH}),X=new uQ,U={},G=Z.maxTextureSize,E={[e9]:i0,[i0]:e9,[O8]:O8},N=new e0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new o},radius:{value:4}},vertexShader:_5,fragmentShader:w5}),q=N.clone();q.defines.HORIZONTAL_PASS=1;let R=new cJ;R.setAttribute("position",new H0(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let F=new k0(R,N),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sZ;let D=this.type;this.render=function(_,C,y){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(_.length===0)return;let L=J.getRenderTarget(),I=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),h=J.state;h.setBlending(m8),h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);let m=D!==D8&&this.type===D8,p=D===D8&&this.type!==D8;for(let a=0,l=_.length;a<l;a++){let JJ=_[a],d=JJ.shadow;if(d===void 0){console.warn("THREE.WebGLShadowMap:",JJ,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;W.copy(d.mapSize);let qJ=d.getFrameExtents();if(W.multiply(qJ),K.copy(d.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/qJ.x),W.x=K.x*qJ.x,d.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/qJ.y),W.y=K.y*qJ.y,d.mapSize.y=K.y}if(d.map===null||m===!0||p===!0){let yJ=this.type!==D8?{minFilter:Z7,magFilter:Z7}:{};if(d.map!==null)d.map.dispose();d.map=new Y8(W.x,W.y,yJ),d.map.texture.name=JJ.name+".shadowMap",d.camera.updateProjectionMatrix()}J.setRenderTarget(d.map),J.clear();let GJ=d.getViewportCount();for(let yJ=0;yJ<GJ;yJ++){let gJ=d.getViewport(yJ);H.set(K.x*gJ.x,K.y*gJ.y,K.x*gJ.z,K.y*gJ.w),h.viewport(H),d.updateMatrices(JJ,yJ),$=d.getFrustum(),B(C,y,d.camera,JJ,this.type)}if(d.isPointLightShadow!==!0&&this.type===D8)k(d,y);d.needsUpdate=!1}D=this.type,O.needsUpdate=!1,J.setRenderTarget(L,I,S)};function k(_,C){let y=Q.update(F);if(N.defines.VSM_SAMPLES!==_.blurSamples)N.defines.VSM_SAMPLES=_.blurSamples,q.defines.VSM_SAMPLES=_.blurSamples,N.needsUpdate=!0,q.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new Y8(W.x,W.y);N.uniforms.shadow_pass.value=_.map.texture,N.uniforms.resolution.value=_.mapSize,N.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(C,null,y,N,F,null),q.uniforms.shadow_pass.value=_.mapPass.texture,q.uniforms.resolution.value=_.mapSize,q.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(C,null,y,q,F,null)}function M(_,C,y,L){let I=null,S=y.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(S!==void 0)I=S;else if(I=y.isPointLight===!0?X:Y,J.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let h=I.uuid,m=C.uuid,p=U[h];if(p===void 0)p={},U[h]=p;let a=p[m];if(a===void 0)a=I.clone(),p[m]=a,C.addEventListener("dispose",T);I=a}if(I.visible=C.visible,I.wireframe=C.wireframe,L===D8)I.side=C.shadowSide!==null?C.shadowSide:C.side;else I.side=C.shadowSide!==null?C.shadowSide:E[C.side];if(I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let h=J.properties.get(I);h.light=y}return I}function B(_,C,y,L,I){if(_.visible===!1)return;if(_.layers.test(C.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&I===D8)&&(!_.frustumCulled||$.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,_.matrixWorld);let m=Q.update(_),p=_.material;if(Array.isArray(p)){let a=m.groups;for(let l=0,JJ=a.length;l<JJ;l++){let d=a[l],qJ=p[d.materialIndex];if(qJ&&qJ.visible){let GJ=M(_,qJ,L,I);_.onBeforeShadow(J,_,C,y,m,GJ,d),J.renderBufferDirect(y,null,m,GJ,_,d),_.onAfterShadow(J,_,C,y,m,GJ,d)}}}else if(p.visible){let a=M(_,p,L,I);_.onBeforeShadow(J,_,C,y,m,a,null),J.renderBufferDirect(y,null,m,a,_,null),_.onAfterShadow(J,_,C,y,m,a,null)}}}let h=_.children;for(let m=0,p=h.length;m<p;m++)B(h[m],C,y,L,I)}function T(_){_.target.removeEventListener("dispose",T);for(let y in U){let L=U[y],I=_.target.uuid;if(I in L)L[I].dispose(),delete L[I]}}}var P5={[t6]:e6,[JQ]:$Q,[QQ]:WQ,[b7]:ZQ,[e6]:t6,[$Q]:JQ,[WQ]:QQ,[ZQ]:b7};function A5(J,Q){function Z(){let j=!1,WJ=new Z0,UJ=null,LJ=new Z0(0,0,0,0);return{setMask:function(QJ){if(UJ!==QJ&&!j)J.colorMask(QJ,QJ,QJ,QJ),UJ=QJ},setLocked:function(QJ){j=QJ},setClear:function(QJ,i,_J,mJ,U0){if(U0===!0)QJ*=mJ,i*=mJ,_J*=mJ;if(WJ.set(QJ,i,_J,mJ),LJ.equals(WJ)===!1)J.clearColor(QJ,i,_J,mJ),LJ.copy(WJ)},reset:function(){j=!1,UJ=null,LJ.set(-1,0,0,0)}}}function $(){let j=!1,WJ=!1,UJ=null,LJ=null,QJ=null;return{setReversed:function(i){if(WJ!==i){let _J=Q.get("EXT_clip_control");if(i)_J.clipControlEXT(_J.LOWER_LEFT_EXT,_J.ZERO_TO_ONE_EXT);else _J.clipControlEXT(_J.LOWER_LEFT_EXT,_J.NEGATIVE_ONE_TO_ONE_EXT);WJ=i;let mJ=QJ;QJ=null,this.setClear(mJ)}},getReversed:function(){return WJ},setTest:function(i){if(i)NJ(J.DEPTH_TEST);else SJ(J.DEPTH_TEST)},setMask:function(i){if(UJ!==i&&!j)J.depthMask(i),UJ=i},setFunc:function(i){if(WJ)i=P5[i];if(LJ!==i){switch(i){case t6:J.depthFunc(J.NEVER);break;case e6:J.depthFunc(J.ALWAYS);break;case JQ:J.depthFunc(J.LESS);break;case b7:J.depthFunc(J.LEQUAL);break;case QQ:J.depthFunc(J.EQUAL);break;case ZQ:J.depthFunc(J.GEQUAL);break;case $Q:J.depthFunc(J.GREATER);break;case WQ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}LJ=i}},setLocked:function(i){j=i},setClear:function(i){if(QJ!==i){if(WJ)i=1-i;J.clearDepth(i),QJ=i}},reset:function(){j=!1,UJ=null,LJ=null,QJ=null,WJ=!1}}}function W(){let j=!1,WJ=null,UJ=null,LJ=null,QJ=null,i=null,_J=null,mJ=null,U0=null;return{setTest:function(K0){if(!j)if(K0)NJ(J.STENCIL_TEST);else SJ(J.STENCIL_TEST)},setMask:function(K0){if(WJ!==K0&&!j)J.stencilMask(K0),WJ=K0},setFunc:function(K0,M8,U8){if(UJ!==K0||LJ!==M8||QJ!==U8)J.stencilFunc(K0,M8,U8),UJ=K0,LJ=M8,QJ=U8},setOp:function(K0,M8,U8){if(i!==K0||_J!==M8||mJ!==U8)J.stencilOp(K0,M8,U8),i=K0,_J=M8,mJ=U8},setLocked:function(K0){j=K0},setClear:function(K0){if(U0!==K0)J.clearStencil(K0),U0=K0},reset:function(){j=!1,WJ=null,UJ=null,LJ=null,QJ=null,i=null,_J=null,mJ=null,U0=null}}}let K=new Z,H=new $,Y=new W,X=new WeakMap,U=new WeakMap,G={},E={},N=new WeakMap,q=[],R=null,F=!1,O=null,D=null,k=null,M=null,B=null,T=null,_=null,C=new RJ(0,0,0),y=0,L=!1,I=null,S=null,h=null,m=null,p=null,a=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=!1,JJ=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)JJ=parseFloat(/^WebGL (\d)/.exec(d)[1]),l=JJ>=1;else if(d.indexOf("OpenGL ES")!==-1)JJ=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),l=JJ>=2;let qJ=null,GJ={},yJ=J.getParameter(J.SCISSOR_BOX),gJ=J.getParameter(J.VIEWPORT),n=new Z0().fromArray(yJ),KJ=new Z0().fromArray(gJ);function AJ(j,WJ,UJ,LJ){let QJ=new Uint8Array(4),i=J.createTexture();J.bindTexture(j,i),J.texParameteri(j,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(j,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let _J=0;_J<UJ;_J++)if(j===J.TEXTURE_3D||j===J.TEXTURE_2D_ARRAY)J.texImage3D(WJ,0,J.RGBA,1,1,LJ,0,J.RGBA,J.UNSIGNED_BYTE,QJ);else J.texImage2D(WJ+_J,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,QJ);return i}let fJ={};fJ[J.TEXTURE_2D]=AJ(J.TEXTURE_2D,J.TEXTURE_2D,1),fJ[J.TEXTURE_CUBE_MAP]=AJ(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),fJ[J.TEXTURE_2D_ARRAY]=AJ(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),fJ[J.TEXTURE_3D]=AJ(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),NJ(J.DEPTH_TEST),H.setFunc(b7),XJ(!1),s(nZ),NJ(J.CULL_FACE),YJ(m8);function NJ(j){if(G[j]!==!0)J.enable(j),G[j]=!0}function SJ(j){if(G[j]!==!1)J.disable(j),G[j]=!1}function lJ(j,WJ){if(E[j]!==WJ){if(J.bindFramebuffer(j,WJ),E[j]=WJ,j===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=WJ;if(j===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=WJ;return!0}return!1}function rJ(j,WJ){let UJ=q,LJ=!1;if(j){if(UJ=N.get(WJ),UJ===void 0)UJ=[],N.set(WJ,UJ);let QJ=j.textures;if(UJ.length!==QJ.length||UJ[0]!==J.COLOR_ATTACHMENT0){for(let i=0,_J=QJ.length;i<_J;i++)UJ[i]=J.COLOR_ATTACHMENT0+i;UJ.length=QJ.length,LJ=!0}}else if(UJ[0]!==J.BACK)UJ[0]=J.BACK,LJ=!0;if(LJ)J.drawBuffers(UJ)}function eJ(j){if(R!==j)return J.useProgram(j),R=j,!0;return!1}let sJ={[J7]:J.FUNC_ADD,[HH]:J.FUNC_SUBTRACT,[YH]:J.FUNC_REVERSE_SUBTRACT};sJ[XH]=J.MIN,sJ[UH]=J.MAX;let w={[GH]:J.ZERO,[EH]:J.ONE,[NH]:J.SRC_COLOR,[DH]:J.SRC_ALPHA,[VH]:J.SRC_ALPHA_SATURATE,[MH]:J.DST_COLOR,[RH]:J.DST_ALPHA,[qH]:J.ONE_MINUS_SRC_COLOR,[OH]:J.ONE_MINUS_SRC_ALPHA,[kH]:J.ONE_MINUS_DST_COLOR,[FH]:J.ONE_MINUS_DST_ALPHA,[LH]:J.CONSTANT_COLOR,[zH]:J.ONE_MINUS_CONSTANT_COLOR,[BH]:J.CONSTANT_ALPHA,[IH]:J.ONE_MINUS_CONSTANT_ALPHA};function YJ(j,WJ,UJ,LJ,QJ,i,_J,mJ,U0,K0){if(j===m8){if(F===!0)SJ(J.BLEND),F=!1;return}if(F===!1)NJ(J.BLEND),F=!0;if(j!==KH){if(j!==O||K0!==L){if(D!==J7||B!==J7)J.blendEquation(J.FUNC_ADD),D=J7,B=J7;if(K0)switch(j){case f7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case iZ:J.blendFunc(J.ONE,J.ONE);break;case oZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case aZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case f7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case iZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case oZ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case aZ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}k=null,M=null,T=null,_=null,C.set(0,0,0),y=0,O=j,L=K0}return}if(QJ=QJ||WJ,i=i||UJ,_J=_J||LJ,WJ!==D||QJ!==B)J.blendEquationSeparate(sJ[WJ],sJ[QJ]),D=WJ,B=QJ;if(UJ!==k||LJ!==M||i!==T||_J!==_)J.blendFuncSeparate(w[UJ],w[LJ],w[i],w[_J]),k=UJ,M=LJ,T=i,_=_J;if(mJ.equals(C)===!1||U0!==y)J.blendColor(mJ.r,mJ.g,mJ.b,U0),C.copy(mJ),y=U0;O=j,L=!1}function e(j,WJ){j.side===O8?SJ(J.CULL_FACE):NJ(J.CULL_FACE);let UJ=j.side===i0;if(WJ)UJ=!UJ;XJ(UJ),j.blending===f7&&j.transparent===!1?YJ(m8):YJ(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),H.setFunc(j.depthFunc),H.setTest(j.depthTest),H.setMask(j.depthWrite),K.setMask(j.colorWrite);let LJ=j.stencilWrite;if(Y.setTest(LJ),LJ)Y.setMask(j.stencilWriteMask),Y.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),Y.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);r(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?NJ(J.SAMPLE_ALPHA_TO_COVERAGE):SJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function XJ(j){if(I!==j){if(j)J.frontFace(J.CW);else J.frontFace(J.CCW);I=j}}function s(j){if(j!==ZH){if(NJ(J.CULL_FACE),j!==S)if(j===nZ)J.cullFace(J.BACK);else if(j===$H)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else SJ(J.CULL_FACE);S=j}function wJ(j){if(j!==h){if(l)J.lineWidth(j);h=j}}function r(j,WJ,UJ){if(j){if(NJ(J.POLYGON_OFFSET_FILL),m!==WJ||p!==UJ)J.polygonOffset(WJ,UJ),m=WJ,p=UJ}else SJ(J.POLYGON_OFFSET_FILL)}function VJ(j){if(j)NJ(J.SCISSOR_TEST);else SJ(J.SCISSOR_TEST)}function iJ(j){if(j===void 0)j=J.TEXTURE0+a-1;if(qJ!==j)J.activeTexture(j),qJ=j}function aJ(j,WJ,UJ){if(UJ===void 0)if(qJ===null)UJ=J.TEXTURE0+a-1;else UJ=qJ;let LJ=GJ[UJ];if(LJ===void 0)LJ={type:void 0,texture:void 0},GJ[UJ]=LJ;if(LJ.type!==j||LJ.texture!==WJ){if(qJ!==UJ)J.activeTexture(UJ),qJ=UJ;J.bindTexture(j,WJ||fJ[j]),LJ.type=j,LJ.texture=WJ}}function A(){let j=GJ[qJ];if(j!==void 0&&j.type!==void 0)J.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function V(){try{J.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function b(){try{J.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function c(){try{J.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function t(){try{J.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function u(){try{J.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function CJ(){try{J.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function HJ(){try{J.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function zJ(){try{J.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function IJ(){try{J.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $J(){try{J.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function FJ(j){if(n.equals(j)===!1)J.scissor(j.x,j.y,j.z,j.w),n.copy(j)}function bJ(j){if(KJ.equals(j)===!1)J.viewport(j.x,j.y,j.z,j.w),KJ.copy(j)}function PJ(j,WJ){let UJ=U.get(WJ);if(UJ===void 0)UJ=new WeakMap,U.set(WJ,UJ);let LJ=UJ.get(j);if(LJ===void 0)LJ=J.getUniformBlockIndex(WJ,j.name),UJ.set(j,LJ)}function DJ(j,WJ){let LJ=U.get(WJ).get(j);if(X.get(WJ)!==LJ)J.uniformBlockBinding(WJ,LJ,j.__bindingPointIndex),X.set(WJ,LJ)}function nJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},qJ=null,GJ={},E={},N=new WeakMap,q=[],R=null,F=!1,O=null,D=null,k=null,M=null,B=null,T=null,_=null,C=new RJ(0,0,0),y=0,L=!1,I=null,S=null,h=null,m=null,p=null,n.set(0,0,J.canvas.width,J.canvas.height),KJ.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:NJ,disable:SJ,bindFramebuffer:lJ,drawBuffers:rJ,useProgram:eJ,setBlending:YJ,setMaterial:e,setFlipSided:XJ,setCullFace:s,setLineWidth:wJ,setPolygonOffset:r,setScissorTest:VJ,activeTexture:iJ,bindTexture:aJ,unbindTexture:A,compressedTexImage2D:V,compressedTexImage3D:b,texImage2D:IJ,texImage3D:$J,updateUBOMapping:PJ,uniformBlockBinding:DJ,texStorage2D:HJ,texStorage3D:zJ,texSubImage2D:c,texSubImage3D:t,compressedTexSubImage2D:u,compressedTexSubImage3D:CJ,scissor:FJ,viewport:bJ,reset:nJ}}function T5(J,Q,Z,$,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new o,G=new WeakMap,E,N=new WeakMap,q=!1;try{q=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function R(A,V){return q?new OffscreenCanvas(A,V):s9("canvas")}function F(A,V,b){let c=1,t=aJ(A);if(t.width>b||t.height>b)c=b/Math.max(t.width,t.height);if(c<1)if(typeof HTMLImageElement!=="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&A instanceof VideoFrame){let u=Math.floor(c*t.width),CJ=Math.floor(c*t.height);if(E===void 0)E=R(u,CJ);let HJ=V?R(u,CJ):E;return HJ.width=u,HJ.height=CJ,HJ.getContext("2d").drawImage(A,0,0,u,CJ),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+u+"x"+CJ+")."),HJ}else{if("data"in A)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return A}return A}function O(A){return A.generateMipmaps}function D(A){J.generateMipmap(A)}function k(A){if(A.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(A.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(A,V,b,c,t=!1){if(A!==null){if(J[A]!==void 0)return J[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let u=V;if(V===J.RED){if(b===J.FLOAT)u=J.R32F;if(b===J.HALF_FLOAT)u=J.R16F;if(b===J.UNSIGNED_BYTE)u=J.R8}if(V===J.RED_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.R8UI;if(b===J.UNSIGNED_SHORT)u=J.R16UI;if(b===J.UNSIGNED_INT)u=J.R32UI;if(b===J.BYTE)u=J.R8I;if(b===J.SHORT)u=J.R16I;if(b===J.INT)u=J.R32I}if(V===J.RG){if(b===J.FLOAT)u=J.RG32F;if(b===J.HALF_FLOAT)u=J.RG16F;if(b===J.UNSIGNED_BYTE)u=J.RG8}if(V===J.RG_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.RG8UI;if(b===J.UNSIGNED_SHORT)u=J.RG16UI;if(b===J.UNSIGNED_INT)u=J.RG32UI;if(b===J.BYTE)u=J.RG8I;if(b===J.SHORT)u=J.RG16I;if(b===J.INT)u=J.RG32I}if(V===J.RGB_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.RGB8UI;if(b===J.UNSIGNED_SHORT)u=J.RGB16UI;if(b===J.UNSIGNED_INT)u=J.RGB32UI;if(b===J.BYTE)u=J.RGB8I;if(b===J.SHORT)u=J.RGB16I;if(b===J.INT)u=J.RGB32I}if(V===J.RGBA_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.RGBA8UI;if(b===J.UNSIGNED_SHORT)u=J.RGBA16UI;if(b===J.UNSIGNED_INT)u=J.RGBA32UI;if(b===J.BYTE)u=J.RGBA8I;if(b===J.SHORT)u=J.RGBA16I;if(b===J.INT)u=J.RGBA32I}if(V===J.RGB){if(b===J.UNSIGNED_INT_5_9_9_9_REV)u=J.RGB9_E5}if(V===J.RGBA){let CJ=t?A$:J0.getTransfer(c);if(b===J.FLOAT)u=J.RGBA32F;if(b===J.HALF_FLOAT)u=J.RGBA16F;if(b===J.UNSIGNED_BYTE)u=CJ===G0?J.SRGB8_ALPHA8:J.RGBA8;if(b===J.UNSIGNED_SHORT_4_4_4_4)u=J.RGBA4;if(b===J.UNSIGNED_SHORT_5_5_5_1)u=J.RGB5_A1}if(u===J.R16F||u===J.R32F||u===J.RG16F||u===J.RG32F||u===J.RGBA16F||u===J.RGBA32F)Q.get("EXT_color_buffer_float");return u}function B(A,V){let b;if(A){if(V===null||V===W7||V===K7)b=J.DEPTH24_STENCIL8;else if(V===l8)b=J.DEPTH32F_STENCIL8;else if(V===g7)b=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(V===null||V===W7||V===K7)b=J.DEPTH_COMPONENT24;else if(V===l8)b=J.DEPTH_COMPONENT32F;else if(V===g7)b=J.DEPTH_COMPONENT16;return b}function T(A,V){if(O(A)===!0||A.isFramebufferTexture&&A.minFilter!==Z7&&A.minFilter!==R9)return Math.log2(Math.max(V.width,V.height))+1;else if(A.mipmaps!==void 0&&A.mipmaps.length>0)return A.mipmaps.length;else if(A.isCompressedTexture&&Array.isArray(A.image))return V.mipmaps.length;else return 1}function _(A){let V=A.target;if(V.removeEventListener("dispose",_),y(V),V.isVideoTexture)G.delete(V)}function C(A){let V=A.target;V.removeEventListener("dispose",C),I(V)}function y(A){let V=$.get(A);if(V.__webglInit===void 0)return;let b=A.source,c=N.get(b);if(c){let t=c[V.__cacheKey];if(t.usedTimes--,t.usedTimes===0)L(A);if(Object.keys(c).length===0)N.delete(b)}$.remove(A)}function L(A){let V=$.get(A);J.deleteTexture(V.__webglTexture);let b=A.source,c=N.get(b);delete c[V.__cacheKey],H.memory.textures--}function I(A){let V=$.get(A);if(A.depthTexture)A.depthTexture.dispose(),$.remove(A.depthTexture);if(A.isWebGLCubeRenderTarget)for(let c=0;c<6;c++){if(Array.isArray(V.__webglFramebuffer[c]))for(let t=0;t<V.__webglFramebuffer[c].length;t++)J.deleteFramebuffer(V.__webglFramebuffer[c][t]);else J.deleteFramebuffer(V.__webglFramebuffer[c]);if(V.__webglDepthbuffer)J.deleteRenderbuffer(V.__webglDepthbuffer[c])}else{if(Array.isArray(V.__webglFramebuffer))for(let c=0;c<V.__webglFramebuffer.length;c++)J.deleteFramebuffer(V.__webglFramebuffer[c]);else J.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer)J.deleteRenderbuffer(V.__webglDepthbuffer);if(V.__webglMultisampledFramebuffer)J.deleteFramebuffer(V.__webglMultisampledFramebuffer);if(V.__webglColorRenderbuffer){for(let c=0;c<V.__webglColorRenderbuffer.length;c++)if(V.__webglColorRenderbuffer[c])J.deleteRenderbuffer(V.__webglColorRenderbuffer[c])}if(V.__webglDepthRenderbuffer)J.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let b=A.textures;for(let c=0,t=b.length;c<t;c++){let u=$.get(b[c]);if(u.__webglTexture)J.deleteTexture(u.__webglTexture),H.memory.textures--;$.remove(b[c])}$.remove(A)}let S=0;function h(){S=0}function m(){let A=S;if(A>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+W.maxTextures);return S+=1,A}function p(A){let V=[];return V.push(A.wrapS),V.push(A.wrapT),V.push(A.wrapR||0),V.push(A.magFilter),V.push(A.minFilter),V.push(A.anisotropy),V.push(A.internalFormat),V.push(A.format),V.push(A.type),V.push(A.generateMipmaps),V.push(A.premultiplyAlpha),V.push(A.flipY),V.push(A.unpackAlignment),V.push(A.colorSpace),V.join()}function a(A,V){let b=$.get(A);if(A.isVideoTexture)VJ(A);if(A.isRenderTargetTexture===!1&&A.version>0&&b.__version!==A.version){let c=A.image;if(c===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(c.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fJ(b,A,V);return}}Z.bindTexture(J.TEXTURE_2D,b.__webglTexture,J.TEXTURE0+V)}function l(A,V){let b=$.get(A);if(A.version>0&&b.__version!==A.version){fJ(b,A,V);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,b.__webglTexture,J.TEXTURE0+V)}function JJ(A,V){let b=$.get(A);if(A.version>0&&b.__version!==A.version){fJ(b,A,V);return}Z.bindTexture(J.TEXTURE_3D,b.__webglTexture,J.TEXTURE0+V)}function d(A,V){let b=$.get(A);if(A.version>0&&b.__version!==A.version){NJ(b,A,V);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,b.__webglTexture,J.TEXTURE0+V)}let qJ={[fH]:J.REPEAT,[bH]:J.CLAMP_TO_EDGE,[hH]:J.MIRRORED_REPEAT},GJ={[Z7]:J.NEAREST,[xH]:J.NEAREST_MIPMAP_NEAREST,[x7]:J.NEAREST_MIPMAP_LINEAR,[R9]:J.LINEAR,[YQ]:J.LINEAR_MIPMAP_NEAREST,[$7]:J.LINEAR_MIPMAP_LINEAR},yJ={[rH]:J.NEVER,[$Y]:J.ALWAYS,[tH]:J.LESS,[T$]:J.LEQUAL,[eH]:J.EQUAL,[ZY]:J.GEQUAL,[JY]:J.GREATER,[QY]:J.NOTEQUAL};function gJ(A,V){if(V.type===l8&&Q.has("OES_texture_float_linear")===!1&&(V.magFilter===R9||V.magFilter===YQ||V.magFilter===x7||V.magFilter===$7||V.minFilter===R9||V.minFilter===YQ||V.minFilter===x7||V.minFilter===$7))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(A,J.TEXTURE_WRAP_S,qJ[V.wrapS]),J.texParameteri(A,J.TEXTURE_WRAP_T,qJ[V.wrapT]),A===J.TEXTURE_3D||A===J.TEXTURE_2D_ARRAY)J.texParameteri(A,J.TEXTURE_WRAP_R,qJ[V.wrapR]);if(J.texParameteri(A,J.TEXTURE_MAG_FILTER,GJ[V.magFilter]),J.texParameteri(A,J.TEXTURE_MIN_FILTER,GJ[V.minFilter]),V.compareFunction)J.texParameteri(A,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(A,J.TEXTURE_COMPARE_FUNC,yJ[V.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(V.magFilter===Z7)return;if(V.minFilter!==x7&&V.minFilter!==$7)return;if(V.type===l8&&Q.has("OES_texture_float_linear")===!1)return;if(V.anisotropy>1||$.get(V).__currentAnisotropy){let b=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(A,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,W.getMaxAnisotropy())),$.get(V).__currentAnisotropy=V.anisotropy}}}function n(A,V){let b=!1;if(A.__webglInit===void 0)A.__webglInit=!0,V.addEventListener("dispose",_);let c=V.source,t=N.get(c);if(t===void 0)t={},N.set(c,t);let u=p(V);if(u!==A.__cacheKey){if(t[u]===void 0)t[u]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,b=!0;t[u].usedTimes++;let CJ=t[A.__cacheKey];if(CJ!==void 0){if(t[A.__cacheKey].usedTimes--,CJ.usedTimes===0)L(V)}A.__cacheKey=u,A.__webglTexture=t[u].texture}return b}function KJ(A,V,b){return Math.floor(Math.floor(A/b)/V)}function AJ(A,V,b,c){let u=A.updateRanges;if(u.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,V.width,V.height,b,c,V.data);else{u.sort(($J,FJ)=>$J.start-FJ.start);let CJ=0;for(let $J=1;$J<u.length;$J++){let FJ=u[CJ],bJ=u[$J],PJ=FJ.start+FJ.count,DJ=KJ(bJ.start,V.width,4),nJ=KJ(FJ.start,V.width,4);if(bJ.start<=PJ+1&&DJ===nJ&&KJ(bJ.start+bJ.count-1,V.width,4)===DJ)FJ.count=Math.max(FJ.count,bJ.start+bJ.count-FJ.start);else++CJ,u[CJ]=bJ}u.length=CJ+1;let HJ=J.getParameter(J.UNPACK_ROW_LENGTH),zJ=J.getParameter(J.UNPACK_SKIP_PIXELS),IJ=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,V.width);for(let $J=0,FJ=u.length;$J<FJ;$J++){let bJ=u[$J],PJ=Math.floor(bJ.start/4),DJ=Math.ceil(bJ.count/4),nJ=PJ%V.width,j=Math.floor(PJ/V.width),WJ=DJ,UJ=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,nJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,j),Z.texSubImage2D(J.TEXTURE_2D,0,nJ,j,WJ,1,b,c,V.data)}A.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,HJ),J.pixelStorei(J.UNPACK_SKIP_PIXELS,zJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,IJ)}}function fJ(A,V,b){let c=J.TEXTURE_2D;if(V.isDataArrayTexture||V.isCompressedArrayTexture)c=J.TEXTURE_2D_ARRAY;if(V.isData3DTexture)c=J.TEXTURE_3D;let t=n(A,V),u=V.source;Z.bindTexture(c,A.__webglTexture,J.TEXTURE0+b);let CJ=$.get(u);if(u.version!==CJ.__version||t===!0){Z.activeTexture(J.TEXTURE0+b);let HJ=J0.getPrimaries(J0.workingColorSpace),zJ=V.colorSpace===F9?null:J0.getPrimaries(V.colorSpace),IJ=V.colorSpace===F9||HJ===zJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,IJ);let $J=F(V.image,!1,W.maxTextureSize);$J=iJ(V,$J);let FJ=K.convert(V.format,V.colorSpace),bJ=K.convert(V.type),PJ=M(V.internalFormat,FJ,bJ,V.colorSpace,V.isVideoTexture);gJ(c,V);let DJ,nJ=V.mipmaps,j=V.isVideoTexture!==!0,WJ=CJ.__version===void 0||t===!0,UJ=u.dataReady,LJ=T(V,$J);if(V.isDepthTexture){if(PJ=B(V.format===m7,V.type),WJ)if(j)Z.texStorage2D(J.TEXTURE_2D,1,PJ,$J.width,$J.height);else Z.texImage2D(J.TEXTURE_2D,0,PJ,$J.width,$J.height,0,FJ,bJ,null)}else if(V.isDataTexture)if(nJ.length>0){if(j&&WJ)Z.texStorage2D(J.TEXTURE_2D,LJ,PJ,nJ[0].width,nJ[0].height);for(let QJ=0,i=nJ.length;QJ<i;QJ++)if(DJ=nJ[QJ],j){if(UJ)Z.texSubImage2D(J.TEXTURE_2D,QJ,0,0,DJ.width,DJ.height,FJ,bJ,DJ.data)}else Z.texImage2D(J.TEXTURE_2D,QJ,PJ,DJ.width,DJ.height,0,FJ,bJ,DJ.data);V.generateMipmaps=!1}else if(j){if(WJ)Z.texStorage2D(J.TEXTURE_2D,LJ,PJ,$J.width,$J.height);if(UJ)AJ(V,$J,FJ,bJ)}else Z.texImage2D(J.TEXTURE_2D,0,PJ,$J.width,$J.height,0,FJ,bJ,$J.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){if(j&&WJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,LJ,PJ,nJ[0].width,nJ[0].height,$J.depth);for(let QJ=0,i=nJ.length;QJ<i;QJ++)if(DJ=nJ[QJ],V.format!==R8)if(FJ!==null)if(j){if(UJ)if(V.layerUpdates.size>0){let _J=rQ(DJ.width,DJ.height,V.format,V.type);for(let mJ of V.layerUpdates){let U0=DJ.data.subarray(mJ*_J/DJ.data.BYTES_PER_ELEMENT,(mJ+1)*_J/DJ.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,QJ,0,0,mJ,DJ.width,DJ.height,1,FJ,U0)}V.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,QJ,0,0,0,DJ.width,DJ.height,$J.depth,FJ,DJ.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,QJ,PJ,DJ.width,DJ.height,$J.depth,0,DJ.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j){if(UJ)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,QJ,0,0,0,DJ.width,DJ.height,$J.depth,FJ,bJ,DJ.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,QJ,PJ,DJ.width,DJ.height,$J.depth,0,FJ,bJ,DJ.data)}else{if(j&&WJ)Z.texStorage2D(J.TEXTURE_2D,LJ,PJ,nJ[0].width,nJ[0].height);for(let QJ=0,i=nJ.length;QJ<i;QJ++)if(DJ=nJ[QJ],V.format!==R8)if(FJ!==null)if(j){if(UJ)Z.compressedTexSubImage2D(J.TEXTURE_2D,QJ,0,0,DJ.width,DJ.height,FJ,DJ.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,QJ,PJ,DJ.width,DJ.height,0,DJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(j){if(UJ)Z.texSubImage2D(J.TEXTURE_2D,QJ,0,0,DJ.width,DJ.height,FJ,bJ,DJ.data)}else Z.texImage2D(J.TEXTURE_2D,QJ,PJ,DJ.width,DJ.height,0,FJ,bJ,DJ.data)}else if(V.isDataArrayTexture)if(j){if(WJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,LJ,PJ,$J.width,$J.height,$J.depth);if(UJ)if(V.layerUpdates.size>0){let QJ=rQ($J.width,$J.height,V.format,V.type);for(let i of V.layerUpdates){let _J=$J.data.subarray(i*QJ/$J.data.BYTES_PER_ELEMENT,(i+1)*QJ/$J.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,i,$J.width,$J.height,1,FJ,bJ,_J)}V.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,$J.width,$J.height,$J.depth,FJ,bJ,$J.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,PJ,$J.width,$J.height,$J.depth,0,FJ,bJ,$J.data);else if(V.isData3DTexture)if(j){if(WJ)Z.texStorage3D(J.TEXTURE_3D,LJ,PJ,$J.width,$J.height,$J.depth);if(UJ)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,$J.width,$J.height,$J.depth,FJ,bJ,$J.data)}else Z.texImage3D(J.TEXTURE_3D,0,PJ,$J.width,$J.height,$J.depth,0,FJ,bJ,$J.data);else if(V.isFramebufferTexture){if(WJ)if(j)Z.texStorage2D(J.TEXTURE_2D,LJ,PJ,$J.width,$J.height);else{let{width:QJ,height:i}=$J;for(let _J=0;_J<LJ;_J++)Z.texImage2D(J.TEXTURE_2D,_J,PJ,QJ,i,0,FJ,bJ,null),QJ>>=1,i>>=1}}else if(nJ.length>0){if(j&&WJ){let QJ=aJ(nJ[0]);Z.texStorage2D(J.TEXTURE_2D,LJ,PJ,QJ.width,QJ.height)}for(let QJ=0,i=nJ.length;QJ<i;QJ++)if(DJ=nJ[QJ],j){if(UJ)Z.texSubImage2D(J.TEXTURE_2D,QJ,0,0,FJ,bJ,DJ)}else Z.texImage2D(J.TEXTURE_2D,QJ,PJ,FJ,bJ,DJ);V.generateMipmaps=!1}else if(j){if(WJ){let QJ=aJ($J);Z.texStorage2D(J.TEXTURE_2D,LJ,PJ,QJ.width,QJ.height)}if(UJ)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,FJ,bJ,$J)}else Z.texImage2D(J.TEXTURE_2D,0,PJ,FJ,bJ,$J);if(O(V))D(c);if(CJ.__version=u.version,V.onUpdate)V.onUpdate(V)}A.__version=V.version}function NJ(A,V,b){if(V.image.length!==6)return;let c=n(A,V),t=V.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,A.__webglTexture,J.TEXTURE0+b);let u=$.get(t);if(t.version!==u.__version||c===!0){Z.activeTexture(J.TEXTURE0+b);let CJ=J0.getPrimaries(J0.workingColorSpace),HJ=V.colorSpace===F9?null:J0.getPrimaries(V.colorSpace),zJ=V.colorSpace===F9||CJ===HJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,zJ);let IJ=V.isCompressedTexture||V.image[0].isCompressedTexture,$J=V.image[0]&&V.image[0].isDataTexture,FJ=[];for(let i=0;i<6;i++){if(!IJ&&!$J)FJ[i]=F(V.image[i],!0,W.maxCubemapSize);else FJ[i]=$J?V.image[i].image:V.image[i];FJ[i]=iJ(V,FJ[i])}let bJ=FJ[0],PJ=K.convert(V.format,V.colorSpace),DJ=K.convert(V.type),nJ=M(V.internalFormat,PJ,DJ,V.colorSpace),j=V.isVideoTexture!==!0,WJ=u.__version===void 0||c===!0,UJ=t.dataReady,LJ=T(V,bJ);gJ(J.TEXTURE_CUBE_MAP,V);let QJ;if(IJ){if(j&&WJ)Z.texStorage2D(J.TEXTURE_CUBE_MAP,LJ,nJ,bJ.width,bJ.height);for(let i=0;i<6;i++){QJ=FJ[i].mipmaps;for(let _J=0;_J<QJ.length;_J++){let mJ=QJ[_J];if(V.format!==R8)if(PJ!==null)if(j){if(UJ)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J,0,0,mJ.width,mJ.height,PJ,mJ.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J,nJ,mJ.width,mJ.height,0,mJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(j){if(UJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J,0,0,mJ.width,mJ.height,PJ,DJ,mJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J,nJ,mJ.width,mJ.height,0,PJ,DJ,mJ.data)}}}else{if(QJ=V.mipmaps,j&&WJ){if(QJ.length>0)LJ++;let i=aJ(FJ[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,LJ,nJ,i.width,i.height)}for(let i=0;i<6;i++)if($J){if(j){if(UJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,FJ[i].width,FJ[i].height,PJ,DJ,FJ[i].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,nJ,FJ[i].width,FJ[i].height,0,PJ,DJ,FJ[i].data);for(let _J=0;_J<QJ.length;_J++){let U0=QJ[_J].image[i].image;if(j){if(UJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J+1,0,0,U0.width,U0.height,PJ,DJ,U0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J+1,nJ,U0.width,U0.height,0,PJ,DJ,U0.data)}}else{if(j){if(UJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,PJ,DJ,FJ[i])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,nJ,PJ,DJ,FJ[i]);for(let _J=0;_J<QJ.length;_J++){let mJ=QJ[_J];if(j){if(UJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J+1,0,0,PJ,DJ,mJ.image[i])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,_J+1,nJ,PJ,DJ,mJ.image[i])}}}if(O(V))D(J.TEXTURE_CUBE_MAP);if(u.__version=t.version,V.onUpdate)V.onUpdate(V)}A.__version=V.version}function SJ(A,V,b,c,t,u){let CJ=K.convert(b.format,b.colorSpace),HJ=K.convert(b.type),zJ=M(b.internalFormat,CJ,HJ,b.colorSpace),IJ=$.get(V),$J=$.get(b);if($J.__renderTarget=V,!IJ.__hasExternalTextures){let FJ=Math.max(1,V.width>>u),bJ=Math.max(1,V.height>>u);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)Z.texImage3D(t,u,zJ,FJ,bJ,V.depth,0,CJ,HJ,null);else Z.texImage2D(t,u,zJ,FJ,bJ,0,CJ,HJ,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,A),r(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,c,t,$J.__webglTexture,0,wJ(V));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,c,t,$J.__webglTexture,u);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function lJ(A,V,b){if(J.bindRenderbuffer(J.RENDERBUFFER,A),V.depthBuffer){let c=V.depthTexture,t=c&&c.isDepthTexture?c.type:null,u=B(V.stencilBuffer,t),CJ=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,HJ=wJ(V);if(r(V))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,HJ,u,V.width,V.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,HJ,u,V.width,V.height);else J.renderbufferStorage(J.RENDERBUFFER,u,V.width,V.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,CJ,J.RENDERBUFFER,A)}else{let c=V.textures;for(let t=0;t<c.length;t++){let u=c[t],CJ=K.convert(u.format,u.colorSpace),HJ=K.convert(u.type),zJ=M(u.internalFormat,CJ,HJ,u.colorSpace),IJ=wJ(V);if(b&&r(V)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,IJ,zJ,V.width,V.height);else if(r(V))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,IJ,zJ,V.width,V.height);else J.renderbufferStorage(J.RENDERBUFFER,zJ,V.width,V.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function rJ(A,V){if(V&&V.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,A),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let c=$.get(V.depthTexture);if(c.__renderTarget=V,!c.__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0;a(V.depthTexture,0);let t=c.__webglTexture,u=wJ(V);if(V.depthTexture.format===XQ)if(r(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,t,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,t,0);else if(V.depthTexture.format===m7)if(r(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,t,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,t,0);else throw new Error("Unknown depthTexture format")}function eJ(A){let V=$.get(A),b=A.isWebGLCubeRenderTarget===!0;if(V.__boundDepthTexture!==A.depthTexture){let c=A.depthTexture;if(V.__depthDisposeCallback)V.__depthDisposeCallback();if(c){let t=()=>{delete V.__boundDepthTexture,delete V.__depthDisposeCallback,c.removeEventListener("dispose",t)};c.addEventListener("dispose",t),V.__depthDisposeCallback=t}V.__boundDepthTexture=c}if(A.depthTexture&&!V.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");let c=A.texture.mipmaps;if(c&&c.length>0)rJ(V.__webglFramebuffer[0],A);else rJ(V.__webglFramebuffer,A)}else if(b){V.__webglDepthbuffer=[];for(let c=0;c<6;c++)if(Z.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer[c]),V.__webglDepthbuffer[c]===void 0)V.__webglDepthbuffer[c]=J.createRenderbuffer(),lJ(V.__webglDepthbuffer[c],A,!1);else{let t=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=V.__webglDepthbuffer[c];J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,u)}}else{let c=A.texture.mipmaps;if(c&&c.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer);if(V.__webglDepthbuffer===void 0)V.__webglDepthbuffer=J.createRenderbuffer(),lJ(V.__webglDepthbuffer,A,!1);else{let t=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=V.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,u)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function sJ(A,V,b){let c=$.get(A);if(V!==void 0)SJ(c.__webglFramebuffer,A,A.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(b!==void 0)eJ(A)}function w(A){let V=A.texture,b=$.get(A),c=$.get(V);A.addEventListener("dispose",C);let t=A.textures,u=A.isWebGLCubeRenderTarget===!0,CJ=t.length>1;if(!CJ){if(c.__webglTexture===void 0)c.__webglTexture=J.createTexture();c.__version=V.version,H.memory.textures++}if(u){b.__webglFramebuffer=[];for(let HJ=0;HJ<6;HJ++)if(V.mipmaps&&V.mipmaps.length>0){b.__webglFramebuffer[HJ]=[];for(let zJ=0;zJ<V.mipmaps.length;zJ++)b.__webglFramebuffer[HJ][zJ]=J.createFramebuffer()}else b.__webglFramebuffer[HJ]=J.createFramebuffer()}else{if(V.mipmaps&&V.mipmaps.length>0){b.__webglFramebuffer=[];for(let HJ=0;HJ<V.mipmaps.length;HJ++)b.__webglFramebuffer[HJ]=J.createFramebuffer()}else b.__webglFramebuffer=J.createFramebuffer();if(CJ)for(let HJ=0,zJ=t.length;HJ<zJ;HJ++){let IJ=$.get(t[HJ]);if(IJ.__webglTexture===void 0)IJ.__webglTexture=J.createTexture(),H.memory.textures++}if(A.samples>0&&r(A)===!1){b.__webglMultisampledFramebuffer=J.createFramebuffer(),b.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let HJ=0;HJ<t.length;HJ++){let zJ=t[HJ];b.__webglColorRenderbuffer[HJ]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,b.__webglColorRenderbuffer[HJ]);let IJ=K.convert(zJ.format,zJ.colorSpace),$J=K.convert(zJ.type),FJ=M(zJ.internalFormat,IJ,$J,zJ.colorSpace,A.isXRRenderTarget===!0),bJ=wJ(A);J.renderbufferStorageMultisample(J.RENDERBUFFER,bJ,FJ,A.width,A.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+HJ,J.RENDERBUFFER,b.__webglColorRenderbuffer[HJ])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),A.depthBuffer)b.__webglDepthRenderbuffer=J.createRenderbuffer(),lJ(b.__webglDepthRenderbuffer,A,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(u){Z.bindTexture(J.TEXTURE_CUBE_MAP,c.__webglTexture),gJ(J.TEXTURE_CUBE_MAP,V);for(let HJ=0;HJ<6;HJ++)if(V.mipmaps&&V.mipmaps.length>0)for(let zJ=0;zJ<V.mipmaps.length;zJ++)SJ(b.__webglFramebuffer[HJ][zJ],A,V,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+HJ,zJ);else SJ(b.__webglFramebuffer[HJ],A,V,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+HJ,0);if(O(V))D(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(CJ){for(let HJ=0,zJ=t.length;HJ<zJ;HJ++){let IJ=t[HJ],$J=$.get(IJ);if(Z.bindTexture(J.TEXTURE_2D,$J.__webglTexture),gJ(J.TEXTURE_2D,IJ),SJ(b.__webglFramebuffer,A,IJ,J.COLOR_ATTACHMENT0+HJ,J.TEXTURE_2D,0),O(IJ))D(J.TEXTURE_2D)}Z.unbindTexture()}else{let HJ=J.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)HJ=A.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(HJ,c.__webglTexture),gJ(HJ,V),V.mipmaps&&V.mipmaps.length>0)for(let zJ=0;zJ<V.mipmaps.length;zJ++)SJ(b.__webglFramebuffer[zJ],A,V,J.COLOR_ATTACHMENT0,HJ,zJ);else SJ(b.__webglFramebuffer,A,V,J.COLOR_ATTACHMENT0,HJ,0);if(O(V))D(HJ);Z.unbindTexture()}if(A.depthBuffer)eJ(A)}function YJ(A){let V=A.textures;for(let b=0,c=V.length;b<c;b++){let t=V[b];if(O(t)){let u=k(A),CJ=$.get(t).__webglTexture;Z.bindTexture(u,CJ),D(u),Z.unbindTexture()}}}let e=[],XJ=[];function s(A){if(A.samples>0){if(r(A)===!1){let{textures:V,width:b,height:c}=A,t=J.COLOR_BUFFER_BIT,u=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,CJ=$.get(A),HJ=V.length>1;if(HJ)for(let IJ=0;IJ<V.length;IJ++)Z.bindFramebuffer(J.FRAMEBUFFER,CJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+IJ,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,CJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+IJ,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,CJ.__webglMultisampledFramebuffer);let zJ=A.texture.mipmaps;if(zJ&&zJ.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,CJ.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,CJ.__webglFramebuffer);for(let IJ=0;IJ<V.length;IJ++){if(A.resolveDepthBuffer){if(A.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(A.stencilBuffer&&A.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(HJ){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,CJ.__webglColorRenderbuffer[IJ]);let $J=$.get(V[IJ]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,$J,0)}if(J.blitFramebuffer(0,0,b,c,0,0,b,c,t,J.NEAREST),X===!0){if(e.length=0,XJ.length=0,e.push(J.COLOR_ATTACHMENT0+IJ),A.depthBuffer&&A.resolveDepthBuffer===!1)e.push(u),XJ.push(u),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,XJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,e)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),HJ)for(let IJ=0;IJ<V.length;IJ++){Z.bindFramebuffer(J.FRAMEBUFFER,CJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+IJ,J.RENDERBUFFER,CJ.__webglColorRenderbuffer[IJ]);let $J=$.get(V[IJ]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,CJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+IJ,J.TEXTURE_2D,$J,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,CJ.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&X){let V=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[V])}}}function wJ(A){return Math.min(W.maxSamples,A.samples)}function r(A){let V=$.get(A);return A.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function VJ(A){let V=H.render.frame;if(G.get(A)!==V)G.set(A,V),A.update()}function iJ(A,V){let{colorSpace:b,format:c,type:t}=A;if(A.isCompressedTexture===!0||A.isVideoTexture===!0)return V;if(b!==d7&&b!==F9)if(J0.getTransfer(b)===G0){if(c!==R8||t!==d8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",b);return V}function aJ(A){if(typeof HTMLImageElement!=="undefined"&&A instanceof HTMLImageElement)U.width=A.naturalWidth||A.width,U.height=A.naturalHeight||A.height;else if(typeof VideoFrame!=="undefined"&&A instanceof VideoFrame)U.width=A.displayWidth,U.height=A.displayHeight;else U.width=A.width,U.height=A.height;return U}this.allocateTextureUnit=m,this.resetTextureUnits=h,this.setTexture2D=a,this.setTexture2DArray=l,this.setTexture3D=JJ,this.setTextureCube=d,this.rebindTextures=sJ,this.setupRenderTarget=w,this.updateRenderTargetMipmap=YJ,this.updateMultisampleRenderTarget=s,this.setupDepthRenderbuffer=eJ,this.setupFrameBufferTexture=SJ,this.useMultisampledRTT=r}function S5(J,Q){function Z($,W=F9){let K,H=J0.getTransfer(W);if($===d8)return J.UNSIGNED_BYTE;if($===tZ)return J.UNSIGNED_SHORT_4_4_4_4;if($===eZ)return J.UNSIGNED_SHORT_5_5_5_1;if($===mH)return J.UNSIGNED_INT_5_9_9_9_REV;if($===gH)return J.BYTE;if($===pH)return J.SHORT;if($===g7)return J.UNSIGNED_SHORT;if($===rZ)return J.INT;if($===W7)return J.UNSIGNED_INT;if($===l8)return J.FLOAT;if($===p7)return J.HALF_FLOAT;if($===dH)return J.ALPHA;if($===lH)return J.RGB;if($===R8)return J.RGBA;if($===XQ)return J.DEPTH_COMPONENT;if($===m7)return J.DEPTH_STENCIL;if($===uH)return J.RED;if($===J$)return J.RED_INTEGER;if($===cH)return J.RG;if($===Q$)return J.RG_INTEGER;if($===Z$)return J.RGBA_INTEGER;if($===UQ||$===GQ||$===EQ||$===NQ)if(H===G0)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if($===UQ)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if($===GQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if($===EQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if($===NQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if($===UQ)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if($===GQ)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if($===EQ)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if($===NQ)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if($===$$||$===W$||$===K$||$===H$)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if($===$$)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if($===W$)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if($===K$)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if($===H$)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if($===Y$||$===X$||$===U$)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if($===Y$||$===X$)return H===G0?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if($===U$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC}else return null;if($===G$||$===E$||$===N$||$===q$||$===D$||$===O$||$===R$||$===F$||$===M$||$===k$||$===V$||$===L$||$===z$||$===B$)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if($===G$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if($===E$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if($===N$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if($===q$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if($===D$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if($===O$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if($===R$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if($===F$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if($===M$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if($===k$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if($===V$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if($===L$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if($===z$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if($===B$)return H===G0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if($===qQ||$===I$||$===_$)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if($===qQ)return H===G0?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if($===I$)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if($===_$)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if($===nH||$===w$||$===C$||$===P$)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if($===qQ)return K.COMPRESSED_RED_RGTC1_EXT;if($===w$)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if($===C$)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if($===P$)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if($===K7)return J.UNSIGNED_INT_24_8;return J[$]!==void 0?J[$]:null}return{convert:Z}}var j5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,Z){if(this.texture===null){let $=new F0,W=J.properties.get($);if(W.__webglTexture=Q.texture,Q.depthNear!==Z.depthNear||Q.depthFar!==Z.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new e0({vertexShader:j5,fragmentShader:y5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new k0(new Y7(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YU extends H8{constructor(J,Q){super();let Z=this,$=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,E=null,N=null,q=null,R=new HU,F=Q.getContextAttributes(),O=null,D=null,k=[],M=[],B=new o,T=null,_=new I0;_.viewport=new Z0;let C=new I0;C.viewport=new Z0;let y=[_,C],L=new IW,I=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let KJ=k[n];if(KJ===void 0)KJ=new s7,k[n]=KJ;return KJ.getTargetRaySpace()},this.getControllerGrip=function(n){let KJ=k[n];if(KJ===void 0)KJ=new s7,k[n]=KJ;return KJ.getGripSpace()},this.getHand=function(n){let KJ=k[n];if(KJ===void 0)KJ=new s7,k[n]=KJ;return KJ.getHandSpace()};function h(n){let KJ=M.indexOf(n.inputSource);if(KJ===-1)return;let AJ=k[KJ];if(AJ!==void 0)AJ.update(n.inputSource,n.frame,X||K),AJ.dispatchEvent({type:n.type,data:n.inputSource})}function m(){$.removeEventListener("select",h),$.removeEventListener("selectstart",h),$.removeEventListener("selectend",h),$.removeEventListener("squeeze",h),$.removeEventListener("squeezestart",h),$.removeEventListener("squeezeend",h),$.removeEventListener("end",m),$.removeEventListener("inputsourceschange",p);for(let n=0;n<k.length;n++){let KJ=M[n];if(KJ===null)continue;M[n]=null,k[n].disconnect(KJ)}I=null,S=null,R.reset(),J.setRenderTarget(O),N=null,E=null,G=null,$=null,D=null,gJ.stop(),Z.isPresenting=!1,J.setPixelRatio(T),J.setSize(B.width,B.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(H=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(n){X=n},this.getBaseLayer=function(){return E!==null?E:N},this.getBinding=function(){return G},this.getFrame=function(){return q},this.getSession=function(){return $},this.setSession=async function(n){if($=n,$!==null){if(O=J.getRenderTarget(),$.addEventListener("select",h),$.addEventListener("selectstart",h),$.addEventListener("selectend",h),$.addEventListener("squeeze",h),$.addEventListener("squeezestart",h),$.addEventListener("squeezeend",h),$.addEventListener("end",m),$.addEventListener("inputsourceschange",p),F.xrCompatible!==!0)await Q.makeXRCompatible();if(T=J.getPixelRatio(),J.getSize(B),!(typeof XRWebGLBinding!=="undefined"&&("createProjectionLayer"in XRWebGLBinding.prototype))){let AJ={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer($,Q,AJ),$.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),D=new Y8(N.framebufferWidth,N.framebufferHeight,{format:R8,type:d8,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}else{let AJ=null,fJ=null,NJ=null;if(F.depth)NJ=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,AJ=F.stencil?m7:XQ,fJ=F.stencil?K7:W7;let SJ={colorFormat:Q.RGBA8,depthFormat:NJ,scaleFactor:W};G=new XRWebGLBinding($,Q),E=G.createProjectionLayer(SJ),$.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),D=new Y8(E.textureWidth,E.textureHeight,{format:R8,type:d8,depthTexture:new IQ(E.textureWidth,E.textureHeight,fJ,void 0,void 0,void 0,void 0,void 0,void 0,AJ),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await $.requestReferenceSpace(H),gJ.setContext($),gJ.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if($!==null)return $.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function p(n){for(let KJ=0;KJ<n.removed.length;KJ++){let AJ=n.removed[KJ],fJ=M.indexOf(AJ);if(fJ>=0)M[fJ]=null,k[fJ].disconnect(AJ)}for(let KJ=0;KJ<n.added.length;KJ++){let AJ=n.added[KJ],fJ=M.indexOf(AJ);if(fJ===-1){for(let SJ=0;SJ<k.length;SJ++)if(SJ>=M.length){M.push(AJ),fJ=SJ;break}else if(M[SJ]===null){M[SJ]=AJ,fJ=SJ;break}if(fJ===-1)break}let NJ=k[fJ];if(NJ)NJ.connect(AJ)}}let a=new P,l=new P;function JJ(n,KJ,AJ){a.setFromMatrixPosition(KJ.matrixWorld),l.setFromMatrixPosition(AJ.matrixWorld);let fJ=a.distanceTo(l),NJ=KJ.projectionMatrix.elements,SJ=AJ.projectionMatrix.elements,lJ=NJ[14]/(NJ[10]-1),rJ=NJ[14]/(NJ[10]+1),eJ=(NJ[9]+1)/NJ[5],sJ=(NJ[9]-1)/NJ[5],w=(NJ[8]-1)/NJ[0],YJ=(SJ[8]+1)/SJ[0],e=lJ*w,XJ=lJ*YJ,s=fJ/(-w+YJ),wJ=s*-w;if(KJ.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(wJ),n.translateZ(s),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),NJ[10]===-1)n.projectionMatrix.copy(KJ.projectionMatrix),n.projectionMatrixInverse.copy(KJ.projectionMatrixInverse);else{let r=lJ+s,VJ=rJ+s,iJ=e-wJ,aJ=XJ+(fJ-wJ),A=eJ*rJ/VJ*r,V=sJ*rJ/VJ*r;n.projectionMatrix.makePerspective(iJ,aJ,A,V,r,VJ),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function d(n,KJ){if(KJ===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(KJ.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if($===null)return;let{near:KJ,far:AJ}=n;if(R.texture!==null){if(R.depthNear>0)KJ=R.depthNear;if(R.depthFar>0)AJ=R.depthFar}if(L.near=C.near=_.near=KJ,L.far=C.far=_.far=AJ,I!==L.near||S!==L.far)$.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,S=L.far;_.layers.mask=n.layers.mask|2,C.layers.mask=n.layers.mask|4,L.layers.mask=_.layers.mask|C.layers.mask;let fJ=n.parent,NJ=L.cameras;d(L,fJ);for(let SJ=0;SJ<NJ.length;SJ++)d(NJ[SJ],fJ);if(NJ.length===2)JJ(L,_,C);else L.projectionMatrix.copy(_.projectionMatrix);qJ(n,L,fJ)};function qJ(n,KJ,AJ){if(AJ===null)n.matrix.copy(KJ.matrixWorld);else n.matrix.copy(AJ.matrixWorld),n.matrix.invert(),n.matrix.multiply(KJ.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(KJ.projectionMatrix),n.projectionMatrixInverse.copy(KJ.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=G9*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return L},this.getFoveation=function(){if(E===null&&N===null)return;return Y},this.setFoveation=function(n){if(Y=n,E!==null)E.fixedFoveation=n;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=n},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(L)};let GJ=null;function yJ(n,KJ){if(U=KJ.getViewerPose(X||K),q=KJ,U!==null){let AJ=U.views;if(N!==null)J.setRenderTargetFramebuffer(D,N.framebuffer),J.setRenderTarget(D);let fJ=!1;if(AJ.length!==L.cameras.length)L.cameras.length=0,fJ=!0;for(let lJ=0;lJ<AJ.length;lJ++){let rJ=AJ[lJ],eJ=null;if(N!==null)eJ=N.getViewport(rJ);else{let w=G.getViewSubImage(E,rJ);if(eJ=w.viewport,lJ===0)J.setRenderTargetTextures(D,w.colorTexture,w.depthStencilTexture),J.setRenderTarget(D)}let sJ=y[lJ];if(sJ===void 0)sJ=new I0,sJ.layers.enable(lJ),sJ.viewport=new Z0,y[lJ]=sJ;if(sJ.matrix.fromArray(rJ.transform.matrix),sJ.matrix.decompose(sJ.position,sJ.quaternion,sJ.scale),sJ.projectionMatrix.fromArray(rJ.projectionMatrix),sJ.projectionMatrixInverse.copy(sJ.projectionMatrix).invert(),sJ.viewport.set(eJ.x,eJ.y,eJ.width,eJ.height),lJ===0)L.matrix.copy(sJ.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);if(fJ===!0)L.cameras.push(sJ)}let NJ=$.enabledFeatures;if(NJ&&NJ.includes("depth-sensing")&&$.depthUsage=="gpu-optimized"&&G){let lJ=G.getDepthInformation(AJ[0]);if(lJ&&lJ.isValid&&lJ.texture)R.init(J,lJ,$.renderState)}}for(let AJ=0;AJ<k.length;AJ++){let fJ=M[AJ],NJ=k[AJ];if(fJ!==null&&NJ!==void 0)NJ.update(fJ,KJ,X||K)}if(GJ)GJ(n,KJ);if(KJ.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:KJ});q=null}let gJ=new aX;gJ.setAnimationLoop(yJ),this.setAnimationLoop=function(n){GJ=n},this.dispose=function(){}}}var B9=new s0,v5=new vJ;function f5(J,Q){function Z(O,D){if(O.matrixAutoUpdate===!0)O.updateMatrix();D.value.copy(O.matrix)}function $(O,D){if(D.color.getRGB(O.fogColor.value,f$(J)),D.isFog)O.fogNear.value=D.near,O.fogFar.value=D.far;else if(D.isFogExp2)O.fogDensity.value=D.density}function W(O,D,k,M,B){if(D.isMeshBasicMaterial)K(O,D);else if(D.isMeshLambertMaterial)K(O,D);else if(D.isMeshToonMaterial)K(O,D),E(O,D);else if(D.isMeshPhongMaterial)K(O,D),G(O,D);else if(D.isMeshStandardMaterial){if(K(O,D),N(O,D),D.isMeshPhysicalMaterial)q(O,D,B)}else if(D.isMeshMatcapMaterial)K(O,D),R(O,D);else if(D.isMeshDepthMaterial)K(O,D);else if(D.isMeshDistanceMaterial)K(O,D),F(O,D);else if(D.isMeshNormalMaterial)K(O,D);else if(D.isLineBasicMaterial){if(H(O,D),D.isLineDashedMaterial)Y(O,D)}else if(D.isPointsMaterial)X(O,D,k,M);else if(D.isSpriteMaterial)U(O,D);else if(D.isShadowMaterial)O.color.value.copy(D.color),O.opacity.value=D.opacity;else if(D.isShaderMaterial)D.uniformsNeedUpdate=!1}function K(O,D){if(O.opacity.value=D.opacity,D.color)O.diffuse.value.copy(D.color);if(D.emissive)O.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity);if(D.map)O.map.value=D.map,Z(D.map,O.mapTransform);if(D.alphaMap)O.alphaMap.value=D.alphaMap,Z(D.alphaMap,O.alphaMapTransform);if(D.bumpMap){if(O.bumpMap.value=D.bumpMap,Z(D.bumpMap,O.bumpMapTransform),O.bumpScale.value=D.bumpScale,D.side===i0)O.bumpScale.value*=-1}if(D.normalMap){if(O.normalMap.value=D.normalMap,Z(D.normalMap,O.normalMapTransform),O.normalScale.value.copy(D.normalScale),D.side===i0)O.normalScale.value.negate()}if(D.displacementMap)O.displacementMap.value=D.displacementMap,Z(D.displacementMap,O.displacementMapTransform),O.displacementScale.value=D.displacementScale,O.displacementBias.value=D.displacementBias;if(D.emissiveMap)O.emissiveMap.value=D.emissiveMap,Z(D.emissiveMap,O.emissiveMapTransform);if(D.specularMap)O.specularMap.value=D.specularMap,Z(D.specularMap,O.specularMapTransform);if(D.alphaTest>0)O.alphaTest.value=D.alphaTest;let k=Q.get(D),M=k.envMap,B=k.envMapRotation;if(M){if(O.envMap.value=M,B9.copy(B),B9.x*=-1,B9.y*=-1,B9.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1)B9.y*=-1,B9.z*=-1;O.envMapRotation.value.setFromMatrix4(v5.makeRotationFromEuler(B9)),O.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,O.reflectivity.value=D.reflectivity,O.ior.value=D.ior,O.refractionRatio.value=D.refractionRatio}if(D.lightMap)O.lightMap.value=D.lightMap,O.lightMapIntensity.value=D.lightMapIntensity,Z(D.lightMap,O.lightMapTransform);if(D.aoMap)O.aoMap.value=D.aoMap,O.aoMapIntensity.value=D.aoMapIntensity,Z(D.aoMap,O.aoMapTransform)}function H(O,D){if(O.diffuse.value.copy(D.color),O.opacity.value=D.opacity,D.map)O.map.value=D.map,Z(D.map,O.mapTransform)}function Y(O,D){O.dashSize.value=D.dashSize,O.totalSize.value=D.dashSize+D.gapSize,O.scale.value=D.scale}function X(O,D,k,M){if(O.diffuse.value.copy(D.color),O.opacity.value=D.opacity,O.size.value=D.size*k,O.scale.value=M*0.5,D.map)O.map.value=D.map,Z(D.map,O.uvTransform);if(D.alphaMap)O.alphaMap.value=D.alphaMap,Z(D.alphaMap,O.alphaMapTransform);if(D.alphaTest>0)O.alphaTest.value=D.alphaTest}function U(O,D){if(O.diffuse.value.copy(D.color),O.opacity.value=D.opacity,O.rotation.value=D.rotation,D.map)O.map.value=D.map,Z(D.map,O.mapTransform);if(D.alphaMap)O.alphaMap.value=D.alphaMap,Z(D.alphaMap,O.alphaMapTransform);if(D.alphaTest>0)O.alphaTest.value=D.alphaTest}function G(O,D){O.specular.value.copy(D.specular),O.shininess.value=Math.max(D.shininess,0.0001)}function E(O,D){if(D.gradientMap)O.gradientMap.value=D.gradientMap}function N(O,D){if(O.metalness.value=D.metalness,D.metalnessMap)O.metalnessMap.value=D.metalnessMap,Z(D.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=D.roughness,D.roughnessMap)O.roughnessMap.value=D.roughnessMap,Z(D.roughnessMap,O.roughnessMapTransform);if(D.envMap)O.envMapIntensity.value=D.envMapIntensity}function q(O,D,k){if(O.ior.value=D.ior,D.sheen>0){if(O.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),O.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap)O.sheenColorMap.value=D.sheenColorMap,Z(D.sheenColorMap,O.sheenColorMapTransform);if(D.sheenRoughnessMap)O.sheenRoughnessMap.value=D.sheenRoughnessMap,Z(D.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(D.clearcoat>0){if(O.clearcoat.value=D.clearcoat,O.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap)O.clearcoatMap.value=D.clearcoatMap,Z(D.clearcoatMap,O.clearcoatMapTransform);if(D.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,Z(D.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(D.clearcoatNormalMap){if(O.clearcoatNormalMap.value=D.clearcoatNormalMap,Z(D.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===i0)O.clearcoatNormalScale.value.negate()}}if(D.dispersion>0)O.dispersion.value=D.dispersion;if(D.iridescence>0){if(O.iridescence.value=D.iridescence,O.iridescenceIOR.value=D.iridescenceIOR,O.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap)O.iridescenceMap.value=D.iridescenceMap,Z(D.iridescenceMap,O.iridescenceMapTransform);if(D.iridescenceThicknessMap)O.iridescenceThicknessMap.value=D.iridescenceThicknessMap,Z(D.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(D.transmission>0){if(O.transmission.value=D.transmission,O.transmissionSamplerMap.value=k.texture,O.transmissionSamplerSize.value.set(k.width,k.height),D.transmissionMap)O.transmissionMap.value=D.transmissionMap,Z(D.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=D.thickness,D.thicknessMap)O.thicknessMap.value=D.thicknessMap,Z(D.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=D.attenuationDistance,O.attenuationColor.value.copy(D.attenuationColor)}if(D.anisotropy>0){if(O.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap)O.anisotropyMap.value=D.anisotropyMap,Z(D.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=D.specularIntensity,O.specularColor.value.copy(D.specularColor),D.specularColorMap)O.specularColorMap.value=D.specularColorMap,Z(D.specularColorMap,O.specularColorMapTransform);if(D.specularIntensityMap)O.specularIntensityMap.value=D.specularIntensityMap,Z(D.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,D){if(D.matcap)O.matcap.value=D.matcap}function F(O,D){let k=Q.get(D).light;O.referencePosition.value.setFromMatrixPosition(k.matrixWorld),O.nearDistance.value=k.shadow.camera.near,O.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:$,refreshMaterialUniforms:W}}function b5(J,Q,Z,$){let W={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(k,M){let B=M.program;$.uniformBlockBinding(k,B)}function U(k,M){let B=W[k.id];if(B===void 0)R(k),B=G(k),W[k.id]=B,k.addEventListener("dispose",O);let T=M.program;$.updateUBOMapping(k,T);let _=Q.render.frame;if(K[k.id]!==_)N(k),K[k.id]=_}function G(k){let M=E();k.__bindingPointIndex=M;let B=J.createBuffer(),T=k.__size,_=k.usage;return J.bindBuffer(J.UNIFORM_BUFFER,B),J.bufferData(J.UNIFORM_BUFFER,T,_),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,M,B),B}function E(){for(let k=0;k<Y;k++)if(H.indexOf(k)===-1)return H.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(k){let M=W[k.id],B=k.uniforms,T=k.__cache;J.bindBuffer(J.UNIFORM_BUFFER,M);for(let _=0,C=B.length;_<C;_++){let y=Array.isArray(B[_])?B[_]:[B[_]];for(let L=0,I=y.length;L<I;L++){let S=y[L];if(q(S,_,L,T)===!0){let h=S.__offset,m=Array.isArray(S.value)?S.value:[S.value],p=0;for(let a=0;a<m.length;a++){let l=m[a],JJ=F(l);if(typeof l==="number"||typeof l==="boolean")S.__data[0]=l,J.bufferSubData(J.UNIFORM_BUFFER,h+p,S.__data);else if(l.isMatrix3)S.__data[0]=l.elements[0],S.__data[1]=l.elements[1],S.__data[2]=l.elements[2],S.__data[3]=0,S.__data[4]=l.elements[3],S.__data[5]=l.elements[4],S.__data[6]=l.elements[5],S.__data[7]=0,S.__data[8]=l.elements[6],S.__data[9]=l.elements[7],S.__data[10]=l.elements[8],S.__data[11]=0;else l.toArray(S.__data,p),p+=JJ.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,h,S.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(k,M,B,T){let _=k.value,C=M+"_"+B;if(T[C]===void 0){if(typeof _==="number"||typeof _==="boolean")T[C]=_;else T[C]=_.clone();return!0}else{let y=T[C];if(typeof _==="number"||typeof _==="boolean"){if(y!==_)return T[C]=_,!0}else if(y.equals(_)===!1)return y.copy(_),!0}return!1}function R(k){let M=k.uniforms,B=0,T=16;for(let C=0,y=M.length;C<y;C++){let L=Array.isArray(M[C])?M[C]:[M[C]];for(let I=0,S=L.length;I<S;I++){let h=L[I],m=Array.isArray(h.value)?h.value:[h.value];for(let p=0,a=m.length;p<a;p++){let l=m[p],JJ=F(l),d=B%T,qJ=d%JJ.boundary,GJ=d+qJ;if(B+=qJ,GJ!==0&&T-GJ<JJ.storage)B+=T-GJ;h.__data=new Float32Array(JJ.storage/Float32Array.BYTES_PER_ELEMENT),h.__offset=B,B+=JJ.storage}}}let _=B%T;if(_>0)B+=T-_;return k.__size=B,k.__cache={},this}function F(k){let M={boundary:0,storage:0};if(typeof k==="number"||typeof k==="boolean")M.boundary=4,M.storage=4;else if(k.isVector2)M.boundary=8,M.storage=8;else if(k.isVector3||k.isColor)M.boundary=16,M.storage=12;else if(k.isVector4)M.boundary=16,M.storage=16;else if(k.isMatrix3)M.boundary=48,M.storage=48;else if(k.isMatrix4)M.boundary=64,M.storage=64;else if(k.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k);return M}function O(k){let M=k.target;M.removeEventListener("dispose",O);let B=H.indexOf(M.__bindingPointIndex);H.splice(B,1),J.deleteBuffer(W[M.id]),delete W[M.id],delete K[M.id]}function D(){for(let k in W)J.deleteBuffer(W[k]);H=[],W={},K={}}return{bind:X,update:U,dispose:D}}class h5{constructor(J={}){let{canvas:Q=KY(),context:Z=null,depth:$=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reverseDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let N;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=Z.getContextAttributes().alpha}else N=K;let q=new Uint32Array(4),R=new Int32Array(4),F=null,O=null,D=[],k=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=T8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,B=!1;this._outputColorSpace=aH;let T=0,_=0,C=null,y=-1,L=null,I=new Z0,S=new Z0,h=null,m=new RJ(0),p=0,a=Q.width,l=Q.height,JJ=1,d=null,qJ=null,GJ=new Z0(0,0,a,l),yJ=new Z0(0,0,a,l),gJ=!1,n=new L9,KJ=!1,AJ=!1,fJ=new vJ,NJ=new vJ,SJ=new P,lJ=new Z0,rJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},eJ=!1;function sJ(){return C===null?JJ:1}let w=Z;function YJ(z,v){return Q.getContext(z,v)}try{let z={alpha:!0,depth:$,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${QH}`);if(Q.addEventListener("webglcontextlost",UJ,!1),Q.addEventListener("webglcontextrestored",LJ,!1),Q.addEventListener("webglcontextcreationerror",QJ,!1),w===null){if(w=YJ("webgl2",z),w===null)if(YJ("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let e,XJ,s,wJ,r,VJ,iJ,aJ,A,V,b,c,t,u,CJ,HJ,zJ,IJ,$J,FJ,bJ,PJ,DJ,nJ;function j(){if(e=new JD(w),e.init(),PJ=new S5(w,e),XJ=new sq(w,e,J,PJ),s=new A5(w,e),XJ.reverseDepthBuffer&&E)s.buffers.depth.setReversed(!0);wJ=new $D(w),r=new R5,VJ=new T5(w,e,s,r,XJ,PJ,wJ),iJ=new oq(M),aJ=new eq(M),A=new UN(w),DJ=new cq(w,A),V=new QD(w,A,wJ,DJ),b=new KD(w,V,A,wJ),$J=new WD(w,XJ,VJ),HJ=new iq(r),c=new O5(M,iJ,aJ,e,XJ,DJ,HJ),t=new f5(M,r),u=new M5,CJ=new I5(e),IJ=new uq(M,iJ,aJ,s,b,N,Y),zJ=new C5(M,b,XJ),nJ=new b5(w,wJ,XJ,s),FJ=new nq(w,e,wJ),bJ=new ZD(w,e,wJ),wJ.programs=c.programs,M.capabilities=XJ,M.extensions=e,M.properties=r,M.renderLists=u,M.shadowMap=zJ,M.state=s,M.info=wJ}j();let WJ=new YU(M,w);this.xr=WJ,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let z=e.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=e.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return JJ},this.setPixelRatio=function(z){if(z===void 0)return;JJ=z,this.setSize(a,l,!1)},this.getSize=function(z){return z.set(a,l)},this.setSize=function(z,v,x=!0){if(WJ.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(a=z,l=v,Q.width=Math.floor(z*JJ),Q.height=Math.floor(v*JJ),x===!0)Q.style.width=z+"px",Q.style.height=v+"px";this.setViewport(0,0,z,v)},this.getDrawingBufferSize=function(z){return z.set(a*JJ,l*JJ).floor()},this.setDrawingBufferSize=function(z,v,x){a=z,l=v,JJ=x,Q.width=Math.floor(z*x),Q.height=Math.floor(v*x),this.setViewport(0,0,z,v)},this.getCurrentViewport=function(z){return z.copy(I)},this.getViewport=function(z){return z.copy(GJ)},this.setViewport=function(z,v,x,g){if(z.isVector4)GJ.set(z.x,z.y,z.z,z.w);else GJ.set(z,v,x,g);s.viewport(I.copy(GJ).multiplyScalar(JJ).round())},this.getScissor=function(z){return z.copy(yJ)},this.setScissor=function(z,v,x,g){if(z.isVector4)yJ.set(z.x,z.y,z.z,z.w);else yJ.set(z,v,x,g);s.scissor(S.copy(yJ).multiplyScalar(JJ).round())},this.getScissorTest=function(){return gJ},this.setScissorTest=function(z){s.setScissorTest(gJ=z)},this.setOpaqueSort=function(z){d=z},this.setTransparentSort=function(z){qJ=z},this.getClearColor=function(z){return z.copy(IJ.getClearColor())},this.setClearColor=function(){IJ.setClearColor(...arguments)},this.getClearAlpha=function(){return IJ.getClearAlpha()},this.setClearAlpha=function(){IJ.setClearAlpha(...arguments)},this.clear=function(z=!0,v=!0,x=!0){let g=0;if(z){let f=!1;if(C!==null){let ZJ=C.texture.format;f=ZJ===Z$||ZJ===Q$||ZJ===J$}if(f){let ZJ=C.texture.type,OJ=ZJ===d8||ZJ===W7||ZJ===g7||ZJ===K7||ZJ===tZ||ZJ===eZ,BJ=IJ.getClearColor(),MJ=IJ.getClearAlpha(),hJ=BJ.r,xJ=BJ.g,TJ=BJ.b;if(OJ)q[0]=hJ,q[1]=xJ,q[2]=TJ,q[3]=MJ,w.clearBufferuiv(w.COLOR,0,q);else R[0]=hJ,R[1]=xJ,R[2]=TJ,R[3]=MJ,w.clearBufferiv(w.COLOR,0,R)}else g|=w.COLOR_BUFFER_BIT}if(v)g|=w.DEPTH_BUFFER_BIT;if(x)g|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);w.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",UJ,!1),Q.removeEventListener("webglcontextrestored",LJ,!1),Q.removeEventListener("webglcontextcreationerror",QJ,!1),IJ.dispose(),u.dispose(),CJ.dispose(),r.dispose(),iJ.dispose(),aJ.dispose(),b.dispose(),DJ.dispose(),nJ.dispose(),c.dispose(),WJ.dispose(),WJ.removeEventListener("sessionstart",U8),WJ.removeEventListener("sessionend",dW),s8.stop()};function UJ(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function LJ(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let z=wJ.autoReset,v=zJ.enabled,x=zJ.autoUpdate,g=zJ.needsUpdate,f=zJ.type;j(),wJ.autoReset=z,zJ.enabled=v,zJ.autoUpdate=x,zJ.needsUpdate=g,zJ.type=f}function QJ(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function i(z){let v=z.target;v.removeEventListener("dispose",i),_J(v)}function _J(z){mJ(z),r.remove(z)}function mJ(z){let v=r.get(z).programs;if(v!==void 0){if(v.forEach(function(x){c.releaseProgram(x)}),z.isShaderMaterial)c.releaseShaderCache(z)}}this.renderBufferDirect=function(z,v,x,g,f,ZJ){if(v===null)v=rJ;let OJ=f.isMesh&&f.matrixWorld.determinant()<0,BJ=XU(z,v,x,g,f);s.setMaterial(g,OJ);let MJ=x.index,hJ=1;if(g.wireframe===!0){if(MJ=V.getWireframeAttribute(x),MJ===void 0)return;hJ=2}let xJ=x.drawRange,TJ=x.attributes.position,tJ=xJ.start*hJ,Y0=(xJ.start+xJ.count)*hJ;if(ZJ!==null)tJ=Math.max(tJ,ZJ.start*hJ),Y0=Math.min(Y0,(ZJ.start+ZJ.count)*hJ);if(MJ!==null)tJ=Math.max(tJ,0),Y0=Math.min(Y0,MJ.count);else if(TJ!==void 0&&TJ!==null)tJ=Math.max(tJ,0),Y0=Math.min(Y0,TJ.count);let O0=Y0-tJ;if(O0<0||O0===1/0)return;DJ.setup(f,g,BJ,x,MJ);let E0,X0=FJ;if(MJ!==null)E0=A.get(MJ),X0=bJ,X0.setIndex(E0);if(f.isMesh)if(g.wireframe===!0)s.setLineWidth(g.wireframeLinewidth*sJ()),X0.setMode(w.LINES);else X0.setMode(w.TRIANGLES);else if(f.isLine){let jJ=g.linewidth;if(jJ===void 0)jJ=1;if(s.setLineWidth(jJ*sJ()),f.isLineSegments)X0.setMode(w.LINES);else if(f.isLineLoop)X0.setMode(w.LINE_LOOP);else X0.setMode(w.LINE_STRIP)}else if(f.isPoints)X0.setMode(w.POINTS);else if(f.isSprite)X0.setMode(w.TRIANGLES);if(f.isBatchedMesh)if(f._multiDrawInstances!==null)E9("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),X0.renderMultiDrawInstances(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount,f._multiDrawInstances);else if(!e.get("WEBGL_multi_draw")){let{_multiDrawStarts:jJ,_multiDrawCounts:q0,_multiDrawCount:W0}=f,d0=MJ?A.get(MJ).bytesPerElement:1,w9=r.get(g).currentProgram.getUniforms();for(let l0=0;l0<W0;l0++)w9.setValue(w,"_gl_DrawID",l0),X0.render(jJ[l0]/d0,q0[l0])}else X0.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)X0.renderInstances(tJ,O0,f.count);else if(x.isInstancedBufferGeometry){let jJ=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,q0=Math.min(x.instanceCount,jJ);X0.renderInstances(tJ,O0,q0)}else X0.render(tJ,O0)};function U0(z,v,x){if(z.transparent===!0&&z.side===O8&&z.forceSinglePass===!1)z.side=i0,z.needsUpdate=!0,K6(z,v,x),z.side=e9,z.needsUpdate=!0,K6(z,v,x),z.side=O8;else K6(z,v,x)}this.compile=function(z,v,x=null){if(x===null)x=z;if(O=CJ.get(x),O.init(v),k.push(O),x.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(O.pushLight(f),f.castShadow)O.pushShadow(f)}}),z!==x)z.traverseVisible(function(f){if(f.isLight&&f.layers.test(v.layers)){if(O.pushLight(f),f.castShadow)O.pushShadow(f)}});O.setupLights();let g=new Set;return z.traverse(function(f){if(!(f.isMesh||f.isPoints||f.isLine||f.isSprite))return;let ZJ=f.material;if(ZJ)if(Array.isArray(ZJ))for(let OJ=0;OJ<ZJ.length;OJ++){let BJ=ZJ[OJ];U0(BJ,x,f),g.add(BJ)}else U0(ZJ,x,f),g.add(ZJ)}),O=k.pop(),g},this.compileAsync=function(z,v,x=null){let g=this.compile(z,v,x);return new Promise((f)=>{function ZJ(){if(g.forEach(function(OJ){if(r.get(OJ).currentProgram.isReady())g.delete(OJ)}),g.size===0){f(z);return}setTimeout(ZJ,10)}if(e.get("KHR_parallel_shader_compile")!==null)ZJ();else setTimeout(ZJ,10)})};let K0=null;function M8(z){if(K0)K0(z)}function U8(){s8.stop()}function dW(){s8.start()}let s8=new aX;if(s8.setAnimationLoop(M8),typeof self!=="undefined")s8.setContext(self);this.setAnimationLoop=function(z){K0=z,WJ.setAnimationLoop(z),z===null?s8.stop():s8.start()},WJ.addEventListener("sessionstart",U8),WJ.addEventListener("sessionend",dW),this.render=function(z,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(WJ.enabled===!0&&WJ.isPresenting===!0){if(WJ.cameraAutoUpdate===!0)WJ.updateCamera(v);v=WJ.getCamera()}if(z.isScene===!0)z.onBeforeRender(M,z,v,C);if(O=CJ.get(z,k.length),O.init(v),k.push(O),NJ.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),n.setFromProjectionMatrix(NJ),AJ=this.localClippingEnabled,KJ=HJ.init(this.clippingPlanes,AJ),F=u.get(z,D.length),F.init(),D.push(F),WJ.enabled===!0&&WJ.isPresenting===!0){let ZJ=M.xr.getDepthSensingMesh();if(ZJ!==null)ZZ(ZJ,v,-1/0,M.sortObjects)}if(ZZ(z,v,0,M.sortObjects),F.finish(),M.sortObjects===!0)F.sort(d,qJ);if(eJ=WJ.enabled===!1||WJ.isPresenting===!1||WJ.hasDepthSensing()===!1,eJ)IJ.addToRenderList(F,z);if(this.info.render.frame++,KJ===!0)HJ.beginShadows();let x=O.state.shadowsArray;if(zJ.render(x,z,v),KJ===!0)HJ.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:f}=F;if(O.setupLights(),v.isArrayCamera){let ZJ=v.cameras;if(f.length>0)for(let OJ=0,BJ=ZJ.length;OJ<BJ;OJ++){let MJ=ZJ[OJ];uW(g,f,z,MJ)}if(eJ)IJ.render(z);for(let OJ=0,BJ=ZJ.length;OJ<BJ;OJ++){let MJ=ZJ[OJ];lW(F,z,MJ,MJ.viewport)}}else{if(f.length>0)uW(g,f,z,v);if(eJ)IJ.render(z);lW(F,z,v)}if(C!==null&&_===0)VJ.updateMultisampleRenderTarget(C),VJ.updateRenderTargetMipmap(C);if(z.isScene===!0)z.onAfterRender(M,z,v);if(DJ.resetDefaultState(),y=-1,L=null,k.pop(),k.length>0){if(O=k[k.length-1],KJ===!0)HJ.setGlobalState(M.clippingPlanes,O.state.camera)}else O=null;if(D.pop(),D.length>0)F=D[D.length-1];else F=null};function ZZ(z,v,x,g){if(z.visible===!1)return;if(z.layers.test(v.layers)){if(z.isGroup)x=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(v)}else if(z.isLight){if(O.pushLight(z),z.castShadow)O.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||n.intersectsSprite(z)){if(g)lJ.setFromMatrixPosition(z.matrixWorld).applyMatrix4(NJ);let OJ=b.update(z),BJ=z.material;if(BJ.visible)F.push(z,OJ,BJ,x,lJ.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||n.intersectsObject(z)){let OJ=b.update(z),BJ=z.material;if(g){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();lJ.copy(z.boundingSphere.center)}else{if(OJ.boundingSphere===null)OJ.computeBoundingSphere();lJ.copy(OJ.boundingSphere.center)}lJ.applyMatrix4(z.matrixWorld).applyMatrix4(NJ)}if(Array.isArray(BJ)){let MJ=OJ.groups;for(let hJ=0,xJ=MJ.length;hJ<xJ;hJ++){let TJ=MJ[hJ],tJ=BJ[TJ.materialIndex];if(tJ&&tJ.visible)F.push(z,OJ,tJ,x,lJ.z,TJ)}}else if(BJ.visible)F.push(z,OJ,BJ,x,lJ.z,null)}}}let ZJ=z.children;for(let OJ=0,BJ=ZJ.length;OJ<BJ;OJ++)ZZ(ZJ[OJ],v,x,g)}function lW(z,v,x,g){let{opaque:f,transmissive:ZJ,transparent:OJ}=z;if(O.setupLightsView(x),KJ===!0)HJ.setGlobalState(M.clippingPlanes,x);if(g)s.viewport(I.copy(g));if(f.length>0)W6(f,v,x);if(ZJ.length>0)W6(ZJ,v,x);if(OJ.length>0)W6(OJ,v,x);s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),s.setPolygonOffset(!1)}function uW(z,v,x,g){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[g.id]===void 0)O.state.transmissionRenderTarget[g.id]=new Y8(1,1,{generateMipmaps:!0,type:e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float")?p7:d8,minFilter:$7,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:J0.workingColorSpace});let ZJ=O.state.transmissionRenderTarget[g.id],OJ=g.viewport||I;ZJ.setSize(OJ.z*M.transmissionResolutionScale,OJ.w*M.transmissionResolutionScale);let BJ=M.getRenderTarget(),MJ=M.getActiveCubeFace(),hJ=M.getActiveMipmapLevel();if(M.setRenderTarget(ZJ),M.getClearColor(m),p=M.getClearAlpha(),p<1)M.setClearColor(16777215,0.5);if(M.clear(),eJ)IJ.render(x);let xJ=M.toneMapping;M.toneMapping=T8;let TJ=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(O.setupLightsView(g),KJ===!0)HJ.setGlobalState(M.clippingPlanes,g);if(W6(z,x,g),VJ.updateMultisampleRenderTarget(ZJ),VJ.updateRenderTargetMipmap(ZJ),e.has("WEBGL_multisampled_render_to_texture")===!1){let tJ=!1;for(let Y0=0,O0=v.length;Y0<O0;Y0++){let E0=v[Y0],X0=E0.object,jJ=E0.geometry,q0=E0.material,W0=E0.group;if(q0.side===O8&&X0.layers.test(g.layers)){let d0=q0.side;q0.side=i0,q0.needsUpdate=!0,cW(X0,x,g,jJ,q0,W0),q0.side=d0,q0.needsUpdate=!0,tJ=!0}}if(tJ===!0)VJ.updateMultisampleRenderTarget(ZJ),VJ.updateRenderTargetMipmap(ZJ)}if(M.setRenderTarget(BJ,MJ,hJ),M.setClearColor(m,p),TJ!==void 0)g.viewport=TJ;M.toneMapping=xJ}function W6(z,v,x){let g=v.isScene===!0?v.overrideMaterial:null;for(let f=0,ZJ=z.length;f<ZJ;f++){let OJ=z[f],BJ=OJ.object,MJ=OJ.geometry,hJ=OJ.group,xJ=OJ.material;if(xJ.allowOverride===!0&&g!==null)xJ=g;if(BJ.layers.test(x.layers))cW(BJ,v,x,MJ,xJ,hJ)}}function cW(z,v,x,g,f,ZJ){if(z.onBeforeRender(M,v,x,g,f,ZJ),z.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),f.onBeforeRender(M,v,x,g,z,ZJ),f.transparent===!0&&f.side===O8&&f.forceSinglePass===!1)f.side=i0,f.needsUpdate=!0,M.renderBufferDirect(x,v,g,f,z,ZJ),f.side=e9,f.needsUpdate=!0,M.renderBufferDirect(x,v,g,f,z,ZJ),f.side=O8;else M.renderBufferDirect(x,v,g,f,z,ZJ);z.onAfterRender(M,v,x,g,f,ZJ)}function K6(z,v,x){if(v.isScene!==!0)v=rJ;let g=r.get(z),f=O.state.lights,ZJ=O.state.shadowsArray,OJ=f.state.version,BJ=c.getParameters(z,f.state,ZJ,v,x),MJ=c.getProgramCacheKey(BJ),hJ=g.programs;if(g.environment=z.isMeshStandardMaterial?v.environment:null,g.fog=v.fog,g.envMap=(z.isMeshStandardMaterial?aJ:iJ).get(z.envMap||g.environment),g.envMapRotation=g.environment!==null&&z.envMap===null?v.environmentRotation:z.envMapRotation,hJ===void 0)z.addEventListener("dispose",i),hJ=new Map,g.programs=hJ;let xJ=hJ.get(MJ);if(xJ!==void 0){if(g.currentProgram===xJ&&g.lightsStateVersion===OJ)return sW(z,BJ),xJ}else BJ.uniforms=c.getUniforms(z),z.onBeforeCompile(BJ,M),xJ=c.acquireProgram(BJ,MJ),hJ.set(MJ,xJ),g.uniforms=BJ.uniforms;let TJ=g.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)TJ.clippingPlanes=HJ.uniform;if(sW(z,BJ),g.needsLights=GU(z),g.lightsStateVersion=OJ,g.needsLights)TJ.ambientLightColor.value=f.state.ambient,TJ.lightProbe.value=f.state.probe,TJ.directionalLights.value=f.state.directional,TJ.directionalLightShadows.value=f.state.directionalShadow,TJ.spotLights.value=f.state.spot,TJ.spotLightShadows.value=f.state.spotShadow,TJ.rectAreaLights.value=f.state.rectArea,TJ.ltc_1.value=f.state.rectAreaLTC1,TJ.ltc_2.value=f.state.rectAreaLTC2,TJ.pointLights.value=f.state.point,TJ.pointLightShadows.value=f.state.pointShadow,TJ.hemisphereLights.value=f.state.hemi,TJ.directionalShadowMap.value=f.state.directionalShadowMap,TJ.directionalShadowMatrix.value=f.state.directionalShadowMatrix,TJ.spotShadowMap.value=f.state.spotShadowMap,TJ.spotLightMatrix.value=f.state.spotLightMatrix,TJ.spotLightMap.value=f.state.spotLightMap,TJ.pointShadowMap.value=f.state.pointShadowMap,TJ.pointShadowMatrix.value=f.state.pointShadowMatrix;return g.currentProgram=xJ,g.uniformsList=null,xJ}function nW(z){if(z.uniformsList===null){let v=z.currentProgram.getUniforms();z.uniformsList=$6.seqWithValue(v.seq,z.uniforms)}return z.uniformsList}function sW(z,v){let x=r.get(z);x.outputColorSpace=v.outputColorSpace,x.batching=v.batching,x.batchingColor=v.batchingColor,x.instancing=v.instancing,x.instancingColor=v.instancingColor,x.instancingMorph=v.instancingMorph,x.skinning=v.skinning,x.morphTargets=v.morphTargets,x.morphNormals=v.morphNormals,x.morphColors=v.morphColors,x.morphTargetsCount=v.morphTargetsCount,x.numClippingPlanes=v.numClippingPlanes,x.numIntersection=v.numClipIntersection,x.vertexAlphas=v.vertexAlphas,x.vertexTangents=v.vertexTangents,x.toneMapping=v.toneMapping}function XU(z,v,x,g,f){if(v.isScene!==!0)v=rJ;VJ.resetTextureUnits();let ZJ=v.fog,OJ=g.isMeshStandardMaterial?v.environment:null,BJ=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:d7,MJ=(g.isMeshStandardMaterial?aJ:iJ).get(g.envMap||OJ),hJ=g.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,xJ=!!x.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),TJ=!!x.morphAttributes.position,tJ=!!x.morphAttributes.normal,Y0=!!x.morphAttributes.color,O0=T8;if(g.toneMapped){if(C===null||C.isXRRenderTarget===!0)O0=M.toneMapping}let E0=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,X0=E0!==void 0?E0.length:0,jJ=r.get(g),q0=O.state.lights;if(KJ===!0){if(AJ===!0||z!==L){let y0=z===L&&g.id===y;HJ.setState(g,z,y0)}}let W0=!1;if(g.version===jJ.__version){if(jJ.needsLights&&jJ.lightsStateVersion!==q0.state.version)W0=!0;else if(jJ.outputColorSpace!==BJ)W0=!0;else if(f.isBatchedMesh&&jJ.batching===!1)W0=!0;else if(!f.isBatchedMesh&&jJ.batching===!0)W0=!0;else if(f.isBatchedMesh&&jJ.batchingColor===!0&&f.colorTexture===null)W0=!0;else if(f.isBatchedMesh&&jJ.batchingColor===!1&&f.colorTexture!==null)W0=!0;else if(f.isInstancedMesh&&jJ.instancing===!1)W0=!0;else if(!f.isInstancedMesh&&jJ.instancing===!0)W0=!0;else if(f.isSkinnedMesh&&jJ.skinning===!1)W0=!0;else if(!f.isSkinnedMesh&&jJ.skinning===!0)W0=!0;else if(f.isInstancedMesh&&jJ.instancingColor===!0&&f.instanceColor===null)W0=!0;else if(f.isInstancedMesh&&jJ.instancingColor===!1&&f.instanceColor!==null)W0=!0;else if(f.isInstancedMesh&&jJ.instancingMorph===!0&&f.morphTexture===null)W0=!0;else if(f.isInstancedMesh&&jJ.instancingMorph===!1&&f.morphTexture!==null)W0=!0;else if(jJ.envMap!==MJ)W0=!0;else if(g.fog===!0&&jJ.fog!==ZJ)W0=!0;else if(jJ.numClippingPlanes!==void 0&&(jJ.numClippingPlanes!==HJ.numPlanes||jJ.numIntersection!==HJ.numIntersection))W0=!0;else if(jJ.vertexAlphas!==hJ)W0=!0;else if(jJ.vertexTangents!==xJ)W0=!0;else if(jJ.morphTargets!==TJ)W0=!0;else if(jJ.morphNormals!==tJ)W0=!0;else if(jJ.morphColors!==Y0)W0=!0;else if(jJ.toneMapping!==O0)W0=!0;else if(jJ.morphTargetsCount!==X0)W0=!0}else W0=!0,jJ.__version=g.version;let d0=jJ.currentProgram;if(W0===!0)d0=K6(g,v,f);let w9=!1,l0=!1,q7=!1,N0=d0.getUniforms(),a0=jJ.uniforms;if(s.useProgram(d0.program))w9=!0,l0=!0,q7=!0;if(g.id!==y)y=g.id,l0=!0;if(w9||L!==z){if(s.buffers.depth.getReversed())fJ.copy(z.projectionMatrix),YY(fJ),XY(fJ),N0.setValue(w,"projectionMatrix",fJ);else N0.setValue(w,"projectionMatrix",z.projectionMatrix);N0.setValue(w,"viewMatrix",z.matrixWorldInverse);let x0=N0.map.cameraPosition;if(x0!==void 0)x0.setValue(w,SJ.setFromMatrixPosition(z.matrixWorld));if(XJ.logarithmicDepthBuffer)N0.setValue(w,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)N0.setValue(w,"isOrthographic",z.isOrthographicCamera===!0);if(L!==z)L=z,l0=!0,q7=!0}if(f.isSkinnedMesh){N0.setOptional(w,f,"bindMatrix"),N0.setOptional(w,f,"bindMatrixInverse");let y0=f.skeleton;if(y0){if(y0.boneTexture===null)y0.computeBoneTexture();N0.setValue(w,"boneTexture",y0.boneTexture,VJ)}}if(f.isBatchedMesh){if(N0.setOptional(w,f,"batchingTexture"),N0.setValue(w,"batchingTexture",f._matricesTexture,VJ),N0.setOptional(w,f,"batchingIdTexture"),N0.setValue(w,"batchingIdTexture",f._indirectTexture,VJ),N0.setOptional(w,f,"batchingColorTexture"),f._colorsTexture!==null)N0.setValue(w,"batchingColorTexture",f._colorsTexture,VJ)}let r0=x.morphAttributes;if(r0.position!==void 0||r0.normal!==void 0||r0.color!==void 0)$J.update(f,x,d0);if(l0||jJ.receiveShadow!==f.receiveShadow)jJ.receiveShadow=f.receiveShadow,N0.setValue(w,"receiveShadow",f.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)a0.envMap.value=MJ,a0.flipEnvMap.value=MJ.isCubeTexture&&MJ.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&v.environment!==null)a0.envMapIntensity.value=v.environmentIntensity;if(l0){if(N0.setValue(w,"toneMappingExposure",M.toneMappingExposure),jJ.needsLights)UU(a0,q7);if(ZJ&&g.fog===!0)t.refreshFogUniforms(a0,ZJ);t.refreshMaterialUniforms(a0,g,JJ,l,O.state.transmissionRenderTarget[z.id]),$6.upload(w,nW(jJ),a0,VJ)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)$6.upload(w,nW(jJ),a0,VJ),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)N0.setValue(w,"center",f.center);if(N0.setValue(w,"modelViewMatrix",f.modelViewMatrix),N0.setValue(w,"normalMatrix",f.normalMatrix),N0.setValue(w,"modelMatrix",f.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let y0=g.uniformsGroups;for(let x0=0,$Z=y0.length;x0<$Z;x0++){let i8=y0[x0];nJ.update(i8,d0),nJ.bind(i8,d0)}}return d0}function UU(z,v){z.ambientLightColor.needsUpdate=v,z.lightProbe.needsUpdate=v,z.directionalLights.needsUpdate=v,z.directionalLightShadows.needsUpdate=v,z.pointLights.needsUpdate=v,z.pointLightShadows.needsUpdate=v,z.spotLights.needsUpdate=v,z.spotLightShadows.needsUpdate=v,z.rectAreaLights.needsUpdate=v,z.hemisphereLights.needsUpdate=v}function GU(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(z,v,x){let g=r.get(z);if(g.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,g.__autoAllocateDepthBuffer===!1)g.__useRenderToTexture=!1;r.get(z.texture).__webglTexture=v,r.get(z.depthTexture).__webglTexture=g.__autoAllocateDepthBuffer?void 0:x,g.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,v){let x=r.get(z);x.__webglFramebuffer=v,x.__useDefaultFramebuffer=v===void 0};let EU=w.createFramebuffer();this.setRenderTarget=function(z,v=0,x=0){C=z,T=v,_=x;let g=!0,f=null,ZJ=!1,OJ=!1;if(z){let MJ=r.get(z);if(MJ.__useDefaultFramebuffer!==void 0)s.bindFramebuffer(w.FRAMEBUFFER,null),g=!1;else if(MJ.__webglFramebuffer===void 0)VJ.setupRenderTarget(z);else if(MJ.__hasExternalTextures)VJ.rebindTextures(z,r.get(z.texture).__webglTexture,r.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let TJ=z.depthTexture;if(MJ.__boundDepthTexture!==TJ){if(TJ!==null&&r.has(TJ)&&(z.width!==TJ.image.width||z.height!==TJ.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");VJ.setupDepthRenderbuffer(z)}}let hJ=z.texture;if(hJ.isData3DTexture||hJ.isDataArrayTexture||hJ.isCompressedArrayTexture)OJ=!0;let xJ=r.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(xJ[v]))f=xJ[v][x];else f=xJ[v];ZJ=!0}else if(z.samples>0&&VJ.useMultisampledRTT(z)===!1)f=r.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(xJ))f=xJ[x];else f=xJ;I.copy(z.viewport),S.copy(z.scissor),h=z.scissorTest}else I.copy(GJ).multiplyScalar(JJ).floor(),S.copy(yJ).multiplyScalar(JJ).floor(),h=gJ;if(x!==0)f=EU;if(s.bindFramebuffer(w.FRAMEBUFFER,f)&&g)s.drawBuffers(z,f);if(s.viewport(I),s.scissor(S),s.setScissorTest(h),ZJ){let MJ=r.get(z.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+v,MJ.__webglTexture,x)}else if(OJ){let MJ=r.get(z.texture),hJ=v;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,MJ.__webglTexture,x,hJ)}else if(z!==null&&x!==0){let MJ=r.get(z.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,MJ.__webglTexture,x)}y=-1},this.readRenderTargetPixels=function(z,v,x,g,f,ZJ,OJ,BJ=0){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let MJ=r.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&OJ!==void 0)MJ=MJ[OJ];if(MJ){s.bindFramebuffer(w.FRAMEBUFFER,MJ);try{let hJ=z.textures[BJ],xJ=hJ.format,TJ=hJ.type;if(!XJ.textureFormatReadable(xJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!XJ.textureTypeReadable(TJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=z.width-g&&(x>=0&&x<=z.height-f)){if(z.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+BJ);w.readPixels(v,x,g,f,PJ.convert(xJ),PJ.convert(TJ),ZJ)}}finally{let hJ=C!==null?r.get(C).__webglFramebuffer:null;s.bindFramebuffer(w.FRAMEBUFFER,hJ)}}},this.readRenderTargetPixelsAsync=async function(z,v,x,g,f,ZJ,OJ,BJ=0){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let MJ=r.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&OJ!==void 0)MJ=MJ[OJ];if(MJ)if(v>=0&&v<=z.width-g&&(x>=0&&x<=z.height-f)){s.bindFramebuffer(w.FRAMEBUFFER,MJ);let hJ=z.textures[BJ],xJ=hJ.format,TJ=hJ.type;if(!XJ.textureFormatReadable(xJ))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!XJ.textureTypeReadable(TJ))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tJ=w.createBuffer();if(w.bindBuffer(w.PIXEL_PACK_BUFFER,tJ),w.bufferData(w.PIXEL_PACK_BUFFER,ZJ.byteLength,w.STREAM_READ),z.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+BJ);w.readPixels(v,x,g,f,PJ.convert(xJ),PJ.convert(TJ),0);let Y0=C!==null?r.get(C).__webglFramebuffer:null;s.bindFramebuffer(w.FRAMEBUFFER,Y0);let O0=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await HY(w,O0,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,tJ),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ZJ),w.deleteBuffer(tJ),w.deleteSync(O0),ZJ}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,v=null,x=0){let g=Math.pow(2,-x),f=Math.floor(z.image.width*g),ZJ=Math.floor(z.image.height*g),OJ=v!==null?v.x:0,BJ=v!==null?v.y:0;VJ.setTexture2D(z,0),w.copyTexSubImage2D(w.TEXTURE_2D,x,0,0,OJ,BJ,f,ZJ),s.unbindTexture()};let NU=w.createFramebuffer(),qU=w.createFramebuffer();if(this.copyTextureToTexture=function(z,v,x=null,g=null,f=0,ZJ=null){if(ZJ===null)if(f!==0)E9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ZJ=f,f=0;else ZJ=0;let OJ,BJ,MJ,hJ,xJ,TJ,tJ,Y0,O0,E0=z.isCompressedTexture?z.mipmaps[ZJ]:z.image;if(x!==null)OJ=x.max.x-x.min.x,BJ=x.max.y-x.min.y,MJ=x.isBox3?x.max.z-x.min.z:1,hJ=x.min.x,xJ=x.min.y,TJ=x.isBox3?x.min.z:0;else{let r0=Math.pow(2,-f);if(OJ=Math.floor(E0.width*r0),BJ=Math.floor(E0.height*r0),z.isDataArrayTexture)MJ=E0.depth;else if(z.isData3DTexture)MJ=Math.floor(E0.depth*r0);else MJ=1;hJ=0,xJ=0,TJ=0}if(g!==null)tJ=g.x,Y0=g.y,O0=g.z;else tJ=0,Y0=0,O0=0;let X0=PJ.convert(v.format),jJ=PJ.convert(v.type),q0;if(v.isData3DTexture)VJ.setTexture3D(v,0),q0=w.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)VJ.setTexture2DArray(v,0),q0=w.TEXTURE_2D_ARRAY;else VJ.setTexture2D(v,0),q0=w.TEXTURE_2D;w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,v.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,v.unpackAlignment);let W0=w.getParameter(w.UNPACK_ROW_LENGTH),d0=w.getParameter(w.UNPACK_IMAGE_HEIGHT),w9=w.getParameter(w.UNPACK_SKIP_PIXELS),l0=w.getParameter(w.UNPACK_SKIP_ROWS),q7=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,E0.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,E0.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,hJ),w.pixelStorei(w.UNPACK_SKIP_ROWS,xJ),w.pixelStorei(w.UNPACK_SKIP_IMAGES,TJ);let N0=z.isDataArrayTexture||z.isData3DTexture,a0=v.isDataArrayTexture||v.isData3DTexture;if(z.isDepthTexture){let r0=r.get(z),y0=r.get(v),x0=r.get(r0.__renderTarget),$Z=r.get(y0.__renderTarget);s.bindFramebuffer(w.READ_FRAMEBUFFER,x0.__webglFramebuffer),s.bindFramebuffer(w.DRAW_FRAMEBUFFER,$Z.__webglFramebuffer);for(let i8=0;i8<MJ;i8++){if(N0)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,r.get(z).__webglTexture,f,TJ+i8),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,r.get(v).__webglTexture,ZJ,O0+i8);w.blitFramebuffer(hJ,xJ,OJ,BJ,tJ,Y0,OJ,BJ,w.DEPTH_BUFFER_BIT,w.NEAREST)}s.bindFramebuffer(w.READ_FRAMEBUFFER,null),s.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(f!==0||z.isRenderTargetTexture||r.has(z)){let r0=r.get(z),y0=r.get(v);s.bindFramebuffer(w.READ_FRAMEBUFFER,NU),s.bindFramebuffer(w.DRAW_FRAMEBUFFER,qU);for(let x0=0;x0<MJ;x0++){if(N0)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,r0.__webglTexture,f,TJ+x0);else w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,r0.__webglTexture,f);if(a0)w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,y0.__webglTexture,ZJ,O0+x0);else w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,y0.__webglTexture,ZJ);if(f!==0)w.blitFramebuffer(hJ,xJ,OJ,BJ,tJ,Y0,OJ,BJ,w.COLOR_BUFFER_BIT,w.NEAREST);else if(a0)w.copyTexSubImage3D(q0,ZJ,tJ,Y0,O0+x0,hJ,xJ,OJ,BJ);else w.copyTexSubImage2D(q0,ZJ,tJ,Y0,hJ,xJ,OJ,BJ)}s.bindFramebuffer(w.READ_FRAMEBUFFER,null),s.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(a0)if(z.isDataTexture||z.isData3DTexture)w.texSubImage3D(q0,ZJ,tJ,Y0,O0,OJ,BJ,MJ,X0,jJ,E0.data);else if(v.isCompressedArrayTexture)w.compressedTexSubImage3D(q0,ZJ,tJ,Y0,O0,OJ,BJ,MJ,X0,E0.data);else w.texSubImage3D(q0,ZJ,tJ,Y0,O0,OJ,BJ,MJ,X0,jJ,E0);else if(z.isDataTexture)w.texSubImage2D(w.TEXTURE_2D,ZJ,tJ,Y0,OJ,BJ,X0,jJ,E0.data);else if(z.isCompressedTexture)w.compressedTexSubImage2D(w.TEXTURE_2D,ZJ,tJ,Y0,E0.width,E0.height,X0,E0.data);else w.texSubImage2D(w.TEXTURE_2D,ZJ,tJ,Y0,OJ,BJ,X0,jJ,E0);if(w.pixelStorei(w.UNPACK_ROW_LENGTH,W0),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,d0),w.pixelStorei(w.UNPACK_SKIP_PIXELS,w9),w.pixelStorei(w.UNPACK_SKIP_ROWS,l0),w.pixelStorei(w.UNPACK_SKIP_IMAGES,q7),ZJ===0&&v.generateMipmaps)w.generateMipmap(q0);s.unbindTexture()},this.copyTextureToTexture3D=function(z,v,x=null,g=null,f=0){return E9('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,v,x,g,f)},this.initRenderTarget=function(z){if(r.get(z).__webglFramebuffer===void 0)VJ.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)VJ.setTextureCube(z,0);else if(z.isData3DTexture)VJ.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)VJ.setTexture2DArray(z,0);else VJ.setTexture2D(z,0);s.unbindTexture()},this.resetState=function(){T=0,_=0,C=null,s.reset(),DJ.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WY}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=J0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=J0._getUnpackColorSpace()}}export{KY as createCanvasElement,lU as ZeroStencilOp,yU as ZeroSlopeEnding,GH as ZeroFactor,jU as ZeroCurvatureEnding,vU as WrapAroundEnding,JW as WireframeGeometry,s7 as WebXRController,OG as WebGPUCoordinateSystem,S5 as WebGLUtils,h5 as WebGLRenderer,Y8 as WebGLRenderTarget,h$ as WebGLCubeRenderTarget,WY as WebGLCoordinateSystem,UY as WebGLArrayRenderTarget,GY as WebGL3DRenderTarget,n$ as VideoTexture,zY as VideoFrameTexture,a9 as VectorKeyframeTrack,Z0 as Vector4,P as Vector3,o as Vector2,D8 as VSMShadowMap,g7 as UnsignedShortType,eZ as UnsignedShort5551Type,tZ as UnsignedShort4444Type,W7 as UnsignedIntType,mH as UnsignedInt5999Type,K7 as UnsignedInt248Type,d8 as UnsignedByteType,kY as UniformsUtils,EJ as UniformsLib,ZX as UniformsGroup,SW as Uniform,OY as Uint8ClampedBufferAttribute,DY as Uint8BufferAttribute,RQ as Uint32BufferAttribute,OQ as Uint16BufferAttribute,VU as UVMapping,mQ as TubeGeometry,hU as TrianglesDrawMode,xU as TriangleStripDrawMode,gU as TriangleFanDrawMode,m0 as Triangle,pQ as TorusKnotGeometry,gQ as TorusGeometry,RG as TimestampQuery,wX as TextureUtils,mY as TextureLoader,F0 as Texture,xQ as TetrahedronGeometry,iH as TangentSpaceNormalMap,OU as TOUCH,oZ as SubtractiveBlending,HH as SubtractEquation,n8 as StringKeyframeTrack,GG as StreamReadUsage,YG as StreamDrawUsage,qG as StreamCopyUsage,iY as StereoCamera,XG as StaticReadUsage,KG as StaticDrawUsage,EG as StaticCopyUsage,NH as SrcColorFactor,VH as SrcAlphaSaturateFactor,DH as SrcAlphaFactor,kQ as SpriteMaterial,g$ as Sprite,GX as SpotLightHelper,OW as SpotLight,jQ as SplineCurve,VW as SphericalHarmonics3,HX as Spherical,J6 as SphereGeometry,_0 as Sphere,C8 as Source,m$ as SkinnedMesh,EX as SkeletonHelper,LQ as Skeleton,pH as ShortType,W8 as ShapeUtils,IX as ShapePath,hQ as ShapeGeometry,p8 as Shape,QW as ShadowMaterial,e0 as ShaderMaterial,F8 as ShaderLib,oJ as ShaderChunk,x$ as Scene,G0 as SRGBTransfer,aH as SRGBColorSpace,w$ as SIGNED_RED_RGTC1_Format,P$ as SIGNED_RED_GREEN_RGTC2_Format,bQ as RingGeometry,YH as ReverseSubtractEquation,cU as ReplaceStencilOp,fH as RepeatWrapping,QX as RenderTarget3D,DQ as RenderTarget,AH as ReinhardToneMapping,J$ as RedIntegerFormat,uH as RedFormat,kW as RectAreaLight,KX as Raycaster,M9 as Ray,ZW as RawShaderMaterial,Q$ as RGIntegerFormat,cH as RGFormat,dU as RGDepthPacking,UQ as RGB_S3TC_DXT1_Format,$$ as RGB_PVRTC_4BPPV1_Format,W$ as RGB_PVRTC_2BPPV1_Format,X$ as RGB_ETC2_Format,Y$ as RGB_ETC1_Format,_$ as RGB_BPTC_UNSIGNED_Format,I$ as RGB_BPTC_SIGNED_Format,_U as RGBIntegerFormat,lH as RGBFormat,mU as RGBDepthPacking,NQ as RGBA_S3TC_DXT5_Format,EQ as RGBA_S3TC_DXT3_Format,GQ as RGBA_S3TC_DXT1_Format,K$ as RGBA_PVRTC_4BPPV1_Format,H$ as RGBA_PVRTC_2BPPV1_Format,U$ as RGBA_ETC2_EAC_Format,qQ as RGBA_BPTC_Format,F$ as RGBA_ASTC_8x8_Format,R$ as RGBA_ASTC_8x6_Format,O$ as RGBA_ASTC_8x5_Format,D$ as RGBA_ASTC_6x6_Format,q$ as RGBA_ASTC_6x5_Format,N$ as RGBA_ASTC_5x5_Format,E$ as RGBA_ASTC_5x4_Format,G$ as RGBA_ASTC_4x4_Format,B$ as RGBA_ASTC_12x12_Format,z$ as RGBA_ASTC_12x10_Format,V$ as RGBA_ASTC_10x8_Format,k$ as RGBA_ASTC_10x6_Format,M$ as RGBA_ASTC_10x5_Format,L$ as RGBA_ASTC_10x10_Format,Z$ as RGBAIntegerFormat,R8 as RGBAFormat,sH as RGBADepthPacking,QH as REVISION,nH as RED_RGTC1_Format,C$ as RED_GREEN_RGTC2_Format,qW as QuaternionLinearInterpolant,U7 as QuaternionKeyframeTrack,b0 as Quaternion,SQ as QuadraticBezierCurve3,TQ as QuadraticBezierCurve,CW as PropertyMixer,Q0 as PropertyBinding,aY as PositionalAudio,u8 as PolyhedronGeometry,RX as PolarGridHelper,BQ as PointsMaterial,c$ as Points,qX as PointLightHelper,RW as PointLight,LX as PlaneHelper,Y7 as PlaneGeometry,_8 as Plane,I0 as PerspectiveCamera,S7 as Path,gW as PMREMGenerator,WH as PCFSoftShadowMap,sZ as PCFShadowMap,Q6 as OrthographicCamera,qH as OneMinusSrcColorFactor,OH as OneMinusSrcAlphaFactor,kH as OneMinusDstColorFactor,FH as OneMinusDstAlphaFactor,zH as OneMinusConstantColorFactor,IH as OneMinusConstantAlphaFactor,EH as OneFactor,e7 as OctahedronGeometry,oH as ObjectSpaceNormalMap,cY as ObjectLoader,$0 as Object3D,o9 as NumberKeyframeTrack,ZG as NotEqualStencilFunc,WQ as NotEqualDepth,QY as NotEqualCompare,f7 as NormalBlending,fU as NormalAnimationBlendMode,T8 as NoToneMapping,F9 as NoColorSpace,m8 as NoBlending,rU as NeverStencilFunc,t6 as NeverDepth,rH as NeverCompare,vH as NeutralToneMapping,xH as NearestMipmapNearestFilter,x7 as NearestMipmapLinearFilter,LU as NearestMipMapNearestFilter,zU as NearestMipMapLinearFilter,Z7 as NearestFilter,_H as MultiplyOperation,aZ as MultiplyBlending,wH as MixOperation,hH as MirroredRepeatWrapping,XH as MinEquation,KW as MeshToonMaterial,dQ as MeshStandardMaterial,$W as MeshPhysicalMaterial,WW as MeshPhongMaterial,HW as MeshNormalMaterial,XW as MeshMatcapMaterial,YW as MeshLambertMaterial,uQ as MeshDistanceMaterial,lQ as MeshDepthMaterial,S8 as MeshBasicMaterial,k0 as Mesh,UH as MaxEquation,vJ as Matrix4,dJ as Matrix3,jW as Matrix2,fG as MathUtils,oQ as MaterialLoader,C0 as Material,DU as MOUSE,CU as LoopRepeat,PU as LoopPingPong,wU as LoopOnce,sQ as LoadingManager,r6 as LoaderUtils,h0 as Loader,A$ as LinearTransfer,PH as LinearToneMapping,d7 as LinearSRGBColorSpace,YQ as LinearMipmapNearestFilter,$7 as LinearMipmapLinearFilter,BU as LinearMipMapNearestFilter,IU as LinearMipMapLinearFilter,cQ as LinearInterpolant,R9 as LinearFilter,X8 as LineSegments,u$ as LineLoop,UW as LineDashedMaterial,t$ as LineCurve3,AQ as LineCurve,j0 as LineBasicMaterial,UX as Line3,A8 as Line,LW as LightProbe,j8 as Light,tU as LessStencilFunc,JG as LessEqualStencilFunc,b7 as LessEqualDepth,T$ as LessEqualCompare,JQ as LessDepth,tH as LessCompare,c7 as Layers,fQ as LatheGeometry,p$ as LOD,o0 as KeyframeTrack,uU as KeepStencilOp,aU as InvertStencilOp,FG as InterpolationSamplingType,MG as InterpolationSamplingMode,SU as InterpolateSmooth,TU as InterpolateLinear,AU as InterpolateDiscrete,X7 as Interpolant,N9 as InterleavedBufferAttribute,i7 as InterleavedBuffer,rZ as IntType,qY as Int8BufferAttribute,FY as Int32BufferAttribute,RY as Int16BufferAttribute,d$ as InstancedMesh,$X as InstancedInterleavedBuffer,zW as InstancedBufferGeometry,q9 as InstancedBufferAttribute,iU as IncrementWrapStencilOp,nU as IncrementStencilOp,v$ as ImageUtils,t9 as ImageLoader,nY as ImageBitmapLoader,vQ as IcosahedronGeometry,DX as HemisphereLightHelper,DW as HemisphereLight,p7 as HalfFloatType,Y9 as Group,OX as GridHelper,QG as GreaterStencilFunc,$G as GreaterEqualStencilFunc,ZQ as GreaterEqualDepth,ZY as GreaterEqualCompare,$Q as GreaterDepth,JY as GreaterCompare,S$ as GLSL3,DG as GLSL1,WX as GLBufferAttribute,zQ as FrustumArray,L9 as Frustum,e9 as FrontSide,BY as FramebufferTexture,FQ as FogExp2,MQ as Fog,l8 as FloatType,kJ as Float32BufferAttribute,MY as Float16BufferAttribute,q8 as FileLoader,yQ as ExtrudeGeometry,H8 as EventDispatcher,s0 as Euler,HQ as EquirectangularRefractionMapping,KQ as EquirectangularReflectionMapping,eU as EqualStencilFunc,QQ as EqualDepth,eH as EqualCompare,t7 as EllipseCurve,s$ as EdgesGeometry,UG as DynamicReadUsage,HG as DynamicDrawUsage,NG as DynamicCopyUsage,MH as DstColorFactor,RH as DstAlphaFactor,O8 as DoubleSide,CQ as DodecahedronGeometry,NW as DiscreteInterpolant,FX as DirectionalLightHelper,FW as DirectionalLight,kU as DetachedBindMode,IQ as DepthTexture,m7 as DepthStencilFormat,XQ as DepthFormat,fY as DefaultLoadingManager,oU as DecrementWrapStencilOp,sU as DecrementStencilOp,NY as DataUtils,pY as DataTextureLoader,K8 as DataTexture,l7 as DataArrayTexture,u7 as Data3DTexture,YX as Cylindrical,a7 as CylinderGeometry,jH as CustomToneMapping,KH as CustomBlending,e$ as CurvePath,J8 as Curve,ZH as CullFaceNone,RU as CullFaceFrontBack,$H as CullFaceFront,nZ as CullFaceBack,EW as CubicInterpolant,r$ as CubicBezierCurve3,PQ as CubicBezierCurve,h7 as CubeUVReflectionMapping,gY as CubeTextureLoader,H7 as CubeTexture,O9 as CubeRefractionMapping,Q7 as CubeReflectionMapping,b$ as CubeCamera,_X as Controls,LH as ConstantColorFactor,BH as ConstantAlphaFactor,r7 as ConeGeometry,xY as CompressedTextureLoader,o7 as CompressedTexture,_Y as CompressedCubeTexture,IY as CompressedArrayTexture,J0 as ColorManagement,nQ as ColorKeyframeTrack,RJ as Color,_W as Clock,bH as ClampToEdgeWrapping,wQ as CircleGeometry,TH as CineonToneMapping,a$ as CatmullRomCurve3,_Q as CapsuleGeometry,wY as CanvasTexture,MX as CameraHelper,n7 as Camera,N8 as Cache,gH as ByteType,BW as BufferGeometryLoader,cJ as BufferGeometry,H0 as BufferAttribute,kX as BoxHelper,k9 as BoxGeometry,VX as Box3Helper,w0 as Box3,XX as Box2,c8 as BooleanKeyframeTrack,VQ as Bone,l$ as BatchedMesh,FU as BasicShadowMap,pU as BasicDepthPacking,i0 as BackSide,BX as AxesHelper,sY as AudioLoader,oY as AudioListener,aQ as AudioContext,rY as AudioAnalyser,wW as Audio,MU as AttachedBindMode,zX as ArrowHelper,IW as ArrayCamera,i$ as ArcCurve,vY as AnimationUtils,eY as AnimationObjectGroup,JX as AnimationMixer,hY as AnimationLoader,r9 as AnimationClip,TW as AnimationAction,MW as AmbientLight,WG as AlwaysStencilFunc,e6 as AlwaysDepth,$Y as AlwaysCompare,dH as AlphaFormat,yH as AgXToneMapping,iZ as AdditiveBlending,bU as AdditiveAnimationBlendMode,CH as AddOperation,J7 as AddEquation,SH as ACESFilmicToneMapping};
