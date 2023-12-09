import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png'
import { FaBars, FaBarsStaggered, FaX } from 'react-icons/fa6'

function Header() {

    const [headerColor, setHeaderColor] = useState('transparent')
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll);
    })

    function handleScroll() {
        if (scrollY > 50) {
            setHeaderColor('notTransparent');
        }
        else {
            setHeaderColor('transparent')
        }
    }

    function ToggleMenu() {
        setMobileMenuOpen(prevState => !prevState);
    }

    return (
        <header className={headerColor}>
            <div className="logo">
                <div className="img">
                    <img src={Logo} alt="CloudKnightOps Logo" />    
                </div>
                <h1>CloudKnight</h1>
            </div>
            <nav>
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#resume"><li>Resume</li></a>
                    <a href="#skills('mobile-menu')"><li>Skills</li></a>
                    <a href="#portfolio"><li>Portfolio</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="#blogs"><li>Blogs</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </nav>
            <div className="header-right">
                <div className="ham" onClick={ToggleMenu}>
                    <FaBars />
                </div>
                <div className="apointment">
                    <FaBarsStaggered size={'25px'} color='black'/>
                </div>
            </div>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
                <div className="close" onClick={ToggleMenu}>
                    <FaX />
                </div>
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#resume"><li>Resume</li></a>
                    <a href="#skills"><li>Skills</li></a>
                    <a href="#portfolio"><li>Portfolio</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="#blogs"><li>Blogs</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </div>
            
        </header>
    );
}

export default Header;