import React, { Fragment, useRef } from 'react'
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

    // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
  
    React.useEffect(() => {
      const options = {
          strings: AUTO_TEXT.STRINGS,
        typeSpeed: 75,
        backSpeed: 75,
        loop: true
      };
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])


    return (
        <Fragment>

            <div>
                <div>
                    <span className="pre-auto-text">“</span> 
                    <br />
                    <span className="pre-text">I'm </span>
                    <br />
                    <span ref={el} className="auto-text"/>
                    <br />
                    <span className="post-auto-text">”</span>
                </div>
            </div>

            <div>
                <img className="javaCss" src={java} alt="" />
                <img className="mysqlCss" src={mysql} alt="" />
                <img className="reactCss" src={react} alt="" />
                <img className="githubCss" src={github} alt="" />
                <img className="dockerCss" src={css3} alt="" />
            </div>

            <div>
                <img className="me_01" src={me_01} alt="" />
            </div>

        </Fragment>
    )
}
