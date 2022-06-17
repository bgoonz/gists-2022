/*
Used initially for a client to create this greeting card :
http://www.meusinvest.be/2016/
*/

////////////////////////////////////////////////
//                  THREE JS RELATED VARIABLES
////////////////////////////////////////////////

var scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane,
    renderer,
    container,
    controls,
    mouseDown = false;
////////////////////////////////////////////////
//                      SCREEN & MOUSE VARIABLES
////////////////////////////////////////////////

var HEIGHT, WIDTH, windowHalfX, windowHalfY,
    mousePos = { x: 0, y: 0 },
    oldMousePos = {x:0, y:0};

////////////////////////////////////////////////
//                           3D MODELS VARIABLES
////////////////////////////////////////////////
var floor, tree,
    globalWind = 0,
    trees = [],
    waitingParticles = [],
    flyingParticles = [],
    foliages = [],
    foliagesComplex = [];

////////////////////////////////////////////////
//                                   STATS & GUI
////////////////////////////////////////////////
var stats;
var parameters = {
  truncHeight:100,
  truncThickness:4,
  truncColor:Colors.grey_d,
  truncNoise:.5,
  foliageColor:"pinks",
  foliageDensity:5,
  foliageNoise:.05,
  foliageSize : 10,
  animationSpeed: 2.5,
};

function initGUI(){
  var gui = new dat.GUI();
  gui.width = 250;
  gui.add(parameters, 'truncHeight').min(60).max(110).step(10).name('Trunc Height');
  gui.add(parameters, 'truncThickness').min(2).max(6).step(1).name('Trunc Thickness');
  gui.add(parameters, 'truncNoise').min(0).max(5).step(.5).name('Trunc Disp.');
  gui.add(parameters, 'truncColor', {
    "Light White":Colors.white_l,
    "Dark White":Colors.white_d,
    "Light Grey":Colors.grey_l,
    "Dark Grey":Colors.grey_d
  }).name('Trunc Color');
  gui.add(parameters, 'foliageColor', {
    "White":"whites",
    "Grey":"greys",
    "Pink":"pinks",
    "Yellow":"yellows",
    "Purple":"purples"
  }).name('Foliage Color');
  gui.add(parameters, 'foliageDensity').min(3).max(8).step(1).name('Foliage Density');
  gui.add(parameters, 'foliageNoise').min(0).max(.2).step(.01).name('Foliage Disp.');
  gui.add(parameters, 'foliageSize').min(5).max(30).step(1).name('Foliage Size.');
  //gui.add(parameters, 'animationSpeed').min(1).max(4).step(.5).name('Anim. Speed');
  
  
  gui.add({generate:function(){createTree()}}, 'generate').name(">GENERATE");
}

////////////////////////////////////////////////
//                  INIT THREE JS, MOUSE, SCREEN
////////////////////////////////////////////////

function initCore() {
  
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;

  scene = new THREE.Scene();
  var fogcol = 0xcefaeb;//0x1c0403
  scene.fog = new THREE.FogExp2( fogcol, 0.0028 ); //new THREE.Fog(fogcol, 300, 1000);
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = .1;
  farPlane = 3000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
    );
  camera.position.x = 0;
  camera.position.z = 150;
  camera.position.y = 100;
  
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);
  
  window.addEventListener('resize', handleWindowResize, false);
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  document.addEventListener('mousedown', mouseDownHandler, false);
  document.addEventListener('mouseup', mouseUpHandler, false);
  
  //*
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0,60,0);
  controls.minPolarAngle = -Math.PI*.45; 
  controls.maxPolarAngle = Math.PI*.45;
  controls.minDistance = 130;
  controls.maxDistance = 500;
  //controls.enabled = false;
  //controls.noZoom = true;
  //controls.noPan = true;
  //*/

  console.log(controls);
}

////////////////////////////////////////////////
//                  MOUSE EVENTS / SCREEN EVENTS
////////////////////////////////////////////////

function handleWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

function mouseDownHandler(event) {
  mouseDown = true;
} 
function mouseUpHandler(event) {
  mouseDown = false;
} 

function handleMouseMove(event) {
  mousePos = {x:event.clientX, y:event.clientY};
} 

function handleTouchMove(event) {
  if (event.touches.length == 1) {
    event.preventDefault();
    mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};
  }
}
////////////////////////////////////////////////
//                                        RENDER
////////////////////////////////////////////////

function render(){
  if (controls && controls.enabled) controls.update();
  renderer.render(scene, camera);
}

////////////////////////////////////////////////
//                                        LIGHTS
////////////////////////////////////////////////
var gobalLight, shadowLight, backLight;

function createLights() {

  var globalLight = new THREE.HemisphereLight(Colors.white_d, Colors.white_d, .8)
  /*
  var pointLight = new THREE.PointLight( Colors.pink_l, 1, 300 );
  pointLight.position.set( 35, 50, 30 );
  var sphereSize = 10;
  var pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
  //*/
  shadowLight = new THREE.DirectionalLight(0xffffff, 1);
  shadowLight.position.set(100, 150, 100);
  shadowLight.castShadow = true;
  shadowLight.shadowDarkness = .2;
  shadowLight.shadowMapWidth = shadowLight.shadowMapHeight = 1024;
  scene.add(shadowLight);
  //scene.add(pointLight );  
  scene.add(globalLight);  
}
////////////////////////////////////////////////
//                                        FLOOR
////////////////////////////////////////////////
var Floor = function(){
  var floorCol = Colors.green_d;
  this.mesh =  new CustomMesh.PlaneMesh(1600,1600,12, floorCol);
  var vertices = this.mesh.geometry.vertices;
  for (var i=0; i<vertices.length; i++){
    var v = vertices[i];
    v.x += Math2.rangeRandom(-10,10);
    v.y += Math2.rangeRandom(-10,10);
    v.z += Math2.rangeRandom(-10,10);
  }
  this.mesh.geometry.computeFaceNormals();
  this.mesh.geometry.verticesNeedUpdate = true;
  this.mesh.geometry.colorsNeedUpdate = true;
  //
  //this.mesh.geometry.computeVertexNormals();
  this.mesh.rotation.x = -Math.PI / 2;
}


////////////////////////////////////////////////
//                                 CREATE MODELS
////////////////////////////////////////////////

// FLOOR

function createFloor(){ 
  floor = new Floor();
  scene.add(floor.mesh);
}

// FOREST

function createForest(){
  var nTrees = 25;
  var treesDist = 25;
  for (var i = 0; i< nTrees; i++){
    var tree = new Tree(false);
    tree.mesh.position.y = -5;
    tree.mesh.position.x = -((nTrees/2)*treesDist) + (i*treesDist);
    tree.mesh.position.z = -Math.random()*150 -150;
    scene.add(tree.mesh);
    trees.push(tree);
  } 
}

// TREE

function createTree(){
  if (tree){
    tree.fly(function(){
      scene.remove(tree.mesh);
      tree.kill();
      tree = null;
      foliagesComplex = [];
      createTree();
    })
  }else{
    tree = new Tree(true);
    tree.mesh.position.y = -10;
    scene.add(tree.mesh);
    tree.trunc.grow();
    updateShadows();  
  } 
}


////////////////////////////////////////////////
//                                        MODELS
////////////////////////////////////////////////

// TREE

Tree = function(complex){
	this.mesh = new THREE.Object3D();
	this.trunc = new Trunc(complex);
	this.mesh.add(this.trunc.mesh);
}

Tree.prototype.kill = function(){
  this.trunc.kill();
  this.mesh = null;
}

Tree.prototype.fly = function(callback){
  TweenMax.to(this.mesh.position, 1.5, {x:100, y:300, z:300, ease:Strong.easeIn, onComplete:function(){
    if (callback) callback();
  }});
  
  TweenMax.to(this.mesh.rotation, 2, {z:-Math.PI/6, y:Math.PI/2, ease:Strong.easeInOut});
  TweenMax.to(this.mesh.scale, 1.5, {y:1.1, x:.9, ease:Strong.easeInOut});
}

// TRUNC

Trunc = function(complex){
  this.type = "trunc";
	this.pointsTrunc = [];
	this.hierarchy = 1;
  
	// parametrables
	this.truncColor = (complex) ? parameters.truncColor : Colors.getRandomFrom(Colors.trunc);
	this.truncHeight = (complex) ? parameters.truncHeight : Math2.rangeRandom(70,100);
	this.truncStartRadius = (complex) ? parameters.truncThickness : Math2.rangeRandom(2,4); 
	this.verticalSegments = (complex)? Math2.rangeRandomInt(9,12) : Math2.rangeRandomInt(3,5);
	this.radiusSegments = (complex)? Math2.rangeRandomInt(6,10) : Math2.rangeRandomInt(4,6);
	this.shapeAngleStart = Math2.rangeRandom(Math.PI/4, Math.PI/2); 
	this.shapeAmplitude = Math2.rangeRandom(this.truncStartRadius/4, this.truncStartRadius*6);
	this.noise = (complex)? parameters.truncNoise : Math2.rangeRandom(this.truncStartRadius/8, this.truncStartRadius/4);
  this.foliageDensity = (complex)? parameters.foliageDensity : 2;
	this.shapeAngle = Math.PI - this.shapeAngleStart;
	this.freq = this.shapeAngle/this.verticalSegments;
	this.segHeight = (this.truncHeight / this.verticalSegments);
	
  /*
	console.log("this.truncColor",this.truncColor);
	console.log("this.truncHeight",this.truncHeight);
	console.log("this.truncStartRay",this.truncStartRay);
	console.log("this.verticalSegments",this.verticalSegments);
	console.log("this.shapeAngleStart",this.shapeAngleStart);
	console.log("this.shapeAmplitude",this.shapeAmplitude);
	console.log("this.noise",this.noise);
	console.log("this.shapeAngle",this.shapeAngle);
	console.log("this.freq",this.freq);
	console.log("this.segHeight",this.segHeight);
	*/

	this.pointsTrunc.push( new THREE.Vector3( 0, 0, 0 ) );  
  var ty,tx, tz, i;
  ty = 0;
	for ( i = 0; i < this.verticalSegments; i ++ ) {
		tx = Math.sin( this.shapeAngleStart + (i * this.freq) ) * this.shapeAmplitude + this.truncStartRadius;
		tz = 0;
		this.pointsTrunc.push( new THREE.Vector3( tx, ty, tz ) );
		if (i < this.verticalSegments -1) {
		  ty += this.segHeight;
		}else{
		  ty += this.segHeight/4;
		}
	}
	this.pointsTrunc.push( new THREE.Vector3( 0, ty, 0 ) );
	this.mesh = new CustomMesh.Lathe( this.pointsTrunc, this.radiusSegments, this.truncColor);
	this.mesh.userData.hierarchy = this.hierarchy;
  this.mesh.userData.refClass = this;
	var geom = this.mesh.geometry;
	
	var defAttachs;
  if (complex){
    defAttachs = [
			{
       type:"elbowBranch", 	
       count : this.foliageDensity, 	
       minH : this.truncHeight*.75, 	
       maxH:this.truncHeight*.95, 	
       minAngle:0,//-Math.PI*3/4, 			
       maxAngle:0,//-Math.PI/4 	
      },
      /*
			{
        type:"elbowBranch",	
        count : 1, 	
        minH : this.truncHeight*.75, 	
        maxH:this.truncHeight*.95, 	
        minAngle:Math.PI/4, 			
        maxAngle:Math.PI*3/4	
      },
      
      {
        type:"elbowBranch",	
        count : 1, 	
        minH : this.truncHeight*.8, 	
        maxH:this.truncHeight*1, 	
        minAngle:-Math.PI/4, 			
        maxAngle:Math.PI/4	
      },
			*/
			{
        type:"branch", 	
        count : 1, 	
        minH : this.truncHeight*.45, 	
        maxH:this.truncHeight*.75, 	
        minAngle:-Math.PI, 				
        maxAngle:0 	
      },
			{
        type:"branch", 	
        count : 1, 	
        minH : this.truncHeight*.35, 	
        maxH:this.truncHeight*.50, 	
        minAngle:Math.PI/4, 			
        maxAngle:Math.PI*3/4    
      },
			{
        type:"leaf", 		
        count : 5, 	
        minH : this.truncHeight*.30, 	
        maxH:this.truncHeight*.90, 	
        minAngle:0, 		
        maxAngle:0	
      },
			{
        type:"fruit",		
        count : 4, 	
        minH : this.truncHeight*.30, 	
        maxH:this.truncHeight*.80, 	
        minAngle:0, 		
        maxAngle:0	
      },
			{
        type:"spike", 		
        count : 6, 	
        minH : this.truncHeight*.10, 	
        maxH:this.truncHeight*.90, 	
        minAngle:0, 		
        maxAngle:0	
      },
			{
        type:"moss", 		
        count : 6, 	
        minH : this.truncHeight*.10, 	
        maxH:this.truncHeight*.90, 	
        minAngle:0, 		
        maxAngle:0	
      },	
		];
  }else{
    defAttachs = [
			{
       type:"elbowBranch", 	
       count : 1, 	
       minH : this.truncHeight*.75, 	
       maxH:this.truncHeight*.9, 	
       minAngle:-Math.PI*3/4, 			
       maxAngle:-Math.PI/4 	
      },
      
			{
        type:"elbowBranch",	
        count : 1, 	
        minH : this.truncHeight*.45, 	
        maxH:this.truncHeight*.7, 	
        minAngle:Math.PI/4, 			
        maxAngle:Math.PI*3/4	
      },
			
			{
        type:"branch", 	
        count : 1, 	
        minH : this.truncHeight*.45, 	
        maxH:this.truncHeight*.75, 	
        minAngle:-Math.PI, 				
        maxAngle:0 	
      },
			{
        type:"branch", 	
        count : 1, 	
        minH : this.truncHeight*.15, 	
        maxH:this.truncHeight*.45, 	
        minAngle:Math.PI/4, 			
        maxAngle:Math.PI*3/4    
      },
			
			{
        type:"fruit",		
        count : 2, 	
        minH : this.truncHeight*.30, 	
        maxH:this.truncHeight*.80, 	
        minAngle:0, 		
        maxAngle:0	
      },
		];
  }
	
	this.attachsVerts = GeometryHelpers.getAttachs(geom, defAttachs);	
	if (this.noise) GeometryHelpers.makeNoise(geom, this.noise);
	this.verticesNormals = GeometryHelpers.getVerticesNormals(geom);
  
  CustomMesh.flatshadeGeometry(geom);

	var cols = [];
		cols["leaf"] = Colors.green_d;
		cols["branch"] = this.truncColor;
		cols["elbowBranch"] = this.truncColor;
		cols["moss"] = Colors.white_l;
		cols["spike"] = Colors.red_l;
		cols["fruit"] = Colors.red_d;

	var colorFoliagePalette = (complex)? Colors[parameters.foliageColor] : Colors.getRandomFrom([Colors.pinks, Colors.yellows, Colors.greens, Colors.purples]);
  
	for (i=0; i<this.attachsVerts.length; i++){
		var attDef = this.attachsVerts[i];
		var v = geom.vertices[attDef.index];
		var type = attDef.type;
		var col = cols[type];
		var attach, s, r, th;
		
		if (type == "moss"){
			s = Math2.rangeRandom(1,2);
			attach = new CustomMesh.SphereMesh(s,5,3, col, true);
			attach.geometry.applyMatrix(new THREE.Matrix4().makeScale(.6,1,.3));
			attach.quaternion.setFromUnitVectors ( new THREE.Vector3( 0, 0, 1 ), this.verticesNormals[attDef.index] );
		}else if (type == "spike"){
			s = Math2.rangeRandom(1,3);
			attach = new CustomMesh.SphereMesh(s,2,2, col, true);
			attach.geometry.applyMatrix(new THREE.Matrix4().makeScale(.1,1,.1));
			attach.quaternion.setFromUnitVectors ( new THREE.Vector3( 0, 1, 0 ), this.verticesNormals[attDef.index] )
		}else if(type == "fruit"){
			s = Math2.rangeRandom(2,4);
			attach = new Tomatoe(s, Colors.getRandomFrom(Colors.pinks, complex), Colors.getRandomFrom(Colors.greens)).mesh;
			attach.quaternion.setFromUnitVectors ( new THREE.Vector3( 0, 1, 0 ), this.verticesNormals[attDef.index] )
			//attach.rotation.z += Math.PI/4 + Math.random()*Math.PI/4;
		}else if(type == "leaf"){
			s = Math2.rangeRandom(1,2);
			attach = new Leaf(s,col).mesh;
			attach.quaternion.setFromUnitVectors ( new THREE.Vector3( 0, 1, 0 ), this.verticesNormals[attDef.index] )
			//attach.rotation.z += Math.PI/4 + Math.random()*Math.PI/4;

		}else if(type == "elbowBranch"){
			r = Math2.rangeRandom(this.truncHeight*.05,this.truncHeight*.15);
			th = Math2.rangeRandom(this.truncStartRadius*40/(1+v.y),this.truncStartRadius*60/(1+v.y));
			attach = new ElbowBranch(r,th,col, colorFoliagePalette, this.hierarchy+1, complex).mesh;
			attach.quaternion.setFromUnitVectors ( new THREE.Vector3( -1, 0, 0 ), new THREE.Vector3( v.x, 0, v.z ).normalize() );
		}else if(type == "branch"){
			s = Math2.rangeRandom(this.truncHeight*.03,this.truncHeight*.06);
			th = Math2.rangeRandom(this.truncStartRadius*.2,this.truncStartRadius*.4);
			attach = new Branch(s,th,col, colorFoliagePalette, this.hierarchy+1, complex).mesh;
			attach.quaternion.setFromUnitVectors ( new THREE.Vector3( 0, 1, 0 ), new THREE.Vector3( v.x, 0, v.z ).normalize() );
		}

		attach.position.copy(v);
		attach.userData.targetY = v.y;
		attach.userData.targetRotZ = attach.rotation.z;
		attach.userData.hierarchy = this.hierarchy+1;
		
		this.mesh.add(attach);
		attDef.mesh = attach;
	}
	geom.verticesNeedUpdate = true;
}

Trunc.prototype.kill = function(){
  var mesh = this.mesh;
  var geom = this.mesh.geometry;
	var l = geom.vertices.length;
  for (var i=0; i<l; i++){
		var v = geom.vertices[i];
		TweenMax.killTweensOf(v);
	}
  killGrow(mesh);
  mesh = null;
}

function killGrow(mesh){
  for (var i=0; i<mesh.children.length; i++){
		var child = mesh.children[i];
    TweenMax.killTweensOf(child.scale);
    TweenMax.killTweensOf(child.rotation);
		killGrow(child);
    child = null;
	}
}


Trunc.prototype.grow = function(){
	var scope = this;
	var geom = this.mesh.geometry;
	var l = geom.vertices.length;
	for (var i=0; i<l; i++){
		var v = geom.vertices[i];
		var d = v.y/100;//Math.abs(this.truncHeight - v.y) /100;
		var s = 30/parameters.animationSpeed;// + (Math.abs(this.truncHeight - v.y)/100);
		TweenMax.from(v, s*.5, {x:0,z:0, delay:d*2, ease:Strong.easeInOut, onUpdate:scope.replaceAttachs, onUpdateScope:scope});
		TweenMax.from(v, s, {y:0, delay:d, ease:Strong.easeOut});
	}
	grow(this.mesh);
}

Trunc.prototype.replaceAttachs = function(){
	for (i=0; i<this.attachsVerts.length; i++){
		var attDef = this.attachsVerts[i];
		var v = this.mesh.geometry.vertices[attDef.index];
		attDef.mesh.position.copy(v);
	}
	this.mesh.geometry.verticesNeedUpdate = true;
}

//Trunc.prototype.growAttachs = grow;

/*
BottleTrunc.prototype.updateWind = function(power){	
	this.mesh.rotation.z = (power/1000);
	for (var i=0; i<this.mesh.children.length; i++){
		var child = this.mesh.children[i];
		child.rotation.z = child.userData.targetRotZ + Math.random()*power/1000;
	}
}
//*/

// BRANCH

ElbowBranch = function(radius, thickness, color, colorFoliagePalette, hierarchy, complex){
  this.type = "elbowBranch";
	var radSegs = (complex)?5:3;
	var tubSegs = (complex)?10:4;

	this.mesh = new CustomMesh.QuarterTorusMesh(radius,thickness,radSegs,tubSegs,Math.PI/2,color);
	this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(thickness,-thickness*2,0));
	this.mesh.userData.hierarchy = hierarchy;
  this.mesh.userData.refClass = this;

	var folThick = (complex)? parameters.foliageSize*(1+Math.random()*.5) : Math2.rangeRandom(8,24);
	this.attach = new Foliage(folThick, colorFoliagePalette, hierarchy+1,complex).mesh;
	
	this.attach.position.x = -radius;
	this.attach.position.y = radius - (thickness*3);
	this.mesh.add(this.attach);
}

Branch =function(h, thickness, color, colorFoliagePalette, hierarchy,complex){
  this.type = "branch";
	var radSegs = (complex)?5:3;
	
	this.mesh = new CustomMesh.CylinderMesh(thickness,thickness,h,radSegs, 1, color, false);
  this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0,-1,0));
	this.mesh.userData.hierarchy = hierarchy;
  this.mesh.userData.refClass = this;

	var folThick = thickness*Math2.rangeRandom(3,8);
	this.attach = new Foliage(folThick, colorFoliagePalette, hierarchy+1,complex).mesh;
	this.attach.position.y = h-2;
	this.mesh.add(this.attach);
}

// FRUIT

Tomatoe = function(scale, colorFruit, colorLeaves,complex){
  this.type = "fruit";
	this.mesh = new THREE.Object3D();
  this.mesh.userData.refClass = this;
	this.core = new THREE.Object3D();

	this.stem = new Stem(scale, colorLeaves,complex);
	this.line = this.stem.mesh;

	var sw = (complex)?5:3;
	var sh = (complex)?5:3;
	
	this.fruit = new CustomMesh.SphereMesh(scale,sw,sh, colorFruit, false);
	this.fruit.position.y = 1;
	
	this.crown = new THREE.Object3D();

	var stepAngle = Math.PI*2 / 5;
	var crownCount = Math2.rangeRandomInt(3,6);
	for (var i=0;i<5; i++){
    var leaf = new CustomMesh.DiamondMesh(scale,scale*1.5,.33,scale*.2,colorLeaves);
    leaf.geometry.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI/4));
    leaf.position.x = Math.cos( stepAngle*i)*.3;
    leaf.position.z = Math.sin( stepAngle*i)*.3;
    leaf.rotation.y = Math.PI/2 - stepAngle*i;
    this.crown.add(leaf);
  }
	this.core.position.x = this.stem.endPoint.x;
	this.core.position.y = this.stem.endPoint.y;
	this.core.position.z = this.stem.endPoint.z;
	this.core.quaternion.setFromUnitVectors ( new THREE.Vector3( 0, 1, 0 ), this.stem.lastDirection);
	this.core.add(this.crown);
	this.core.add(this.fruit);
	this.mesh.add(this.line);
	this.mesh.add(this.core);
}

// LEAF
Leaf = function(scale, color){
  this.type = "leaf";
	this.mesh = new THREE.Object3D();
  this.mesh.userData.refClass = this;
	this.core = new CustomMesh.DiamondMesh(scale*2,scale*3,.33,scale*.1,color);
	this.stem = new Stem(scale, color);
	this.line = this.stem.mesh;
	this.mesh.add(this.line);
	this.core.position.x = this.stem.endPoint.x;
	this.core.position.y = this.stem.endPoint.y;
	this.core.position.z = this.stem.endPoint.z;
	this.core.quaternion.setFromUnitVectors ( new THREE.Vector3( 0, 1, 0 ), this.stem.lastDirection);
	this.mesh.add(this.core);
}

// STEM
Stem  = function(scale, color, complex){
  this.type = "stem";
	this.lastDirection = new THREE.Vector3();
	this.endPoint = new THREE.Vector3();
	var linePoints = [];
	var sl = scale/50;
	var nHandlers = (complex)?6:3;
	var i, a=0, 
		tx = 0, ty=0, tz=0,
		pStartPoint = new THREE.Vector3(),
		v;
	for (i=0; i<nHandlers; i++){
		v = new THREE.Vector3( tx, ty, tz );
		linePoints.push(v);
		if (i==nHandlers-2){
			pStartPoint.x = tx;
			pStartPoint.y = ty;
			pStartPoint.z = tz;
		}

		if (i<nHandlers-1){
			tx += Math2.rangeRandom(-2,2);
			ty += sl*20;
			tz += Math2.rangeRandom(-2,2);	
		}else{
			this.endPoint.x = tx;
			this.endPoint.y = ty;
			this.endPoint.z = tz;
			this.lastDirection.subVectors( this.endPoint, pStartPoint )
		}
	}
	this.mesh =  CustomMesh.CurvedPath(linePoints, scale/10, color);
  this.mesh.userData.refClass = this;
}

// FOLIAGE

Foliage = function(scale, colorPalette, hierarchy,complex){
  
  this.type="foliage";
	var sw = (complex)? Math2.rangeRandomInt(3,10):Math2.rangeRandomInt(3,5);
	var sh = Math2.rangeRandomInt(3,6);
	var noise = (complex)? parameters.foliageNoise*scale : Math2.rangeRandom(scale/20,scale/5);
	this.colPalette = colorPalette;
	this.col = Colors.getRandomFrom(this.colPalette);
	this.scale = scale;
  
  
  this.mesh = new CustomMesh.SphereMesh(scale,sw,sh,this.col, false);
  this.mesh.userData.refClass = this;
	this.mesh.userData.hierarchy = hierarchy;
  
	var geom = this.mesh.geometry;
	geom.mergeVertices();
	var h = scale*2;
	var defAttachs;
  if (complex){
    defAttachs = [
			{type:"subFol", 	count : 6, 	minH : h*.2, 	maxH:h*.9, 	minAngle:0, 	maxAngle:0	},
		];  
  }else{
    defAttachs = [];
  }
	
	this.attachsVerts = GeometryHelpers.getAttachs(geom, defAttachs);

	GeometryHelpers.makeNoise(geom, noise);
  
  CustomMesh.flatshadeGeometry(geom);

	for (var i=0;i<this.attachsVerts.length;i++){
		var attDef = this.attachsVerts[i];
		var v = geom.vertices[attDef.index];		
		var s = Math2.rangeRandom(scale*.05, scale*.2);
		var subFol = new SubFoliage(s, hierarchy+1).mesh;
    attDef.mesh = subFol;
		subFol.position.copy(v);
		subFol.rotation.z = Math2.rangeRandom(-Math.PI/8, Math.PI/8);
		subFol.rotation.x = Math2.rangeRandom(-Math.PI/8, Math.PI/8);
		this.mesh.add(subFol);
	}
	if (complex) foliagesComplex.push(this);
  else foliages.push(this);
}

SubFoliage = function(scale, hierarchy){
  this.type = "subfoliage";
	var sw = Math2.rangeRandomInt(2,4);
	var sh = Math2.rangeRandomInt(2,4);
	this.mesh = new CustomMesh.SphereMesh(scale,sw,sh,Colors.getRandomFrom(Colors.leaves), true);	
	this.mesh.userData.hierarchy = hierarchy;
  this.mesh.userData.refClass = this;
}

Foliage.prototype.launchParticle = function(){
  var p;
	var col = Colors.getRandomFrom(this.colPalette);
	if (waitingParticles.length){
		p = waitingParticles.pop();
		p.material.color.setHex(col);
	}else {
		p = new FlyingParticle(col, this.scale);
	}
	p.visible = true;
	p.scale.x = p.scale.y = p.scale.z = this.scale/20;
	p.userData.speedX = Math2.rangeRandom(1,3);
	p.userData.speedY = Math2.rangeRandom(.5,1);

	var vIndex = Math.floor(Math.random()*this.mesh.geometry.vertices.length);
	var pos = this.mesh.geometry.vertices[vIndex].clone();
	pos = this.mesh.localToWorld( pos );
	p.position.copy(pos);
	flyingParticles.push(p);
	scene.add(p);
}

Foliage.prototype.grow = function(){
  console.log("grow foliage");
	var scope = this;
	var geom = this.mesh.geometry;
	var l = geom.vertices.length;
	for (var i=0; i<l; i++){
		var v = geom.vertices[i];
		var d =  Math.random()*.5 + v.y/25;
		var s = Math.random() + 20/parameters.animationSpeed;
    var sx = Math2.rangeRandom(-2,2);
    var sy = Math2.rangeRandom(-2,2);
    var sz = Math2.rangeRandom(-2,2);
		TweenMax.from(v, s, {x:0,z:0, y:0, delay:d, ease:Strong.easeInOut, onUpdate:scope.replaceAttachs, onUpdateScope:scope});
  }
	grow(this.mesh);
}

Foliage.prototype.replaceAttachs = function(){
	for (i=0; i<this.attachsVerts.length; i++){
		var attDef = this.attachsVerts[i];
		var v = this.mesh.geometry.vertices[attDef.index];
		attDef.mesh.position.copy(v);
	}
	this.mesh.geometry.verticesNeedUpdate = true;
}

FlyingParticle = function(color){
	var mesh;
	var s = Math2.rangeRandom(1,4);
	var segs = Math2.rangeRandomInt(3,5);
	var segs2 = Math2.rangeRandomInt(2,5);
	
	if (Math.random()<.25){
		mesh = new CustomMesh.TriMesh(s,s,.2,color,"top");
	}else if (Math.random()<.5){
		mesh = new CustomMesh.RegPolyMesh(s,segs,1,color,false);
	}else if (Math.random()<.75){
		mesh = new CustomMesh.SphereMesh(s,segs,segs2,color,false);
	}else{
		mesh = new CustomMesh.CylinderMesh(0,s,s,segs, 1, color,true);
	}
	return mesh;
}


function grow(mesh){
	//console.log("new grow");
	for (var i=0; i<mesh.children.length; i++){
		var child = mesh.children[i];
    if (child.userData.refClass && child.userData.refClass.type == "foliage"){
      child.userData.refClass.grow();
    }else{
      var d = (child.position.y / 200) + child.userData.hierarchy;
      var s = 10+child.userData.hierarchy*2;
      s = s/parameters.animationSpeed;
      TweenMax.from(child.scale, s, {x:0.01, y:0.01, z:0.01, delay:d, ease:Back.easeInOut});
      TweenMax.from(child.rotation, s, {x:0, y:0, z:0, delay:d, ease:Back.easeInOut});
      grow(child);  
    }
	}
}

window.addEventListener('load', init, false);

function init(event){
  createStats();
  initCore();
  initGUI();
  createLights();
  createFloor();
  createForest();
  createTree();
  loop();
}

function updateShadows(){
  scene.traverse( function ( object ) {
    if ( object instanceof THREE.Mesh ) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
}

function createStats(){
  // STATS
  stats = new Stats();
  stats.setMode( 0 ); // 0: fps, 1: ms, 2: mb
  // align top-left
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild( stats.domElement );
}

function loop(){

  stats.begin();
  
  console.log("waiting",waitingParticles.length);

  var frustum = new THREE.Frustum();
  frustum.setFromMatrix( new THREE.Matrix4().multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse ) );  
  
  //*
  if (Math.random()>.5){
    var fol = foliages[Math.floor(Math.random()*foliages.length)];
    fol.launchParticle();
  }
  
   if (Math.random()>.9){
    var fol = foliagesComplex[Math.floor(Math.random()*foliagesComplex.length)];
    fol.launchParticle();
  }
  
  for (var i=0; i<flyingParticles.length; i++){
    var p = flyingParticles[i];
    p.position.x += p.userData.speedX + Math.random()/10;
    p.position.y += p.userData.speedY + Math.random()/20;
    
    p.rotation.x += .01 + Math.random()/100;
    p.rotation.y += .01 + Math.random()/10;
    p.rotation.z += .1 + Math.random()/20;

    if(!frustum.containsPoint( p.position )){
      p.visible = false;
      waitingParticles.push(flyingParticles.splice(i,1)[0]);
    }
  }
  //*/
  render();
  stats.end();
  requestAnimationFrame(loop);
}

