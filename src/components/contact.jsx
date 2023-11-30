import { FaCheck } from "react-icons/fa6";

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact-left">
                <h5>Get In Touch</h5>
                <h2>Let's Talk About Your <br /> <span>Next Projects</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, cumque?</p>
                <div className="contact-experience">
                    <div>
                        <span className="circle">
                            <FaCheck color="#000" />
                        </span>
                        <p>5+ Years Of Experience</p>
                    </div>
                    <div>
                        <span className="circle">
                            <FaCheck color="#000" />
                        </span>
                        <p>5+ Years Of Experience</p>
                    </div>
                    <div>
                        <span className="circle">
                            <FaCheck color="#000" />
                        </span>
                        <p>5+ Years Of Experience</p>
                    </div>
                    <div>
                        <span className="circle">
                            <FaCheck color="#000" />
                        </span>
                        <p>5+ Years Of Experience</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <form>
                    <div className="form">
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" name="fullName" id="fullName" placeholder="Jeff Bezos" />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="support@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="+54 12-345-678" />
                        </div>
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    
                    <button>Send Me a Message</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;