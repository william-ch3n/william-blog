import React, { Fragment, useRef } from 'react'
import '../static/css/portfolio.css'

export default function Portfolio() {

  // var path = document.querySelector('.arrowPath');
  // var length = path.getTotalLength();

  // console.log("check length:",length);

  const gear1Ref = useRef();
  const gear2Ref = useRef();
  const gearPath1Ref = useRef();
  const gearPath2Ref = useRef();
  const gearPath3Ref = useRef();
  const gearPath4Ref = useRef();
  const databasePath1Ref = useRef();
  const databasePath2Ref = useRef();
  const databasePath3Ref = useRef();
  const databasePath4Ref = useRef();

  const activateGearAndDatabaseCss = () => {
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
  }

  const inactivateGearAndDatabaseCss = () => {
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
  }
  

  return (
    <Fragment>

      <div className="portfolioDiv">
        <div>
          <div className="title">
            Portfolio
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" className="arrowSvg">
            <path className="arrowPath" fill="#2e58a6" stroke="#2e58a6" strokeWidth="2" d="M58.38,44.66C54.16,43,50.28,40.8,46.06,39.1c-2.74-1.1-3.22,1.69-.93,2.61s4.56,2,6.79,3.08a37.89,37.89,0,0,1-16.79-.33C31.47,43.53,27.58,42,25,39.65a9.11,9.11,0,0,1-2.47-4.55c3.22.63,6.73.64,9.23-.84,3.44-2,2.26-5.64-1-7.37a8.94,8.94,0,0,0-11.1,2.5,6.87,6.87,0,0,0-.84,1.67,17.26,17.26,0,0,1-5.59-3.42C8.41,23.24,7.54,17,7.92,11.4,8,9.85,4.21,7.84,4.07,9.84c-.63,9.22,2.66,19.22,13.54,23.8l.85.33a11.5,11.5,0,0,0,3.69,6.9c6.69,6.4,17.88,8.7,28,7.68L44.71,52c-1.87,1.19,1.41,3.78,3,2.76l11.7-7.42C60.74,46.52,59.53,45.12,58.38,44.66ZM25.57,29.85q2.06-1.5,2.38,1.88l-1.87.38A14.67,14.67,0,0,1,22.66,32,3.69,3.69,0,0,1,25.57,29.85Z" />
          </svg>
        </div>

        <div>
          <div className="acnLogo" onMouseOver={activateGearAndDatabaseCss} onMouseOut={inactivateGearAndDatabaseCss}>
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
            <div className="databaseDiv">
              <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" viewBox="0 0 16 16">
                <path className="databasePath1-active1" ref={databasePath1Ref} fill="#444" d="M14 2.5C14 3.328 11.314 4 8 4s-6-.672-6-1.5S4.686 1 8 1s6 .672 6 1.5z"/>
                <path className="databasePath2-active1" ref={databasePath2Ref} fill="#444" d="M8 5c-3.3 0-6-.7-6-1.5v3C2 7.3 4.7 8 8 8s6-.7 6-1.5v-3C14 4.3 11.3 5 8 5z"/>
                <path className="databasePath3-active1" ref={databasePath3Ref} fill="#444" d="M8 9c-3.3 0-6-.7-6-1.5v3c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-3C14 8.3 11.3 9 8 9z"/>
                <path className="databasePath4-active1" ref={databasePath4Ref} fill="#444" d="M8 13c-3.3 0-6-.7-6-1.5v3c0 .8 2.7 1.5 6 1.5s6-.7 6-1.5v-3c0 .8-2.7 1.5-6 1.5z"/>
              </svg>
            </div>
          </div>


          <div className="portfolio1div">
            <p className="portfolioNumber"># 1</p>
            <p className="portfolio1text">
              My first journey in IT industry was working with a bunch of talented teammates to develop an ETL system for an leading insurance company. 
              <br />
              <br />
              The technologies were not really fancy though, it would be used to process millions of data daily or periodly as the backbone of the bussiness on backstage.
              <br />
              <br />
              Not only it helps me to establish systematic knowledge of Database and SQL skill set, but also high communication abilies while working with Japanese clients, co-operate with Philippino and Chinese teammates. 
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



      </div>




    </Fragment>
  )
}
