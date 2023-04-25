import sunImg from "../assets/weather-icons/cartoon-sun-icon.png"

const WFBox = (wd) => {
    return (
        <div className="row rounded-5 shadow-sm mx-auto my-2 p-2 border bg-white border-0">

            <div className="col-3 m-auto">
                <img src={`http://openweathermap.org/img/w/${wd.icon}.png`} width={"70px"} alt="" />
            </div>

            <div className="col-6 m-auto">
                <div className="lead text-body-secondary" style={{ fontSize: "1rem", }}>November 10</div>
                <div className="h5">{wd.main}</div>
            </div>

            <div className="col-3 m-auto" style={{ color: "orange", }}>
                <div className="h5">20°/19°</div>
            </div>
        </div >
    )
}

const RightBox = () => {
    return (
        <div className="row px-5 py-4 rounded bg-light">
            <div className="info-box row m-auto">
                <div className="col-7">
                    <blockquote style={{ fontSize: "1.15rem" }}>Sun<br />
                        <small className="text-body-secondary">New Delhi, India <i className="fa-solid fa-angle-down"></i></small>
                    </blockquote>
                </div>
                <div className="col-3 font-monospace display-4" style={{ "color": "orange" }}>
                    22°C
                </div>
            </div>

            <hr />

            <div className="card m-auto">
                <div className="card-body" style={{ "height": "10rem" }}></div>
            </div>


            <div className="card shadow my-5 mx-auto rounded-5 p-2 px-1" style={{ background: "#102038", color: "#ffffff" }} >
                <div className="card-body row">
                    <div className="col-3 p-0 m-0" >
                        <img src={sunImg} width={"80px"} alt="" />
                    </div>
                    <div className="col-9">
                        <h4 className="lead" style={{ fontSize: "2rem" }}>
                            20 UVI <mark className="rounded-5 p-1" style={{ fontSize: "1rem", color: "white", background: "green" }}>moderate</mark>
                            <br />
                            <p className="h6 my-2">Moderate risk of UV rays</p>
                        </h4>
                    </div>
                </div>
            </div>


            <div className=" h2 mx-auto p-2" style={{ "width": "auto" }}>
                Weather Prediction
            </div>

            <WFBox icon="50n" main="cloudy" />
            <WFBox icon="10n" main="haze" />
            <WFBox icon="10n" main="haze" />


        </div>
    )
}

export default RightBox;