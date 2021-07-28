import './mv.scss'

function MvSection() {
    return (
        <section className="mv">
            <h1 className="mv__title">LUKE MAGSOLING</h1>
            <h2 className="mv__subtitle">Frontend Engineer</h2>
            <div class="mv__sns">
                <a className="sns" href="https://github.com/lukemags-07" target="_blank"></a>
                <a className="sns sns--link-in" href="https://bit.ly/2U7uSog" target="_blank"></a>
                <a className="sns sns--gitlab" href="https://gitlab.com/lukemags" target="_blank"></a>
            </div>
            <a className="mv__works" href="#works">Portfolio</a>
        </section>

    )
}

export default MvSection;