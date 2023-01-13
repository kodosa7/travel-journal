import earthImg from "../assets/earth.svg"


export default function Header() {
    return (
        <section className="header">
            <img src={ earthImg } />
            <h1>my travel journal.</h1>
        </section>
    )
}

