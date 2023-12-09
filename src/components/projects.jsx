import Theo from '../assets/logo.png';
import { FaAngleRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';

function Projects() {
    return (
        <div className="projects" id='projects'>
            <div className="top">
                <h5>Latest Works</h5>
                <h2>Explore my Popular <span> Projects</span></h2>
            </div>
            
            <div className="project-left">
                <div className="image">
                    <img src={Theo} alt="An Image of the project" />
                </div>
                <div className="detail">
                    <h6>CI/CD</h6>
                    <h2>Continuous Delivery Pipeline for E-commerce Platform</h2>
                    <p>I was responsible for setting up and optimizing a continuous delivery pipeline for an e-commerce platform. The goal is to automate and streamline the software delivery process from development through testing to production.</p>
                    <FaArrowUpRightFromSquare />
                </div>
            </div>
            <div className="project-left right">
                <div className="image">
                    <img src={Theo} alt="An Image of the project" />
                </div>
                <div className="detail">
                    <h6>CI/CD</h6>
                    <h2>Continuous Delivery Pipeline for E-commerce Platform</h2>
                    <p>I was responsible for setting up and optimizing a continuous delivery pipeline for an e-commerce platform. The goal is to automate and streamline the software delivery process from development through testing to production.</p>
                    <FaArrowUpRightFromSquare />
                </div>
            </div>
            <div className="project-left">
                <div className="image">
                    <img src={Theo} alt="An Image of the project" />
                </div>
                <div className="detail">
                    <h6>CI/CD</h6>
                    <h2>Continuous Delivery Pipeline for E-commerce Platform</h2>
                    <p>I was responsible for setting up and optimizing a continuous delivery pipeline for an e-commerce platform. The goal is to automate and streamline the software delivery process from development through testing to production.</p>
                    <FaArrowUpRightFromSquare />
                </div>
            </div>
            <div className="project-left right">
                <div className="image">
                    <img src={Theo} alt="An Image of the project" />
                </div>
                <div className="detail">
                    <h6>CI/CD</h6>
                    <h2>Continuous Delivery Pipeline for E-commerce Platform</h2>
                    <p>I was responsible for setting up and optimizing a continuous delivery pipeline for an e-commerce platform. The goal is to automate and streamline the software delivery process from development through testing to production.</p>
                    <FaArrowUpRightFromSquare />
                </div>
            </div>
            <button>View more Projects <FaAngleRight color='#000000' /></button>
        </div>
    );
}
export default Projects;