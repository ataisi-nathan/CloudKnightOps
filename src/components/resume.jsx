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
                            <p>2023 - Present</p>
                            <h3>Junior Cloud Architect</h3>
                            <p>MTN Nigeria</p>
                        </span>
                    </div>
                    <div className="second">
                        <span>< FaSquareArrowUpRight /></span>
                        <span>
                            <p>2021 - 2023</p>
                            <h3>Cloud Engineer</h3>
                            <p>Jules</p>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resume;