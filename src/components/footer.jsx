import Theo from '../assets/logo.jpeg'

function Footer() {
    return (
        <footer>
            <div>
                <img src={Theo} alt="An image of the logo" />
                <h1>CloudKnightOps</h1>
            </div>
            <div>
                Copyright ©2023, <span>CloudKnightOps </span> All Rights Reserved
            </div>
            <div>
                <a href="#">Facebook</a>
                <a href="#">LinkedIn</a>
                <a href="#">Github</a>
                <a href="#">Medium</a>
            </div>
        </footer>
    );
}
export default Footer;