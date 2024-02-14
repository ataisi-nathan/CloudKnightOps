import { FaCheck, FaEnvelope, FaCloud, FaAws, FaPhone } from 'react-icons/fa6'
import Theo from '../assets/logo.jpeg'

function About() {
    return (
        <div className="about" id='about'>
            <div className="left">
                <h3>About Me</h3>
                {/* <h3>Professional <span>Problem Solutions </span> <br /> For Digital Products</h3> */}
                <p>
                    Theophilus Uviekugbere is a seasoned DevOps Engineer with 4+ years of expertise in IT. He excels in supporting and managing core business APIs and Microservices, implementing end-to-end monitoring solutions, and deploying AWS infrastructure. Proficient in CI/CD, containerization, and scripting, he currently serves as a DevOps/Site Reliability Engineer at ATOS/MTN NG, contributing to issue resolution, automation, and infrastructure migration. Theophilus holds a B.Eng. in Electrical/Electronic Engineering, Udacity Nano-Degree in Cloud DevOps Engineering, and certifications in AWS. His commitment to learning is evident through various online courses in cloud-native applications, Kubernetes, and cybersecurity.
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
                <img src={Theo} alt="An Image of Theophilus" />
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