import React, { Fragment, useRef, useEffect } from 'react'
import mysql from '../static/img/mysql.png'
import java from '../static/img/java.png'
import react from '../static/img/react.png'
import github from '../static/img/github.png'
import docker from '../static/img/docker.png'
import css3 from '../static/img/css3.png'
import me_01 from '../static/img/me_01.png'
import '../static/css/meAndIcons.css'
import Typed from 'typed.js'
import { AUTO_TEXT } from '../common/constants/allConstants'

export default function MeAndIcons() {


  // const wrapper = document.getElementById("highlight-effect");
  const wrapper = useRef(null);
  const className = "in-view";
      

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  const javaRef = useRef();
  const mysqlRef = useRef();
  const reactRef = useRef();
  const githubRef = useRef();
  const cssRef = useRef();
  const iconsRef = useRef();


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          wrapper.current.classList.add(className);  
          
          javaRef.current.classList.remove("javaCss");
          mysqlRef.current.classList.remove("mysqlCss");
          reactRef.current.classList.remove("reactCss");
          githubRef.current.classList.remove("githubCss");
          cssRef.current.classList.remove("cssCss-active");
          javaRef.current.classList.add("javaCss-active");
          mysqlRef.current.classList.add("mysqlCss-active");
          reactRef.current.classList.add("reactCss-active");
          githubRef.current.classList.add("githubCss-active");
          cssRef.current.classList.add("cssCss-active");
          return;
        }
    
        wrapper.current.classList.remove(className);
        javaRef.current.classList.remove("javaCss-active");
        mysqlRef.current.classList.remove("mysqlCss-active");
        reactRef.current.classList.remove("reactCss-active");
        githubRef.current.classList.remove("githubCss-active");
        cssRef.current.classList.remove("cssCss-active");
        javaRef.current.classList.add("javaCss");
        mysqlRef.current.classList.add("mysqlCss");
        reactRef.current.classList.add("reactCss");
        githubRef.current.classList.add("githubCss");
        cssRef.current.classList.add("cssCss");
      });
    },
    {
      threshold: 1
    }
  );



  useEffect(() => {
    const options = {
      strings: AUTO_TEXT.STRINGS,
      typeSpeed: 75,
      backSpeed: 75,
      loop: true
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    // javaRef.current = 
    
    observer.observe(wrapper.current);
    // observer.observe(javaRef.current);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, []);



  return (
    <Fragment>

      <div className="meAndIconsDiv">

        <div>
          <span className="pre-auto-text">“</span>
          <br />
          <section>
            <div className="highlight-effect" >
              <span className="pre-text">I'm </span>
            </div>
          </section>
          <br />
          <span ref={el} className="auto-text" />
          <br />
          <span className="post-auto-text">”</span>
        </div>

    <div>
      <div ref={wrapper} >
        <img className="javaCss" src={java} alt="" ref={javaRef}/>
        <img className="mysqlCss" src={mysql} alt="" ref={mysqlRef}/>
        <img className="reactCss" src={react} alt="" ref={reactRef}/>
        <img className="githubCss" src={github} alt="" ref={githubRef}/>
        <img className="cssCss" src={css3} alt="" ref={cssRef}/>
      </div>

      <div>
        <img className="me_01" src={me_01} alt="" />
      </div>
    </div>
    
    </div>

    </Fragment>
  )
}
