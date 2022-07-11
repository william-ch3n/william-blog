import React, { useEffect, useRef } from 'react'
import '../../static/css/about.css'
import { gsap } from "gsap";
import dieSvg from '../../static/img/dieSprite.svg'
import { useDispatch } from 'react-redux';
import { actionShowHint } from '../../common/redux/actions/headerActions';

export default function About() {

  const openLineRef = useRef();
  const topBlock = useRef();
  const bottomBlock = useRef();
  const trayRef = useRef();
  const dieRef = useRef();

  // 准备。调用redux hooks获取dispatch
  const dispatch = useDispatch();

  const openCurtain = () => {
    setTimeout(()=>{
      openLineRef.current.style.left = "0vw";
      dieRef.current.style.opacity = "0";
      setTimeout(() => {
        topBlock.current.style.top = "-50vw";
        bottomBlock.current.style.top = "100vw";
        openLineRef.current.style.display = "none";
        trayRef.current.style.display = "none";
      }, 1000);
    }
    , 1500);
  }

  // 骰子动画的初始化
  useEffect(()=>{

    // 用redux更新state，使header显示hint
    dispatch(actionShowHint(true));

    // 初始化dice元素
    gsap.set(".face", {
      position:'absolute',
      userSelect:'none',
      width: '100%',
      height: '100%',
      rotateY: (i) => rots[i].ry,
      rotateX: (i) => rots[i].rx,
      transformOrigin: "50% 50% -150px",
      z: 150,
      background:(i)=>`url(${dieSvg}) 0px -`+String(i*300)+'px'
    });
    
    gsap.set('.die', {attr:{className:(i)=>'die die'+(i+1)}, width:300, height:300, perspective:999});
    gsap.set('.cube', {position:'absolute', width:300, height:300, transformStyle: 'preserve-3d', z:-600});
    
    
  },[]);

  // 骰子的常量，初始面为3
  const rots = [ 
    { ry: 180, rx: 0  }, // 3
    { ry: 90,  rx: 0  }, // 2
    { ry: 0, rx: 0  },   // 1
    { ry: 270, rx: 0  }, // 4
    { ry: 0,   rx: 90 }, // 5
    { ry: 0,   rx:-90 }  // 6
  ];


  // dice的正面的值，初始值为0
  let val = [0]
  
  // 掷骰子功能
  function roll(){
    val[0] = gsap.utils.random(1,6,1)
    
    gsap.timeline()
      .fromTo('.cube', {
        z:-600
      },{
        duration:0.75,
        z:-300,
        ease:'expo',
        yoyoEase:'bounce.out(5)',
        repeat:1
      }, 0)
      
      .fromTo('.cube', {
        rotationX:(i)=>i==0?'-=360':'+=360' //this ensures that even if the new number is the same, it will do some rotation
      },{
        duration:1.5,
        ease:'back',
        rotationX:(i)=>-rots[val[i]-1].rx,
        rotationY:(i)=>-rots[val[i]-1].ry
      }, 0)


      // 只有在dice掷到6的时候才会开幕
      if( val[0] === 6){
        openCurtain();
      }
  };


  return (
    <div className="aboutDiv">

      <div className="tray" ref={trayRef}>
        <div className="die" onClick={roll} ref={dieRef}>
          <div className="cube">
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
          </div>
        </div>
      </div>

      <div className="openLine" ref={openLineRef}></div>
      <span className="topBlock" ref={topBlock}></span>
      <span className="bottomBlock" ref={bottomBlock}></span>
    </div>
  )
}
