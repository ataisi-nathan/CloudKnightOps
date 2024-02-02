import { FaCheck, FaEnvelope, FaCloud, FaAws, FaPhone } from 'react-icons/fa6'
import Theo from '../assets/logo.jpeg'

function About() {
    return (
        <div className="about" id='about'>
            <div className="left">
                <p>About Me</p>
                <h3>Professional <span>Problem Solutions </span> <br /> For Digital Products</h3>
                <p>
                    Possesses a comprehensive background in IT spanning over 4 years, excelled in roles such as DevOps/Cloud Engineering, Site Reliability, System Administration, and Information Security Engineering, demonstrating a commitment to supporting and enhancing core IT infrastructure.
                </p>
                <div className="products">
                    <div className="one">
                        <span>
                            <FaCheck color="#c9f31d" />
                        </span>
                        <h4>Cloud Hosting</h4>
                    </div>
                    <div className="two">
                        <span>
                            <FaCheck color="#c9f31d" />
                        </span>
                        <h4>Cyber Security</h4>
                    </div>
                    <div className="three">
                        <span>
                            <FaCheck color="#c9f31d" />
                        </span>
                        <h4>DevOps</h4>
                    </div>
                    <div className="four">
                        <span>
                            <FaCheck color="#c9f31d" />
                        </span>
                        <h4>System Administrator</h4>
                    </div>
                </div>
                <div className="support">
                    <div className="support-email">
                        <span>
                            <FaEnvelope color='#000000' />
                        </span>
                        <div className="support-content">
                            <p>Email Me</p>
                            <h4>theophilus@gmail.com</h4>
                        </div>
                    </div>
                    <div className="support-email">
                        <span>
                            <FaPhone fill='black' />
                        </span>
                        <div className="support-content">
                            <p>Make a Call Me</p>
                            <h4> +234 81-2345-678</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                {/* <img src={Theo} alt="An Image of Theophilus" /> */}
                <div className="float-1">
                    <FaCloud size={30}/> Experienced Cloud Engineer
                </div>
                <div className="float-2">
                    <FaAws size={30}/> AWS Expert
                </div>
            </div>
        </div>
    );
}
export default About;