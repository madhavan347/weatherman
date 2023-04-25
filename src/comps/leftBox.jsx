import sunBg from "../assets/weather-images/sun-sky.jpg"
import windBg from "../assets/weather-images/wind-img2.jpg"
const dBlue = "#102038";
const StatBox = (info) => {
    return (
        <div className="col shadow rounded-4 text-center p-3 mx-4" style={{ background: `${info.bgcolor}` }}>
            <div className="" style={{ color: `${info.color}` }}>
                {info.title}
                <div className="h4 m-auto" style={{ color: `${info.color}` }}>
                    {info.cont}
                </div>
            </div>
        </div>
    )
}
const MainStatBox = (content) => {
    return (
        <div className="col-5 card my-5 mx-5 rounded-4 p-auto border-0 shadow" style={{ backgroundImage: `url(${content.bg})`, backgroundSize: "110%" }}>

            <div className='row'>
                <i className={`align-items-middle col-1 my-4 fa-solid ${content.icon}`} style={{ color: "orange" }}></i>
                <div className="h4 col-5">
                    {content.name}<br />
                    <small className="text-body-secondary h6">{content.subname}</small>
                </div>
            </div>

            <div className="display-5 mx-3 my-4">
                {content.reading}
                <p className=" h5 text-body-secondary">{content.readsub}</p>
            </div>
            {content.air ?
                <div className="bg-white rounded-4 row shadow pb-2">
                    <div className="col p-3 mx-1 ">
                        <div className="row pb-2">
                            <span className="col-6 text-start">Good</span>
                            <span className="col-6 text-end">Hazardous</span>
                        </div>

                        <div className="progress" role="progressbar" aria-label="Default Bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: "13px" }}>
                            <div className="progress-bar progress-bar-striped" style={{ background: "orange", width: `21%` }}>
                            </div>
                        </div>

                    </div>
                </div>
                :
                <div className="row">
                    <StatBox title="Pressure" cont="800mb" bgcolor={dBlue} color="white" />
                    <StatBox title="Visibility" cont="4.3km" bgcolor="greenyellow" color={dBlue} />
                    <StatBox title="Humidity" cont="87%" bgcolor="white" />
                </div>
            }
        </div>
    )
}
const LeftBox = () => {
    return (
        <div className="">
            <div className="row m-auto">

                <MainStatBox name="Weather" subname="What's the weather" reading="22°C" readsub="Partly Cloudy" bg={sunBg} icon="fa-cloud-sun fa-xl" />
                <MainStatBox name="Air Quality" subname="Main Pollution: PM2.5" reading="390" readsub="West Wind" bg={windBg} icon="fa-wind fa-xl" air="true" />
                <div className="col-6 m-auto"></div>
            </div>
        </div>
    )
}

export default LeftBox;