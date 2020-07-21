import React, { Fragment } from 'react';
import { FaArrowLeft } from "react-icons/fa";

import { ResumeSummary, ResumeEducation, ResumeExperience, ResumeExceptWork, ResumeSplitScreenContent, BackButton } from './ResumeStyles.js';

const ResumeSections = props => {

    return (
        <Fragment>
            <ResumeSummary id="summary" exit={props.showSummary}>
                <ResumeSplitScreenContent background="#0079ba">
                    <BackButton id="summary_backBtn" onClick={ () => props.closeResumeSection("summary") } exit={ props.backButtonExit } delay="0">
                        <FaArrowLeft size="1.5rem" />
                    </BackButton>
                </ResumeSplitScreenContent>
                <ResumeSplitScreenContent background="#fff"></ResumeSplitScreenContent>
            </ResumeSummary>
            <ResumeEducation id="education" exit={props.showEducation}>
                <ResumeSplitScreenContent background="#0098ba">
                    <BackButton onClick={ () => props.closeResumeSection("education") } exit={ props.backButtonExit } delay="0.6">
                        <FaArrowLeft size="1.5rem" />
                    </BackButton>
                </ResumeSplitScreenContent>
                <ResumeSplitScreenContent background="#fff"></ResumeSplitScreenContent>
            </ResumeEducation>
            <ResumeExperience id="experience" exit={props.showExperience}>
                <ResumeSplitScreenContent background="#003bba">
                    <BackButton onClick={ () => props.closeResumeSection("experience") } exit={ props.backButtonExit } delay="0.4">
                        <FaArrowLeft size="1.5rem" />
                    </BackButton>
                </ResumeSplitScreenContent>
                <ResumeSplitScreenContent background="#fff"></ResumeSplitScreenContent>
            </ResumeExperience>
            <ResumeExceptWork id="exceptwork" exit={props.showExceptWork}>
                <ResumeSplitScreenContent background="#00528c">
                    <BackButton onClick={ () => props.closeResumeSection("exceptwork") } exit={ props.backButtonExit } delay="1">
                        <FaArrowLeft size="1.5rem" />
                    </BackButton>
                </ResumeSplitScreenContent>
                <ResumeSplitScreenContent background="#fff"></ResumeSplitScreenContent>
            </ResumeExceptWork>
        </Fragment>
    );
};

export default ResumeSections;