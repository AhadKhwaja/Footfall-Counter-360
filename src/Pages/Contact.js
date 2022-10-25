import React from 'react';
import '../styles/About.css';
const Contact = () => {

    const handleClick = (e) => {
        e.preventDefault();
        alert('Form submitted')
    };

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
        <div className="contact-container">
            <div className='contact-form'>
                <form style={style_1} onSubmit={handleClick}>
                    <label id="contact_labels" htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." required></textarea>

                    <button type="submit"> Submit </button>
                </form>
            </div>
            <div style={style_2} class="loader"></div>
        </div>
    )
}

export default Contact;