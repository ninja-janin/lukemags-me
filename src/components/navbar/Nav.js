import './nav.scss';
function Nav() {
    return(
        <nav className="nav">
            <ul>
                <li><a href="#" id="logo">LOGO</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <a href="#" id="menu-icon"></a>
            </ul>
        </nav>
    );
}

export default Nav;