import Theo from '../assets/logo.png'

function Home() {
    return (
        <div className="home" id='home'>
            <div className="user-info">
                <p className='hello'>Hello, I'm</p>
                <h1>Theophilus U.</h1>
                <p className='position'>DevOps Engineer</p>
                <p className='details'>We denounce with righteous indignation dislike demoralized by the charms of pleasure</p>
                <div className="call-to-action">
                    <button>Hire Me</button>
                    <a href="#">Download Resume</a>
                </div>
            </div>
            <div className="user-image">
                <img src={Theo} alt="An Image of Theophilus U." />
            </div>
            <div className="user-right">
                <div className="user-experience">
                    <div className="years">
                        <h3>5</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="projects-completed">
                        <h3>200+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="client-satisfaction">
                        <h3>99%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;