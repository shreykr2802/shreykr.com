import React, { Fragment } from 'react';
import '../About.css';
import { FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3, FaGithub, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { GiPaintBrush } from "react-icons/gi";
import { GrReactjs, GrMysql } from "react-icons/gr";

const AboutSkillDesc = props => {
    return (
        <Fragment>
            <div className="skill-title"><span>Skills</span></div>
                <div className="skill-name">
                    <p><FaReact color="#296c92" /> React</p>
                    <p><FaAngular color="#296c92" /> Angular</p>
                    <p><IoLogoJavascript color="#296c92" /> JavaScript</p>
                    <p><FaNodeJs color="#296c92" /> Node</p>
                </div>
                <div className="skill-name">
                    <p><FaHtml5 color="#296c92" /> HTML</p>
                    <p><FaCss3 color="#296c92" /> CSS</p>
                    <p><FaJava color="#296c92" /> Java</p>
                    <p><GrMysql color="#296c92"/> SQL/PlSql</p>
                </div>
                <div className="skill-name">
                    <p><FaGithub color="#296c92" /> Git</p>
                    <p>SVN</p>
                </div>
                <div className="skill-name">
                    <p><GiPaintBrush color="#296c92" /> Styled Components</p>
                </div>
                <div className="skill-name">
                    <p><GrReactjs color="#296c92" /> React Native</p>
                </div>
        </Fragment>
    );
};

export default AboutSkillDesc;