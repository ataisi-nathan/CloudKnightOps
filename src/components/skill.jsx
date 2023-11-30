import { FaAngleRight } from "react-icons/fa6";
import Logo from '../assets/logo.png'

function Skills() {
    return (
        <div className="skill" id="skills">
            <div className="left">
                <h4>My Skills</h4>
                <h2>Let's Explore Popular <br /> <span>Skills & Experience</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde fugit tenetur? Sed, cupiditate. Consequatur, temporibus! Sunt consequuntur aliquam consequatur debitis accusamus, facere reprehenderit voluptate commodi! Ut quaerat quidem illo.</p>
                <button>Learn More <FaAngleRight color="black" /></button>
            </div>
            <div className="right">
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
                <div className="card">
                    <img src={Logo} alt="Image of an Icon" />
                    <h4>YML</h4>
                </div>
            </div>
        </div>
    );
}

export default Skills;