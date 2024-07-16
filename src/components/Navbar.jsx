import { useEffect } from 'react';
import '../../utils/navbar';

const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById('nav');
            if (window.scrollY > 500) {
                nav.classList.add('sticky');
                nav.classList.remove('fixed', 'top-[50vh]');
            } else {
                nav.classList.add('fixed');
                nav.classList.remove('sticky', 'top-[50vh]');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header" id="home">
            <div className="app-title">
                <h1 className="text-6xl lg:text-7xl font-name">SAJAN SAJI</h1>
            </div>
            <div className="start h-12" />

            <div className='switcher fixed top-[45vh] hidden md:block' id='nav'>
                <div aria-hidden="true" className="switcher-stroke absolute"></div>
                <div className="switcher-root">
                    <button className="switcher-btn btn-active" type="button" data-scroll-to="home">Home</button>
                    <button className="switcher-btn" type="button" data-scroll-to="about">About</button>
                    <button className="switcher-btn" type="button" data-scroll-to="edu">Education</button>
                    <button className="switcher-btn" type="button" data-scroll-to="project">Project</button>
                    <button className="switcher-btn" type="button" data-scroll-to="contact">Contact</button>

                    <div aria-hidden="true" className="switcher-glow absolute left-[var(--x)]-6"></div>
                    <div aria-hidden="true" className="switcher-curr absolute left-[var(--x)]-1"></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
