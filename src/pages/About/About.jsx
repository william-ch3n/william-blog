import React, { useEffect, useRef } from 'react'
import '../../static/css/about.css'
import { gsap } from "gsap";
import dieSvg from '../../static/img/dieSprite.svg'
import { useDispatch } from 'react-redux';
import { actionShowHint } from '../../common/redux/actions/headerActions';
import me02 from '../../static/img/me02.jpg'

export default function About() {

  const openLineRef = useRef();
  const topBlock = useRef();
  const bottomBlock = useRef();
  const trayRef = useRef();
  const dieRef = useRef();
  const aboutDivRef = useRef();
  const containerRef = useRef();
  const introductionRef = useRef();

  // 准备。调用redux hooks获取dispatch
  const dispatch = useDispatch();

  const openCurtain = () => {
    setTimeout(() => {
      openLineRef.current.style.left = "0vw";
      dieRef.current.style.opacity = "0";
      setTimeout(() => {
        topBlock.current.style.top = "-50vw";
        bottomBlock.current.style.top = "100vw";
        openLineRef.current.style.display = "none";
        trayRef.current.style.display = "none";
        containerRef.current.style.display = "block";
        introductionRef.current.style.display = "block";
      }, 1000);
    }
      , 1500);

    setTimeout(() => {
      topBlock.current.style.display = "none";
      bottomBlock.current.style.display = "none";
      aboutDivRef.current.style.height = "120vh";
      
    }, 3000);

  }

  // 骰子动画的初始化
  useEffect(() => {

    // 用redux更新state，使header显示hint
    dispatch(actionShowHint(true));

    // 初始化dice元素
    gsap.set(".face", {
      position: 'absolute',
      userSelect: 'none',
      width: '100%',
      height: '100%',
      rotateY: (i) => rots[i].ry,
      rotateX: (i) => rots[i].rx,
      transformOrigin: "50% 50% -150px",
      z: 150,
      background: (i) => `url(${dieSvg}) 0px -` + String(i * 300) + 'px'
    });

    gsap.set('.die', { attr: { className: (i) => 'die die' + (i + 1) }, width: 300, height: 300, perspective: 999 });
    gsap.set('.cube', { position: 'absolute', width: 300, height: 300, transformStyle: 'preserve-3d', z: -600 });


    // 文字来回擦除动画开始
    const slideTL = gsap.timeline();
    const maskTL = gsap.timeline();
    const mainTL = gsap.timeline({ 
        repeat: -1, 
        onRepeat: () => {
            gsap.set('#texttwo', { opacity: 0 });
            gsap.set('#bar', { scaleY: 0.1 });
            gsap.set('#textone h1', { opacity: 1 });
        }
    });
    
    gsap.set('#texttwo', { opacity: 0 });
    gsap.set('#bar', { scaleY: 0.1 });
    
    slideTL
        .to('#bar', 1, { 
            y: "10vw", 
            scaleY: 1, 
            ease: "back.out" 
        })
        .to('#slidebar', 1.5, { 
            x: "35vw", 
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#slidebar', 1.5, { 
            x: "0vw", 
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#slidebar', 1.5, { 
            x: "35vw", 
            delay: 0.5, 
            ease: "back.inOut(0.8)" 
        })
        .to('#bar', 1, { 
          y: "20vw",
            scaleY: 0.1, 
            ease: "back.in" 
        });
    
    maskTL
        .to('#textone', 1.5, {
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)",
            onComplete: () => {
                gsap.set('#texttwo', { opacity: 1 });
            }
        })
        .to('#textone', 1.5, {
            delay: 0.5,
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%)",
            onComplete: () => {
                gsap.set('#textone h1', { opacity: 0 });
            }
        })
        .to('#textone', 1.5, {
            delay: 0.5,
            ease: "back.inOut(0.8)", 
            "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)"
        }); 
    
    
    mainTL
        .add(slideTL)
        .add(maskTL, 1.5);
        // 文字来回擦除效果结束


    // 每次取下组件的时候清除gsap的时间设定
    return () => {
      // gsap.
      gsap.globalTimeline.clear()
    };
  }, []);

  // 骰子的常量，初始面为3
  const rots = [
    { ry: 180, rx: 0 }, // 3
    { ry: 90, rx: 0 }, // 2
    { ry: 0, rx: 0 },   // 1
    { ry: 270, rx: 0 }, // 4
    { ry: 0, rx: 90 }, // 5
    { ry: 0, rx: -90 }  // 6
  ];


  // dice的正面的值，初始值为0
  let val = [0]

  // 掷骰子功能
  function roll() {
    val[0] = gsap.utils.random(1, 6, 1)

    gsap.timeline()
      .fromTo('.cube', {
        z: -600
      }, {
        duration: 0.75,
        z: -300,
        ease: 'expo',
        yoyoEase: 'bounce.out(5)',
        repeat: 1
      }, 0)

      .fromTo('.cube', {
        rotationX: (i) => i == 0 ? '-=360' : '+=360' //this ensures that even if the new number is the same, it will do some rotation
      }, {
        duration: 1.5,
        ease: 'back',
        rotationX: (i) => -rots[val[i] - 1].rx,
        rotationY: (i) => -rots[val[i] - 1].ry
      }, 0)


    // 只有在dice掷到6的时候才会开幕
    // if (val[0] === 6) {
      openCurtain();
    // }
  };








  return (
    <div className="aboutDiv" ref={aboutDivRef}>

      {/* 骰子 */}
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

      {/* 开幕 */}
      <div className="openLine" ref={openLineRef}></div>
      <span className="topBlock" ref={topBlock}></span>
      <span className="bottomBlock" ref={bottomBlock}></span>

      {/* 荧光背景 */}
      <div className="myInfoDiv">
        <img src={me02} alt="" className="me02" />
        <div className="introduction" ref={introductionRef}>
          <p className="gradient-border">
            <br />
            <span className="span1">&lt;coder&gt;</span><br />
            <span className="span2">Full stack developer who goes with</span><br />
            <span className="span2">Java, React, mySql, JavaScript, Css</span><br />
            <br />
            <span className="span3">&lt;trilinguist&gt;</span><br />
            <span className="span4">Enligh, 中文, にほんご</span><br />
          </p>
        </div>

        {/* 黑板擦 */}
        <div className="container" ref={containerRef}>
              <div className="slide-bar" id="slidebar">
                <div className="bar" id="bar"></div>
              </div>
              <div className="text-block" id="textone">
                <h1>Contact:</h1>
              </div>
              <div className="text-block" id="texttwo">
                <h1>william.x.ch3n@gmail.com</h1>
              </div>
            </div>
      </div>
    </div>
  )
}
