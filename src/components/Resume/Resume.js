import React, { Fragment, useState } from 'react';

import ResumeSections from './ResumeSections.js';
import { ResumePage, RowResumePage, ResumeContent, ContentButton } from './ResumeStyles.js';

const Resume = props => {

    const [backButtonExit, setBackButtonExit] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showExceptWork, setShowExceptWork] = useState(false);

    const showResumeSection = sectionName => {
        const element = document.getElementById(sectionName);
        element.style.display = "flex";
        element.style.zIndex = "100";
        setBackButtonExit(true);
        if (sectionName === "summary") {
            setShowSummary(true);
        }
        if (sectionName === "education") {
            setShowEducation(true);
        }
        if (sectionName === "experience") {
            setShowExperience(true);
        }
        if (sectionName === "exceptwork") {
            setShowExceptWork(true);
        }
    };

    const closeResumeSection = sectionName => {
        const element = document.getElementById(sectionName);
        element.style.zIndex = "10";
        setBackButtonExit(false);
        if (sectionName === "summary") {
            setShowSummary(false);
        }
        if (sectionName === "education") {
            setShowEducation(false);
        }
        if (sectionName === "experience") {
            setShowExperience(false);
        }
        if (sectionName === "exceptwork") {
            setShowExceptWork(false);
        }
    }

    return (
        <Fragment>
            <ResumePage>
                <RowResumePage>
                    <ResumeContent background="#0079ba">
                        <ContentButton onClick={ () => showResumeSection("summary") }>Summary</ContentButton>
                    </ResumeContent>
                    <ResumeContent background="#0098ba">
                        <ContentButton onClick={ () => showResumeSection("education") }>Education</ContentButton>
                    </ResumeContent>
                </RowResumePage>
                <RowResumePage>
                    <ResumeContent background="#003bba">
                        <ContentButton onClick={ () => showResumeSection("experience") }>Experience</ContentButton>
                    </ResumeContent>
                    <ResumeContent background="#00528c">
                        <ContentButton onClick={ () => showResumeSection("exceptwork") }>Except Work</ContentButton>
                    </ResumeContent>
                </RowResumePage>
            </ResumePage>
            <ResumeSections backButtonExit={ backButtonExit } closeResumeSection={ closeResumeSection }
                showSummary={ showSummary } showEducation={ showEducation } showExperience={ showExperience } showExceptWork={ showExceptWork }
            />
        </Fragment>
    );
};

export default Resume;