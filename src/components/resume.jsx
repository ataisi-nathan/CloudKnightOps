import { FaSquareArrowUpRight } from 'react-icons/fa6';
import Theo from '../assets/logo.jpeg'

function Resume() {
    return (
        <div className="resume">
            <div className="logo">
                <img src={Theo} alt="An image of the logo" />
            </div>
            <div className="details">
                <h4>My Resume</h4>
                <h2>Real <span>Problem Solution</span>  <br />Experience</h2>
                <div className="timeline">
                    <div className="first">
                        <span><FaSquareArrowUpRight /></span>
                        <span>
                            <p>July 2023 - Present</p>
                            <h3>DevOps / Site Reliability Engineer</h3>
                            <p>ATOS/MTN NG</p>
                        </span>
                    </div>
                    <div className="second">
                        <span>< FaSquareArrowUpRight /></span>
                        <span>
                            <p>Oct 2021 - May 2023</p>
                            <h3>DevOps Engineer</h3>
                            <p>HARVOXX TECH HUB</p>
                        </span>
                    </div>
                    <div className="second">
                        <span>< FaSquareArrowUpRight /></span>
                        <span>
                            <p>Feb 2020 - Jan 2021</p>
                            <h3>Information Security Engineer, (Intern).</h3>
                            <p>CANDIX ENGINEERING NIGERIA LIMITED</p>
                        </span>
                    </div>
                    <div className="second">
                        <span>< FaSquareArrowUpRight /></span>
                        <span>
                            <p>July 2019 - Jan 2021</p>
                            <h3>System/Network Administrator(Academic Industrial Training).</h3>
                            <p>HARVOXX TECH HUB</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resume;