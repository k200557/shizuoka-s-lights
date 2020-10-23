
var width = window.innerWidth;
var height = window.innerHeight;

//カメラの設定
var fov = 100; //画角
var aspect = width/height; //カメラ撮影画面の縦横比
var near = 1; //カメラ撮影画面の一番手前
var far = 1000; //カメラ撮影画面の一番奥

var scene = new THREE.Scene(); //宇宙空間のシーン設定
var camera = new THREE.PerspectiveCamera(fov,width/height,near,far); //視点の設定

camera.position.z = 5; //カメラのz軸位置

//レンダー設定
var renderer = new THREE.WebGLRenderer(); //宇宙空間の範囲設定
renderer.setSize(width,height);
document.body.appendChild(renderer.domElement);//宇宙のはじまり

//レンダー関数
function render(){
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}

//星空
var addRabomStar = function(){
  var geometry_star = new THREE.Geometry();
  for (i = 0; i < 1000; i ++){
    var dod = new THREE.Vector3(Math.random() * 2000 - 1000,Math.random() * 2000 - 1000,Math.random() * 2000 - 1000);
    geometry_star.vertices.push(dod);
  }
  for(var i = 0; i < 12; i++){
    var material_star = new THREE.ParticleBasicMaterial({
      color: 0xFFFFFF,
      size: 1,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    var particles = new THREE.ParticleSystem(geometry_star, material_star);
    particles.rotation.set(Math.random() * 6,Math.random() * 6,Math.random() * 6);
    scene.add(particles);
  }
}
addRabomStar();
render();