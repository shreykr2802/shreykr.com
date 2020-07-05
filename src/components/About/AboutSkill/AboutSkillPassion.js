import React, { Fragment } from 'react';
import '../About.css';
import { FaTrain, FaVolleyballBall } from 'react-icons/fa';
import { GiOpenBook } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { RiMovie2Line } from "react-icons/ri";

const AboutSkillPassion = props => {
    return(
        <Fragment>
            <div className="skill-title"><span>Passions</span></div>
                <div className="heading"><span></span></div>
                <div className="passion-name">
                    <div style={ { display: 'flex', flexFlow: 'row' } }>
                        <RiComputerLine color="#296c92" style={ { paddingTop: '10px' } } /> <p>Technology</p>
                    </div>
                </div>
                <div className="passion-name">
                    <div style={ { display: 'flex', flexFlow: 'row' } }>
                        <GiOpenBook color="#296c92" style={ { paddingTop: '10px' } } /> <p>Learning</p>
                    </div>
                </div>
                <div className="passion-name">
                    <div style={ { display: 'flex', flexFlow: 'row' } }>
                        <FaTrain color="#296c92" style={ { paddingTop: '10px' } } /> <p>Travelling</p>
                    </div>
                </div>
                <div className="passion-name">
                    <div style={ { display: 'flex', flexFlow: 'row' } }>
                        <RiMovie2Line color="#296c92" style={ { paddingTop: '10px' } } /> <p>Series / Movies</p>
                    </div>
                </div>
                <div className="passion-name">
                    <div style={ { display: 'flex', flexFlow: 'row' } }>
                        <FaVolleyballBall color="#296c92" style={ { paddingTop: '10px' } } /> <p>Playing</p>
                    </div>
                </div>
        </Fragment>
    );
};

export default AboutSkillPassion;