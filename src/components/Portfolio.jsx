import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../static/css/portfolio.css'

export default function Portfolio() {

  const acnRef = useRef();
  const gear1Ref = useRef();
  const gear2Ref = useRef();
  const gearPath1Ref = useRef();
  const gearPath2Ref = useRef();
  const gearPath3Ref = useRef();
  const gearPath4Ref = useRef();
  const databaseRef = useRef();
  const databasePath1Ref = useRef();
  const databasePath2Ref = useRef();
  const databasePath3Ref = useRef();
  const databasePath4Ref = useRef();
  const titleRef = useRef();
  const titleRatioRef = useRef();
  const highlightRef = useRef();
  const [ratio, setRatio] = useState();

  const animationTrigger2Ref = useRef();
  const rakuRef = useRef();
  const surveyPenRef = useRef();
  const coinCssRef = useRef();
  const highlight2Ref = useRef();

  /**
   * Get IntersectionRatio to change background %
   * Note:
   *    threshold is important! it defined the proportion to monitor
   */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let ratio = Math.round(entry.intersectionRatio * 100);
          setRatio(ratio);

          highlightRef.current.classList.add("in-view");
          acnRef.current.classList.add("acnLogo-active");
          gear1Ref.current.classList.add("gearSvg-active");
          gear2Ref.current.classList.add("gearSvg-active");
          gearPath1Ref.current.classList.add("gearPath-active");
          gearPath2Ref.current.classList.add("gearPath-active");
          gearPath3Ref.current.classList.add("gearPath-active");
          gearPath4Ref.current.classList.add("gearPath-active");
          databasePath1Ref.current.classList.add("databasePath1-active");
          databasePath2Ref.current.classList.add("databasePath2-active");
          databasePath3Ref.current.classList.add("databasePath3-active");
          databasePath4Ref.current.classList.add("databasePath4-active");
          return;
        }
        highlightRef.current.classList.remove("in-view");
        acnRef.current.classList.remove("acnLogo-active");
        gear1Ref.current.classList.remove("gearSvg-active");
        gear2Ref.current.classList.remove("gearSvg-active");
        gearPath1Ref.current.classList.remove("gearPath-active");
        gearPath2Ref.current.classList.remove("gearPath-active");
        gearPath3Ref.current.classList.remove("gearPath-active");
        gearPath4Ref.current.classList.remove("gearPath-active");
        databasePath1Ref.current.classList.remove("databasePath1-active");
        databasePath2Ref.current.classList.remove("databasePath2-active");
        databasePath3Ref.current.classList.remove("databasePath3-active");
        databasePath4Ref.current.classList.remove("databasePath4-active");
      });
    },
    {
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    }
  );

  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rakuRef.current.classList.add("rakuCss-active");
          surveyPenRef.current.classList.add("surveyPen-active");
          coinCssRef.current.classList.add("coinCss-active");
          highlight2Ref.current.classList.add("in-view");
          return;
        }
        rakuRef.current.classList.remove("rakuCss-active");
        surveyPenRef.current.classList.remove("surveyPen-active");
        coinCssRef.current.classList.remove("coinCss-active");
        highlight2Ref.current.classList.remove("in-view");
      });
    },
    {
      threshold: 1
    }
  );


  /**
   * useEffect:
   *    everytime when ratio changes, reset backgrandImage
   */
  useEffect(()=>{ 

    titleRef.current.style.backgroundImage = `
    linear-gradient(
    30deg,
    rgb(20, 83, 255) ${0 - ratio}%,
    rgb(124, 192, 226) ${100 - ratio}%,
    rgb(20, 83, 255) ${200 - ratio}%
  )`;
    
    // set up observer to observe target element
    // here I make it observe titleRatioRef
    observer.observe(titleRatioRef.current);
    observer2.observe(animationTrigger2Ref.current);
  },[ratio]);


  return (
    <Fragment>

      <div className="portfolioDiv">
        <div>
          <div className="title" ref={titleRef}>
            Portfolio
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" className="arrowSvg">
            <path className="arrowPath" fill="#2e58a6" stroke="#2e58a6" strokeWidth="2" d="M58.38,44.66C54.16,43,50.28,40.8,46.06,39.1c-2.74-1.1-3.22,1.69-.93,2.61s4.56,2,6.79,3.08a37.89,37.89,0,0,1-16.79-.33C31.47,43.53,27.58,42,25,39.65a9.11,9.11,0,0,1-2.47-4.55c3.22.63,6.73.64,9.23-.84,3.44-2,2.26-5.64-1-7.37a8.94,8.94,0,0,0-11.1,2.5,6.87,6.87,0,0,0-.84,1.67,17.26,17.26,0,0,1-5.59-3.42C8.41,23.24,7.54,17,7.92,11.4,8,9.85,4.21,7.84,4.07,9.84c-.63,9.22,2.66,19.22,13.54,23.8l.85.33a11.5,11.5,0,0,0,3.69,6.9c6.69,6.4,17.88,8.7,28,7.68L44.71,52c-1.87,1.19,1.41,3.78,3,2.76l11.7-7.42C60.74,46.52,59.53,45.12,58.38,44.66ZM25.57,29.85q2.06-1.5,2.38,1.88l-1.87.38A14.67,14.67,0,0,1,22.66,32,3.69,3.69,0,0,1,25.57,29.85Z" />
          </svg>
        </div>

        {/* first part */}
        <div>
          <div className="acnLogo" ref={acnRef}>
            {">"}
          </div>
          <div>
            <div className="gearDiv1">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64" className="gearSvg" ref={gear1Ref}>
                <g transform="translate(226 426)">
                  <path className="gearPath-active1" ref={gearPath1Ref} fill="#444" d="M-194-382.7c-6.2,0-11.3-5.1-11.3-11.3s5.1-11.3,11.3-11.3s11.3,5.1,11.3,11.3     S-187.8-382.7-194-382.7L-194-382.7z M-194-402.9c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9s8.9-4,8.9-8.9S-189.1-402.9-194-402.9     L-194-402.9z"/>
                  <path className="gearPath-active1" ref={gearPath2Ref} fill="#444" d="M-190.6-370.1h-6.8l-1.9-5.8c-1.3-0.4-2.5-0.9-3.7-1.5l-5.5,2.8l-4.8-4.8l2.8-5.5     c-0.6-1.2-1.2-2.4-1.5-3.7l-5.8-1.9v-6.8l5.8-1.9c0.4-1.3,0.9-2.5,1.5-3.7l-2.8-5.5l4.8-4.8l5.5,2.8c1.2-0.6,2.4-1.2,3.7-1.5     l1.9-5.8h6.8l1.9,5.8c1.3,0.4,2.5,0.9,3.7,1.5l5.5-2.8l4.8,4.8l-2.8,5.5c0.6,1.2,1.2,2.4,1.5,3.7l5.8,1.9v6.8l-5.8,1.9     c-0.4,1.3-0.9,2.5-1.5,3.7l2.8,5.5l-4.8,4.8l-5.5-2.8c-1.2,0.6-2.4,1.2-3.7,1.5L-190.6-370.1L-190.6-370.1z M-195.7-372.4h3.4     l1.8-5.4l0.6-0.2c1.5-0.4,2.9-1,4.3-1.8l0.6-0.3l5.1,2.6l2.4-2.4l-2.6-5.1l0.3-0.6c0.8-1.3,1.4-2.8,1.8-4.3l0.2-0.6l5.4-1.8v-3.4     l-5.4-1.8l-0.2-0.6c-0.4-1.5-1-3-1.8-4.3l-0.3-0.6l2.6-5.1l-2.4-2.4l-5.1,2.6l-0.6-0.3c-1.3-0.8-2.8-1.4-4.3-1.8l-0.6-0.2     l-1.8-5.4h-3.4l-1.8,5.4l-0.6,0.2c-1.5,0.4-2.9,1-4.3,1.8l-0.6,0.3l-5.1-2.6l-2.4,2.4l2.6,5.1l-0.3,0.6c-0.8,1.3-1.4,2.8-1.8,4.3     l-0.2,0.6l-5.4,1.8v3.4l5.4,1.8l0.2,0.6c0.4,1.5,1,3,1.8,4.3l0.3,0.6l-2.6,5.1l2.4,2.4l5.1-2.6l0.6,0.3c1.3,0.8,2.8,1.4,4.3,1.8     l0.6,0.2L-195.7-372.4L-195.7-372.4z"/>
                </g>
              </svg>
            </div>
            <div className="gearDiv2">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64" className="gearSvg" ref={gear2Ref}>
                <g transform="translate(226 426)">
                  <path className="gearPath-active1" ref={gearPath3Ref} fill="#444" d="M-194-382.7c-6.2,0-11.3-5.1-11.3-11.3s5.1-11.3,11.3-11.3s11.3,5.1,11.3,11.3     S-187.8-382.7-194-382.7L-194-382.7z M-194-402.9c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9s8.9-4,8.9-8.9S-189.1-402.9-194-402.9     L-194-402.9z"/>
                  <path className="gearPath-active1" ref={gearPath4Ref} fill="#444" d="M-190.6-370.1h-6.8l-1.9-5.8c-1.3-0.4-2.5-0.9-3.7-1.5l-5.5,2.8l-4.8-4.8l2.8-5.5     c-0.6-1.2-1.2-2.4-1.5-3.7l-5.8-1.9v-6.8l5.8-1.9c0.4-1.3,0.9-2.5,1.5-3.7l-2.8-5.5l4.8-4.8l5.5,2.8c1.2-0.6,2.4-1.2,3.7-1.5     l1.9-5.8h6.8l1.9,5.8c1.3,0.4,2.5,0.9,3.7,1.5l5.5-2.8l4.8,4.8l-2.8,5.5c0.6,1.2,1.2,2.4,1.5,3.7l5.8,1.9v6.8l-5.8,1.9     c-0.4,1.3-0.9,2.5-1.5,3.7l2.8,5.5l-4.8,4.8l-5.5-2.8c-1.2,0.6-2.4,1.2-3.7,1.5L-190.6-370.1L-190.6-370.1z M-195.7-372.4h3.4     l1.8-5.4l0.6-0.2c1.5-0.4,2.9-1,4.3-1.8l0.6-0.3l5.1,2.6l2.4-2.4l-2.6-5.1l0.3-0.6c0.8-1.3,1.4-2.8,1.8-4.3l0.2-0.6l5.4-1.8v-3.4     l-5.4-1.8l-0.2-0.6c-0.4-1.5-1-3-1.8-4.3l-0.3-0.6l2.6-5.1l-2.4-2.4l-5.1,2.6l-0.6-0.3c-1.3-0.8-2.8-1.4-4.3-1.8l-0.6-0.2     l-1.8-5.4h-3.4l-1.8,5.4l-0.6,0.2c-1.5,0.4-2.9,1-4.3,1.8l-0.6,0.3l-5.1-2.6l-2.4,2.4l2.6,5.1l-0.3,0.6c-0.8,1.3-1.4,2.8-1.8,4.3     l-0.2,0.6l-5.4,1.8v3.4l5.4,1.8l0.2,0.6c0.4,1.5,1,3,1.8,4.3l0.3,0.6l-2.6,5.1l2.4,2.4l5.1-2.6l0.6,0.3c1.3,0.8,2.8,1.4,4.3,1.8     l0.6,0.2L-195.7-372.4L-195.7-372.4z"/>
                </g>
              </svg>
            </div>
            <div className="databaseDiv" ref={databaseRef}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" viewBox="0 0 16 16">
                <path className="databasePath1-active1" ref={databasePath1Ref} fill="#444" d="M14 2.5C14 3.328 11.314 4 8 4s-6-.672-6-1.5S4.686 1 8 1s6 .672 6 1.5z"/>
                <path className="databasePath2-active1" ref={databasePath2Ref} fill="#444" d="M8 5c-3.3 0-6-.7-6-1.5v3C2 7.3 4.7 8 8 8s6-.7 6-1.5v-3C14 4.3 11.3 5 8 5z"/>
                <path className="databasePath3-active1" ref={databasePath3Ref} fill="#444" d="M8 9c-3.3 0-6-.7-6-1.5v3c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-3C14 8.3 11.3 9 8 9z"/>
                <path className="databasePath4-active1" ref={databasePath4Ref} fill="#444" d="M8 13c-3.3 0-6-.7-6-1.5v3c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-3c0 .8-2.7 1.5-6 1.5z"/>
              </svg>
            </div>
          </div>


          <div className="portfolio1div" ref={titleRatioRef}>
            <p className="portfolioNumber"># 1</p>
            <p className="portfolio1text" ref={highlightRef}>
              My first journey in IT industry was working with a bunch of talented teammates to develop an <span className="highlight">ETL system</span> for an leading insurance company. 
              <br />
              <br />
              The technologies were not really fancy though, it would be used to process <span className="highlight">millions of data</span> daily or periodly as the backbone of the bussiness on backstage.
              <br />
              <br />
              It helps me to establish systematic knowledge of <span className="highlight">Database and SQL</span> skill set, as well as high communication abilities while working with Japanese clients, co-operate with Philippino and Chinese teammates. 
              <br />
              <br />
              It's an awesome starter in my career, meanwhile it kept inspiring me with the beauty of CREATION and DEVELOPMENT!
            </p>

          </div>
          <div className="float-div">
            <svg className="float-objects" xmlns="http://www.w3.org/2000/svg" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
              <g mask="url(&quot;#SvgjsMask1019&quot;)" fill="none">
                <path d="M1234.357,271.438C1263.068,272.085,1291.434,259.821,1306.062,235.107C1320.942,209.967,1319.083,178.524,1304.248,153.357C1289.648,128.589,1263.108,113.442,1234.357,113.463C1205.644,113.484,1178.666,128.403,1164.647,153.461C1150.935,177.97,1153.752,207.818,1168.039,231.997C1182.063,255.73,1206.797,270.817,1234.357,271.438" fill="rgba(28, 83, 142, 0.4)" className="triangle-float2"></path>
                <path d="M1208.262950216766 239.8771121358486L1095.6098382286305 145.3499274156312 1001.0826535084132 258.00303940376676 1113.7357654965488 352.5302241239841z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float3"></path>
                <path d="M424.7999073789291 323.7822598111721L305.21225818749235 362.6386424596611 344.06864083598134 482.2262916510979 463.6562900274181 443.3699090026089z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float2"></path>
                <path d="M1444.107,572.735C1484.663,569.789,1514.536,540.632,1536.694,506.537C1561.867,467.803,1589.225,422.544,1568.567,381.225C1546.501,337.091,1493.428,319.883,1444.107,321.351C1397.437,322.74,1355.707,348.134,1331.847,388.268C1307.412,429.37,1300.006,481.079,1324.864,521.927C1348.937,561.485,1397.922,576.09,1444.107,572.735" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1"></path>
                <path d="M963.1,568.329C1019.859,565.166,1053.121,511.551,1081.993,462.582C1111.55,412.45,1145.475,355.758,1118.978,303.944C1090.921,249.078,1024.711,228.823,963.1,230.087C903.885,231.301,847.779,258.97,817.917,310.118C787.811,361.685,789.535,425.203,818.8,477.252C848.679,530.392,902.23,571.722,963.1,568.329" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1"></path>
                <path d="M500.381,365.627C516.922,365.444,529.515,352.656,537.776,338.325C546.025,324.014,550.167,307.041,542.625,292.345C534.457,276.43,518.251,264.628,500.381,265.461C483.554,266.245,472.303,281.087,464.448,295.988C457.238,309.666,454.437,325.426,461.527,339.167C469.228,354.091,483.588,365.813,500.381,365.627" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1"></path>
              </g>
            </svg>
          </div>
        </div>

        {/* second part */}
        <div className="secondPartDiv">
          <div className="rakuDiv">
            <span className="rakuCss" ref={rakuRef}>
            R
            </span>
          </div>

          <div>
            <div className="surveyCss">
              <svg xmlns="http://www.w3.org/2000/svg" width="7vw" viewBox="0 0 32 32" className="surveySvg">
              <defs>
                <linearGradient id="gradient-horizontal2" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-stop-1)" />
                  <stop offset="50%" stopColor="var(--color-stop-2)" />
                  <stop offset="100%" stopColor="var(--color-stop-3)" />
                </linearGradient>
              </defs>
                <g transform="translate(0 -1020.362)">
                  <path d="M 15,3 C 14.454649,3 14,3.4547 14,4 L 11.75,4 9.5,4 C 8.6776538,4 8,4.6777 8,5.5 L 8,6.9375 8,8.375 8,9.8125 8,11.25 8,12.6875 8,14.125 8,15.5625 8,17 8,18.4375 8,19.816406 9,19.240234 9,18.169922 9,17 9,15.5625 9,14.125 9,12.6875 9,11.25 9,9.8125 9,8.375 9,6.9375 9,5.5 C 9,5.2144 9.2143662,5 9.5,5 l 0.533203,0 C 9.8545901,5.266494 9.75,5.5854964 9.75,5.9277344 l 0,7.8945316 0,4.414062 0,0.529297 c -1.982e-4,0.01402 0.00519,0.02367 0.00586,0.03711 L 10.75,18.228516 l 0,-4.40625 0,-7.8945316 C 10.75,5.5440344 11.042954,5.25 11.427734,5.25 l 1.769532,0 0.802734,0 0,0.7617188 c 0,0.5453999 0.454649,1 1,1 l 7,0 c 0.545351,0 1,-0.4546003 1,-1 L 23,5.25 l 2.572266,0 C 25.957046,5.25 26.25,5.5440344 26.25,5.9277344 l 0,16.2851566 -1.857422,0 c -0.75386,0 -1.268602,0.446622 -1.476562,0.857421 -0.207961,0.410901 -0.201172,0.806641 -0.201172,0.806641 l 0,1.869141 -11.28711,0 c -0.38478,0 -0.677734,-0.294035 -0.677734,-0.677735 l 0,-1.064453 -1,0.578125 0,0.486328 c 0,0.9209 0.75669,1.677735 1.677734,1.677735 l 11.78711,0 c 0.0034,-1e-6 0.0064,-0.0019 0.0098,-0.002 0.06233,-9.4e-4 0.123936,-0.01353 0.181641,-0.03711 l 0.002,-0.002 c 0.05969,-0.02449 0.114075,-0.06031 0.160156,-0.105469 l 3.535157,-3.533203 c 0.04607,-0.04649 0.08257,-0.101563 0.107422,-0.162109 5.37e-4,-0.0013 0.0014,-0.0026 0.002,-0.0039 0.02431,-0.05953 0.03691,-0.123195 0.03711,-0.1875 l 0,-16.7851566 C 27.24987,5.5855844 27.14541,5.266494 26.966797,5 L 27.5,5 C 27.785619,5 28,5.2144 28,5.5 l 0,23 c 0,0.2857 -0.214381,0.5 -0.5,0.5 l -18,0 C 9.2143662,29 9,28.7857 9,28.5 L 9,27.298828 9,27.0625 9,25.013672 8,25.591797 8,27.277344 8,28.5 C 8,29.3224 8.6776538,30 9.5,30 l 18,0 c 0.822341,0 1.5,-0.6776 1.5,-1.5 l 0,-23 C 29,4.6777 28.322341,4 27.5,4 L 25.25,4 23,4 C 23,3.4547 22.545351,3 22,3 Z m 0,1 7,0 0,2.0117188 -7,0 z m -3.023438,3.9785156 0,0.5 0,5.5214844 L 18,14 18,7.9785156 Z M 19,8 l 0,1 6.5,0 0,-1 z M 12.976562,8.9785156 17,8.9785156 17,13 12.976562,13 Z M 13.896484,9.5 c -0.276142,0 -0.5,0.2238576 -0.5,0.5 0,0.276142 0.223858,0.5 0.5,0.5 0.276142,0 0.5,-0.223858 0.5,-0.5 0,-0.2761424 -0.223858,-0.5 -0.5,-0.5 z M 15.5625,10 14.896484,11.332031 14.5625,10.666016 13.896484,12 14.5625,12 15.230469,12 16.5625,12 Z M 19,10 l 0,1 6.5,0 0,-1 z m 0,2 0,1 6.5,0 0,-1 z m -6.992188,3 0,1 2.603516,0 1.730469,-1 z m 8.710938,2 -0.660156,1 5.441406,0 0,-1 z m -1.333984,2 c -0.02927,0.02934 -0.06207,0.05493 -0.09766,0.07617 l -1.541015,0.888672 0,0.03516 5.25,0 0,-1 z m 5.007812,4.212891 1.150391,0 -0.914063,0.912109 -0.914062,0.914062 0,-1.162109 c 0,0 0.0071,-0.184269 0.09375,-0.355469 0.08665,-0.1712 0.159401,-0.308593 0.583984,-0.308593 z" color="#000" enableBackground="accumulate" fontFamily="sans-serif" fontWeight="400" overflow="visible" transform="translate(0 1020.362)" style={{"lineHeight":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","blockProgression":"tb","whiteSpace":"normal","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}}/>
                  <path className="surveyPen" ref={surveyPenRef} strokeWidth={1} style={{"lineHeight":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","blockProgression":"tb","whiteSpace":"normal","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="m 21.477577,1034.7705 0,0 a 0.50005,0.50005 0 0 0 -0.0078,0 l -4.462891,0.2676 a 0.50005,0.50005 0 0 0 -0.09766,0.016 0.50005,0.50005 0 0 0 -0.09375,0.035 0.50004994,0.50004994 0 0 0 -0.0293,0.016 0.50005,0.50005 0 0 0 -0.02539,0.014 l -12.9648431,7.4864 -1.2988281,0.75 c -0.9520749,0.5497 -1.2821247,1.7784 -0.7324219,2.7304 l 0.5,0.8672 c 0.5496861,0.952 1.780347,1.282 2.7324219,0.7324 l 1.2675781,-0.7324 a 0.50004994,0.50004994 0 0 0 0.03125,-0.018 l 0.8671815,-0.4967 a 0.50005,0.50005 0 0 0 0.041016,-0.025 l 12.0820316,-6.9746 a 0.50004994,0.50004994 0 0 0 0.185547,-0.1875 l 2.445312,-3.705 a 0.50005,0.50005 0 0 0 -0.439453,-0.7754 z m -0.945312,1.0644 -1.466797,2.2207 -1.191406,-2.0625 2.658203,-0.1582 z m -3.677735,0.3906 0.5,0.8653 -11.259765,6.5 -0.5,-0.8653 11.259765,-6.5 z m 1,1.7325 0.5,0.8652 -11.259765,6.5 -0.5,-0.8652 11.259765,-6.5 z m -13.9921868,5.7675 1.5,2.5977 -0.8652344,0.5 c -0.4872593,0.2813 -1.0839205,0.122 -1.3652344,-0.3652 l -0.5,-0.8672 c -0.2812972,-0.4871 -0.1220249,-1.084 0.3652344,-1.3653 l 0.8652344,-0.5 z" color="#000" enableBackground="accumulate" fontFamily="sans-serif" fontWeight="400" overflow="visible"/>
                </g>
              </svg>
            </div>
          </div>

            <div className="coinCss" ref={coinCssRef}>
              <svg xmlns="http://www.w3.org/2000/svg" className="coinSvg">
                <g transform="translate(370 -322)">
                  <circle cx="-340" cy="352" r="24" fill="#ecb751"/>
                    <path fill="#fdefb4" d="m -340,328 a 23.999998,23.999998 0 0 0 -24,24 23.999998,23.999998 0 0 0 0.80859,6.125 l 29.30274,-29.30273 A 23.999998,23.999998 0 0 0 -340,328 Z m 8.22852,1.48633 -30.75,30.75 a 23.999998,23.999998 0 0 0 1.30273,2.94726 l 32.40234,-32.40234 a 23.999998,23.999998 0 0 0 -2.95507,-1.29492 z m 14.40234,14.60742 -30.53711,30.53711 a 23.999998,23.999998 0 0 0 2.61523,0.75781 l 28.67188,-28.67187 a 23.999998,23.999998 0 0 0 -0.75,-2.62305 z"/>
                  <circle cx="-340" cy="352" r="19" fill="#fad461"/>
                    <path fill="#ecb751" d="m -332.74023,334.44922 a 19.000002,19.000002 0 0 1 7.93945,15.42969 19.000002,19.000002 0 0 1 -19,19 19.000002,19.000002 0 0 1 -7.25781,-1.44922 A 19.000002,19.000002 0 0 0 -340,371 a 19.000002,19.000002 0 0 0 19,-19 19.000002,19.000002 0 0 0 -11.74023,-17.55078 z"/>
                    <path fill="#2d3a66" style={{"lineHeight":"normal","textIndent":0,"textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","blockProgression":"tb","isolation":"auto","mixBlendMode":"normal"}} d="m -340,327 c -13.79527,0 -25,11.20473 -25,25 0,13.79527 11.20473,25 25,25 13.79527,0 25,-11.20473 25,-25 0,-13.79527 -11.20473,-25 -25,-25 z m 0,2 c 12.71439,0 23,10.28561 23,23 0,12.71439 -10.28561,23 -23,23 -12.71439,0 -23,-10.28561 -23,-23 0,-12.71439 10.28561,-23 23,-23 z m 0,3 c -11.03385,0 -20,8.96615 -20,20 0,4.47859 1.47574,8.62426 3.9668,11.95898 a 1.0005843,1.0005843 0 0 0 1.60351,-1.19726 C -356.67253,359.75928 -358,356.03987 -358,352 c 0,-9.95297 8.04703,-18 18,-18 9.95297,0 18,8.04703 18,18 0,9.95297 -8.04703,18 -18,18 -2.90317,0 -5.63881,-0.68455 -8.06445,-1.90234 a 1.0001196,1.0001196 0 1 0 -0.89844,1.78711 c 2.6962,1.35362 5.74444,2.11523 8.96289,2.11523 11.03385,0 20,-8.96615 20,-20 0,-11.03385 -8.96615,-20 -20,-20 z m -0.0156,8.00977 A 1.0001,1.0001 0 0 0 -341,341.02344 l 0,1.82812 c -0.129,0.0229 -0.25818,0.0326 -0.38672,0.0645 a 1.0000999,1.0000999 0 0 0 -0.002,0 c -2.34794,0.58291 -4.05078,2.59832 -4.05078,4.94336 0,2.33692 1.69345,4.34308 4.02929,4.93359 1.39014,0.42125 2.22115,0.24654 3.18946,0.64062 1.33427,0.73365 1.93635,2.11188 1.55273,3.4375 -0.38734,1.33832 -1.73256,2.32618 -3.32812,2.32618 -1.59557,0 -2.94273,-0.98786 -3.33008,-2.32618 a 1.0004338,1.0004338 0 1 0 -1.92188,0.55664 c 0.56125,1.93903 2.24731,3.32071 4.24805,3.67383 l 0,1.875 a 1.0001,1.0001 0 1 0 2,0 l 0,-1.87304 c 2.00384,-0.35084 3.69196,-1.73418 4.25391,-3.67579 0.65324,-2.25735 -0.43841,-4.65375 -2.5586,-5.78711 a 1.0000999,1.0000999 0 0 0 -0.0801,-0.0371 c -1.50119,-0.63822 -2.5095,-0.43015 -3.46679,-0.72657 a 1.0000999,1.0000999 0 0 0 -0.0547,-0.0156 c -1.53561,-0.38123 -2.53319,-1.62452 -2.5332,-3.00195 10e-6,-1.37791 0.99753,-2.62071 2.5332,-3.00196 1.5356,-0.38081 3.14672,0.25626 3.90625,1.47461 a 1.0001673,1.0001673 0 1 0 1.69727,-1.05859 c -0.82543,-1.32407 -2.19033,-2.1809 -3.69727,-2.44336 l 0,-1.80664 a 1.0001,1.0001 0 0 0 -1.01562,-1.01367 z m 14.89453,15.38671 a 0.50005,0.50005 0 0 0 -0.45508,0.38086 c -0.7302,2.78803 -2.25554,5.31184 -4.39453,7.25586 a 0.50005,0.50005 0 1 0 0.67187,0.74024 c 2.28269,-2.07462 3.91217,-4.76692 4.69141,-7.74219 a 0.50005,0.50005 0 0 0 -0.46289,-0.63477 0.50005,0.50005 0 0 0 -0.0508,0 z m -6.52149,9.04493 a 0.50005,0.50005 0 0 0 -0.26758,0.084 c -0.20732,0.13384 -0.41961,0.2625 -0.63476,0.38672 a 0.50050437,0.50050437 0 0 0 0.5,0.86719 c 0.22952,-0.13252 0.45458,-0.27127 0.67578,-0.41407 a 0.50005,0.50005 0 0 0 -0.27344,-0.92382 z m -20.83398,0.85937 a 1.0001,1.0001 0 0 0 -0.67969,1.76172 c 0.25692,0.22458 0.51884,0.4429 0.78711,0.6543 a 1.0001,1.0001 0 1 0 1.23828,-1.57032 c -0.24157,-0.19036 -0.47762,-0.3876 -0.70898,-0.58984 a 1.0001,1.0001 0 0 0 -0.63672,-0.25586 z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible"/>
                  <ellipse cx="-129.048" cy="474.108" fill="#fdefb4" rx="5.314" ry="7.517" transform="rotate(30)"/>
                  <ellipse cx="-351.299" cy="357.187" fill="#fdefb4" rx="2.953" ry="2.228"/>
                  <path fill="#8d8d81" d="m -342.88867,343.54102 c -1.53578,0.91141 -2.55078,2.51306 -2.55078,4.31835 0,0.7137 0.17303,1.38868 0.45898,2.00977 a 5.3136654,7.5168929 30 0 0 0.76953,-1.14648 5.3136654,7.5168929 30 0 0 1.32227,-5.18164 z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible" style={{"lineHeight":"normal","textIndent":0,"textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","blockProgression":"tb","isolation":"auto","mixBlendMode":"normal"}}/>
                  <path fill="#8d8d81" style={{"lineHeight":"normal","textIndent":0,"textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","blockProgression":"tb","isolation":"auto","mixBlendMode":"normal"}} d="m -342.88867,343.54102 c -1.53578,0.91141 -2.55078,2.51306 -2.55078,4.31835 0,0.7137 0.17303,1.38868 0.45898,2.00977 a 5.3136654,7.5168929 30 0 0 0.76953,-1.14648 5.3136654,7.5168929 30 0 0 1.32227,-5.18164 z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible"/>
                </g>
              </svg>
            </div>

            <div className="portfolio2div">
              <p className="portfolioNumber">#2</p>
              <p className="portfolio1text" ref={highlight2Ref}>
                After 3 years of working as half-consultant and half-developer, finally I made up my mind to dive into the coding.
                <br />
                <br />
                Later on, I started working in one of Japanese IT gaints where we provide a web service to recruit members for <span className="highlight2">marketing research</span>.
                <br />
                <br />
                <span className="highlight2">You answer surveys, you get the money</span> -- The business here is quite simple.
                <br ref={animationTrigger2Ref}/>
                <br />
                However, tons of assignments are flooding to me. Backend, frontend, infrastructure, DB design, batch, so on and so forth. 
                <br />
                <br />
                Great chanllenge and <span className="highlight2">great opportunity</span> at the same time!
              </p>
            </div>




        </div>


      </div>




    </Fragment>
  )
}
