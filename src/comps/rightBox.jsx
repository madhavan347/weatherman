import sunImg from "../assets/weather-icons/cartoon-sun-icon.png"

const WFBox = (wd) => {
    return (
        <div className="row rounded-5 shadow-sm mx-auto my-2 p-2 border bg-white border-0">

            <div className="col-3 m-auto">
                <img src={`http://openweathermap.org/img/w/${wd.icon}.png`} width={"70px"} alt="" />
            </div>

            <div className="col-6 m-auto">
                <div className="lead text-body-secondary" style={{ fontSize: "1rem", }}>{wd.date}</div>
                <div className="h5">{wd.main}</div>
            </div>

            <div className="col-3 m-auto" style={{ color: "orange", }}>
                <div className="h5">{wd.temp}°C</div>
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
            color = "darkorange";
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
        <div className="card shadow my-5 mx-auto rounded-5 p-2 px-1" style={{ background: "#102038", color: "#ffffff" }} >
            <div className="card-body row">
                <div className="col-3 p-0 m-0" >
                    <img src={sunImg} width={"80px"} alt="" />
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

const RightBox = ({ wthrData }) => {
    return (
        <div className="row px-5 py-4 rounded bg-light">
            <div className="info-box row m-auto">
                <div className="col-7">
                    <blockquote style={{ fontSize: "1.15rem" }}>
                        {wthrData.current.is_day ? "Sun" : "Night"}
                        <br />
                        <small className="text-body-secondary">{`${wthrData.location.name}, ${wthrData.location.country}`}</small>
                    </blockquote>
                </div>
                <div className="col-3 font-monospace display-6" style={{ "color": "orange" }}>
                    {wthrData.current.temp_c}°C
                </div>
            </div>
            <hr />

            <div className="card m-auto p-0">
                <div className="card-body" style={{ "height": "10rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 55">
                        <defs>
                            <linearGradient id="semi-circle">
                                {/* below offset % describes the fill percentage- try to put in sep comp - add st time and en time and curr time pos */}
                                <stop offset="15%" stopColor="orange" />
                                <stop offset="0%" stopColor="white" />
                                <stop offset="100%" stopColor="white" />
                            </linearGradient>
                        </defs>
                        <path d="M0,50 A50,49 0 0,1 100,50 A50,50 0 0,1 0" fill="url(#semi-circle)" stroke="orange" strokeDasharray="3,3"
                            strokeWidth="1.5" width={200} height={100} />
                        <text x="-10" y="55" className="text-bold" fontSize="6px">Sunrise</text>
                        <text x="90" y="55" className="text-bold" fontSize="6px">Sunset</text>
                    </svg>
                </div>
            </div>

            <UVBox uv={wthrData.current.uv} />

            <div className=" h2 mx-auto p-2" style={{ "width": "auto" }}>
                Weather Prediction
            </div>

            <WFBox icon="50n" main={wthrData.forecast.forecastday[1].day.condition.text} temp={wthrData.forecast.forecastday[1].day.avgtemp_c} date={wthrData.forecast.forecastday[1].date} />
            <WFBox icon="10n" main={wthrData.forecast.forecastday[2].day.condition.text} temp={wthrData.forecast.forecastday[2].day.avgtemp_c} date={wthrData.forecast.forecastday[2].date} />
            <WFBox icon="10n" main={wthrData.forecast.forecastday[3].day.condition.text} temp={wthrData.forecast.forecastday[3].day.avgtemp_c} date={wthrData.forecast.forecastday[3].date} />


        </div >
    )
}

export default RightBox;