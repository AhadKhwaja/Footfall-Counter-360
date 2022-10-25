import React from 'react';
import '../styles/About.css';

const About = () => {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 300);

    }, [])
    const style_1 = {
        opacity: loaded ? 1 : 0,
        transition: '0.3s'
    };

    const style_2 = {
        opacity: !loaded ? 1 : 0,
    };


    return (
        <div className="about_container">
            <p style={style_1} className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div style={style_2} class="loader"></div>
        </div>
    )
};

export default About;