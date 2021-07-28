import aboutImage from './../../assets/images/lukemags.jpg';
import './about.scss';
function About() {
return(
<div className="l-container" id="about">
    <div className="about">
        <div className="about__image">
            <img src={aboutImage} />
        </div>
        <div className="about__info">
            <h2 className="about__title">About Me</h2>
            <div className="about__description">
                <p>
                    I am Luke Magsoling, a frontend engineer based in Cebu City.
                    I fell in love with technology when I build my first website with HTML and CSS at the age of 25 and hosted it on
                    Geocities! Since then I've been passionate about building applications that solve real world problems by applying new
                    and exciting technologies.
                    My latest experience has been focused on building single-page applications with JavaScript, Angular, reactjs, vuejs,
                    HTML/CSS, jQuery.
                </p>
            </div>
            <div className="about__button">
                <a href="#" class="about__contact-me">Contact Me</a>
                <a href="#" class="about__see-portfolio">See Portfolio</a>
            </div>
        </div>
    </div>
</div>
);
}
export default About;