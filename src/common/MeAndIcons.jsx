import React, { Fragment } from 'react'
import mysql from '../static/img/mysql.png'
import java from '../static/img/java.png'
import react from '../static/img/react.png'
import github from '../static/img/github.png'
import docker from '../static/img/docker.png'
import me_01 from '../static/img/me_01.png'

export default function MeAndIcons() {
    return (
        <fragment>
            <div className="meAndIcons">
                <div>
                    <img className="javaCss" src={java} alt="" />
                    <img className="mysqlCss" src={mysql} alt="" />
                    <img className="reactCss" src={react} alt="" />
                    <img className="githubCss" src={github} alt="" />
                    <img className="dockerCss" src={docker} alt="" />
                </div>

                <div>
                    <img className="me_01" src={me_01} alt="" />
                </div>
            </div>

            <div className="meAndIcons">
                <div>
                    <img className="javaCss" src={java} alt="" />
                    <img className="mysqlCss" src={mysql} alt="" />
                    <img className="reactCss" src={react} alt="" />
                    <img className="githubCss" src={github} alt="" />
                    <img className="dockerCss" src={docker} alt="" />
                </div>

                <div>
                    <img className="me_01" src={me_01} alt="" />
                </div>
            </div>

        </fragment>
    )
}
