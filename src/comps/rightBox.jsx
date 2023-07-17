import sunImg from "../assets/weather-icons/cartoon-sun-icon.png"

function formatDate(date) {
    const dt = new Intl.DateTimeFormat(
        'en',
        { day: 'numeric', month: 'short', weekday: 'short' }
    ).format(date);
    return dt.replace(',', '');
}
export const WFBox = ({ content }) => {
    const predictionDate = formatDate(new Date(content.date));
    return (
        <div className="row rounded-5 shadow-sm mx-auto my-3 p-2 border bg-white border-0">

            <div className="col-3 m-auto">
                <img src={`https://${content.day.condition.icon}`} width={"70px"} alt="" />
            </div>

            <div className="col-6 m-auto">
                <div className="lead text-body-secondary" style={{ fontSize: "1rem", }}>{predictionDate}</div>
                <div className="h5">{content.day.condition.text}</div>
            </div>

            <div className="col-3 m-auto" style={{ color: "orange", }}>
                <div className="h5">{content.day.avgtemp_c}°C</div>
            </div>
        </div >
    )
}
const UVBox = ({ uv }) => {
    let rating = "";
    let color = "green";
    switch (true) {
        case (uv <= 2):
            rating = "Low"
            break;
        case (uv <= 5):
            rating = "Moderate"
            color = "darkgreen";
            break;
        case (uv <= 8):
            rating = "High"
            color = "orange";
            break;
        case (uv <= 10):
            rating = "Very High"
            color = "orangered";
            break;
        default:
            rating = "Extreme"
            color = "red";
            break;
    }
    return (
        <div className="card shadow my-md-5 my-3 mx-auto rounded-5 p-2 px-1" style={{ background: "#102038", color: "#ffffff" }} >
            <div className="card-body row">
                <div className="col-3 p-0 m-0" >
                    <img width={"80px"} alt="" />
                </div>
                <div className="col-9">
                    <h4 className="lead">
                        <span className="fs-3">{uv} UVI</span> <span className="badge rounded-pill p-1" style={{ background: `${color}` }}>{rating}</span>
                        <p className="h6 my-2">{rating} risk of UV rays</p>
                    </h4>
                </div>
            </div>
        </div >
    )
}

const RSinfo = ({ img = null, rise = "Rise", set = "Set" }) => {
    return (
        <div className="row text-center">
            <div className="col text-start">
                <img src={img} width={"80px"} alt="" />
            </div>
            <div className="col py-4">
                {rise}
            </div>
            <div className="col py-4">
                {set}
            </div>
        </div>)
}

const RightBox = ({ wthrData }) => {
    return (
        <div className="row px-lg-4 px-4 py-4 rounded">
            <div className="info-box row m-auto">
                <div className="col-lg-7 col-6">
                    <blockquote style={{ fontSize: "1.15rem" }}>
                        {wthrData.current.is_day ? "Sun" : "Night"}
                        <br />
                        <small className="text-body-secondary">{`${wthrData.location.name}, ${wthrData.location.country}`}</small>
                    </blockquote>
                </div>
                <div className="col-6 col-lg-5 display-6 text-end" style={{ "color": "orange" }}>
                    {wthrData.current.temp_c}°C
                </div>
            </div>
            <hr />

            <div className="m-auto">
                <RSinfo />
                <RSinfo rise={wthrData.forecast.forecastday[0].astro.sunrise} set={wthrData.forecast.forecastday[0].astro.sunset} img={sunImg} />
            </div>

            <UVBox uv={wthrData.current.uv} />
            <div className="d-none d-lg-block">
                <div className=" h2 mx-auto p-2" style={{ "width": "auto" }}>
                    Weather Prediction
                </div>

                <WFBox content={wthrData.forecast.forecastday[1]} />
                <WFBox content={wthrData.forecast.forecastday[2]} />
            </div>
        </div >
    )
}

export default RightBox;