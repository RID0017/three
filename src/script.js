import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CubeTexture, CubeTextureLoader, DoubleSide, LoadingManager, NearestFilter, TetrahedronBufferGeometry, Texture } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import * as dat from 'dat.gui'

/**
 * Base
 */
 const tex=new THREE.TextureLoader()
 const text=new THREE.TextureLoader()



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
// scene.background=new THREE.Color({color:'white'})
scene.background=null

/**
 * Debug
 */
//  const gui = new dat.GUI({
//     // closed: true,
//     width: 400
// })

const win=new THREE.SphereGeometry(2,100,100)
const wins=new THREE.MeshBasicMaterial({color:'red'})
const winj=new THREE.Mesh(win,wins)
// scene.add(winj)

//texture
 const tt=text.load('fe.jpeg')
const tt2=text.load('fe1.jpg')
const tt3=text.load('fe2.jpg')
const tt4=text.load('fe.jpeg')
const tt5=text.load('fe4.jpg')
tt.flipY=false
tt2.flipY=false
tt3.flipY=false
tt4.flipY=false
tt5.flipY=false

/**
 * Object opacity:0,transparent:true
 */
const material = new THREE.MeshBasicMaterial({ map:tt,
    side:DoubleSide })
const mat=new THREE.MeshBasicMaterial({map:tt,side:DoubleSide})
const mat1=new THREE.MeshBasicMaterial({ opacity:0,transparent:true,side:DoubleSide})
const mat2=new THREE.MeshBasicMaterial({map:tt2,side:DoubleSide})
const mat3=new THREE.MeshBasicMaterial({map:tt3,side:DoubleSide})
const mat4=new THREE.MeshBasicMaterial({map:tt4,side:DoubleSide})
const mat5=new THREE.MeshBasicMaterial({map:tt5,side:DoubleSide})

const dracoloader=new DRACOLoader()
dracoloader.setDecoderPath('draco/')

const gltfloader=new GLTFLoader()
gltfloader.setDRACOLoader(dracoloader)
let tal=null
let tal2=null
let p=null
gltfloader.load(
    'gs2.glb',
    (gltf)=>
    {
gltf.scene.traverse((child)=>
{
    child.material=material
})
// console.log(gltf.scene.children)
const p2=gltf.scene.children.find(child => child.name==='p3')
const p3=gltf.scene.children.find(child => child.name==='p4')
const p4=gltf.scene.children.find(child => child.name==='p5')
const p5=gltf.scene.children.find(child => child.name==='p6')
p2.material=mat2
p3.material=mat3
p4.material=mat4
p5.material=mat5
// tt+=gltf.scene
tal=gltf.scene
var pk=camera.position
tal.position.set(0,-1.39,-12.29)
tal.rotation.set(0,-4.53,0)
 scene.add(tal)
//    gui.add(tal.position, 'z').min(- 27).max(1).step(0.01).name('positonZ')
//    gui.add(tal.position, 'y').min(- 23).max(2).step(0.01).name('positonY')
//    gui.add(tal.position, 'x').min(- 7).max(7).step(0.01).name('positonX')
//    gui.add(p.rotation, 'z').min(- 7).max(7).step(0.01).name('rotaeZ')
//    gui.add(tal.rotation, 'y').min(- 12).max(2).step(0.01).name('rotaeY')

var tl = gsap.timeline()

         gsap.to(tal.rotation,{
             scrollTrigger:{
                 trigger:'.h22',
                 toggleActions:'restart none reverse none',
                 start: "top center",
                 end:()=>"+="+
                 document.querySelector(".c").offsetWidth*.03 ,
                 // end:'top top'
                //  markers:true,
                 // scrub:true -6.85
             },
             y:-5.65,
             duration:1,
             onComplete:()=>{
                 gsap.to(tal.rotation,{
                     scrollTrigger:{
                         trigger:'.h3',
                         toggleActions:'restart none reverse none',
                         start: "top center",
                         end:()=>"+="+
                         document.querySelector(".c").offsetWidth*.03 ,
                         // end:'top top'
                        //  markers:true,
                         // scrub:true -6.85
                     },
                     y:-6.89,
                     duration:1,
                     onComplete:()=>{ 
                         gsap.to(tal.rotation,{
                             scrollTrigger:{
                                 trigger:'.h4',
                                 toggleActions:'restart none reverse none',
                                 start: "top center",
                                 end:()=>"+="+
                                 document.querySelector(".c").offsetWidth*.03 ,
                                 // end:'top top'
                                //  markers:true,
                                 // scrub:true -6.85
                             },
                             y:-7.95,
                             duration:1,
                             // onComplete:()=>{
         
                             // }
                         })
                      }
                 })
             }
         })
    
//positions     
    gsap.to(tal.position,{
        scrollTrigger:{
            trigger:'.h22',
            toggleActions:'restart none reverse none',
            start: "top center",
            end:()=>"+="+
            document.querySelector(".c").offsetWidth*.03 ,
            // markers:true,
        },
        y:-1.06,
        duration:1,
        onComplete:()=>{
            gsap.to(tal.position,{
                scrollTrigger:{
                    trigger:'.h3',
                    toggleActions:'restart none reverse none',
                    start: "top center",
                    end:()=>"+="+
                    document.querySelector(".c").offsetWidth*.03 ,
                    // markers:true,
                },
                y:-1.23,
                duration:1,
                onComplete:()=>{
                    gsap.to(tal.position,{
                        scrollTrigger:{
                            trigger:'.h4',
                            toggleActions:'restart none reverse none',
                            start: "top center",
                            end:()=>"+="+
                            document.querySelector(".c").offsetWidth*.03 ,
                            // markers:true,
                        },
                        y:-0.09,
                        duration:1,
                        // onComplete:()=>{}
                    })
                }
            })
        }
    })   
    if(window.innerWidth>=1200)
    {
     tal.scale.set(1,1,1)
    //  tal.position.set(0,-21.88,-26.297)
    }
    else{
        if(window.innerWidth>=1100)
    {
     tal.scale.set(.9,.9,.9)
    //  tal.position.set(0,-21.88,-26.297)
    }
     if(window.innerWidth>=992)
    {
     tal.scale.set(.8,.8,.8)
    //  tal.position.set(0,-20.612,-26.297)
    }
     if(window.innerWidth>=768)
    {
     tal.scale.set(.8,.8,.8)
    //  tal.position.set(0,-20.104,-26.297)
    }
    if(window.innerWidth>=600)
    {
     tal.scale.set(.6,.6,.6)
    //  tal.position.set(0,-22.643,-26.297)
    }
   if(window.innerWidth>=400)
    {
     tal.scale.set(.5,.5,.5)
    //  tal.position.set(0,-21.627,-26.297)
    }
  if(window.innerWidth>=200)
    {
     tal.scale.set(.4,.4,.4)
    //  tll.position.set(0,-21.627,-26.297)
    }
    }
     
    }
)


 const tte=text.load('de/de.jpg')
 const ttt=text.load('de/de1.jpg')
const ttt1=text.load('de/de2.jpg')
const ttt2=text.load('de/de3.jpg')
const ttt3=text.load('de/de4.png')
const ttt4=text.load('de/de5.png')
const ttt5=text.load('de/de6.png')
const ttt6=text.load('de/de7.jpg')
const ttt7=text.load('de/de8.jpg')
const ttt8=text.load('de/de9.jpg')

 tte.outputEncoding=THREE.sRGBEncoding
 ttt.outputEncoding=THREE.sRGBEncoding
ttt1.outputEncoding=THREE.sRGBEncoding
ttt2.outputEncoding=THREE.sRGBEncoding
ttt3.outputEncoding=THREE.sRGBEncoding
ttt4.outputEncoding=THREE.sRGBEncoding
ttt5.outputEncoding=THREE.sRGBEncoding
ttt6.outputEncoding=THREE.sRGBEncoding
ttt7.outputEncoding=THREE.sRGBEncoding
ttt8.outputEncoding=THREE.sRGBEncoding
// te.outputEncoding=THREE.sRGBEncoding

ttt.flipY=false
ttt1.flipY=false
ttt2.flipY=false
ttt3.flipY=false
ttt4.flipY=false
ttt5.flipY=false
ttt6.flipY=false
ttt7.flipY=false
ttt8.flipY=false
tte.flipY=false

const  mmat=new THREE.MeshBasicMaterial({map:ttt,side:THREE.DoubleSide,})
const mmat1=new THREE.MeshBasicMaterial({map:ttt1,side:THREE.DoubleSide,})
const mmat2=new THREE.MeshBasicMaterial({map:ttt2,side:THREE.DoubleSide,})
const mmat3=new THREE.MeshBasicMaterial({map:ttt3,side:THREE.DoubleSide,})
const mmat4=new THREE.MeshBasicMaterial({map:ttt4,side:THREE.DoubleSide,})
const mmat5=new THREE.MeshBasicMaterial({map:ttt5,side:THREE.DoubleSide,})
const mmat6=new THREE.MeshBasicMaterial({map:ttt6,side:THREE.DoubleSide,})
const mmat7=new THREE.MeshBasicMaterial({map:ttt7,side:THREE.DoubleSide,})
const mmat8=new THREE.MeshBasicMaterial({map:ttt8,side:THREE.DoubleSide,})

const mata3=new THREE.MeshBasicMaterial({map:tte,side:THREE.DoubleSide,})

gltfloader.load(
    'kr6.glb',
    (gltff)=>
    {
        gltff.scene.traverse((child)=>
        {
            child.material=mata3
        })
        // console.log(gltf.scene.children)
        const   p=gltff.scene.children.find(child => child.name==='P') 
        const  p1=gltff.scene.children.find(child => child.name==='P1') 
        const  p2=gltff.scene.children.find(child => child.name==='P2') 
        const  p3=gltff.scene.children.find(child => child.name==='P3')
        const  p4=gltff.scene.children.find(child => child.name==='P4') 
        const  p5=gltff.scene.children.find(child => child.name==='P5') 
        const  p6=gltff.scene.children.find(child => child.name==='P6') 
        const  p7=gltff.scene.children.find(child => child.name==='P7') 
        const  p8=gltff.scene.children.find(child => child.name==='P8') 
        const  p9=gltff.scene.children.find(child => child.name==='P9') 
        p1.material=mmat
        p2.material=mmat1
        p3.material=mmat2
        p4.material=mmat3
        p5.material=mmat4
        p6.material=mmat5
        p7.material=mmat6
        p8.material=mmat7
        p9.material=mmat8
        // tt+=gltf.scene
     const  tll=gltff.scene
// gui.add(tll.rotation, 'x').min(- 7).max(7).step(0.001).name('rotationx')
// gui.add(tll.rotation, 'y').min(- 7).max(7).step(0.001).name('rotationy')
// gui.add(tll.rotation, 'z').min(- 7).max(7).step(0.001).name('rotationz')
// gui.add(tll.position, 'y').min(- 33).max(6).step(0.001).name('POSITIONy')
// gui.add(tll.position, 'z').min(- 34).max(1).step(0.001).name('POSITIONz')
tll.position.set(0,-21.88,-26.297)
tll.rotation.set(-0.365,0,-0.092)

      gsap.to(tll.rotation,{
        y:60,
        duration:120,
        repeat:8000,
        ease:'none'
      })
       scene.add(tll)
   if(window.innerWidth>=1200)
   {
    tll.scale.set(1,1,1)
    tll.position.set(0,-21.88,-26.297)
   }
   else{
    if(window.innerWidth>=1100)
    {
     tll.scale.set(.9,.9,.9)
     tll.position.set(0,-21.88,-26.297)
    }
    if(window.innerWidth>=992)
    {
     tll.scale.set(.8,.8,.8)
     tll.position.set(0,-20.612,-26.297)
    }
     if(window.innerWidth>=768)
    {
     tll.scale.set(.8,.8,.8)
     tll.position.set(0,-20.104,-26.297)
    }
     if(window.innerWidth>=600)
    {
     tll.scale.set(.6,.6,.6)
     // tll.position.set(0,-22.643,-26.297)
    }
     if(window.innerWidth>=400)
    {
     tll.scale.set(.5,.5,.5)
     tll.position.set(0,-21,-26.297)
    }
     if(window.innerWidth>=200)
    {
     tll.scale.set(.4,.4,.4)
     tll.position.set(0,-20.608,-26.297)
    }
   }
    


    requestAnimationFrame(gltff);
    
    }
)


// if(tal !== null)
// {
//     p.position.x=-9
 
// }


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight*5.5
}

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 8
scene.add(camera)

// gui.add(camera.position, 'z').min(- 12).max(2).step(0.01).name('camera')

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    // controls.update()
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}  

tick()
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText  = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
var links=document.querySelectorAll('.men')
var hov=document.querySelectorAll('.hov')


links.forEach((link,idx)=>{ console.log(link.children[1]) 
link.addEventListener('mousemove',(e)=>{
  link.children[1].style.opacity=1;
  link.children[0].style.zIndex=3;
  link.children[1].style.transform=`translate(${ e.clientX-300 }px, -${e.clientY / 3}px) rotate(${5}deg)`;
  hov[idx].style.transform='scale(1,1)';
 
})
link.addEventListener('mouseleave',(e)=>
{
  link.children[1].style.opacity=0;
  hov[idx].style.transform='scale(.6,.6)';
  link.style.zIndex=0;
})
})
gsap.to('#line',{x:'-100vw',
                 duration:15,
                repeat:8000,
                ease:'none'
                })
                const come=document.querySelector('.resim')
const go=document.querySelector('.rem')
come.addEventListener('click',()=>{
  gsap.to('.res',{
    x:'-60vw',
    duration:2,
    ease:"power2.out"
  })
})
go.addEventListener('click',()=>{
  gsap.to('.res',{
    x:'60vw',
    duration:2,
    ease:"power2.out"
  })
})
                class Scrooth {
                  constructor({element = window, strength=7, acceleration = 1.2,deceleration = 0.975}={}) {
                    this.element = element;
                    this.distance = strength;
                    this.acceleration = acceleration;
                    this.deceleration = deceleration;
                    this.running = false;
                
                    this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
                    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
                    this.scroll = this.scroll.bind(this);
                  }
                
                  scrollHandler(e) {
                    e.preventDefault();
                
                    if (!this.running) {
                      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
                      this.running = true;
                      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
                      this.isDistanceAsc = true;
                      this.scroll();
                    } else {
                      this.isDistanceAsc = false;
                      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
                    }
                  }
                
                  scroll() {
                    if (this.running) {
                      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
                      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
                      Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
                
                      this.top += this.currentDistance;
                      this.element.scrollTo(0, this.top);
                      
                      requestAnimationFrame(this.scroll);
                    }
                  }
                }
                
                const body = new Scrooth();
                

                  
