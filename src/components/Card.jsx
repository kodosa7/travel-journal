import pinImg from "../assets/pin.svg"


export default function Card(props) {
    return (
        <section className="content">
            <div className="card--wrapper">
                <div className="card">
                    <div className="card--image">
                        <img src={ props.imageUrl } />
                    </div>
                    <div className="card--info">
                        <div className="card--info-line">
                            <div className="pin">
                                <img src={ pinImg } />
                            </div>
                            <div className="location">
                                <p>{ props.location.toUpperCase() }</p>
                            </div>
                            <div className="link--maps">
                                <a href={ props.googleMapsUrl } target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                        <div className="name">
                            <h1>{ props.name }</h1>
                        </div>
                        <div className="date">
                            <h4>{ props.startDate } - { props.endDate }</h4>
                        </div>
                        <div className="description">
                            <p>{ props.description }</p>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </section>
    )
}




{/* <div className="card--image">
<img src="https://source.unsplash.com/WLxQvbMyfas" />
</div>
<div className="card--info">
<div className="card--info-line">
    <div className="pin">
        <img src={ pinImg } />
    </div>
    <div className="country">
        <p>JAPAN</p>
    </div>
    <div className="link--maps">
        <a href="">View on Google Maps</a>
    </div>
</div>
<div className="name">
    <h1>Mount Fuji</h1>
</div>
<div className="date">
    <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
</div>
<div className="description">
    <p>
        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
    </p>
</div>
</div> */}