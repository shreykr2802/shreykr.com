import React, { Fragment, useEffect, useRef, useCallback } from 'react';

import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Navigation from '../../components/Navigation/Navigation';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import Works from '../../components/Works/Works';
import Contact from '../../components/Contact/Contact';
import Resume from '../../components/Resume/Resume';

import { useDispatch } from 'react-redux';

import { setMenuDivColor } from '../../store/actions/home';

const Layout = props => {

    const dispatch = useDispatch();

    let navigation = useRef();
    let home = useRef();
    let about = useRef();
    let testimonials = useRef();
    let works = useRef();
    let contact = useRef();

    const listenScrollEvent = useCallback((event) => {
        if (window.scrollY > about.current.clientHeight - 50) {
            dispatch(setMenuDivColor('#296c92'));
        } else {
            dispatch(setMenuDivColor('white'));
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, [listenScrollEvent]);

    return (
        <Fragment>
            <Navigation navigation={ navigation } home={ home } about={ about } testimonials = { testimonials } works = { works } contact ={ contact }/>
            <Home home={ home } about = { about }/>
            <About about={ about } />
            <Resume />
            <Testimonials testimonials={ testimonials } />
            <Works works={ works } />
            <Contact contact={ contact } />
            <Footer />
        </Fragment>
    );
};

export default Layout;