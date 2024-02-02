import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

function Contact() {
    const [fullName, setFullName] = useState(false)
    const [emailAddress, setEmailAddress] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [subject, setSubject] = useState(false)
    const [message, setMessage] = useState(false)

    function FormValue() {
        let fullNameValue = document.querySelector("#fullName").value;
        let emailAddressValue = document.querySelector("#email").value;
        let phoneValue = document.querySelector("#phone").value;
        let subjectValue = document.querySelector("#subject").value;
        let messageValue = document.querySelector("#message").value;

        if (fullNameValue == "") {
            setFullName(true);

        }
        if (emailAddressValue == "") {
            setEmailAddress(true)
        }
        if (phoneValue == "") {
            setPhoneNumber(true)
        }
        if (subjectValue == "") {
            setSubject(true)
        }
        if (messageValue == "") {
            setMessage(true)
        }
    }

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
                        <p>4+ Years Of Experience</p>
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
                            <input className={fullName ? "not-empty" : "empty"} onChange={FormValue} type="text" name="fullName" id="fullName" placeholder="Jeff Bezos" />
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