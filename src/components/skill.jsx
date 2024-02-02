import { FaAngleRight, FaAws, FaDocker, FaJira, FaLinux } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si"
import Logo from '../assets/logo.jpeg'

function Skills() {
    return (
        <div className="skill" id="skills">
            <div className="left">
                <h4>My Skills</h4>
                <h2>Let's Explore Popular <br /> <span>Skills & Experience</span></h2>
                <p>I am a skilled DevOps and site reliability engineer with over 4 years of experience in designing, deploying, and maintaining scalable and reliable web applications. I have worked with various tools, such as AWS, Docker, Kubernetes, and Terraform.</p>
                <button>Learn More <FaAngleRight color="black" /></button>
            </div>
            <div className="right">
                <div className="card">
                    {/* <img src={Logo} alt="Image of an Icon" /> */}
                    <div className="tool">
                        <FaAws />
                    </div>
                    <h4>AWS</h4>
                </div>
                <div className="card">
                    {/* <img src={Logo} alt="Image of an Icon" /> */}
                    <div className="tool">
                        <FaDocker />
                    </div>
                    <h4>Docker</h4>
                </div>
                <div className="card">
                    {/* <img src={Logo} alt="Image of an Icon" /> */}
                    <div className="tool">
                        <SiKubernetes />
                    </div>
                    <h4>Kubernetes</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>Gradle</h4>
                </div>
                <div className="card">
                    {/* <img src={Logo} alt="Image of an Icon" /> */}
                    <div className="tool">
                        <FaJira />
                    </div>
                    <h4>JIRA</h4>
                </div>
                <div className="card">
                    {/* <img src={Logo} alt="Image of an Icon" /> */}
                    <div className="tool">
                        <FaLinux />
                    </div>
                    <h4>Linux</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>Nginx</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>Cloud Formation</h4>
                </div>
            </div>
        </div>
    );
}

export default Skills;