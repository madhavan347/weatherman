import sunBg from "../assets/weather-images/sun-sky.jpg"
import windBg from "../assets/weather-images/wind-img2.jpg"
import sceneBg from "../assets/weather-images/some-scene.jpg"
import { LineChart, Line, LabelList, XAxis, CartesianAxis } from "recharts";
import wd from "../../weather_info.json";
import { format, setGlobalDateMasks } from "fecha"
setGlobalDateMasks({
    maskOne: 'MMM D ddd'
})

const dBlue = "#102038";

const RenderLineChart = ({ foreData }) => {
    // console.log(foreData)
    const data = [
        {
            name: `${foreData[10].temp_c}°C`,
            uv: foreData[10].temp_c,
            timing: "Morning"
        },
        {
            name: `${foreData[14].temp_c}°C`,
            uv: foreData[14].temp_c,
            timing: "Afternoon"
        },
        {
            name: `${foreData[18].temp_c}°C`,
            uv: foreData[18].temp_c,
            timing: "Evening"
        },
        {
            name: `${foreData[21].temp_c}°C`,
            uv: foreData[21].temp_c,
            timing: "Night"
        },
    ]
    return (
        <LineChart width={750} height={200} data={data}
            margin={{ top: 70, right: 50, left: 40, bottom: 0 }}>
            <CartesianAxis />
            <XAxis dataKey={"timing"} axisLine={false} tickLine={false} />

            <Line type="natural" dataKey="uv" stroke="#ffa500" strokeWidth={4} dot={{ strokeWidth: 2, fill: "orange" }}>
                <LabelList dataKey={"name"} position={"top"} offset={45} stroke={dBlue} className="h4" fill="" />
            </Line>
        </LineChart>
    );
}

const StatBox = (info) => {
    return (
        <div className="col-3 shadow rounded-4 text-center p-3 mx-auto" style={{ background: `${info.bgcolor}` }}>
            <div className="" style={{ color: `${info.color}` }}>
                {info.title}
                <div className="h4 m-auto fw-medium " style={{ color: `${info.color}` }}>
                    {info.cont}
                </div>
            </div>
        </div>
    )
}
const MainStatBox = (content) => {
    // console.log()
    return (
        <div className="col-5 card my-5 mx-auto rounded-4 p-auto border-0 shadow" style={{ backgroundImage: `url(${content.bg})`, backgroundSize: "110%" }}>

            <div className='row'>
                <i className={`align-items-middle col-1 my-4 fa-solid ${content.icon}`} style={{ color: "orange" }}></i>
                <div className="h4 col-6">
                    {content.name}<br />
                    <small className="text-body-secondary h6">{content.subname}</small>
                </div>
            </div>

            <div className="display-5 mx-3 my-4">
                {content.reading}
                {content.air ?
                    <span className="h3">Km/hr</span> :
                    <span className="display-6"> °C</span>
                }
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
                            <div className="progress-bar progress-bar-striped" style={{ background: "orange", width: `${content.airIndex["us-epa-index"] * 20}%` }}>
                            </div>
                        </div>

                    </div>
                </div>
                :
                <div className="row">
                    <StatBox title="Pressure" cont={`${content.pressure}mb`} bgcolor={dBlue} color="white" />
                    <StatBox title="Visibility" cont={`${content.visibility}km`} bgcolor="greenyellow" color={dBlue} />
                    <StatBox title="Humidity" cont={`${content.humidity}%`} bgcolor="white" />
                </div>
            }
        </div>
    )
}
const TweatherBox = ({ content }) => {
    return (
        <div className="row col-3 m-auto rounded-4 shadow "
            style={{
                height: "23rem", background: "greenyellow", backgroundImage: `url(${sceneBg})`, color: { dBlue }
            }}>
            <div className="h6 m-auto">Tomorrow</div>
            <div className="h3 fw-semibold mt-0">{format(new Date(content.date), 'maskOne')}</div>
            <div className="h2 m-auto mb-0">{content.day.avgtemp_c}°C</div>
            <div className="h6 m-auto mt-2">{content.day.condition.text}</div>
        </div>
    )
}
const LeftBox = ({ wthrData }) => {
    const today = format(new Date(wthrData.current.last_updated), 'maskOne');
    return (
        <div className="" style={{ "height": "100%" }}>
            <div className="row m-auto">

                <MainStatBox name="Weather" subname={`Today ${today}`} reading={wthrData.current.temp_c} readsub={wthrData.current.condition.text} bg={sunBg} icon="fa-cloud-sun fa-xl" pressure={wthrData.current.pressure_mb} humidity={wthrData.current.humidity} visibility={wthrData.current.vis_km} />
                <MainStatBox name="Air Quality" subname="Main Pollution: PM2.5" reading={wthrData.current.wind_kph} readsub={wd.wind_dir[wthrData.current.wind_dir]} bg={windBg} icon="fa-wind fa-xl" air="true" airIndex={wthrData.current.air_quality} />
            </div>

            <div className="row m-auto">
                <div className="col-7 m-auto rounded-4" style={{ height: "23rem" }}>
                    <div className="row">
                        <div className="col-6 fs-3" style={{ fontWeight: 600 }}>
                            How's the temperature today?
                        </div>
                    </div>
                    <div className="row mt-5">
                        <RenderLineChart foreData={wthrData.forecast.forecastday[0].hour} />
                    </div>
                </div>

                <TweatherBox content={wthrData.forecast.forecastday[1]} />
            </div>
        </div >
    )
}

export default LeftBox;