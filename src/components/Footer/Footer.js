import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const FooterBox = styled.div`
    width: 100vw;
    height: 200px;
    background: #072452;
    text-align: center;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
`;

const FooterContents = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-transform: uppercase;
`;

const NavButton = styled.a`
    font-size: 0.7rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 10px;

    &:active {
        color: #296c92;
    }

    @media( max-width: 1000px) {
        font-size: 0.6rem;
        padding: 5px;
    }

`;

const SectionTitle = styled.h4`
    font-size: 0.8em;
    margin: 0;
    padding: 0;
`;

const SectionContent = styled.div`
    display: flex;
    flex-flow: row;

    @media(max-width: 600px) {
        flex-flow: column;
    }
`;

const Footer = props => {
    return (
        <FooterBox>
            <FooterContents>
                <SectionTitle>© Shrey Kumar</SectionTitle>
            </FooterContents>
            <FooterContents>
                <SectionTitle>Explore</SectionTitle>
                <SectionContent>
                    <NavButton href="#">Home</NavButton>
                    <NavButton href="#about">About</NavButton>
                    <NavButton href="#testimonials">Testimonials</NavButton>
                    <NavButton href="#works">Works</NavButton>
                    <NavButton href="#contact">Contact</NavButton>
                </SectionContent>
            </FooterContents>
            <FooterContents>
                <SectionTitle>CONNECT</SectionTitle>
                <SectionContent>
                    <NavButton href="https://www.linkedin.com/in/shreykr2802" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="0.7rem" /></NavButton>
                    <NavButton href="https://www.twitter.com/shreykr2802" target="_blank" rel="noopener noreferrer"><FaTwitter size="0.7rem" /></NavButton>
                    <NavButton href="https://www.instagram.com/shreykr2802" target="_blank" rel="noopener noreferrer"><FaInstagram size="0.7rem" /></NavButton>
                    <NavButton href="https://www.github.com/shreykr2802" target="_blank" rel="noopener noreferrer"><FaGithub size="0.7rem" /></NavButton>
                    <NavButton href="mailto:shreykr2802@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size="0.7rem" /></NavButton>
                </SectionContent>
            </FooterContents>
        </FooterBox>
    );
};

export default Footer;